"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroRitual } from "./createHero";

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

type Props = HeroRitual;

export function RitualPause({
  label = "Pause here ▷ tap",
  description = "Take a brief pause. Tap anywhere or press Esc, Enter, or Space to return.",
  timeoutMs = 15000,
  videoSrc,
  poster,
}: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(false);
  const [used, setUsed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const ritualAvailable = !prefersReducedMotion && !used;
  const cappedTimeout = Math.min(timeoutMs ?? 15000, 15000);

  const exitRitual = () => {
    const vid = videoRef.current;
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
    }
    setActive(false);
  };

  const enterRitual = () => {
    if (!ritualAvailable) return;
    setUsed(true);
    setActive(true);
  };

  useEffect(() => {
    if (!active) return;

    const vid = videoRef.current;
    vid?.play?.().catch(() => {});

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
      vid?.pause?.();
    };
  }, [active, cappedTimeout]);

  return (
    <>
      <div className="mt-6 flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={enterRitual}
          disabled={!ritualAvailable}
          className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm tracking-wide text-foreground/70 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:text-foreground/40"
          aria-pressed={active}
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-foreground/30 text-[10px] font-semibold text-foreground/70">
            ▶
          </span>
          <span>{label}</span>
        </button>

        {prefersReducedMotion && (
          <p className="text-xs text-foreground/50">
            Pause suppressed due to reduced-motion preference.
          </p>
        )}

        {used && !prefersReducedMotion && (
          <p className="text-xs text-foreground/50">Ritual completed for this visit.</p>
        )}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] bg-background/95 text-foreground"
          role="dialog"
          aria-label="Ritual pause overlay"
          tabIndex={-1}
          onClick={exitRitual}
        >
          <div className="relative h-full w-full">
            {videoSrc ? (
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                poster={poster}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background/80 text-base font-semibold shadow">
                    ▶
                  </div>
                  <p className="text-lg font-semibold tracking-tight">{label}</p>
                  <p className="text-sm text-foreground/70">{description}</p>
                </div>
              </div>
            )}

            <div className="relative z-20 flex h-full w-full items-center justify-center px-6 text-center">
              <div className="space-y-3 rounded-3xl bg-background/70 px-6 py-5 shadow-2xl backdrop-blur">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-foreground/30 bg-background/70 text-sm font-semibold">
                  ▶
                </div>
                <p className="text-lg font-semibold tracking-tight">{label}</p>
                <p className="text-sm text-foreground/70">{description}</p>
                <p className="text-xs text-foreground/60">
                  Tap anywhere, press Esc, Enter, or Space, or wait about 15 seconds to return.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
