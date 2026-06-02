"use client";

import { create } from "zustand";
import type { Artifact, MissionScript } from "@/data/missions/launch-timeline";

type Status = "idle" | "playing" | "paused" | "complete";

type MissionState = {
  script: MissionScript | null;

  currentEventIndex: number;
  status: Status;
  speed: number;

  // Artifacts collected so far (in order of arrival)
  collectedArtifacts: Artifact[];

  // Internal timeout id for the playback loop
  _timeoutId: ReturnType<typeof setTimeout> | null;

  loadScript: (script: MissionScript) => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  restart: () => void;
  step: () => void;
  setSpeed: (speed: number) => void;
  _advance: () => void;
};

export const useMissionStore = create<MissionState>((set, get) => ({
  script: null,
  currentEventIndex: 0,
  status: "idle",
  speed: 1,
  collectedArtifacts: [],
  _timeoutId: null,

  loadScript: (script) =>
    set({
      script,
      currentEventIndex: 0,
      status: "idle",
      collectedArtifacts: [],
    }),

  play: () => {
    const { status, _timeoutId } = get();
    if (status === "playing") return;
    if (_timeoutId) clearTimeout(_timeoutId);

    set({ status: "playing" });
    get()._advance();
  },

  pause: () => {
    const { _timeoutId } = get();
    if (_timeoutId) clearTimeout(_timeoutId);
    set({ status: "paused", _timeoutId: null });
  },

  toggle: () => {
    const { status } = get();
    if (status === "playing") {
      get().pause();
    } else if (status === "complete") {
      get().restart();
      // small delay to let UI reset, then play
      setTimeout(() => get().play(), 60);
    } else {
      get().play();
    }
  },

  restart: () => {
    const { _timeoutId } = get();
    if (_timeoutId) clearTimeout(_timeoutId);
    set({
      currentEventIndex: 0,
      status: "idle",
      collectedArtifacts: [],
      _timeoutId: null,
    });
  },

  step: () => {
    const { script, currentEventIndex, _timeoutId } = get();
    if (!script) return;
    if (_timeoutId) clearTimeout(_timeoutId);

    const next = currentEventIndex + 1;
    if (next >= script.events.length) {
      set({ status: "complete", _timeoutId: null });
      return;
    }

    const event = script.events[next];
    const collected = get().collectedArtifacts;
    const nextArtifacts = event.artifact
      ? [...collected, event.artifact]
      : collected;

    set({
      currentEventIndex: next,
      status: "paused",
      collectedArtifacts: nextArtifacts,
      _timeoutId: null,
    });
  },

  setSpeed: (speed) => set({ speed }),

  _advance: () => {
    const { script, currentEventIndex, status, speed } = get();
    if (!script || status !== "playing") return;

    const event = script.events[currentEventIndex];
    if (!event) {
      set({ status: "complete", _timeoutId: null });
      return;
    }

    // Add this event's artifact to the collection (idempotent)
    const collected = get().collectedArtifacts;
    if (event.artifact && !collected.find((a) => a.id === event.artifact!.id)) {
      set({ collectedArtifacts: [...collected, event.artifact] });
    }

    const adjustedDuration = event.durationMs / Math.max(speed, 0.25);

    const timeoutId = setTimeout(() => {
      const next = currentEventIndex + 1;
      if (next >= script.events.length) {
        set({ status: "complete", _timeoutId: null });
        return;
      }

      set({ currentEventIndex: next, _timeoutId: null });
      // Continue if still playing
      if (get().status === "playing") {
        get()._advance();
      }
    }, adjustedDuration);

    set({ _timeoutId: timeoutId });
  },
}));
