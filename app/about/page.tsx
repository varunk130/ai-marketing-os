import { Container } from "@/components/ui/container";
import { BackgroundMesh } from "@/components/ui/background-mesh";
import { ButtonLink } from "@/components/ui/button";

export const metadata = {
  title: "About",
  description:
    "About the AI Marketing Crew demo - built by Varun Kulkarni to showcase the ai-marketing-claude-skills library.",
};

const relatedRepos = [
  {
    name: "ai-marketing-claude-skills",
    description: "The 12-skill source library this demo visualizes.",
    href: "https://github.com/varunk130/ai-marketing-claude-skills",
  },
  {
    name: "ai-pm-agents-suite",
    description: "6-agent pipeline for product managers + 3 standalone PM agents.",
    href: "https://github.com/varunk130/ai-pm-agents-suite",
  },
  {
    name: "ai-gtm-skill-library",
    description: "31 opinionated GTM skills across the full discover → renew lifecycle.",
    href: "https://github.com/varunk130/ai-gtm-skill-library",
  },
  {
    name: "ai-ux-skill-library",
    description: "11 frameworks for designing UX for AI products and agents.",
    href: "https://github.com/varunk130/ai-ux-skill-library",
  },
  {
    name: "ai-workflow-playbooks",
    description: "21 playbooks + 10 skills + 4 guardians across the 7-stage delivery pipeline.",
    href: "https://github.com/varunk130/ai-workflow-playbooks",
  },
  {
    name: "claude-code-skills",
    description: "29 production-grade skills for finance, product, strategy, and game theory.",
    href: "https://github.com/varunk130/claude-code-skills",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-24 pb-16">
        <BackgroundMesh variant="subtle" />
        <Container size="md">
          <div className="text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-violet">
              About
            </div>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
              Why this exists
            </h1>
          </div>
        </Container>
      </section>

      <section className="pb-32">
        <Container size="md">
          <div className="prose prose-invert mx-auto max-w-2xl space-y-6 text-base leading-7 text-muted">
            <p>
              The{" "}
              <a
                href="https://github.com/varunk130/ai-marketing-claude-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-violet"
              >
                ai-marketing-claude-skills
              </a>{" "}
              repository ships 12 expert marketing skills as markdown files - Bayesian A/B math, lead scoring frameworks, CRO audit rubrics,
              MEDDPICC qualification, and more. They&apos;re built to plug into Claude
              Code, GitHub Copilot, Cursor, and any markdown-skill-aware agent.
            </p>
            <p>
              That&apos;s powerful, but it&apos;s also abstract. A library doesn&apos;t{" "}
              <em>show</em> what&apos;s possible. So this site does.
            </p>
            <p>
              <span className="text-foreground">
                It&apos;s a cinematic, end-to-end showcase
              </span>{" "}
              of an autonomous AI marketing team using those skills to complete
              real marketing missions. 9 specialist agents. 12 expert skills.
              Built to be the canonical &ldquo;show, don&apos;t tell&rdquo; link
              for the entire library.
            </p>
            <p>
              Built by{" "}
              <a
                href="https://github.com/varunk130"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-violet"
              >
                Varun Kulkarni
              </a>{" "} - AI Builder at Microsoft, Forbes Tech Council member, and author
              of a portfolio of AI agent and skill libraries spanning product,
              GTM, UX, and decision-making.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="text-xs font-mono uppercase tracking-widest text-subtle">
              Part of a portfolio
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {relatedRepos.map((r) => (
                <a
                  key={r.name}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border bg-surface/40 p-5 transition-all hover:border-border-strong hover:bg-surface"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-sm font-medium text-foreground">
                      {r.name}
                    </div>
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3.5 w-3.5 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
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
                  <p className="mt-2 text-xs leading-5 text-muted">
                    {r.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <ButtonLink href="/missions/launch" variant="primary" size="lg">
              Try the Launch mission
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
