'use client';

import { useEffect, useState } from "react";

export type RitualPauseProps = {
  label?: string;
  description?: string;
  timeoutMs?: number;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function RitualPause({
  label = "Pause here",
  description = "Take a brief pause. Click anywhere or press a key to return.",
  timeoutMs = 15000,
}: RitualPauseProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(false);
  const [used, setUsed] = useState(false);

  const ritualAvailable = !prefersReducedMotion && !used;
  const cappedTimeout = Math.min(timeoutMs, 15000);

  const exitRitual = () => setActive(false);

  const enterRitual = () => {
    if (!ritualAvailable) return;
    setActive(true);
    setUsed(true);
  };

  useEffect(() => {
    if (!active) return;

    const timeoutId = window.setTimeout(exitRitual, cappedTimeout);
    const handleKey = (event: KeyboardEvent) => {
      if (["Escape", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        exitRitual();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("keydown", handleKey);
    };
  }, [active, cappedTimeout]);

  return (
    <>
      {/* Ritual affordance */}
      <div className="mt-6 flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={enterRitual}
          disabled={!ritualAvailable}
          className="text-sm tracking-wide text-foreground/70 disabled:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground/30 rounded-md px-3 py-2"
          aria-pressed={active}
        >
          {label}
          {!ritualAvailable && " (paused by preference)"}
        </button>

        {prefersReducedMotion && (
          <p className="text-xs text-foreground/50">
            Pause suppressed due to reduced-motion preference.
          </p>
        )}
      </div>

      {/* Ritual overlay */}
      {active && (
        <div
          className="fixed inset-0 z-[70] bg-background/95 text-foreground flex items-center justify-center px-6"
          role="dialog"
          aria-label="Ritual pause overlay"
          tabIndex={0}
          onClick={exitRitual}
        >
          <div className="max-w-md space-y-3 text-center">
            <p className="text-lg font-semibold tracking-tight">{label}</p>
            <p className="text-sm text-foreground/70">{description}</p>
            <p className="text-xs text-foreground/60">
              Click anywhere, press Esc, Enter, or Space, or wait about 15 seconds to return.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
