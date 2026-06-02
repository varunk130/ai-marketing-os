import {
  ArrowRight,
  FileCode,
  Users,
  GitBranch,
  FileBarChart,
  Layers,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { BackgroundMesh } from "@/components/ui/background-mesh";
import { ButtonLink } from "@/components/ui/button";
import { AgentBadge } from "@/components/ui/agent-badge";
import { agents } from "@/data/agents";
import { skills } from "@/data/skills";

export const metadata = {
  title: "How it works · The AI Marketing OS",
  description:
    "Architecture deep-dive: how 12 skills, 9 agents, an orchestration layer, and shippable artifacts compose into an operating system for marketing.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-14 pb-12 sm:pt-20 sm:pb-16">
        <BackgroundMesh variant="hero" />
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-amber">
              Architecture
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              How the{" "}
              <span className="text-gradient">AI Marketing OS</span> works
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Four layers - skills, agents, orchestration, artifacts. Each one
              has the same shape as production software, adapted for AI agents
              working on marketing operations. Here&apos;s how they compose.
            </p>
          </div>
        </Container>
      </section>

      {/* Layer 1: Skills */}
      <section className="py-12 sm:py-16">
        <Container size="xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-xl border border-cyan/30 bg-cyan/10 px-3 py-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan/15 ring-1 ring-cyan/40">
                  <FileCode className="h-4 w-4 text-cyan" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-cyan">
                    Layer 01 · Methodology
                  </div>
                  <div className="font-semibold text-foreground">Skills</div>
                </div>
              </div>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Markdown methodologies
                <br />
                that don&apos;t expire
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                A skill is a self-contained methodology written in markdown.
                Bayesian A/B math. MEDDPICC qualification. CRO audit rubrics.
                Cohort LTV analysis.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                Skills are{" "}
                <span className="text-foreground">opinionated</span> (they
                encode a specific way of doing the work),{" "}
                <span className="text-foreground">composable</span> (an agent
                can load multiple), and{" "}
                <span className="text-foreground">versioned</span> (they live in
                git, so improvements compound).
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                There are 12 in the OS today - covering the most leverage-rich
                problems in growth, sales, and operations.
              </p>
            </div>

            <div className="rounded-2xl border border-border-strong bg-surface p-6 sm:p-8">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xs font-mono uppercase tracking-widest text-subtle">
                  The 12 skills
                </div>
                <div className="font-mono text-xs text-foreground">12</div>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {skills.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2"
                  >
                    <span className="text-base">{s.icon}</span>
                    <span className="truncate text-xs font-medium text-foreground">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-border-strong bg-background p-4">
                <div className="mb-2 font-mono text-xs uppercase tracking-wider text-cyan">
                  Anatomy of a skill
                </div>
                <pre className="font-mono text-xs leading-5 text-muted">
                  {`# growth-engine

## Capabilities
- Bayesian A/B testing
- Multi-armed bandits
- CUPED variance reduction

## Workflow
1. Define hypothesis + MDE
2. Power-size with prior data
3. Run with stopping rule
4. Compute posterior + decide

## Triggers
- "Design an A/B test for..."
- "Should I stop the test?"

## Output schema
- ab-test-plan.md
- ab-results.md`}
                </pre>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Layer 2: Agents */}
      <section className="border-y border-border bg-surface/30 py-12 sm:py-16">
        <Container size="xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-border-strong bg-background p-6 sm:p-8">
              <div className="mb-4 text-xs font-mono uppercase tracking-widest text-subtle">
                The 9 agents
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {agents.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-start gap-3 rounded-lg border border-border bg-surface p-3"
                  >
                    <AgentBadge agent={a} size="sm" />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-foreground">
                        {a.name}
                      </div>
                      <div className="text-xs text-muted">{a.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 rounded-xl border border-violet/30 bg-violet/10 px-3 py-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet/15 ring-1 ring-violet/40">
                  <Users className="h-4 w-4 text-violet" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-violet">
                    Layer 02 · Specialists
                  </div>
                  <div className="font-semibold text-foreground">Agents</div>
                </div>
              </div>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Specialists with
                <br />
                clear ownership
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Each agent owns a marketing function and loads the skills
                relevant to that function. Atlas owns SEO. Nova owns
                experimentation. Anvil owns deal execution.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                Agents are{" "}
                <span className="text-foreground">named</span> (so handoffs are
                explicit), have a{" "}
                <span className="text-foreground">voice</span> (so output is
                consistent), and own{" "}
                <span className="text-foreground">accountabilities</span> (so
                you know who shipped what).
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                Just like a real marketing org chart - but always available,
                infinitely parallelizable, and never &ldquo;in a meeting.&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Layer 3: Orchestration */}
      <section className="py-12 sm:py-16">
        <Container size="xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-xl border border-pink/30 bg-pink/10 px-3 py-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink/15 ring-1 ring-pink/40">
                  <GitBranch className="h-4 w-4 text-pink" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-pink">
                    Layer 03 · Handoffs
                  </div>
                  <div className="font-semibold text-foreground">
                    Orchestration
                  </div>
                </div>
              </div>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Agents hand off work
                <br />
                along a graph
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                There&apos;s no central dispatcher and no master prompt. Agents
                produce typed artifacts, and the artifact <em>itself</em>{" "}
                triggers the next agent in the graph.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                When Atlas finishes a <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs text-foreground">keyword-map.csv</code>, Echo and Nova both pick it up - Echo plans content, Nova plans experiments. Parallelism is implicit in the graph topology.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                This is the same pattern Unix uses to compose programs:{" "}
                <span className="text-foreground">small things that do one job</span>,
                connected by typed streams.
              </p>
            </div>

            <div className="rounded-2xl border border-border-strong bg-surface p-6 sm:p-8">
              <div className="mb-5 text-xs font-mono uppercase tracking-widest text-subtle">
                Example handoff chain
              </div>
              <div className="space-y-3">
                {[
                  { agentId: "atlas", action: "produces", file: "keyword-map.csv" },
                  { agentId: "echo", action: "consumes + produces", file: "content-calendar.md" },
                  { agentId: "nova", action: "consumes + produces", file: "ab-test-plan.md" },
                  { agentId: "lens", action: "consumes + produces", file: "cro-audit.json" },
                  { agentId: "forge", action: "consumes + produces", file: "outbound-sequence.md" },
                  { agentId: "scout", action: "consumes + produces", file: "scored-leads.csv" },
                  { agentId: "anvil", action: "consumes + produces", file: "meddpicc-plans.md" },
                  { agentId: "ledger", action: "consumes + produces", file: "q1-roi-report.md" },
                ].map((step, i) => {
                  const agent = agents.find((a) => a.id === step.agentId);
                  if (!agent) return null;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg border border-border bg-background p-3"
                    >
                      <div className="font-mono text-xs text-faint w-6">
                        {`0${i + 1}`}
                      </div>
                      <AgentBadge agent={agent} size="sm" />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-foreground">
                          {agent.name}
                        </div>
                        <div className="text-xs text-muted">
                          {step.action}
                        </div>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-faint" />
                      <code className="rounded bg-surface px-2 py-1 font-mono text-xs text-foreground">
                        {step.file}
                      </code>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Layer 4: Artifacts */}
      <section className="border-y border-border bg-surface/30 py-12 sm:py-16">
        <Container size="xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-border-strong bg-background p-6 sm:p-8">
              <div className="mb-4 text-xs font-mono uppercase tracking-widest text-subtle">
                Artifact types
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { type: "CSV", desc: "Lead lists, keyword maps, unit economics", color: "text-success", bg: "bg-success/10", ring: "ring-success/30" },
                  { type: "Markdown", desc: "Plans, briefs, battlecards, calendars", color: "text-cyan", bg: "bg-cyan/10", ring: "ring-cyan/30" },
                  { type: "JSON / Scorecard", desc: "CRO audits, scoring matrices", color: "text-amber", bg: "bg-amber/10", ring: "ring-amber/30" },
                  { type: "Reports", desc: "ROI summaries, win/loss analyses", color: "text-violet", bg: "bg-violet/10", ring: "ring-violet/30" },
                ].map((a) => (
                  <div
                    key={a.type}
                    className={`rounded-xl border border-border bg-surface p-4`}
                  >
                    <div className={`inline-flex rounded-md ${a.bg} ${a.color} px-2 py-1 font-mono text-xs uppercase tracking-wider ring-1 ${a.ring}`}>
                      {a.type}
                    </div>
                    <div className="mt-2 text-xs text-muted">{a.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 rounded-xl border border-amber/30 bg-amber/10 px-3 py-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber/15 ring-1 ring-amber/40">
                  <FileBarChart className="h-4 w-4 text-amber" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-amber">
                    Layer 04 · Deliverables
                  </div>
                  <div className="font-semibold text-foreground">Artifacts</div>
                </div>
              </div>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Real, shippable
                <br />
                deliverables
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                The output of the OS isn&apos;t chat. It&apos;s typed artifacts - files a human team would actually accept and ship.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                CSVs route to your CRM. Markdown plans get reviewed in PRs.
                Scorecards drive sprint priorities. ROI reports go to the
                board. The same shape as the work your team is already doing.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                And because they&apos;re typed and named, the next agent
                downstream knows exactly how to consume them.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why this is different */}
      <section className="py-12 sm:py-16">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-violet">
              The contrast
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Why this isn&apos;t just &ldquo;ChatGPT for marketing&rdquo;
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-danger/30 bg-danger/5 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-danger/15 px-3 py-1 ring-1 ring-danger/30">
                <XCircle className="h-3.5 w-3.5 text-danger" />
                <span className="text-xs font-medium text-danger">
                  Generic AI assistants
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  "One model, no methodology - every answer is a fresh prompt",
                  "No memory of how your team does work - re-explain every time",
                  "Chat-shaped outputs, not artifacts your team can ship",
                  "No handoff - you&apos;re the orchestrator, in every conversation",
                  "Prompts die in private threads - no compounding system",
                ].map((line, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-danger/50" />
                    <span dangerouslySetInnerHTML={{ __html: line }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-success/30 bg-success/5 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-success/15 px-3 py-1 ring-1 ring-success/30">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                <span className="text-xs font-medium text-success">
                  The AI Marketing OS
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  "12 expert skills - opinionated methodology, version-controlled",
                  "9 named agents with clear ownership and consistent voice",
                  "Typed artifacts - CSVs, plans, scorecards, reports - that ship",
                  "Orchestration is the product - agents hand off along a graph",
                  "Open, composable, runs in any markdown-aware AI agent",
                ].map((line, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* What it replaces */}
      <section className="border-y border-border bg-surface/30 py-12 sm:py-16">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan">
              The replacement
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              What it replaces in your stack
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
              Each agent owns work that today is split across a SaaS tool, a
              specialist hire, or both.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-border-strong">
            <table className="w-full text-sm">
              <thead className="bg-background text-left">
                <tr>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-subtle">
                    Agent
                  </th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-subtle">
                    Replaces (tool)
                  </th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-subtle">
                    Or (role)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-surface">
                {[
                  { agent: "Atlas (SEO)", tool: "Ahrefs / Semrush + Clearscope", role: "SEO consultant ($5–10K/mo)" },
                  { agent: "Echo (Content)", tool: "Jasper / Writesonic + Surfer", role: "Content strategist + copywriter" },
                  { agent: "Nova (Growth)", tool: "Optimizely / VWO + stats consultant", role: "Growth scientist (rare)" },
                  { agent: "Lens (Conversion)", tool: "Hotjar + Crazy Egg + CRO audit", role: "CRO consultant ($5K/audit)" },
                  { agent: "Forge (Outbound)", tool: "Outreach / Salesloft + Lemlist", role: "SDR ops lead" },
                  { agent: "Scout (Pipeline)", tool: "Clay + Apollo + ZoomInfo", role: "Sales ops analyst" },
                  { agent: "Anvil (Playbook)", tool: "Gong + HubSpot deal coaching", role: "Sales enablement lead" },
                  { agent: "Oracle (Rev Intel)", tool: "Klue + Crayon + battlecard ops", role: "Competitive intel analyst" },
                  { agent: "Ledger (Finance)", tool: "ChartMogul + custom dashboards", role: "Marketing finance analyst" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-border hover:bg-surface-hover"
                  >
                    <td className="px-4 py-3 font-medium text-foreground">
                      {row.agent}
                    </td>
                    <td className="px-4 py-3 text-muted">{row.tool}</td>
                    <td className="px-4 py-3 text-muted">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              See the architecture in motion
            </h2>
            <p className="mt-4 text-base text-muted">
              The Launch mission walks all four layers through a 90-second
              cinematic - agents fire, hand off, and ship artifacts in real time.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/missions/launch" variant="primary" size="lg">
                Watch the Launch mission
              </ButtonLink>
              <ButtonLink
                href="https://github.com/varunk130/ai-marketing-claude-skills"
                external
                variant="outline"
                size="lg"
              >
                <Layers className="h-4 w-4" />
                Browse the source
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
