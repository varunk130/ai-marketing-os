import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BackgroundMesh } from "@/components/ui/background-mesh";
import { ButtonLink } from "@/components/ui/button";
import { MissionConsole } from "@/components/mission/mission-console";
import { missionSummaries } from "@/data/missions";

export const metadata = {
  title: "Launch a Product · Mission",
  description:
    "Watch the AI Marketing Crew launch Acme Analytics - from keyword research to $487K pipeline - in 90 seconds.",
};

export default function LaunchMissionPage() {
  const mission = missionSummaries.find((m) => m.id === "launch")!;

  return (
    <>
      <section className="relative isolate overflow-hidden pt-12 pb-6">
        <BackgroundMesh variant="subtle" />
        <Container size="xl">
          <Link
            href="/missions"
            className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path
                d="M12 8H4m0 0 3-3m-3 3 3 3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All missions
          </Link>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-cyan">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-cyan" />
                Mission 01 · {mission.badge}
              </div>
              <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {mission.title}:{" "}
                <span className="text-gradient">Acme Analytics</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base">
                {mission.premise}
              </p>
            </div>
            <div className="hidden rounded-lg border border-border bg-surface px-4 py-3 font-mono text-xs text-muted sm:block">
              <div className="text-[10px] uppercase tracking-wider text-faint">
                Expected outcome
              </div>
              <div className="mt-1 text-foreground">→ {mission.outcome}</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container size="xl">
          <MissionConsole />

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" variant="outline" size="md">
              Back to overview
            </ButtonLink>
            <ButtonLink
              href="https://github.com/varunk130/ai-marketing-claude-skills"
              external
              variant="ghost"
              size="md"
            >
              See the source skills →
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
