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
  timeoutMs = 15000,
  videoSrc,
}: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Ritual MUST have video. No fallback UI.
  const ritualAvailable = !!videoSrc && !prefersReducedMotion;
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
    setActive(true);
  };

  useEffect(() => {
    if (!active) return;

    const vid = videoRef.current;

    if (vid) {
      vid.muted = true;
      // iOS safety
      // @ts-ignore
      vid.playsInline = true;

      // Enforce playback (retry pattern)
      const tryPlay = () => vid.play?.().catch(() => {});
      tryPlay();
      requestAnimationFrame(tryPlay);
    }

    const timeoutId = window.setTimeout(exitRitual, cappedTimeout);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
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
      {/* Ritual affordance */}
      <div className="flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={enterRitual}
          disabled={!ritualAvailable}
          className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm tracking-wide text-foreground/70 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:cursor-not-allowed disabled:text-foreground/40"
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
      </div>

      {/* Fullscreen ritual overlay */}
      {active && videoSrc && (
        <div
          className="fixed inset-0 z-[80] bg-black"
          role="dialog"
          aria-label="Ritual pause"
          tabIndex={-1}
          onClick={exitRitual}
        >
          {/* FULLSCREEN 9:16 COVER — NO POSTER, NO FALLBACK */}
          <video
            ref={videoRef}
            muted
            loop
            autoPlay
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Invisible exit layer */}
          <div className="absolute inset-0" />
        </div>
      )}
    </>
  );
}
