import type { ComponentType } from "react";
import { ROIReportWidget } from "./roi-report-widget";
import { CROScorecardWidget } from "./cro-scorecard-widget";
import { ABResultsWidget } from "./ab-results-widget";
import { BattlecardWidget } from "./battlecard-widget";
import { LeadScoringWidget } from "./lead-scoring-widget";

/**
 * Registry mapping artifact IDs to their visual widget renderers.
 * Artifacts not in this map fall back to the preformatted text view.
 */
export const widgetRegistry: Record<string, ComponentType> = {
  "art-q1-report": ROIReportWidget,
  "art-cro-audit": CROScorecardWidget,
  "art-ab-results": ABResultsWidget,
  "art-battlecard": BattlecardWidget,
  "art-leads": LeadScoringWidget,
};
