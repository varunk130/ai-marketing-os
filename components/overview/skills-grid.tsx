import { Container } from "@/components/ui/container";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/ui/reveal";
import { skills, categoryLabels } from "@/data/skills";
import { cn } from "@/lib/utils";

const categoryStyles: Record<string, { dot: string; chip: string }> = {
  growth: {
    dot: "bg-cyan",
    chip: "text-cyan border-cyan/30 bg-cyan/10",
  },
  sales: {
    dot: "bg-pink",
    chip: "text-pink border-pink/30 bg-pink/10",
  },
  ops: {
    dot: "bg-violet",
    chip: "text-violet border-violet/30 bg-violet/10",
  },
};

export function SkillsGrid() {
  return (
    <section className="py-16 sm:py-20">
      <Container size="xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-mono uppercase tracking-widest text-violet">
              The Toolkit
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              12 expert skills, one library
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-muted sm:text-lg">
              Each skill is a complete methodology. Scoring algorithms,
              statistical frameworks, actionable outputs. Battle-tested.
            </p>
          </div>
        </Reveal>

        {/* Category legend */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {Object.entries(categoryLabels).map(([key, label]) => {
              const styles = categoryStyles[key];
              return (
                <div
                  key={key}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
                    styles.chip,
                  )}
                >
                  <span className={cn("h-1.5 w-1.5 rounded-full", styles.dot)} />
                  {label}
                </div>
              );
            })}
          </div>
        </Reveal>

        <StaggerGrid
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          staggerDelay={0.04}
        >
          {skills.map((skill) => {
            const styles = categoryStyles[skill.category];
            return (
              <StaggerItem key={skill.id}>
                <div className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all hover:border-border-strong hover:bg-surface-hover hover:-translate-y-0.5">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-elevated text-xl ring-1 ring-border-strong">
                      {skill.icon}
                    </div>
                    <span className={cn("h-1.5 w-1.5 rounded-full", styles.dot)} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      {skill.tagline}
                    </p>
                  </div>
                  <ul className="mt-1 space-y-1.5 text-xs text-muted">
                    {skill.differentiators.slice(0, 2).map((d) => (
                      <li key={d} className="flex items-start gap-1.5">
                        <span className="mt-1.5 h-0.5 w-2 shrink-0 bg-border-accent" />
                        <span className="leading-4">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </Container>
    </section>
  );
}
