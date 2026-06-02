import { Trophy, CheckCircle2, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = [
  {
    id: "A",
    label: "Control",
    desc: "Generic 'Product Analytics for Modern Teams'",
    conversions: 180,
    sample: 4287,
    rate: 4.2,
    lift: null,
    posterior: null,
    isWinner: false,
    isControl: true,
  },
  {
    id: "B",
    label: "SMB-positioned",
    desc: "'All-in-one analytics for under $200/mo'",
    conversions: 201,
    sample: 4287,
    rate: 4.7,
    lift: 11.4,
    posterior: 0.973,
    isWinner: true,
    isControl: false,
  },
  {
    id: "C",
    label: "ROI-positioned",
    desc: "'Replace your $50K analytics stack'",
    conversions: 188,
    sample: 4287,
    rate: 4.4,
    lift: 4.8,
    posterior: 0.681,
    isWinner: false,
    isControl: false,
  },
];

const maxRate = Math.max(...variants.map((v) => v.rate));

export function ABResultsWidget() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-violet">
          A/B Test Results · Growth-Engine
        </div>
        <h3 className="mt-1 text-2xl font-semibold text-foreground">
          Pricing page hero - winner declared
        </h3>
        <p className="mt-1.5 text-sm text-muted">
          14 days · 4,287 samples per variant · CUPED variance reduction.
          Bayesian framework with stopping rule P(winner &gt; control) &gt; 0.95.
        </p>
      </div>

      {/* Winner banner */}
      <div className="flex items-center gap-4 rounded-xl border border-success/40 bg-success/10 p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/20 text-success ring-2 ring-success/40">
          <Trophy className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-mono uppercase tracking-wider text-success">
            Decision · SHIP
          </div>
          <div className="mt-1 text-lg font-semibold text-foreground">
            Variant B wins with{" "}
            <span className="text-success">97.3% posterior confidence</span>
          </div>
          <div className="mt-0.5 text-xs text-muted">
            +11.4% lift over control · 95% credible interval [+6.2%, +16.8%]
          </div>
        </div>
      </div>

      {/* Variant comparison */}
      <div className="rounded-xl border border-border-accent bg-surface p-5">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-foreground">
            Conversion rates
          </h4>
          <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
            n = 4,287 / variant
          </span>
        </div>
        <div className="space-y-4">
          {variants.map((v) => {
            const widthPct = (v.rate / maxRate) * 100;
            return (
              <div key={v.id}>
                <div className="mb-1.5 flex items-baseline justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex h-5 w-5 items-center justify-center rounded font-mono text-[10px] font-bold",
                        v.isWinner
                          ? "bg-success text-background"
                          : v.isControl
                            ? "bg-faint text-background"
                            : "bg-border-accent text-foreground",
                      )}
                    >
                      {v.id}
                    </span>
                    <span className="font-medium text-foreground">{v.label}</span>
                    {v.isWinner && (
                      <span className="rounded-full bg-success/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-success ring-1 ring-success/30">
                        Winner
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-foreground">
                    {v.rate}%{" "}
                    {v.lift !== null && (
                      <span className={cn(v.isWinner ? "text-success" : "text-muted")}>
                        ({v.lift > 0 ? "+" : ""}
                        {v.lift}%)
                      </span>
                    )}
                  </span>
                </div>
                <div className="relative h-7 overflow-hidden rounded-md bg-background">
                  <div
                    className={cn(
                      "absolute inset-y-0 left-0 rounded-md",
                      v.isWinner
                        ? "bg-gradient-to-r from-success/60 to-success"
                        : v.isControl
                          ? "bg-faint/60"
                          : "bg-violet/60",
                    )}
                    style={{ width: `${widthPct}%` }}
                  />
                  <div className="absolute inset-0 flex items-center px-3">
                    <span className="font-mono text-[10px] text-foreground/90">
                      {v.conversions} conversions
                    </span>
                  </div>
                </div>
                <div className="mt-1 text-[10px] text-muted">{v.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Posterior gauges */}
      <div className="rounded-xl border border-border-accent bg-surface p-5">
        <h4 className="mb-4 text-sm font-semibold text-foreground">
          Posterior probability - P(variant &gt; control)
        </h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {variants
            .filter((v) => v.posterior !== null)
            .map((v) => {
              const pct = (v.posterior ?? 0) * 100;
              const crossed = pct >= 95;
              return (
                <div
                  key={v.id}
                  className={cn(
                    "rounded-lg border p-4",
                    crossed
                      ? "border-success/40 bg-success/5"
                      : "border-border bg-background",
                  )}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="font-medium text-foreground">
                      Variant {v.id} vs A
                    </div>
                    <div className={cn("font-mono text-xl font-bold", crossed ? "text-success" : "text-warning")}>
                      {pct.toFixed(1)}%
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="relative h-2 overflow-hidden rounded-full bg-background">
                      <div
                        className={cn("absolute inset-y-0 left-0 rounded-full", crossed ? "bg-success" : "bg-warning")}
                        style={{ width: `${pct}%` }}
                      />
                      <div
                        className="absolute top-0 h-2 w-0.5 bg-foreground/40"
                        style={{ left: "95%" }}
                        title="Stopping threshold"
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[10px]">
                    {crossed ? (
                      <>
                        <CheckCircle2 className="h-3 w-3 text-success" />
                        <span className="text-success">Crossed stopping threshold</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="h-3 w-3 text-warning" />
                        <span className="text-warning">Below threshold (no signal)</span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
