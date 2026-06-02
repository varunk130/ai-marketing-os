"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSpreadsheet,
  FileText,
  FileJson,
  FileBarChart,
  ClipboardList,
  ScrollText,
  X,
  Sparkles,
} from "lucide-react";
import { useMissionStore } from "@/lib/mission-store";
import { agents, accentClasses } from "@/data/agents";
import type { Artifact, ArtifactType } from "@/data/missions/launch-timeline";
import { widgetRegistry } from "@/components/mission/widgets";
import { cn } from "@/lib/utils";

const typeMeta: Record<
  ArtifactType,
  { Icon: typeof FileText; label: string; color: string }
> = {
  csv: { Icon: FileSpreadsheet, label: "CSV", color: "text-success" },
  markdown: { Icon: FileText, label: "MD", color: "text-cyan" },
  json: { Icon: FileJson, label: "JSON", color: "text-amber" },
  report: { Icon: FileBarChart, label: "Report", color: "text-violet" },
  scorecard: { Icon: ClipboardList, label: "Score", color: "text-pink" },
  plan: { Icon: ScrollText, label: "Plan", color: "text-info" },
};

function ArtifactCard({
  artifact,
  onOpen,
}: {
  artifact: Artifact;
  onOpen: (a: Artifact) => void;
}) {
  const meta = typeMeta[artifact.type];
  const agent = agents.find((a) => a.id === artifact.agentId);
  const agentAccent = agent ? accentClasses[agent.accent] : null;
  const hasWidget = Boolean(widgetRegistry[artifact.id]);

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(artifact)}
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex w-[210px] shrink-0 flex-col gap-2 rounded-lg border bg-background p-3 text-left transition-all hover:bg-surface hover:-translate-y-0.5",
        hasWidget
          ? "border-violet/30 hover:border-violet/50 hover:shadow-[0_8px_24px_-8px_color-mix(in_oklch,var(--color-violet)_45%,transparent)]"
          : "border-border-strong hover:border-border-accent",
      )}
    >
      {hasWidget && (
        <span className="absolute -top-2 -right-2 inline-flex items-center gap-1 rounded-full border border-violet/40 bg-violet/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-violet backdrop-blur">
          <Sparkles className="h-2.5 w-2.5" />
          Interactive
        </span>
      )}
      <div className="flex items-center justify-between">
        <div className={cn("flex h-7 w-7 items-center justify-center rounded-md bg-surface ring-1 ring-border-accent", meta.color)}>
          <meta.Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
        </div>
        <span className="rounded bg-surface px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-subtle">
          {meta.label}
        </span>
      </div>
      <div className="font-mono text-xs font-medium text-foreground truncate">
        {artifact.name}
      </div>
      {agent && agentAccent && (
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "flex h-4 w-4 items-center justify-center rounded-full font-mono text-[8px] font-semibold",
              agentAccent.bg,
              agentAccent.text,
            )}
          >
            {agent.initials}
          </span>
          <span className="text-[10px] text-subtle">by {agent.name}</span>
        </div>
      )}
    </motion.button>
  );
}

function ArtifactModal({
  artifact,
  onClose,
}: {
  artifact: Artifact;
  onClose: () => void;
}) {
  const meta = typeMeta[artifact.type];
  const agent = agents.find((a) => a.id === artifact.agentId);
  const Widget = widgetRegistry[artifact.id];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="absolute inset-0 bg-background/90 backdrop-blur"
        onClick={onClose}
      />
      <motion.div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border-accent bg-surface shadow-2xl"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border-accent bg-background/60 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className={cn("flex h-9 w-9 items-center justify-center rounded-md bg-surface ring-1 ring-border-accent", meta.color)}>
              <meta.Icon className="h-4 w-4" strokeWidth={1.75} />
            </div>
            <div>
              <div className="font-mono text-sm font-semibold text-foreground">
                {artifact.name}
              </div>
              {agent && (
                <div className="text-xs text-subtle">
                  by {agent.name} · {agent.role}
                </div>
              )}
            </div>
            {Widget && (
              <span className="inline-flex items-center gap-1 rounded-full border border-violet/30 bg-violet/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-violet">
                <Sparkles className="h-2.5 w-2.5" />
                Interactive
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          {Widget ? (
            <Widget />
          ) : (
            <pre className="whitespace-pre-wrap font-mono text-xs leading-6 text-foreground">
              {artifact.expanded ?? artifact.preview}
            </pre>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ArtifactFeed() {
  const artifacts = useMissionStore((s) => s.collectedArtifacts);
  const [openArtifact, setOpenArtifact] = useState<Artifact | null>(null);

  return (
    <>
      <div className="rounded-xl border border-border-strong bg-surface">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-subtle">
              Artifact Feed
            </span>
            <span className="rounded-full bg-background px-2 py-0.5 font-mono text-[10px] text-foreground">
              {artifacts.length}
            </span>
          </div>
          <div className="text-[10px] text-faint">click to expand</div>
        </div>

        <div className="overflow-x-auto p-4">
          <div className="flex gap-3">
            <AnimatePresence mode="popLayout">
              {artifacts.length === 0 ? (
                <div className="flex h-24 w-full items-center justify-center text-xs text-faint">
                  Artifacts will drop here as agents complete work.
                </div>
              ) : (
                artifacts.map((a) => (
                  <ArtifactCard
                    key={a.id}
                    artifact={a}
                    onOpen={setOpenArtifact}
                  />
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openArtifact && (
          <ArtifactModal
            artifact={openArtifact}
            onClose={() => setOpenArtifact(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
