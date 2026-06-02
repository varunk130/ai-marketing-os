import Link from "next/link";
import { ArrowRight, FileCode, Users, GitBranch, FileBarChart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/ui/reveal";

const layers = [
  {
    Icon: FileCode,
    n: "01",
    name: "Skills",
    count: "12",
    accent: "cyan",
    body: "Markdown methodologies. Bayesian A/B math, MEDDPICC, CRO audits. Battle-tested frameworks codified as text.",
  },
  {
    Icon: Users,
    n: "02",
    name: "Agents",
    count: "9",
    accent: "violet",
    body: "Specialists with clear ownership. Each agent loads one or more skills and operates on the data in its domain.",
  },
  {
    Icon: GitBranch,
    n: "03",
    name: "Orchestration",
    count: "→",
    accent: "pink",
    body: "Agents hand off work along a graph. Atlas → Echo → Nova → Lens. No central dispatcher. The data flow is the program.",
  },
  {
    Icon: FileBarChart,
    n: "04",
    name: "Artifacts",
    count: "∞",
    accent: "amber",
    body: "Real, shippable deliverables. Lead lists, battlecards, ROI reports with NPV. The output a CMO or board would actually accept.",
  },
] as const;

const accentMap = {
  cyan: {
    text: "text-cyan",
    bg: "bg-cyan/12",
    ringSoft: "ring-cyan/30",
    ringStrong: "ring-cyan/50",
    gradient: "from-cyan/20 via-cyan/5 to-transparent",
    barBg: "bg-cyan",
  },
  violet: {
    text: "text-violet",
    bg: "bg-violet/12",
    ringSoft: "ring-violet/30",
    ringStrong: "ring-violet/50",
    gradient: "from-violet/20 via-violet/5 to-transparent",
    barBg: "bg-violet",
  },
  pink: {
    text: "text-pink",
    bg: "bg-pink/12",
    ringSoft: "ring-pink/30",
    ringStrong: "ring-pink/50",
    gradient: "from-pink/20 via-pink/5 to-transparent",
    barBg: "bg-pink",
  },
  amber: {
    text: "text-amber",
    bg: "bg-amber/12",
    ringSoft: "ring-amber/30",
    ringStrong: "ring-amber/50",
    gradient: "from-amber/20 via-amber/5 to-transparent",
    barBg: "bg-amber",
  },
} as const;

const flowSteps = [
  {
    accent: "cyan",
    label: "Skill",
    value: "growth-engine",
    detail: "defines the method",
  },
  {
    accent: "violet",
    label: "Agent",
    value: "Nova",
    detail: "executes the work",
  },
  {
    accent: "pink",
    label: "Handoff",
    value: "→ Lens",
    detail: "passes to the next",
  },
  {
    accent: "amber",
    label: "Artifact",
    value: "ab-plan.md",
    detail: "ships the output",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="border-y border-border bg-surface/40 py-20 sm:py-24">
      <Container size="xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-mono uppercase tracking-widest text-amber">
              How it works
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              A four-layer architecture
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-muted sm:text-lg">
              The same shape as any production software system.{" "}
              <span className="text-foreground">
                Data, logic, orchestration, output.
              </span>{" "}
              Adapted for AI agents working on marketing operations.
            </p>
          </div>
        </Reveal>

        <StaggerGrid
          className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.1}
        >
          {layers.map((l) => {
            const a = accentMap[l.accent];
            return (
              <StaggerItem key={l.n}>
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl border border-border-strong bg-surface p-6 transition-all hover:-translate-y-1 hover:border-border-accent hover:bg-surface-hover`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.gradient} opacity-60`}
                  />
                  <div className={`absolute left-0 top-0 h-1 w-full ${a.barBg}`} />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${a.bg} ${a.text} ring-1 ${a.ringSoft}`}
                      >
                        <l.Icon className="h-7 w-7" strokeWidth={1.75} />
                      </div>
                      <div className="font-mono text-xs tracking-wider text-subtle">
                        Layer {l.n}
                      </div>
                    </div>
                    <div className="mt-6 flex items-baseline gap-3">
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                        {l.name}
                      </h3>
                      <span
                        className={`font-mono text-2xl font-bold leading-none ${a.text}`}
                      >
                        {l.count}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted">{l.body}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        {/* Flow diagram — redesigned */}
        <Reveal delay={0.4}>
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="mb-6 flex items-center justify-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted">
              <span className="h-px w-12 bg-border-strong" />
              <span>An example data flow</span>
              <span className="h-px w-12 bg-border-strong" />
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-background/60 p-6 backdrop-blur sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet/[0.06] via-transparent to-cyan/[0.06]" />

              <div className="relative flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:gap-3">
                {flowSteps.map((step, i) => {
                  const a = accentMap[step.accent];
                  const isLast = i === flowSteps.length - 1;
                  return (
                    <div
                      key={step.label}
                      className="flex flex-1 flex-col items-stretch gap-4 lg:flex-row lg:items-center"
                    >
                      <div
                        className={`relative flex-1 overflow-hidden rounded-2xl border border-border bg-surface p-5 ring-1 ${a.ringSoft} transition-all hover:-translate-y-0.5 hover:${a.ringStrong}`}
                      >
                        <div
                          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.gradient} opacity-70`}
                        />
                        <div className="relative">
                          <div className="flex items-center justify-between">
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full ${a.bg} px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ${a.text} ring-1 ${a.ringSoft}`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${a.barBg}`}
                              />
                              {step.label}
                            </span>
                            <span className="font-mono text-[11px] text-subtle">
                              {`0${i + 1}`}
                            </span>
                          </div>
                          <div className="mt-4 font-mono text-lg font-semibold text-foreground">
                            {step.value}
                          </div>
                          <div className="mt-1 text-xs text-muted">
                            {step.detail}
                          </div>
                        </div>
                      </div>
                      {!isLast && (
                        <div className="flex shrink-0 items-center justify-center lg:px-1">
                          <ArrowRight className="h-5 w-5 rotate-90 text-border-accent lg:rotate-0" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/how-it-works"
              className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-border-accent hover:bg-surface-hover"
            >
              Read the full architecture
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
