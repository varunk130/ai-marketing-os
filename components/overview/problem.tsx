import { Lock, Layers, Bot, Archive } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/ui/reveal";

const problems = [
  {
    Icon: Lock,
    headline: "Expertise is locked in specialists",
    body: "A senior CRO consultant costs $5K per audit. A growth scientist who actually understands Bayesian inference is rare. Most teams just don't have these people on the bench.",
  },
  {
    Icon: Layers,
    headline: "Tooling sprawl is bleeding budget",
    body: "Optimizely + Outreach + Clay + HubSpot + ZoomInfo + Ahrefs stacks to $20–50K/month. Half the features go unused. Procurement gets nervous every renewal.",
  },
  {
    Icon: Bot,
    headline: "Generic AI doesn't solve it",
    body: "ChatGPT can write copy, but it won't run your sample-size calculation, score your pipeline with a real model, or apply Cialdini's 6 principles to your landing page in a reproducible way.",
  },
  {
    Icon: Archive,
    headline: "Prompts die in chat windows",
    body: "Marketers experiment with prompts in private threads, lose them, can't share, can't reproduce. Every team relearns the same lessons. There's no compounding system.",
  },
];

export function Problem() {
  return (
    <section className="py-16 sm:py-20">
      <Container size="xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-mono uppercase tracking-widest text-violet">
              The Problem
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Modern marketing teams are drowning
            </h2>
            <p className="mt-5 text-balance text-base text-muted sm:text-lg">
              Four forces stack against every CMO trying to operate in the
              AI-native era.
            </p>
          </div>
        </Reveal>

        <StaggerGrid
          className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2"
          staggerDelay={0.1}
        >
          {problems.map((p) => (
            <StaggerItem key={p.headline}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:border-border-strong hover:bg-surface-hover">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-elevated text-foreground ring-1 ring-border-strong">
                    <p.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {p.headline}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{p.body}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Container>
    </section>
  );
}
