"use client";

import { useEffect, useState } from "react";

type UseTypewriterOptions = {
  /** Characters per second (charged to the typing pace). */
  cps?: number;
  /** Multiplier applied to cps (typically the playback speed). */
  speed?: number;
  /** Trigger to start typing. If false, no typing occurs. */
  enabled?: boolean;
  /** Reset signal — when changed, restart from beginning. */
  resetKey?: string | number;
};

/**
 * Streams an array of text lines into a typed-out string with a blinking caret.
 * Designed for the agent console — types char by char across all lines,
 * concatenated with newlines.
 *
 * Reset-on-key follows the React 19 "compute during render" pattern
 * to avoid the `react-hooks/set-state-in-effect` rule.
 */
export function useTypewriter(
  lines: string[],
  { cps = 65, speed = 1, enabled = true, resetKey = 0 }: UseTypewriterOptions = {},
) {
  const fullText = lines.join("\n");
  const [displayed, setDisplayed] = useState("");
  const [prevKey, setPrevKey] = useState<string | number>(resetKey);
  const [prevText, setPrevText] = useState(fullText);

  // Reset during render (React 19 idiomatic pattern) when key or text changes.
  if (prevKey !== resetKey || prevText !== fullText) {
    setPrevKey(resetKey);
    setPrevText(fullText);
    setDisplayed("");
  }

  // `done` is derived state — no need to store it.
  const done = displayed.length >= fullText.length && fullText.length > 0;

  useEffect(() => {
    if (!enabled || !fullText) return;
    if (displayed.length >= fullText.length) return;

    const charDelay = 1000 / (cps * Math.max(speed, 0.25));
    const timeoutId = setTimeout(() => {
      setDisplayed((prev) =>
        prev.length < fullText.length ? fullText.slice(0, prev.length + 1) : prev,
      );
    }, charDelay);

    return () => clearTimeout(timeoutId);
  }, [displayed, fullText, cps, speed, enabled]);

  return { text: displayed, done, total: fullText.length };
}
