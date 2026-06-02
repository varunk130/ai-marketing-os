export type Skill = {
  id: string;
  name: string;
  tagline: string;
  category: "growth" | "sales" | "ops";
  icon: string;
  differentiators: string[];
};

export const skills: Skill[] = [
  {
    id: "growth-engine",
    name: "Growth Engine",
    tagline: "Bayesian experimentation, done right.",
    category: "growth",
    icon: "🧪",
    differentiators: [
      "Bayesian A/B testing",
      "Multi-armed bandits",
      "CUPED variance reduction",
      "Experiment dependency graphs",
    ],
  },
  {
    id: "sales-pipeline",
    name: "Sales Pipeline",
    tagline: "Score, enrich, predict.",
    category: "sales",
    icon: "🎯",
    differentiators: [
      "Multi-channel intent scoring",
      "AI enrichment (Clay/Apollo)",
      "Predictive logistic regression",
      "Champion job tracking",
    ],
  },
  {
    id: "content-ops",
    name: "Content",
    tagline: "Quality, decay, and refresh in one loop.",
    category: "growth",
    icon: "✍️",
    differentiators: [
      "Readability scoring",
      "AI-detection patterns",
      "Content decay monitoring",
      "Auto-refresh scheduling",
    ],
  },
  {
    id: "conversion-ops",
    name: "Conversion",
    tagline: "Audit funnels with expert rigor.",
    category: "growth",
    icon: "🔍",
    differentiators: [
      "12-dimension CRO audit",
      "Cialdini 6-principle scoring",
      "Heatmap-aware diagnostics",
      "Micro-conversion funnels",
    ],
  },
  {
    id: "outbound-engine",
    name: "Outbound Engine",
    tagline: "Multi-channel sequences that actually land.",
    category: "sales",
    icon: "📨",
    differentiators: [
      "Email + LinkedIn + video sequences",
      "Deliverability warmup planner",
      "Timezone-aware scheduling",
      "Reply classification",
    ],
  },
  {
    id: "seo-ops",
    name: "SEO",
    tagline: "Win SERPs and answer engines.",
    category: "growth",
    icon: "🌐",
    differentiators: [
      "Generative + Answer Engine Optimization",
      "Topical authority mapping",
      "SERP feature win-probability",
      "Cannibalization detection",
    ],
  },
  {
    id: "finance-ops",
    name: "Finance",
    tagline: "Unit economics, not vibes.",
    category: "ops",
    icon: "💰",
    differentiators: [
      "Cohort LTV / CAC",
      "Channel unit economics",
      "SaaS magic number",
      "Budget allocation optimizer",
    ],
  },
  {
    id: "revenue-intelligence",
    name: "Revenue Intelligence",
    tagline: "Win/loss patterns and battlecards on demand.",
    category: "sales",
    icon: "🧠",
    differentiators: [
      "Chi-square pattern recognition",
      "Auto-generated battlecards",
      "Pricing sensitivity cliff analysis",
      "Champion tracking",
    ],
  },
  {
    id: "podcast-ops",
    name: "Podcast",
    tagline: "Grow and monetize a show.",
    category: "growth",
    icon: "🎙️",
    differentiators: [
      "Guest fit scoring",
      "Sponsorship CPM calculator",
      "Cross-promo network mapping",
      "Audiogram automation",
    ],
  },
  {
    id: "team-ops",
    name: "Team",
    tagline: "Capacity, skills, and 1:1s.",
    category: "ops",
    icon: "👥",
    differentiators: [
      "Skills gap matrix",
      "Capacity utilization tracking",
      "1:1 prep generator",
      "OKR trajectory scoring",
    ],
  },
  {
    id: "sales-playbook",
    name: "Sales Playbook",
    tagline: "MEDDPICC + BANT in one motion.",
    category: "sales",
    icon: "📋",
    differentiators: [
      "MEDDPICC + BANT hybrid qualification",
      "Mutual action plans",
      "ROI calculator with NPV",
      "Competitive displacement scoring",
    ],
  },
  {
    id: "creative-ops",
    name: "Creative",
    tagline: "Test angles, not just creatives.",
    category: "growth",
    icon: "🎨",
    differentiators: [
      "LinkedIn 3-angle variant generation",
      "Audience-aware sample sizing",
      "Sequential / Bayesian / fixed-horizon",
      "Angle-level post-test diagnostic",
    ],
  },
];

export const categoryLabels: Record<Skill["category"], string> = {
  growth: "Growth & Content",
  sales: "Sales & Revenue",
  ops: "Operations",
};

export const categoryAccents: Record<Skill["category"], string> = {
  growth: "from-cyan/30 to-cyan/10 border-cyan/30",
  sales: "from-pink/30 to-pink/10 border-pink/30",
  ops: "from-violet/30 to-violet/10 border-violet/30",
};
