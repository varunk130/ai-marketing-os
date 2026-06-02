"use client";

import { motion } from "framer-motion";
import { useMissionStore } from "@/lib/mission-store";
import { cn } from "@/lib/utils";

export function MissionTimeline() {
  const script = useMissionStore((s) => s.script);
  const currentIndex = useMissionStore((s) => s.currentEventIndex);

  if (!script) return null;

  const currentEvent = script.events[currentIndex];
  const currentPhaseId = currentEvent?.phaseId;

  // Compute progress within each phase
  const phaseProgress = script.phases.map((phase) => {
    const phaseEvents = script.events.filter((e) => e.phaseId === phase.id);
    const completedInPhase = phaseEvents.filter((e) => {
      const idx = script.events.indexOf(e);
      return idx < currentIndex;
    }).length;
    const currentInPhase =
      phase.id === currentPhaseId
        ? 1 / Math.max(phaseEvents.length, 1)
        : 0;
    return {
      ...phase,
      pct:
        ((completedInPhase + currentInPhase) /
          Math.max(phaseEvents.length, 1)) *
        100,
      active: phase.id === currentPhaseId,
      done: phaseEvents.every((e) => script.events.indexOf(e) < currentIndex),
    };
  });

  return (
    <div className="rounded-xl border border-border-strong bg-surface p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-[10px] font-mono uppercase tracking-widest text-subtle">
          Mission Timeline
        </div>
        <div className="text-[10px] font-mono text-faint">
          Event {currentIndex + 1} / {script.events.length}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {phaseProgress.map((phase, i) => (
          <div key={phase.id} className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5">
                <span
                  className={cn(
                    "font-mono",
                    phase.done && "text-success",
                    phase.active && "text-foreground",
                    !phase.done && !phase.active && "text-faint",
                  )}
                >
                  {`0${i + 1}`}
                </span>
                <span
                  className={cn(
                    "font-medium",
                    phase.done && "text-foreground",
                    phase.active && "text-foreground",
                    !phase.done && !phase.active && "text-subtle",
                  )}
                >
                  {phase.label}
                </span>
              </div>
              <span className="text-faint text-[10px]">{phase.range}</span>
            </div>
            <div className="relative h-1 overflow-hidden rounded-full bg-background">
              <motion.div
                className={cn(
                  "absolute inset-y-0 left-0 rounded-full",
                  phase.done && "bg-success",
                  phase.active && "bg-gradient-brand",
                  !phase.done && !phase.active && "bg-faint/50",
                )}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(phase.pct, 100)}%` }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
