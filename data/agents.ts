export type Agent = {
  id: string;
  name: string;
  role: string;
  callSign: string;
  voice: string;
  skillIds: string[];
  accent: "violet" | "cyan" | "pink" | "amber" | "emerald" | "blue" | "rose" | "indigo" | "fuchsia";
  initials: string;
};

export const agents: Agent[] = [
  {
    id: "atlas",
    name: "Atlas",
    role: "SEO Agent",
    callSign: "Mapper of demand",
    voice: "Methodical, cartographic — speaks in clusters and cohorts.",
    skillIds: ["seo-ops"],
    accent: "blue",
    initials: "AT",
  },
  {
    id: "echo",
    name: "Echo",
    role: "Content Agent",
    callSign: "Voice of the brand",
    voice: "Editorial, decisive — values clarity over cleverness.",
    skillIds: ["content-ops"],
    accent: "emerald",
    initials: "EC",
  },
  {
    id: "nova",
    name: "Nova",
    role: "Growth Agent",
    callSign: "Bayesian and bold",
    voice: "Statistical, confident — always quotes the posterior.",
    skillIds: ["growth-engine", "creative-ops"],
    accent: "violet",
    initials: "NV",
  },
  {
    id: "lens",
    name: "Lens",
    role: "Conversion Agent",
    callSign: "Funnel surgeon",
    voice: "Diagnostic, precise — sees friction before it ships.",
    skillIds: ["conversion-ops"],
    accent: "amber",
    initials: "LN",
  },
  {
    id: "forge",
    name: "Forge",
    role: "Outbound Agent",
    callSign: "Sequence architect",
    voice: "Punchy, persistent — writes like it has 47 unread replies.",
    skillIds: ["outbound-engine"],
    accent: "rose",
    initials: "FG",
  },
  {
    id: "scout",
    name: "Scout",
    role: "Sales Pipeline Agent",
    callSign: "Signal in the noise",
    voice: "Pattern-matching, fast — scores everything by 9am.",
    skillIds: ["sales-pipeline"],
    accent: "cyan",
    initials: "SC",
  },
  {
    id: "anvil",
    name: "Anvil",
    role: "Sales Playbook Agent",
    callSign: "Deal carpenter",
    voice: "Structured, MEDDPICC-fluent — every deal has a plan.",
    skillIds: ["sales-playbook"],
    accent: "indigo",
    initials: "AN",
  },
  {
    id: "oracle",
    name: "Oracle",
    role: "Revenue Intelligence Agent",
    callSign: "Reads the losses",
    voice: "Pattern historian — talks in chi-square and cohorts.",
    skillIds: ["revenue-intelligence"],
    accent: "fuchsia",
    initials: "OR",
  },
  {
    id: "ledger",
    name: "Ledger",
    role: "Finance Agent",
    callSign: "Unit economics conscience",
    voice: "Spreadsheet-stoic — would rather be precise than fast.",
    skillIds: ["finance-ops"],
    accent: "emerald",
    initials: "LD",
  },
];

export const accentClasses: Record<Agent["accent"], { bg: string; text: string; ring: string; glow: string }> = {
  violet: {
    bg: "bg-violet/15",
    text: "text-violet",
    ring: "ring-violet/40",
    glow: "shadow-[0_0_24px_-4px_color-mix(in_oklch,var(--color-violet)_60%,transparent)]",
  },
  cyan: {
    bg: "bg-cyan/15",
    text: "text-cyan",
    ring: "ring-cyan/40",
    glow: "shadow-[0_0_24px_-4px_color-mix(in_oklch,var(--color-cyan)_60%,transparent)]",
  },
  pink: {
    bg: "bg-pink/15",
    text: "text-pink",
    ring: "ring-pink/40",
    glow: "shadow-[0_0_24px_-4px_color-mix(in_oklch,var(--color-pink)_60%,transparent)]",
  },
  amber: {
    bg: "bg-amber/15",
    text: "text-amber",
    ring: "ring-amber/40",
    glow: "shadow-[0_0_24px_-4px_color-mix(in_oklch,var(--color-amber)_60%,transparent)]",
  },
  emerald: {
    bg: "bg-[color-mix(in_oklch,var(--color-success)_15%,transparent)]",
    text: "text-success",
    ring: "ring-[color-mix(in_oklch,var(--color-success)_40%,transparent)]",
    glow: "shadow-[0_0_24px_-4px_color-mix(in_oklch,var(--color-success)_60%,transparent)]",
  },
  blue: {
    bg: "bg-[color-mix(in_oklch,var(--color-info)_15%,transparent)]",
    text: "text-info",
    ring: "ring-[color-mix(in_oklch,var(--color-info)_40%,transparent)]",
    glow: "shadow-[0_0_24px_-4px_color-mix(in_oklch,var(--color-info)_60%,transparent)]",
  },
  rose: {
    bg: "bg-[color-mix(in_oklch,#fb7185_15%,transparent)]",
    text: "text-[#fb7185]",
    ring: "ring-[color-mix(in_oklch,#fb7185_40%,transparent)]",
    glow: "shadow-[0_0_24px_-4px_color-mix(in_oklch,#fb7185_60%,transparent)]",
  },
  indigo: {
    bg: "bg-[color-mix(in_oklch,#818cf8_15%,transparent)]",
    text: "text-[#a5b4fc]",
    ring: "ring-[color-mix(in_oklch,#818cf8_40%,transparent)]",
    glow: "shadow-[0_0_24px_-4px_color-mix(in_oklch,#818cf8_60%,transparent)]",
  },
  fuchsia: {
    bg: "bg-[color-mix(in_oklch,#e879f9_15%,transparent)]",
    text: "text-[#f0abfc]",
    ring: "ring-[color-mix(in_oklch,#e879f9_40%,transparent)]",
    glow: "shadow-[0_0_24px_-4px_color-mix(in_oklch,#e879f9_60%,transparent)]",
  },
};
