import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { BackgroundMesh } from "@/components/ui/background-mesh";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border py-20 sm:py-24">
      <BackgroundMesh variant="hero" />
      <Container size="lg">
        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="text-sm font-mono uppercase tracking-widest text-cyan">
              Get started
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Run your marketing org{" "}
              <span className="text-gradient">as an AI team.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-muted sm:text-lg">
              Plug the AI Marketing OS into Claude Code, Cursor, or GitHub
              Copilot, or watch the cinematic demo to see the architecture run
              end-to-end.
            </p>

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
                Watch the Launch demo
              </ButtonLink>
              <ButtonLink
                href="https://github.com/varunk130/ai-marketing-claude-skills"
                external
                variant="outline"
                size="lg"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 .5A12 12 0 0 0 .5 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4A12 12 0 0 0 12 .5Z" />
                </svg>
                Star on GitHub
              </ButtonLink>
            </div>

            <p className="mt-6 text-xs text-subtle">
              Built by{" "}
              <a
                href="https://github.com/varunk130"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border-accent underline-offset-2 hover:decoration-violet"
              >
                Varun Kulkarni
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
