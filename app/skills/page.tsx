import { Container } from "@/components/ui/container";
import { BackgroundMesh } from "@/components/ui/background-mesh";
import { skills, categoryLabels } from "@/data/skills";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Skills catalog",
  description:
    "12 expert marketing skills. Bayesian A/B testing, lead scoring, CRO audits, MEDDPICC qualification, and more.",
};

const categoryStyles: Record<string, { dot: string; chip: string; bar: string }> = {
  growth: {
    dot: "bg-cyan",
    chip: "text-cyan border-cyan/30 bg-cyan/10",
    bar: "bg-cyan",
  },
  sales: {
    dot: "bg-pink",
    chip: "text-pink border-pink/30 bg-pink/10",
    bar: "bg-pink",
  },
  ops: {
    dot: "bg-violet",
    chip: "text-violet border-violet/30 bg-violet/10",
    bar: "bg-violet",
  },
};

export default function SkillsPage() {
  const byCategory = Object.entries(categoryLabels).map(([key, label]) => ({
    key,
    label,
    items: skills.filter((s) => s.category === key),
  }));

  return (
    <>
      <section className="relative isolate overflow-hidden pt-24 pb-16">
        <BackgroundMesh variant="subtle" />
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-mono uppercase tracking-widest text-violet">
              The Toolkit
            </div>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
              12 expert skills,{" "}
              <span className="text-gradient">one library</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
              Each skill is a complete methodology. Scoring algorithms,
              statistical frameworks, actionable outputs. Live in markdown.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-32">
        <Container size="xl">
          {byCategory.map((group) => {
            const styles = categoryStyles[group.key];
            return (
              <div key={group.key} className="mt-16 first:mt-0">
                <div className="mb-6 flex items-center gap-3">
                  <span className={cn("h-6 w-1 rounded-full", styles.bar)} />
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {group.label}
                  </h2>
                  <span
                    className={cn(
                      "ml-2 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-mono",
                      styles.chip,
                    )}
                  >
                    {group.items.length}
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((skill) => (
                    <div
                      key={skill.id}
                      className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface/50 p-6 transition-all hover:border-border-strong hover:bg-surface"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-elevated text-2xl ring-1 ring-border-strong">
                          {skill.icon}
                        </div>
                        <span className={cn("h-1.5 w-1.5 rounded-full", styles.dot)} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {skill.name}
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-muted">
                          {skill.tagline}
                        </p>
                      </div>
                  <ul className="mt-2 space-y-2 text-sm text-muted">
                    {skill.differentiators.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-accent" />
                        <span className="leading-5">{d}</span>
                      </li>
                    ))}
                  </ul>
                      <a
                        href={`https://github.com/varunk130/ai-marketing-claude-skills/tree/main/${skill.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
                      >
                        Open skill README
                        <svg
                          viewBox="0 0 16 16"
                          className="h-3 w-3"
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
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
