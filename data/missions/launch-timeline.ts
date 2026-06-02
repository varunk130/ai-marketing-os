export type ArtifactType =
  | "csv"
  | "markdown"
  | "json"
  | "report"
  | "scorecard"
  | "plan";

export type Artifact = {
  id: string;
  name: string;
  type: ArtifactType;
  agentId: string;
  preview: string;
  expanded?: string;
};

export type MissionPhase = {
  id: string;
  label: string;
  range: string;
};

export type MissionEvent = {
  id: string;
  agentId: string;
  skillId: string;
  phaseId: string;
  consoleLines: string[];
  artifact?: Artifact;
  durationMs: number;
};

export type MissionScript = {
  id: string;
  title: string;
  totalDurationMs: number;
  phases: MissionPhase[];
  events: MissionEvent[];
};

export const launchPhases: MissionPhase[] = [
  { id: "discovery", label: "Discovery", range: "Day 1–5" },
  { id: "build", label: "Build", range: "Day 6–14" },
  { id: "activate", label: "Activate", range: "Day 15–22" },
  { id: "optimize", label: "Optimize", range: "Day 23–30" },
];

export const launchTimeline: MissionScript = {
  id: "launch",
  title: "Launch Acme Analytics",
  totalDurationMs: 90_000,
  phases: launchPhases,
  events: [
    // ─────── Phase 1: Discovery ───────
    {
      id: "ev-01",
      agentId: "atlas",
      skillId: "seo-ops",
      phaseId: "discovery",
      durationMs: 3500,
      consoleLines: [
        "Mapping search intent for 'product analytics'...",
        "Querying ahrefs · semrush · GSC · clearscope.",
        "Clustering 1,247 candidate keywords by intent.",
      ],
      artifact: {
        id: "art-keyword-map",
        name: "keyword-map.csv",
        type: "csv",
        agentId: "atlas",
        preview: `keyword,volume,kd,intent,cluster\nproduct analytics,8,100,42,info,core\nproduct analytics tool,3,600,38,commercial,core\nmixpanel alternative,4,200,29,commercial,competitor\namplitude vs mixpanel,2,900,35,commercial,competitor\n... 143 more rows`,
        expanded: `keyword,monthly_volume,keyword_difficulty,intent,cluster,priority\nproduct analytics,8100,42,info,core,P0\nproduct analytics tool,3600,38,commercial,core,P0\nmixpanel alternative,4200,29,commercial,competitor,P0\namplitude vs mixpanel,2900,35,commercial,competitor,P1\nproduct analytics software,1900,44,commercial,core,P1\nbest product analytics tools,1600,51,commercial,roundup,P1\nproduct analytics for saas,880,28,commercial,vertical,P1\nself-serve product analytics,720,22,commercial,positioning,P2\nproduct led growth analytics,590,31,commercial,positioning,P1\nfeature adoption analytics,480,19,info,how-to,P2\n... 137 more rows · 12 topical clusters · GEO/AEO coverage: 34%`,
      },
    },
    {
      id: "ev-02",
      agentId: "atlas",
      skillId: "seo-ops",
      phaseId: "discovery",
      durationMs: 2500,
      consoleLines: [
        "147 keywords clustered into 12 topical hubs.",
        "GEO/AEO coverage: 34%. Quick-win SERP features: 8.",
        "Cannibalization risks: 2 (flagged for redirect).",
        "→ Handing off to Echo for content planning.",
      ],
    },
    {
      id: "ev-03",
      agentId: "oracle",
      skillId: "revenue-intelligence",
      phaseId: "discovery",
      durationMs: 3500,
      consoleLines: [
        "Analyzing 23 competitor losses in the analytics space...",
        "Running chi-square on loss reasons by segment.",
      ],
      artifact: {
        id: "art-competitor-brief",
        name: "competitor-loss-patterns.md",
        type: "markdown",
        agentId: "oracle",
        preview: `# Competitor Loss Patterns (n=23)\n\n**Top loss reason (SMB):** "Too expensive" — 67% (χ²=14.2, p<0.001)\n**Top loss reason (Mid-market):** "Implementation complexity" — 41%\n**Top loss reason (Enterprise):** "Security/SSO gaps" — 29%`,
        expanded: `# Competitor Loss Patterns — Q4 Analysis\n\n## Sample\n- 23 competitive losses analyzed (Mixpanel: 9, Amplitude: 8, Heap: 4, PostHog: 2)\n- Segments: SMB (n=11), Mid-market (n=8), Enterprise (n=4)\n\n## Statistically significant patterns\n\n### SMB (n=11)\n- **"Too expensive" — 67%** (χ²=14.2, p<0.001) ← PRIMARY\n- "Missing native integrations" — 18%\n- "Steep learning curve" — 15%\n\n### Mid-market (n=8)\n- **"Implementation complexity" — 41%** (χ²=6.8, p=0.009)\n- "Data warehouse incompatible" — 25%\n- "Pricing model penalizes growth" — 22%\n\n### Enterprise (n=4)\n- "SSO/SAML gaps" — 29%\n- "GDPR/SOC2 questions" — 25%\n\n## Recommended counter-positioning\n1. **SMB-friendly tier** at <$200/mo flat (vs Mixpanel's per-MTU model)\n2. **30-min onboarding** vs industry avg 3 weeks\n3. **Snowflake/BigQuery sync** out of the box`,
      },
    },
    {
      id: "ev-04",
      agentId: "oracle",
      skillId: "revenue-intelligence",
      phaseId: "discovery",
      durationMs: 2200,
      consoleLines: [
        "Pattern detected: SMB segment loses 67% on price.",
        "Counter-narrative: flat pricing under $200/mo.",
        "→ Battlecard v1 staged for sales playbook.",
      ],
    },

    // ─────── Phase 2: Build ───────
    {
      id: "ev-05",
      agentId: "echo",
      skillId: "content-ops",
      phaseId: "build",
      durationMs: 3500,
      consoleLines: [
        "Drafting 12 pillar content pieces from keyword map...",
        "Aligning to 4 funnel stages: TOFU · MOFU · BOFU · retention.",
      ],
      artifact: {
        id: "art-content-cal",
        name: "content-calendar.md",
        type: "markdown",
        agentId: "echo",
        preview: `# Q1 Content Calendar — 12 Pillars\n\n## TOFU (5 pieces)\n- "Product analytics: a 2026 buyer's guide" (target: product analytics, 8.1K vol)\n- "Mixpanel alternative comparison" (target: mixpanel alternative, 4.2K vol)\n- ... 3 more`,
        expanded: `# Q1 Content Calendar — 12 Pillars + 24 Supporting\n\n## TOFU — Top of funnel (5 pieces, 4,400 words avg)\n1. **"Product analytics: a 2026 buyer's guide"** — pillar — target: product analytics (8.1K)\n2. **"Mixpanel alternative: a fair comparison"** — pillar — target: mixpanel alternative (4.2K)\n3. **"Amplitude vs Mixpanel vs Heap"** — pillar — target: amplitude vs mixpanel (2.9K)\n4. **"The 7 metrics every PLG company tracks"** — TOFU — target: PLG analytics (590)\n5. **"Self-serve analytics for SaaS PMs"** — TOFU — target: self-serve product analytics (720)\n\n## MOFU — Middle of funnel (4 pieces, 2,800 words avg)\n6. **"Feature adoption analytics: a playbook"** — how-to — target: feature adoption (480)\n7. **"Cohort retention for product teams"** — playbook — target: cohort retention (1.1K)\n8. **"Funnel analytics done right"** — playbook — target: funnel analytics (820)\n9. **"Event taxonomy for product analytics"** — guide — target: event taxonomy (340)\n\n## BOFU — Bottom of funnel (2 pieces)\n10. **"Acme Analytics vs Mixpanel: pricing showdown"** — comparison\n11. **"30-minute Acme onboarding (vs 3-week industry avg)"** — proof\n\n## Retention (1 piece)\n12. **"Beyond the dashboard: advanced cohort analysis in Acme"** — power user content\n\n## Quality gates\n- Readability avg: 64 (target 60+) ✓\n- AI-detection score: 8% (target <15%) ✓\n- Internal links per piece: 6 avg (target 5+) ✓`,
      },
    },
    {
      id: "ev-06",
      agentId: "echo",
      skillId: "content-ops",
      phaseId: "build",
      durationMs: 2300,
      consoleLines: [
        "Readability: 64 avg (target 60+) ✓",
        "AI-detection: 8% (target <15%) ✓",
        "Internal links: 6 avg per piece ✓",
      ],
    },
    {
      id: "ev-07",
      agentId: "nova",
      skillId: "growth-engine",
      phaseId: "build",
      durationMs: 3500,
      consoleLines: [
        "Designing Bayesian A/B test for pricing page hero...",
        "Prior: Beta(α=1, β=1). Posterior stopping rule: P(B > A) > 0.95.",
        "Power analysis with CUPED variance reduction.",
      ],
      artifact: {
        id: "art-ab-plan",
        name: "ab-test-plan.md",
        type: "plan",
        agentId: "nova",
        preview: `# A/B Test Plan — Pricing Page Hero\n\n**Variants:** 3 (A: control, B: SMB-positioned, C: ROI-positioned)\n**Sample size:** 4,200 per variant\n**MDE:** 8% relative lift\n**Duration:** 14 days\n**Stopping rule:** P(winner > control) > 0.95`,
        expanded: `# A/B Test Plan — Pricing Page Hero\n\n## Hypothesis\nReframing the hero from generic "Product Analytics for Modern Teams" to **SMB-specific affordability messaging** will lift sign-up conversion by ≥ 8% (relative).\n\n## Variants\n- **A (control):** "Product Analytics for Modern Teams" + 3-tier pricing\n- **B (SMB-positioned):** "All-in-one analytics for under $200/mo" + flat-rate emphasis\n- **C (ROI-positioned):** "Replace your $50K analytics stack" + cost-comparison calculator\n\n## Statistical design\n- **Framework:** Bayesian with Beta(α=1, β=1) priors\n- **Stopping rule:** Posterior P(winner > control) > 0.95 OR P(no difference) > 0.85\n- **Sample size:** 4,200 per variant (90% power, 8% MDE, baseline 4.2%)\n- **Variance reduction:** CUPED using prior 14-day session data\n- **Duration:** 14 days (3,000/variant/week traffic)\n\n## Guardrails\n- Bounce rate increase > 15% → auto-stop\n- Avg session duration drop > 20% → auto-stop\n- Daily peek allowed (Bayesian-safe), no frequentist p-hacking\n\n## Expected outcomes\nP(B wins): 52% · P(C wins): 31% · P(no difference): 17%`,
      },
    },
    {
      id: "ev-08",
      agentId: "nova",
      skillId: "growth-engine",
      phaseId: "build",
      durationMs: 2200,
      consoleLines: [
        "Sample size: 4,200/variant. MDE: 8%. Duration: 14 days.",
        "Auto-stop guardrails: bounce >15%, session <-20%.",
        "→ Test launches Day 8.",
      ],
    },
    {
      id: "ev-09",
      agentId: "lens",
      skillId: "conversion-ops",
      phaseId: "build",
      durationMs: 3500,
      consoleLines: [
        "Auditing landing page across 12 CRO dimensions...",
        "Running Cialdini 6-principle scoring.",
        "Mapping micro-conversion funnel.",
      ],
      artifact: {
        id: "art-cro-audit",
        name: "cro-audit.json",
        type: "scorecard",
        agentId: "lens",
        preview: `{\n  "cialdini_score": 4.2,\n  "dimensions": {\n    "social_proof":      6.5,\n    "scarcity":          2.0,\n    "authority":         5.0,\n    "reciprocity":       4.0,\n    "commitment":        3.5,\n    "liking":            4.5\n  },\n  "fixes_recommended": 4,\n  "predicted_lift":   "+18%"\n}`,
        expanded: `{\n  "page": "https://acme-analytics.io/",\n  "audit_date": "2026-01-15",\n  "cialdini_score": 4.2,\n  "target_score": 7.5,\n\n  "dimensions": {\n    "social_proof":      { "score": 6.5, "notes": "5 logos shown; no quantified metrics. Add 'used by 800+ PMs'." },\n    "scarcity":          { "score": 2.0, "notes": "No urgency cues. Consider limited-time onboarding promo." },\n    "authority":         { "score": 5.0, "notes": "Founder bio missing. Add 'ex-Mixpanel, ex-Amplitude' credentials." },\n    "reciprocity":       { "score": 4.0, "notes": "No lead magnet. Offer free PLG analytics playbook." },\n    "commitment":        { "score": 3.5, "notes": "CTA is high-commitment ('Book a demo'). Add free-trial alt." },\n    "liking":            { "score": 4.5, "notes": "Hero is generic. Use customer-voice headline." }\n  },\n\n  "micro_conversions": {\n    "hero_to_pricing":        0.142,\n    "pricing_to_signup_form": 0.087,\n    "form_start_to_complete": 0.420,\n    "complete_to_activation": 0.310\n  },\n\n  "fixes_recommended": [\n    { "id": "fix-1", "dimension": "scarcity",   "change": "Add 'Limited Q1 onboarding cohort'", "predicted_lift": "+4%" },\n    { "id": "fix-2", "dimension": "authority",  "change": "Surface founder credentials above fold", "predicted_lift": "+5%" },\n    { "id": "fix-3", "dimension": "commitment", "change": "Add 'Start free trial' as primary CTA", "predicted_lift": "+6%" },\n    { "id": "fix-4", "dimension": "social_proof", "change": "Add quantified usage stat", "predicted_lift": "+3%" }\n  ],\n  "predicted_total_lift": "+18% (compounded)"\n}`,
      },
    },
    {
      id: "ev-10",
      agentId: "lens",
      skillId: "conversion-ops",
      phaseId: "build",
      durationMs: 2400,
      consoleLines: [
        "Cialdini score: 4.2/10 (target 7.5).",
        "4 high-impact fixes queued. Predicted lift: +18% compounded.",
        "→ Fixes deployed for A/B test arm.",
      ],
    },

    // ─────── Phase 3: Activate ───────
    {
      id: "ev-11",
      agentId: "forge",
      skillId: "outbound-engine",
      phaseId: "activate",
      durationMs: 3500,
      consoleLines: [
        "Building 7-touch multi-channel sequence...",
        "Channels: email × 4 · LinkedIn × 2 · video × 1.",
        "Personalization vars: champion job change, recent funding, tech stack.",
      ],
      artifact: {
        id: "art-outbound",
        name: "outbound-sequence.md",
        type: "plan",
        agentId: "forge",
        preview: `# 7-Touch Sequence — "SMB analytics" cohort\n\n**Day 0:** Email — pain-point hook ("$50K analytics for a Series A?")\n**Day 2:** LinkedIn connect + opener\n**Day 4:** Email — case study (Acme Health, similar stage)\n**Day 7:** Video message — 60s Loom (Calendly link)\n**Day 10:** LinkedIn DM — soft nudge\n**Day 14:** Email — break-up\n**Day 21:** Re-engage — new content`,
        expanded: `# 7-Touch Outbound Sequence — SMB Cohort\n\n## ICP\n- Series A/B SaaS, 20–100 employees\n- PLG motion, analytics-curious\n- Champion: Head of Product / Product Ops Lead\n\n## Sequence\n\n### Day 0 — Email · "pain hook"\n**Subject:** "{{ first_name }}, $50K for analytics at {{ company }}?"\n**Open rate target:** 38%\n**Reply rate target:** 6%\n\n### Day 2 — LinkedIn · "connect"\nPersonal note referencing recent {{ company }} funding/launch.\n\n### Day 4 — Email · "case study"\n**Subject:** "How {{ similar_company }} cut analytics costs 73%"\nLinks: customer story (Acme Health).\n\n### Day 7 — Video · "60s Loom"\nLoom recorded with Calendly link in description.\n**Reply rate boost:** +2.4x (vs text-only)\n\n### Day 10 — LinkedIn DM · "soft nudge"\nReference video, ask if timing better next quarter.\n\n### Day 14 — Email · "break-up"\n**Subject:** "Closing the loop on {{ company }}"\n**Reply rate:** 11% (break-up sequences over-perform)\n\n### Day 21 — Re-engage · "new content"\nShare freshly published pillar piece.\n\n## Deliverability\n- Domain warmup: 50 → 250/day over 14 days\n- SPF/DKIM/DMARC verified\n- Send window: Tue–Thu, 9am recipient local`,
      },
    },
    {
      id: "ev-12",
      agentId: "forge",
      skillId: "outbound-engine",
      phaseId: "activate",
      durationMs: 2200,
      consoleLines: [
        "Domain warmup: 50/day → 250/day over 14 days.",
        "Send window: Tue–Thu, 9am recipient local.",
        "SPF/DKIM/DMARC verified.",
      ],
    },
    {
      id: "ev-13",
      agentId: "scout",
      skillId: "sales-pipeline",
      phaseId: "activate",
      durationMs: 3800,
      consoleLines: [
        "Enriching 487 leads via Clay + Apollo + LinkedIn Sales Nav...",
        "Scoring on title match · intent signals · champion proximity.",
        "Running predictive logistic regression on historical conversions.",
      ],
      artifact: {
        id: "art-leads",
        name: "scored-leads.csv",
        type: "csv",
        agentId: "scout",
        preview: `lead,company,title,score,intent_signals,close_prob\nAvery R.,Acme Health,CTO,94,3,67%\nJordan K.,Lyra Labs,Head of Product,89,2,54%\nSam P.,Northwind,VP Eng,86,2,49%\nTaylor M.,Vertex AI,Director Product,82,2,42%\n... 138 more rows · 142 SQLs total`,
        expanded: `lead,company,title,headcount,seniority,score,intent_signals,champion_proximity,close_prob\nAvery R.,Acme Health,CTO,180,VP+,94,3,direct,67%\nJordan K.,Lyra Labs,Head of Product,42,Director,89,2,direct,54%\nSam P.,Northwind,VP Eng,310,VP+,86,2,1-hop,49%\nTaylor M.,Vertex AI,Director Product,67,Director,82,2,direct,42%\nMorgan F.,Pinwheel,Product Ops Lead,55,Manager,78,3,1-hop,38%\nRiley H.,Cascade,Sr PM,28,Senior,74,1,direct,32%\nQuinn S.,Lambda Stack,Head of Growth,89,Director,72,2,2-hop,28%\nAlex T.,Foundry Co,Product Lead,33,Director,69,1,direct,25%\n... 134 more rows\n\n# Summary\n- Total enriched: 487\n- SQL threshold: 70\n- SQLs identified: 142 (29.2%)\n- High-conviction (score ≥85): 12 (2.5%)\n- Avg close probability across SQLs: 31%\n- Expected pipeline value (weighted): $487K`,
      },
    },
    {
      id: "ev-14",
      agentId: "scout",
      skillId: "sales-pipeline",
      phaseId: "activate",
      durationMs: 2400,
      consoleLines: [
        "142 SQLs identified from 487 enriched leads.",
        "Top score: 94 (Acme Health, CTO, 3 intent signals).",
        "Expected weighted pipeline: $487K.",
        "→ Top 12 routed to Anvil for MEDDPICC qualification.",
      ],
    },
    {
      id: "ev-15",
      agentId: "atlas",
      skillId: "seo-ops",
      phaseId: "activate",
      durationMs: 2400,
      consoleLines: [
        "Sitemap submitted to GSC + Bing + IndexNow.",
        "Monitoring 47 target keywords. Initial impressions: 2,341.",
        "Citations in Perplexity: 3. Citations in ChatGPT search: 1.",
      ],
    },

    // ─────── Phase 4: Optimize ───────
    {
      id: "ev-16",
      agentId: "nova",
      skillId: "growth-engine",
      phaseId: "optimize",
      durationMs: 3800,
      consoleLines: [
        "A/B test Day 14: collecting final samples...",
        "Computing posterior distributions...",
        "Variant B: P(B > A) = 0.973. Decision: SHIP B.",
      ],
      artifact: {
        id: "art-ab-results",
        name: "ab-results.md",
        type: "report",
        agentId: "nova",
        preview: `# A/B Test Results — Pricing Hero\n\n**Winner:** Variant B (SMB-positioned)\n**Posterior:** P(B > A) = 0.973\n**Observed lift:** +11.4% conversion\n**Credible interval (95%):** [+6.2%, +16.8%]\n**Decision:** SHIP B`,
        expanded: `# A/B Test Results — Pricing Page Hero\n\n## Decision: SHIP Variant B\n\n## Results (final, n=4,287 per variant)\n\n| Variant | Conversions | Rate | Lift vs A | P(>A) |\n|---|---|---|---|---|\n| A (control) | 180 | 4.2% | — | — |\n| B (SMB-positioned) | 201 | 4.7% | **+11.4%** | **0.973** |\n| C (ROI-positioned) | 188 | 4.4% | +4.8% | 0.681 |\n\n## Statistical narrative\n- B's posterior P(>A) crossed 0.95 on Day 11, held through Day 14\n- CUPED reduced variance by 22% (effective sample size +28%)\n- No guardrail breaches: bounce rate flat, session duration +3%\n- C underperformed expectations — ROI framing too abstract for early-stage buyers\n\n## Credible intervals (95%)\n- B vs A: [+6.2%, +16.8%]\n- C vs A: [-1.1%, +10.9%]\n\n## Recommendation\nShip B immediately. Schedule follow-up test on body-copy variants of B (next sprint).`,
      },
    },
    {
      id: "ev-17",
      agentId: "lens",
      skillId: "conversion-ops",
      phaseId: "optimize",
      durationMs: 2400,
      consoleLines: [
        "CRO fixes deployed (#1, #2, #3 from audit).",
        "7-day measured lift: +14% (within predicted band).",
        "Cialdini re-score: 6.8 (was 4.2). Next iteration in 14 days.",
      ],
    },
    {
      id: "ev-18",
      agentId: "anvil",
      skillId: "sales-playbook",
      phaseId: "optimize",
      durationMs: 3500,
      consoleLines: [
        "12 deals entered pipeline from Scout's SQL list.",
        "Running MEDDPICC qualification on top 8...",
        "Generating Mutual Action Plans for each champion.",
      ],
      artifact: {
        id: "art-meddpicc",
        name: "meddpicc-plans.md",
        type: "plan",
        agentId: "anvil",
        preview: `# MEDDPICC Status — Top 8 Deals\n\n| Deal | Stage | Champion | Score | Close Prob |\n|---|---|---|---|---|\n| Acme Health | Eval | Avery R. (CTO) | 8.2/10 | 67% |\n| Lyra Labs | Discovery | Jordan K. | 6.8/10 | 54% |\n| Northwind | Eval | Sam P. (VP Eng) | 6.4/10 | 49% |\n| Vertex AI | Discovery | Taylor M. | 5.9/10 | 42% |`,
        expanded: `# MEDDPICC Plans — Top 8 Deals\n\n## Acme Health · $187K · 67% close prob\n- **M**etrics: 3.2M events/mo, $50K current analytics spend → save $34K/yr\n- **E**conomic Buyer: Sarah Chen (CFO), warm intro from Avery\n- **D**ecision Criteria: pricing predictability, Snowflake native, < 30-min onboarding\n- **D**ecision Process: pilot → security review → exec greenlight (5 weeks)\n- **P**aper Process: legal review w/ template MSA, no DPA changes needed\n- **I**dentified Pain: per-MTU pricing exploding with growth, 6-week implementation lag\n- **C**hampion: Avery R. (CTO) — strong: built case internally, 3 stakeholder intros\n- **C**ompetition: Mixpanel (incumbent), Heap (evaluated, ruled out)\n\n## Lyra Labs · $42K · 54% close prob\n[truncated — MEDDPICC complete for all 8]\n\n## Summary\n- 8 qualified deals · $487K total weighted pipeline\n- 5 with identified Economic Buyer\n- 8 with confirmed Champion (≥6/10 score)\n- Avg deal cycle: 6.2 weeks (vs industry 11 weeks)`,
      },
    },
    {
      id: "ev-19",
      agentId: "anvil",
      skillId: "sales-playbook",
      phaseId: "optimize",
      durationMs: 2400,
      consoleLines: [
        "8 deals qualified. Avg score: 6.7/10.",
        "Top deal: Acme Health ($187K, 67% close prob).",
        "Avg cycle: 6.2 weeks (industry: 11 weeks).",
      ],
    },
    {
      id: "ev-20",
      agentId: "oracle",
      skillId: "revenue-intelligence",
      phaseId: "optimize",
      durationMs: 3000,
      consoleLines: [
        "Updating battlecard v2 with early conversation insights...",
        "New objection pattern detected: 'how is this different from Heap?'",
        "Adding 3-bullet counter-positioning narrative.",
      ],
      artifact: {
        id: "art-battlecard",
        name: "battlecard-v2.md",
        type: "markdown",
        agentId: "oracle",
        preview: `# Battlecard v2 — vs Heap\n\n**When they say:** "How is this different from Heap?"\n**You say:**\n1. Flat $200/mo vs their $0–$3K/mo MTU pricing\n2. Snowflake/BigQuery sync native (Heap: paid add-on)\n3. 30-min onboarding vs Heap's 3-week avg`,
      },
    },
    {
      id: "ev-21",
      agentId: "ledger",
      skillId: "finance-ops",
      phaseId: "optimize",
      durationMs: 3500,
      consoleLines: [
        "Computing Q1 unit economics...",
        "Aggregating channel spend, CAC by source, LTV by cohort.",
        "Running SaaS magic number + payback period calc.",
      ],
      artifact: {
        id: "art-economics",
        name: "q1-unit-economics.csv",
        type: "csv",
        agentId: "ledger",
        preview: `channel,spend,leads,sqls,closed_won,cac,ltv,ltv_cac\nseo,$8.2K,217,68,9,$910,$3.9K,4.3x\noutbound,$14.4K,178,52,6,$2.4K,$3.9K,1.6x\ncontent,$6.8K,92,22,4,$1.7K,$3.9K,2.3x\nblended,$29.4K,487,142,19,$1.5K,$3.9K,**3.2x**`,
      },
    },
    {
      id: "ev-22",
      agentId: "ledger",
      skillId: "finance-ops",
      phaseId: "optimize",
      durationMs: 4000,
      consoleLines: [
        "Q1 ROI report compiled.",
        "Pipeline: $487K · Closed Won: $74K · LTV/CAC: 3.2x",
        "Magic Number: 0.9 · CAC payback: 4 months",
        "→ Launch mission complete. Recommend Q2 budget +30%.",
      ],
      artifact: {
        id: "art-q1-report",
        name: "q1-roi-report.md",
        type: "report",
        agentId: "ledger",
        preview: `# Q1 ROI Report — Acme Analytics Launch\n\n## Headline\n**$487K weighted pipeline · $74K closed-won · 3.2x LTV/CAC · 4-month payback**\n\n## By the numbers\n- Total marketing spend: $29.4K\n- Pipeline generated: $487K (16.5x ROAS)\n- Closed-won deals: 9 (avg $8.2K)\n- SaaS Magic Number: 0.9 (efficient growth zone)\n- CAC payback: 4 months\n- Q2 recommendation: increase budget +30%`,
        expanded: `# Q1 ROI Report — Acme Analytics Launch\n\n## Executive summary\nThe Q1 launch hit every target. **$487K in weighted pipeline** generated from $29.4K in marketing spend (16.5x ROAS). **9 deals closed** at avg $8.2K. **LTV/CAC of 3.2x** puts us in the "efficient growth" zone (>3x). **CAC payback of 4 months** beats industry avg of 11 months.\n\n## Channel attribution\n| Channel | Spend | SQLs | Closed Won | CAC | LTV/CAC |\n|---|---|---|---|---|---|\n| SEO | $8.2K | 68 | 9 | $910 | **4.3x** |\n| Outbound | $14.4K | 52 | 6 | $2,400 | 1.6x |\n| Content | $6.8K | 22 | 4 | $1,700 | 2.3x |\n| **Blended** | **$29.4K** | **142** | **19** | **$1,548** | **3.2x** |\n\n## Key wins\n- SEO outperformed: 4.3x LTV/CAC vs 2.5x target\n- A/B test win: +11.4% pricing-page conversion\n- CRO fixes: +14% measured lift (within predicted band)\n- Outbound underperformed: investigate cohort, refine ICP\n\n## SaaS health metrics\n- **Magic Number: 0.9** — efficient growth (0.75–1.0 zone)\n- **Net Revenue Retention:** N/A (too early)\n- **Gross Margin:** 81% (above SaaS median 75%)\n- **Burn Multiple:** 1.2 (best-in-class < 1.5)\n\n## Q2 recommendation\n**Increase marketing budget +30% to $38K**, weighted toward:\n1. SEO content production (best LTV/CAC) — +$8K\n2. Outbound ICP refinement (lift LTV/CAC to 2.5x+) — +$5K\n3. Paid pilot: LinkedIn Ads to SMB cohort — +$4K\n\nExpected Q2 outcomes: $750K weighted pipeline · 25–30 closed deals · LTV/CAC ≥ 3.0x maintained.`,
      },
    },
  ],
};

// Edges between agents for the React Flow graph (data handoffs)
export const launchHandoffs: Array<{ from: string; to: string }> = [
  { from: "atlas", to: "echo" },
  { from: "atlas", to: "nova" },
  { from: "oracle", to: "anvil" },
  { from: "echo", to: "nova" },
  { from: "nova", to: "lens" },
  { from: "lens", to: "forge" },
  { from: "forge", to: "scout" },
  { from: "scout", to: "anvil" },
  { from: "anvil", to: "ledger" },
  { from: "nova", to: "ledger" },
];

// Pre-computed node positions for React Flow (in graph coordinate space)
export const agentPositions: Record<string, { x: number; y: number }> = {
  atlas:  { x:   0, y:  60 },
  oracle: { x:   0, y: 240 },
  echo:   { x: 220, y:   0 },
  nova:   { x: 360, y: 150 },
  lens:   { x: 540, y:   0 },
  forge:  { x: 600, y: 240 },
  scout:  { x: 800, y: 120 },
  anvil:  { x: 800, y: 300 },
  ledger: { x: 440, y: 360 },
};
