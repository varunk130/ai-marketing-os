import { Container } from "@/components/ui/container";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/ui/reveal";

const forces = [
  {
    eyebrow: "Pressure",
    headline: "Every CMO is being asked the same question",
    body: "\"What's your AI strategy?\" - and most can't get past \"we use ChatGPT.\" A defensible answer is now table stakes.",
  },
  {
    eyebrow: "Constraint",
    headline: "Headcount is being cut",
    body: "Marketing teams are being asked to do more with less. Efficiency is the mandate. The teams that survive will be operating at 3–5x leverage.",
  },
  {
    eyebrow: "Opportunity",
    headline: "Winners operate like a team of AI specialists",
    body: "Not a team using AI as autocomplete. The unlock isn't knowing the framework - it's having the framework executable, on your data, today.",
  },
];

export function WhyNow() {
  return (
    <section className="py-16 sm:py-20">
      <Container size="xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-mono uppercase tracking-widest text-pink">
              Why Now
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              2026 is the AI-native marketing inflection
            </h2>
          </div>
        </Reveal>

        <StaggerGrid
          className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3"
          staggerDelay={0.12}
        >
          {forces.map((f, i) => (
            <StaggerItem key={f.headline}>
              <div className="relative h-full rounded-2xl border border-border bg-surface p-7">
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs font-mono uppercase tracking-widest text-muted ring-1 ring-border-strong">
                  <span className="text-violet">{`0${i + 1}`}</span>
                  <span className="text-faint">·</span>
                  <span>{f.eyebrow}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                  {f.headline}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{f.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Container>
    </section>
  );
}
