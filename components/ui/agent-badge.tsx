import { cn } from "@/lib/utils";
import { accentClasses, type Agent } from "@/data/agents";

type AgentBadgeProps = {
  agent: Agent;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
};

export function AgentBadge({
  agent,
  size = "md",
  showLabel = false,
  className,
}: AgentBadgeProps) {
  const accent = accentClasses[agent.accent];
  const sizes = {
    sm: "h-9 w-9 text-[10px]",
    md: "h-12 w-12 text-xs",
    lg: "h-16 w-16 text-sm",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-full font-mono font-semibold ring-1 transition-transform hover:scale-105",
          sizes[size],
          accent.bg,
          accent.text,
          accent.ring,
          accent.glow,
        )}
        title={`${agent.name} · ${agent.role}`}
      >
        {agent.initials}
      </div>
      {showLabel && (
        <div className="min-w-0">
          <div className="text-sm font-medium text-foreground truncate">
            {agent.name}
          </div>
          <div className="text-xs text-subtle truncate">{agent.role}</div>
        </div>
      )}
    </div>
  );
}
