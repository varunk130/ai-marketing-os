import { Container } from "@/components/ui/container";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

const stats = [
  {
    figure: <CountUp end={5} prefix="$" suffix="K" />,
    label: "per CRO audit",
    detail: "Typical cost of a single audit by a senior conversion-rate consultant.",
  },
  {
    figure: <CountUp end={50} prefix="$" suffix="K/mo" />,
    label: "tool stack cost",
    detail: "Composite spend for a Series A team across analytics, outbound, enrichment, CRM, and experimentation.",
  },
  {
    figure: <CountUp end={71} suffix="%" />,
    label: "A/B tests fail rigor",
    detail: "Tests that peek, are undersized, or use the wrong statistical model - invalidating their conclusions.",
  },
];

export function Extent() {
  return (
    <section className="border-y border-border bg-surface/40 py-16 sm:py-20">
      <Container size="xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-mono uppercase tracking-widest text-cyan">
              The Extent
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              The cost of doing it the old way
            </h2>
          </div>
        </Reveal>

        <StaggerGrid
          className="mx-auto mt-10 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-border-strong bg-border-strong sm:grid-cols-3"
          staggerDelay={0.12}
        >
          {stats.map((s, i) => (
            <StaggerItem key={s.label} className="bg-surface">
              <div className="relative h-full p-7 sm:p-8">
                <div className="text-xs font-mono uppercase tracking-wider text-subtle">
                  {`0${i + 1}`}
                </div>
                <div className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                  <span className="text-gradient">{s.figure}</span>
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-foreground">
                  {s.label}
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{s.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-subtle">
            Illustrative figures based on public industry benchmarks (Baymard,
            Gartner, CXL, internal reviews). Your mileage may vary, but the order
            of magnitude rarely does.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
