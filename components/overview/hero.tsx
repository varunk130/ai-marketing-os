import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { BackgroundMesh } from "@/components/ui/background-mesh";
import { AgentBadge } from "@/components/ui/agent-badge";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/ui/reveal";
import { agents } from "@/data/agents";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-20">
      <BackgroundMesh variant="hero" />

      <Container size="xl">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3.5 py-1.5 text-xs backdrop-blur">
              <span className="font-mono uppercase tracking-wider text-violet">
                The AI Marketing OS
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              An AI team for every{" "}
              <span className="text-gradient">marketing function.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Stop renting seven SaaS tools and hiring scarce specialists. Run
              your marketing org as an orchestrated team of{" "}
              <span className="text-foreground">9 AI agents</span> built on{" "}
              <span className="text-foreground">12 expert skills</span> - producing the same artifacts a senior team would ship.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/missions/launch" variant="primary" size="lg">
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M4 2v12l10-6L4 2Z" />
                </svg>
                See it in action
              </ButtonLink>
              <ButtonLink href="/how-it-works" variant="outline" size="lg">
                How it works
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-subtle">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                Works with Claude · Cursor · Copilot
              </span>
            </div>
          </Reveal>
        </div>

        {/* Agent roster strip */}
        <div className="mt-12 sm:mt-14">
          <Reveal delay={0.5}>
            <div className="mb-6 flex items-center justify-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-muted">
              <span className="h-px w-12 bg-border-strong" />
              <span>The crew · 9 specialist agents</span>
              <span className="h-px w-12 bg-border-strong" />
            </div>
          </Reveal>
          <StaggerGrid
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
            initialDelay={0.6}
            staggerDelay={0.05}
          >
            {agents.map((agent) => (
              <StaggerItem
                key={agent.id}
                className="group flex items-center gap-2.5"
              >
                <AgentBadge agent={agent} size="md" />
                <div>
                  <div className="text-sm font-semibold text-foreground leading-tight">
                    {agent.name}
                  </div>
                  <div className="text-xs text-muted leading-tight">
                    {agent.role.replace(" Agent", "")}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </Container>
    </section>
  );
}
