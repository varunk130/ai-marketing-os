import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/ui/reveal";
import { missionSummaries } from "@/data/missions";
import { agents } from "@/data/agents";
import { AgentBadge } from "@/components/ui/agent-badge";
import { cn } from "@/lib/utils";

export function MissionsPreview() {
  return (
    <section className="py-16 sm:py-20">
      <Container size="xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-mono uppercase tracking-widest text-cyan">
              Proof
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Watch the OS run real missions
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-muted sm:text-lg">
              Each mission is a cinematic 60 to 90 second walkthrough of the AI
              Marketing OS operating end-to-end on a real marketing scenario.
            </p>
          </div>
        </Reveal>

        <StaggerGrid
          className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3"
          staggerDelay={0.12}
        >
          {missionSummaries.map((m, i) => {
            const missionAgents = m.agentIds
              .map((id) => agents.find((a) => a.id === id))
              .filter((a): a is NonNullable<typeof a> => Boolean(a))
              .slice(0, 5);
            const isAvailable = m.status === "available";

            const cardClasses = cn(
              "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all",
              isAvailable &&
                "hover:border-border-accent hover:bg-surface-hover hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_color-mix(in_oklch,var(--color-violet)_40%,transparent)]",
              !isAvailable && "opacity-70",
            );

            const cardContent = (
              <>
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-muted">
                    {m.badge}
                  </div>
                  <div className="font-mono text-xs text-faint">{`0${i + 1}`}</div>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{m.premise}</p>

                <div className="mt-6 flex -space-x-2">
                  {missionAgents.map((agent) => (
                    <AgentBadge
                      key={agent.id}
                      agent={agent}
                      size="sm"
                      className="ring-2 ring-surface"
                    />
                  ))}
                  {m.agentIds.length > missionAgents.length && (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated text-xs font-mono text-muted ring-2 ring-surface">
                      +{m.agentIds.length - missionAgents.length}
                    </div>
                  )}
                </div>

                <div className="mt-6 rounded-lg border border-border bg-background/40 p-3 font-mono text-xs text-muted">
                  → {m.outcome}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  {isAvailable ? (
                    <div className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-violet">
                      Watch mission
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden
                      >
                        <path
                          d="M4 8h8m0 0-3-3m3 3-3 3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 text-sm text-subtle">
                      <span className="h-1.5 w-1.5 rounded-full bg-warning" />
                      Coming soon
                    </div>
                  )}
                  <div className="text-xs text-faint">~{m.durationSeconds}s</div>
                </div>
              </>
            );

            return (
              <StaggerItem key={m.id} className="h-full">
                {isAvailable ? (
                  <Link href={`/missions/${m.id}`} className={cardClasses}>
                    {cardContent}
                  </Link>
                ) : (
                  <div className={cardClasses}>{cardContent}</div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </Container>
    </section>
  );
}