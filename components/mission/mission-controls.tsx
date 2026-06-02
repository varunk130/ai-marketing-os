"use client";

import { Play, Pause, RotateCcw, SkipForward } from "lucide-react";
import { useMissionStore } from "@/lib/mission-store";
import { cn } from "@/lib/utils";

const SPEEDS = [0.5, 1, 2, 4];

export function MissionControls() {
  const status = useMissionStore((s) => s.status);
  const speed = useMissionStore((s) => s.speed);
  const toggle = useMissionStore((s) => s.toggle);
  const restart = useMissionStore((s) => s.restart);
  const step = useMissionStore((s) => s.step);
  const setSpeed = useMissionStore((s) => s.setSpeed);

  const isPlaying = status === "playing";
  const isComplete = status === "complete";

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border-strong bg-surface p-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggle}
          className={cn(
            "inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-all",
            isPlaying
              ? "bg-surface-hover text-foreground border border-border-strong hover:border-border-accent"
              : "bg-gradient-brand text-white hover:brightness-110 shadow-[0_4px_16px_-4px_color-mix(in_oklch,var(--color-violet)_55%,transparent)]",
          )}
        >
          {isPlaying ? (
            <>
              <Pause className="h-4 w-4" fill="currentColor" />
              Pause
            </>
          ) : isComplete ? (
            <>
              <RotateCcw className="h-4 w-4" />
              Replay
            </>
          ) : (
            <>
              <Play className="h-4 w-4" fill="currentColor" />
              Play
            </>
          )}
        </button>

        <button
          type="button"
          onClick={step}
          disabled={isPlaying}
          className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border-strong bg-surface px-3 text-sm text-muted transition-all hover:border-border-accent hover:text-foreground disabled:opacity-40 disabled:pointer-events-none"
        >
          <SkipForward className="h-3.5 w-3.5" />
          Step
        </button>

        <button
          type="button"
          onClick={restart}
          className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border-strong bg-surface px-3 text-sm text-muted transition-all hover:border-border-accent hover:text-foreground"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Restart
        </button>
      </div>

      <div className="flex items-center gap-1 rounded-lg border border-border-strong bg-background p-0.5">
        <span className="px-2 text-[10px] font-mono uppercase tracking-wider text-faint">
          Speed
        </span>
        {SPEEDS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSpeed(s)}
            className={cn(
              "rounded-md px-2.5 py-1 font-mono text-xs transition-all",
              speed === s
                ? "bg-surface text-foreground ring-1 ring-border-accent"
                : "text-subtle hover:text-foreground",
            )}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
}
