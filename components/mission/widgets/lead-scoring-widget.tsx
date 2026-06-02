import { Crown, Flame, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Lead = {
  name: string;
  company: string;
  title: string;
  score: number;
  intentSignals: number;
  closeProb: number;
  highlight?: boolean;
};

const leads: Lead[] = [
  { name: "Avery R.", company: "Acme Health", title: "CTO", score: 94, intentSignals: 3, closeProb: 67, highlight: true },
  { name: "Jordan K.", company: "Lyra Labs", title: "Head of Product", score: 89, intentSignals: 2, closeProb: 54 },
  { name: "Sam P.", company: "Northwind", title: "VP Eng", score: 86, intentSignals: 2, closeProb: 49 },
  { name: "Taylor M.", company: "Vertex AI", title: "Director Product", score: 82, intentSignals: 2, closeProb: 42 },
  { name: "Morgan F.", company: "Pinwheel", title: "Product Ops Lead", score: 78, intentSignals: 3, closeProb: 38 },
  { name: "Riley H.", company: "Cascade", title: "Sr PM", score: 74, intentSignals: 1, closeProb: 32 },
  { name: "Quinn S.", company: "Lambda Stack", title: "Head of Growth", score: 72, intentSignals: 2, closeProb: 28 },
  { name: "Alex T.", company: "Foundry Co", title: "Product Lead", score: 69, intentSignals: 1, closeProb: 25 },
];

const summary = {
  totalEnriched: 487,
  sqlThreshold: 70,
  totalSqls: 142,
  highConviction: 12,
  expectedPipeline: 487,
};

export function LeadScoringWidget() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-cyan">
          Scored Leads · Sales-Pipeline
        </div>
        <h3 className="mt-1 text-2xl font-semibold text-foreground">
          {summary.totalSqls} SQLs from {summary.totalEnriched} enriched leads
        </h3>
        <p className="mt-1.5 text-sm text-muted">
          Multi-channel intent scoring · Clay + Apollo enrichment · predictive
          logistic regression. SQL threshold: score ≥ {summary.sqlThreshold}.
        </p>
      </div>

      {/* Summary tiles */}
      <div className="grid gap-3 sm:grid-cols-4">
        <div className="rounded-lg border border-cyan/30 bg-cyan/5 p-4">
          <div className="text-[10px] font-mono uppercase tracking-wider text-cyan">
            Total enriched
          </div>
          <div className="mt-1 text-2xl font-bold text-foreground">
            {summary.totalEnriched}
          </div>
        </div>
        <div className="rounded-lg border border-success/30 bg-success/5 p-4">
          <div className="text-[10px] font-mono uppercase tracking-wider text-success">
            SQLs (score ≥ {summary.sqlThreshold})
          </div>
          <div className="mt-1 text-2xl font-bold text-foreground">
            {summary.totalSqls}
          </div>
        </div>
        <div className="rounded-lg border border-violet/30 bg-violet/5 p-4">
          <div className="text-[10px] font-mono uppercase tracking-wider text-violet">
            High-conviction (≥85)
          </div>
          <div className="mt-1 text-2xl font-bold text-foreground">
            {summary.highConviction}
          </div>
        </div>
        <div className="rounded-lg border border-amber/30 bg-amber/5 p-4">
          <div className="text-[10px] font-mono uppercase tracking-wider text-amber">
            Expected pipeline
          </div>
          <div className="mt-1 text-2xl font-bold text-foreground">
            ${summary.expectedPipeline}K
          </div>
        </div>
      </div>

      {/* Top leads table */}
      <div className="overflow-hidden rounded-xl border border-border-accent bg-surface">
        <div className="border-b border-border bg-background px-4 py-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-foreground">
              Top 8 leads by score
            </h4>
            <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
              showing 8 of {summary.totalSqls}
            </span>
          </div>
        </div>
        <div className="divide-y divide-border">
          {leads.map((lead, i) => {
            const isTop = i === 0;
            return (
              <div
                key={lead.name}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 transition-colors hover:bg-surface-hover",
                  lead.highlight && "bg-violet/5",
                )}
              >
                {/* Rank */}
                <div className="w-6 shrink-0 text-center font-mono text-xs text-faint">
                  {isTop ? (
                    <Crown className="mx-auto h-4 w-4 text-amber" />
                  ) : (
                    `0${i + 1}`
                  )}
                </div>

                {/* Lead info */}
                <div className="w-48 shrink-0 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <div className="text-sm font-semibold text-foreground truncate">
                      {lead.name}
                    </div>
                    {lead.highlight && (
                      <Star className="h-3 w-3 fill-amber text-amber" />
                    )}
                  </div>
                  <div className="text-[11px] text-muted truncate">
                    {lead.title} · {lead.company}
                  </div>
                </div>

                {/* Score bar */}
                <div className="flex-1 min-w-[120px]">
                  <div className="flex items-center gap-2">
                    <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-background">
                      <div
                        className={cn(
                          "absolute inset-y-0 left-0 rounded-full",
                          lead.score >= 90
                            ? "bg-success"
                            : lead.score >= 80
                              ? "bg-violet"
                              : lead.score >= 70
                                ? "bg-cyan"
                                : "bg-warning",
                        )}
                        style={{ width: `${lead.score}%` }}
                      />
                    </div>
                    <span className="w-8 shrink-0 text-right font-mono text-xs font-semibold text-foreground">
                      {lead.score}
                    </span>
                  </div>
                </div>

                {/* Intent signals */}
                <div className="hidden w-16 shrink-0 items-center gap-0.5 sm:flex">
                  {[1, 2, 3].map((n) => (
                    <Flame
                      key={n}
                      className={cn(
                        "h-3 w-3",
                        n <= lead.intentSignals
                          ? "fill-amber text-amber"
                          : "text-border-accent",
                      )}
                    />
                  ))}
                </div>

                {/* Close probability */}
                <div className="w-16 shrink-0 text-right">
                  <div className={cn(
                    "font-mono text-sm font-semibold",
                    lead.closeProb >= 50 ? "text-success" : "text-muted",
                  )}>
                    {lead.closeProb}%
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-faint">
                    close prob
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-lg border border-border bg-background p-3 font-mono text-[11px]">
        <span className="text-success">→ </span>
        <span className="text-foreground">Top 12 leads</span>
        <span className="text-muted"> routed to </span>
        <span className="text-foreground">Anvil</span>
        <span className="text-muted"> for MEDDPICC qualification.</span>
      </div>
    </div>
  );
}
