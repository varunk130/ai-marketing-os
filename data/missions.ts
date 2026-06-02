export type MissionSummary = {
  id: "launch" | "rescue" | "week";
  title: string;
  premise: string;
  badge: string;
  status: "available" | "coming-soon";
  agentIds: string[];
  outcome: string;
  durationSeconds: number;
};

export const missionSummaries: MissionSummary[] = [
  {
    id: "launch",
    title: "Launch a Product",
    premise:
      "Acme Analytics is shipping in 30 days. The crew owns the launch end-to-end — from keyword research to closed deals to unit economics.",
    badge: "Day 1 → Day 30",
    status: "available",
    agentIds: ["atlas", "echo", "nova", "lens", "forge", "scout", "anvil", "ledger"],
    outcome: "142 SQLs · $487K pipeline · 3.2x LTV/CAC",
    durationSeconds: 90,
  },
  {
    id: "rescue",
    title: "Rescue a Stuck Pipeline",
    premise:
      "Win rate dropped from 27% to 14%. The crew runs win/loss analysis, generates battlecards, and rebuilds the sequence in one week.",
    badge: "1 week sprint",
    status: "coming-soon",
    agentIds: ["oracle", "anvil", "forge", "lens"],
    outcome: "Win rate recovered from 14% → 27%",
    durationSeconds: 60,
  },
  {
    id: "week",
    title: "A Week at the AI Marketing Org",
    premise:
      "Monday standup → Friday wrap. Watch all 9 agents operate in parallel across content, growth, sales, and ops.",
    badge: "5-day operating rhythm",
    status: "coming-soon",
    agentIds: ["atlas", "echo", "nova", "lens", "forge", "scout", "anvil", "oracle", "ledger"],
    outcome: "Weekly OKR report drops Friday 5pm",
    durationSeconds: 75,
  },
];
