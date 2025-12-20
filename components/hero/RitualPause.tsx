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
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 px-4 text-foreground backdrop-blur-sm"
          role="dialog"
          aria-label="Ritual pause overlay"
          tabIndex={-1}
          onClick={exitRitual}
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-foreground/10 bg-background/80 shadow-2xl">
            {videoSrc ? (
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                autoPlay
                poster={poster}
                className="h-full w-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <div className="p-10 text-center space-y-3">
                <p className="text-lg font-semibold tracking-tight">{label}</p>
                <p className="text-sm text-foreground/70">{description}</p>
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent p-4 text-center text-xs text-foreground/70">
              Tap anywhere, press Esc, Enter, or Space, or wait about 15 seconds to return.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
