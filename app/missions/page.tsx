import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BackgroundMesh } from "@/components/ui/background-mesh";
import { AgentBadge } from "@/components/ui/agent-badge";
import { missionSummaries } from "@/data/missions";
import { agents } from "@/data/agents";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Missions",
  description:
    "Three scenarios that showcase the AI Marketing Crew in action - Launch a Product, Rescue a Pipeline, or A Week at the Org.",
};

export default function MissionsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-24 pb-16">
        <BackgroundMesh variant="subtle" />
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-violet">
              Missions
            </div>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
              Pick a scenario. <span className="text-gradient">Press play.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
              Each mission is a 60–90 second cinematic walkthrough. Watch the
              crew operate end-to-end - agents pulse, consoles stream, artifacts
              drop in real time.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-32">
        <Container size="xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {missionSummaries.map((m, i) => {
              const missionAgents = m.agentIds
                .map((id) => agents.find((a) => a.id === id))
                .filter((a): a is NonNullable<typeof a> => Boolean(a))
                .slice(0, 6);
              const isAvailable = m.status === "available";

              const cardClasses = cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 p-7 transition-all",
                isAvailable &&
                  "hover:border-border-accent hover:bg-surface hover:shadow-[0_20px_60px_-20px_color-mix(in_oklch,var(--color-violet)_40%,transparent)]",
                !isAvailable && "opacity-70",
              );

              const cardContent = (
                <>
                  <div className="flex items-start justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-subtle">
                      {m.badge}
                    </div>
                    <div className="font-mono text-xs text-faint">{`0${i + 1}`}</div>
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                    {m.title}
                  </h2>
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

              return isAvailable ? (
                <Link key={m.id} href={`/missions/${m.id}`} className={cardClasses}>
                  {cardContent}
                </Link>
              ) : (
                <div key={m.id} className={cardClasses}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
