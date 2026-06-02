"use client";

import { useEffect, useRef } from "react";
import { useMissionStore } from "@/lib/mission-store";
import { useTypewriter } from "@/lib/hooks/use-typewriter";
import { agents, accentClasses } from "@/data/agents";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

export function AgentConsole() {
  const script = useMissionStore((s) => s.script);
  const currentIndex = useMissionStore((s) => s.currentEventIndex);
  const status = useMissionStore((s) => s.status);
  const speed = useMissionStore((s) => s.speed);

  const event = script?.events[currentIndex];
  const agent = event ? agents.find((a) => a.id === event.agentId) : null;
  const skill = event ? skills.find((s) => s.id === event.skillId) : null;
  const accent = agent ? accentClasses[agent.accent] : null;

  const isPlaying = status === "playing";

  const { text } = useTypewriter(event?.consoleLines ?? [], {
    cps: 90,
    speed,
    enabled: isPlaying,
    resetKey: event?.id ?? "none",
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [text]);

  return (
    <div className="flex h-[420px] flex-col overflow-hidden rounded-xl border border-border-strong bg-surface">
      {/* Header - mac-style window chrome */}
      <div className="flex items-center justify-between border-b border-border-strong bg-background/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-subtle">
            agent-console · {event ? `event-${currentIndex + 1}` : "idle"}
          </span>
        </div>
        {isPlaying && (
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-success">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-success" />
            Streaming
          </div>
        )}
      </div>

      {/* Agent + skill badges */}
      {agent && accent && (
        <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-3">
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full font-mono text-xs font-semibold ring-1",
              accent.bg,
              accent.text,
              accent.ring,
            )}
          >
            {agent.initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <div className="text-sm font-semibold text-foreground">
                {agent.name}
              </div>
              <div className="text-xs text-subtle">· {agent.role}</div>
            </div>
            {skill && (
              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-faint">
                  Skill invoked:
                </span>
                <span className="rounded-md border border-border-strong bg-background/60 px-1.5 py-0.5 font-mono text-[10px] text-foreground">
                  {skill.id}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Streaming console body */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto bg-background/60 p-4 font-mono text-xs leading-6 text-muted"
      >
        {event ? (
          <>
            <div className="mb-2 text-faint">
              $ skill run {event.skillId}
            </div>
            <pre className="whitespace-pre-wrap text-foreground">
              {text}
              <span className="ml-0.5 inline-block h-3.5 w-1.5 -mb-0.5 animate-pulse-soft bg-violet" />
            </pre>
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-faint">
            Press play to begin mission.
          </div>
        )}
      </div>
    </div>
  );
}
