import { Container } from "@/components/ui/container";
import { BackgroundMesh } from "@/components/ui/background-mesh";
import { AgentBadge } from "@/components/ui/agent-badge";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/ui/reveal";
import { agents } from "@/data/agents";

const features = [
  {
    title: "Each agent owns a marketing function",
    body: "Atlas owns SEO. Nova owns experimentation. Anvil owns deal execution. Clear ownership, real accountabilities - just like a real org chart.",
  },
  {
    title: "Skills are their methodology layer",
    body: "Every agent draws from one or more of 12 expert skills - Bayesian A/B math, MEDDPICC, CRO audits, cohort LTV. Reusable, opinionated, battle-tested. Not one-off prompts.",
  },
  {
    title: "They hand off work like a real team",
    body: "Atlas → Echo: keyword map. Echo → Nova: content calendar. Nova → Lens: winning variant. The orchestration layer is the product, not any single agent.",
  },
  {
    title: "Outputs are real, shippable artifacts",
    body: "Scored lead lists. Battlecards. ROI reports with NPV. A/B plans with sample-size justification. The things a CMO or board would actually accept.",
  },
];

export function Solution() {
  return (
    <section className="relative isolate overflow-hidden border-y border-border bg-surface/40 py-16 sm:py-20">
      <BackgroundMesh variant="subtle" />

      <Container size="xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-mono uppercase tracking-widest text-violet">
              The Solution
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              An AI marketing{" "}
              <span className="text-gradient">operating system</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-muted sm:text-lg">
              A new architecture for marketing operations.{" "}
              <span className="text-foreground">9 agents</span> own the functions.{" "}
              <span className="text-foreground">12 skills</span> provide the
              methodology.{" "}
              <span className="text-foreground">One orchestration layer</span>{" "}
              turns intent into shipped artifacts.
            </p>
          </div>
        </Reveal>

        {/* Agent roster grid */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-border-strong bg-background/70 p-5 backdrop-blur sm:p-8">
            <StaggerGrid
              className="grid gap-4 sm:grid-cols-3"
              staggerDelay={0.05}
            >
              {agents.map((agent) => (
                <StaggerItem key={agent.id}>
                  <div className="group flex h-full items-start gap-3 rounded-xl border border-border bg-surface p-4 transition-all hover:border-border-strong hover:bg-surface-hover">
                    <AgentBadge agent={agent} size="md" />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-foreground">
                        {agent.name}
                      </div>
                      <div className="text-xs text-muted">{agent.role}</div>
                      <div className="mt-1 text-xs italic text-muted">
                        &ldquo;{agent.callSign}&rdquo;
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </Reveal>

        {/* Key features */}
        <StaggerGrid
          className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2"
          staggerDelay={0.1}
        >
          {features.map((f, i) => (
            <StaggerItem key={f.title}>
              <div className="flex h-full gap-5 rounded-xl border border-border bg-surface p-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-brand font-mono text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{f.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Container>
    </section>
  );
}
