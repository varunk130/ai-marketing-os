"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  ReactFlow,
  Background,
  Handle,
  Position,
  type Edge,
  type Node,
  type NodeProps,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { useMissionStore } from "@/lib/mission-store";
import {
  agentPositions,
  launchHandoffs,
} from "@/data/missions/launch-timeline";
import { agents, accentClasses, type Agent } from "@/data/agents";
import { cn } from "@/lib/utils";

type AgentNodeData = {
  agent: Agent;
  isActive: boolean;
  hasFired: boolean;
};

function AgentNode({ data }: NodeProps<Node<AgentNodeData>>) {
  const { agent, isActive, hasFired } = data;
  const accent = accentClasses[agent.accent];

  return (
    <div className="relative">
      <Handle
        type="target"
        position={Position.Left}
        className="!h-1.5 !w-1.5 !border-0 !bg-border-accent"
      />

      {/* Active aura - large soft glow */}
      {isActive && (
        <span
          className={cn(
            "pointer-events-none absolute -inset-4 animate-pulse-soft rounded-2xl blur-xl",
            accent.bg,
          )}
        />
      )}

      <div
        className={cn(
          "relative flex w-[150px] flex-col items-center gap-1.5 rounded-xl border-2 bg-surface-elevated p-3 transition-all",
          isActive && "scale-110 border-foreground",
          isActive && accent.glow,
          !isActive && hasFired && "border-border-accent opacity-100",
          !isActive && !hasFired && "border-border opacity-75",
        )}
      >
        <div className="relative">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-bold ring-2",
              accent.bg,
              accent.text,
              accent.ring,
              isActive && "ring-foreground/60",
            )}
          >
            {agent.initials}
          </div>
        </div>
        <div className="text-center leading-tight">
          <div className="text-xs font-semibold text-foreground">
            {agent.name}
          </div>
          <div className={cn("text-[9px] uppercase tracking-wider", isActive ? "text-foreground/90" : "text-subtle")}>
            {agent.role.replace(" Agent", "")}
          </div>
        </div>
        {isActive && (
          <div className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-background px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-success ring-1 ring-success/40">
            <span className="h-1 w-1 animate-pulse-soft rounded-full bg-success" />
            Active
          </div>
        )}
        {!isActive && hasFired && (
          <div className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-background px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-success/80 ring-1 ring-success/20">
            ✓ Done
          </div>
        )}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="!h-1.5 !w-1.5 !border-0 !bg-border-accent"
      />
    </div>
  );
}

const nodeTypes = { agent: AgentNode };

export function AgentGraph() {
  const script = useMissionStore((s) => s.script);
  const currentIndex = useMissionStore((s) => s.currentEventIndex);
  const rfWrapper = useRef<HTMLDivElement>(null);

  const currentEvent = script?.events[currentIndex];
  const activeAgentId = currentEvent?.agentId ?? null;

  // Compute which agents have already fired
  const firedAgentIds = useMemo(() => {
    if (!script) return new Set<string>();
    const fired = new Set<string>();
    for (let i = 0; i <= currentIndex; i++) {
      const evt = script.events[i];
      if (evt) fired.add(evt.agentId);
    }
    return fired;
  }, [script, currentIndex]);

  // Detect handoff: previous event's agent → current event's agent
  const activeHandoff = useMemo(() => {
    if (!script || currentIndex === 0) return null;
    const prev = script.events[currentIndex - 1];
    const curr = script.events[currentIndex];
    if (!prev || !curr) return null;
    if (prev.agentId === curr.agentId) return null;
    return { from: prev.agentId, to: curr.agentId };
  }, [script, currentIndex]);

  const nodes: Node<AgentNodeData>[] = useMemo(
    () =>
      agents.map((agent) => ({
        id: agent.id,
        type: "agent",
        position: agentPositions[agent.id] ?? { x: 0, y: 0 },
        data: {
          agent,
          isActive: agent.id === activeAgentId,
          hasFired: firedAgentIds.has(agent.id),
        },
        draggable: false,
        selectable: false,
      })),
    [activeAgentId, firedAgentIds],
  );

  const edges: Edge[] = useMemo(
    () =>
      launchHandoffs.map((h) => {
        const isActive =
          activeHandoff?.from === h.from && activeHandoff?.to === h.to;
        const isPath =
          firedAgentIds.has(h.from) && firedAgentIds.has(h.to);
        return {
          id: `${h.from}-${h.to}`,
          source: h.from,
          target: h.to,
          type: "smoothstep",
          animated: isActive,
          style: {
            stroke: isActive
              ? "var(--color-violet)"
              : isPath
                ? "var(--color-success)"
                : "var(--color-border-accent)",
            strokeWidth: isActive ? 3 : isPath ? 2 : 1.5,
            opacity: isActive ? 1 : isPath ? 0.9 : 0.7,
          },
        };
      }),
    [activeHandoff, firedAgentIds],
  );

  // Auto-fit view on mount
  useEffect(() => {
    if (!rfWrapper.current) return;
  }, []);

  return (
    <div
      ref={rfWrapper}
      className="relative h-[460px] w-full overflow-hidden rounded-xl border border-border-strong bg-gradient-to-br from-surface to-surface-elevated"
    >
      <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-border-accent bg-background/90 px-3 py-1.5 backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-violet" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-foreground">
          Agent Graph
        </span>
      </div>

      {/* Legend */}
      <div className="absolute right-4 top-4 z-10 flex items-center gap-3 rounded-lg border border-border-accent bg-background/90 px-3 py-1.5 backdrop-blur">
        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider">
          <span className="h-2 w-2 animate-pulse-soft rounded-full bg-violet ring-2 ring-violet/30" />
          <span className="text-foreground">Active</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-success" />
          <span className="text-subtle">Done</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-border-accent" />
          <span className="text-subtle">Pending</span>
        </div>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2, maxZoom: 1 }}
        proOptions={{ hideAttribution: true }}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        preventScrolling={false}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1.5}
          color="var(--color-border-accent)"
        />
      </ReactFlow>
    </div>
  );
}
