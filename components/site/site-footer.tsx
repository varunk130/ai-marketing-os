import Link from "next/link";
import { Container } from "@/components/ui/container";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterCol = {
  title: string;
  links: FooterLink[];
};

const footerCols: FooterCol[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/" },
      { label: "Missions", href: "/missions" },
      { label: "Skills catalog", href: "/skills" },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/varunk130/ai-marketing-claude-skills",
        external: true,
      },
      { label: "About", href: "/about" },
      {
        label: "Related work",
        href: "https://github.com/varunk130",
        external: true,
      },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-background">
      <Container size="xl">
        <div className="grid gap-12 py-16 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-brand">
                <span className="font-mono text-xs font-bold text-white">AI</span>
              </span>
              <span className="font-semibold tracking-tight">Marketing Crew</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              An interactive showcase of an autonomous AI marketing team. 9 agents,
              12 expert skills, end-to-end ownership.
            </p>
            <p className="mt-6 text-xs text-faint">
              Built by{" "}
              <a
                href="https://github.com/varunk130"
                className="text-muted transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Varun Kulkarni
              </a>{" "}
              · Powered by Next.js
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-subtle">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border py-6 text-xs leading-5 text-faint">
          <p>
            © {new Date().getFullYear()} Varun Kulkarni. All rights reserved.
          </p>
          <p className="mt-1.5 text-subtle">
            Disclaimer: this site is a demo. All scenarios, agents, missions,
            artifacts, metrics, and figures shown are hypothetical and use
            synthetic data created for demonstration purposes only. Nothing
            here represents real customers, real outcomes, or any specific
            company.
          </p>
        </div>
      </Container>
    </footer>
  );
}
