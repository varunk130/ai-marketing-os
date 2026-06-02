import { Target, TrendingUp, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const dimensions = [
  { name: "Social proof", score: 6.5, note: "5 logos shown; no quantified metrics" },
  { name: "Scarcity", score: 2.0, note: "No urgency cues anywhere on page" },
  { name: "Authority", score: 5.0, note: "Founder bio missing above fold" },
  { name: "Reciprocity", score: 4.0, note: "No lead magnet or free resource" },
  { name: "Commitment", score: 3.5, note: "CTA is high-commitment only" },
  { name: "Liking", score: 4.5, note: "Hero copy is generic" },
];

const fixes = [
  { id: "fix-1", change: "Add 'Limited Q1 onboarding cohort'", dim: "Scarcity", lift: 4, color: "bg-pink", text: "text-pink" },
  { id: "fix-2", change: "Surface founder credentials above fold", dim: "Authority", lift: 5, color: "bg-cyan", text: "text-cyan" },
  { id: "fix-3", change: "Add 'Start free trial' as primary CTA", dim: "Commitment", lift: 6, color: "bg-violet", text: "text-violet" },
  { id: "fix-4", change: "Add 'used by 800+ PMs' stat", dim: "Social proof", lift: 3, color: "bg-amber", text: "text-amber" },
];

const totalScore = dimensions.reduce((sum, d) => sum + d.score, 0) / dimensions.length;
const target = 7.5;

export function CROScorecardWidget() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-amber">
          CRO Audit · Conversion-Ops
        </div>
        <h3 className="mt-1 text-2xl font-semibold text-foreground">
          Cialdini 6-principle scorecard
        </h3>
        <p className="mt-1.5 text-sm text-muted">
          Audited acme-analytics.io against the 12 CRO dimensions. Below: the
          score per Cialdini principle, recommended fixes, and predicted lift.
        </p>
      </div>

      {/* Headline gauge */}
      <div className="rounded-xl border border-amber/30 bg-amber/5 p-6">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-amber">
              Total Cialdini score
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight text-foreground">
                {totalScore.toFixed(1)}
              </span>
              <span className="text-lg text-muted">/ 10</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-mono uppercase tracking-wider text-success">
              Target
            </div>
            <div className="mt-1 text-2xl font-bold text-success">{target}</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="relative h-3 overflow-hidden rounded-full bg-background">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber to-pink rounded-full"
              style={{ width: `${(totalScore / 10) * 100}%` }}
            />
            <div
              className="absolute top-0 h-3 w-0.5 bg-success"
              style={{ left: `${(target / 10) * 100}%` }}
              title="Target"
            />
          </div>
          <div className="mt-2 flex justify-between text-[10px] font-mono text-faint">
            <span>0</span>
            <span>5</span>
            <span>10</span>
          </div>
        </div>
      </div>

      {/* Dimension bars */}
      <div className="rounded-xl border border-border-accent bg-surface p-5">
        <div className="mb-4 flex items-center gap-2">
          <Target className="h-4 w-4 text-amber" />
          <h4 className="text-sm font-semibold text-foreground">
            Per-dimension scores
          </h4>
        </div>
        <div className="space-y-3">
          {dimensions.map((d) => {
            const pct = (d.score / 10) * 100;
            const isLow = d.score < 5;
            return (
              <div key={d.name}>
                <div className="mb-1 flex items-baseline justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{d.name}</span>
                    {isLow && <AlertCircle className="h-3 w-3 text-warning" />}
                  </div>
                  <span className={cn("font-mono font-semibold", isLow ? "text-warning" : "text-success")}>
                    {d.score.toFixed(1)}
                  </span>
                </div>
                <div className="relative h-2 overflow-hidden rounded-full bg-background">
                  <div
                    className={cn("absolute inset-y-0 left-0 rounded-full", isLow ? "bg-warning" : "bg-success")}
                    style={{ width: `${pct}%`, opacity: 0.8 }}
                  />
                </div>
                <div className="mt-1 text-[10px] text-muted">{d.note}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommended fixes */}
      <div className="rounded-xl border border-border-accent bg-surface p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-success" />
            <h4 className="text-sm font-semibold text-foreground">
              Recommended fixes
            </h4>
          </div>
          <div className="rounded-md bg-success/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-success ring-1 ring-success/30">
            Total: +18% predicted
          </div>
        </div>
        <div className="space-y-2">
          {fixes.map((f) => (
            <div
              key={f.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background p-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded font-mono text-[10px] font-bold text-white", f.color)}>
                  {f.id.slice(-1)}
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-foreground truncate">
                    {f.change}
                  </div>
                  <div className={cn("text-[10px]", f.text)}>{f.dim}</div>
                </div>
              </div>
              <div className="shrink-0 rounded-md bg-success/10 px-2 py-1 font-mono text-xs font-bold text-success ring-1 ring-success/30">
                +{f.lift}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
