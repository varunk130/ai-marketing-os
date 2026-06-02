"use client";

import { useEffect } from "react";
import { useMissionStore } from "@/lib/mission-store";
import { launchTimeline } from "@/data/missions/launch-timeline";
import { MissionTimeline } from "@/components/mission/mission-timeline";
import { AgentGraph } from "@/components/mission/agent-graph";
import { AgentConsole } from "@/components/mission/agent-console";
import { ArtifactFeed } from "@/components/mission/artifact-feed";
import { MissionControls } from "@/components/mission/mission-controls";

export function MissionConsole() {
  const loadScript = useMissionStore((s) => s.loadScript);

  useEffect(() => {
    loadScript(launchTimeline);
  }, [loadScript]);

  return (
    <div className="space-y-4">
      <MissionTimeline />

      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <AgentGraph />
        <AgentConsole />
      </div>

      <ArtifactFeed />

      <MissionControls />
    </div>
  );
}
