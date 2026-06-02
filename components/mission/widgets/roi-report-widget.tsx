import { TrendingUp, DollarSign, Clock, Sparkles, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tiles = [
  {
    Icon: DollarSign,
    label: "Q1 Pipeline",
    value: "$487K",
    sub: "16.5x ROAS on $29.4K spend",
    color: "text-success",
    bg: "bg-success/10",
    ring: "ring-success/30",
  },
  {
    Icon: TrendingUp,
    label: "LTV / CAC",
    value: "3.2x",
    sub: "Efficient growth zone (≥3x)",
    color: "text-violet",
    bg: "bg-violet/10",
    ring: "ring-violet/30",
  },
  {
    Icon: Clock,
    label: "CAC Payback",
    value: "4 mo",
    sub: "vs industry avg 11 mo",
    color: "text-cyan",
    bg: "bg-cyan/10",
    ring: "ring-cyan/30",
  },
  {
    Icon: Sparkles,
    label: "Magic Number",
    value: "0.9",
    sub: "Best-in-class (0.75–1.0)",
    color: "text-amber",
    bg: "bg-amber/10",
    ring: "ring-amber/30",
  },
];

const channels = [
  { name: "SEO", spend: 8.2, sqls: 68, won: 9, cac: 910, ltvCac: 4.3, color: "bg-cyan", text: "text-cyan" },
  { name: "Outbound", spend: 14.4, sqls: 52, won: 6, cac: 2400, ltvCac: 1.6, color: "bg-rose", text: "text-rose" },
  { name: "Content", spend: 6.8, sqls: 22, won: 4, cac: 1700, ltvCac: 2.3, color: "bg-violet", text: "text-violet" },
];
const maxLtvCac = Math.max(...channels.map((c) => c.ltvCac));

export function ROIReportWidget() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-success">
          Q1 Outcome · Launch Mission
        </div>
        <h3 className="mt-1 text-2xl font-semibold text-foreground">
          The launch hit every target
        </h3>
        <p className="mt-1.5 text-sm text-muted">
          $487K weighted pipeline generated from $29.4K marketing spend. 9 deals
          closed at avg $8.2K. All SaaS health metrics in the efficient zone.
        </p>
      </div>

      {/* Metric tiles */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((t) => (
          <div
            key={t.label}
            className={cn(
              "rounded-xl border bg-surface p-4",
              t.bg.replace("bg-", "border-").replace("/10", "/30"),
            )}
          >
            <div className={cn("inline-flex h-8 w-8 items-center justify-center rounded-md ring-1", t.bg, t.ring, t.color)}>
              <t.Icon className="h-4 w-4" strokeWidth={2} />
            </div>
            <div className={cn("mt-3 text-2xl font-bold tracking-tight", t.color)}>
              {t.value}
            </div>
            <div className="mt-0.5 text-xs font-medium uppercase tracking-wider text-foreground">
              {t.label}
            </div>
            <div className="mt-1 text-[11px] text-muted">{t.sub}</div>
          </div>
        ))}
      </div>

      {/* Channel attribution chart */}
      <div className="rounded-xl border border-border-accent bg-surface p-5">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-foreground">
            Channel attribution - LTV / CAC by source
          </h4>
          <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
            Higher = better
          </span>
        </div>
        <div className="space-y-3">
          {channels.map((c) => (
            <div key={c.name}>
              <div className="mb-1.5 flex items-baseline justify-between text-xs">
                <span className={cn("font-semibold", c.text)}>{c.name}</span>
                <span className="font-mono text-muted">
                  ${c.spend}K spend · {c.sqls} SQLs · {c.won} closed ·{" "}
                  <span className={cn("font-bold", c.text)}>{c.ltvCac}x</span>
                </span>
              </div>
              <div className="relative h-6 overflow-hidden rounded-md bg-background">
                <div
                  className={cn("absolute inset-y-0 left-0 rounded-md", c.color)}
                  style={{ width: `${(c.ltvCac / maxLtvCac) * 100}%`, opacity: 0.85 }}
                />
                <div className="absolute inset-0 flex items-center px-3">
                  <span className="font-mono text-[10px] text-foreground/90 drop-shadow">
                    {c.ltvCac}x return
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-border-accent bg-background p-3 font-mono text-[11px]">
          <span className="text-success">▲ </span>
          <span className="text-foreground">SEO outperformed</span>
          <span className="text-muted"> (4.3x vs 2.5x target).</span>{" "}
          <span className="text-warning">▼ </span>
          <span className="text-foreground">Outbound underperformed</span>
          <span className="text-muted"> (1.6x, refine ICP).</span>
        </div>
      </div>

      {/* Q2 recommendation */}
      <div className="rounded-xl border border-violet/30 bg-violet/5 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-violet/15 text-violet ring-1 ring-violet/30">
            <ArrowUpRight className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-violet">
              Q2 recommendation
            </div>
            <div className="mt-1 text-sm font-semibold text-foreground">
              Increase marketing budget +30% to $38K
            </div>
            <div className="mt-1 text-xs text-muted">
              Weighted toward SEO content (+$8K), outbound ICP refinement (+$5K),
              LinkedIn Ads pilot to SMB cohort (+$4K). Expected Q2 outcomes:
              $750K pipeline · 25–30 closed · LTV/CAC ≥ 3.0x.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
