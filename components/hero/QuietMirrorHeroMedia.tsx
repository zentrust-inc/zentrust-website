"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type Props = {
  pauseVideoSrc?: string; // optional ritual micro-pause video
  pauseDurationMs?: number; // default 15000
  children?: ReactNode;
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

export default function QuietMirrorHeroMedia({
  pauseVideoSrc,
  pauseDurationMs = 15000,
  children,
}: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<number | null>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [hasPausedOnce, setHasPausedOnce] = useState(false);

  const canPause = useMemo(
    () => !!pauseVideoSrc && !prefersReducedMotion && !hasPausedOnce,
    [pauseVideoSrc, prefersReducedMotion, hasPausedOnce]
  );

  const enterPause = () => {
    if (!canPause) return;
    setIsPaused(true);
    setHasPausedOnce(true);
  };

  const exitPause = () => {
    setIsPaused(false);
  };

  // Auto-exit after duration
  useEffect(() => {
    if (!isPaused) return;

    timerRef.current = window.setTimeout(exitPause, pauseDurationMs);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPaused, pauseDurationMs]);

  // Play ritual video only when active
  useEffect(() => {
    if (!isPaused) return;
    const v = videoRef.current;
    if (!v) return;

    v.currentTime = 0;
    v.play().catch(exitPause);
  }, [isPaused]);

  return (
    <div className="relative h-[100svh] w-full overflow-hidden bg-black">
      {/* DEFAULT HERO STATE — TEXT ONLY */}
      {!isPaused && (
        <>
          {/* Centered hero content */}
          {children && (
            <div className="relative z-10 flex h-full items-center">
              <div className="w-full">
                {children}
              </div>
            </div>
          )}

          {/* Ritual micro-pause trigger — bottom center */}
          {canPause && (
            <button
              type="button"
              onClick={enterPause}
              aria-label="Tap to continue"
              className={`
                absolute bottom-6 left-1/2 z-10
                -translate-x-1/2
                text-sm sm:text-base
                tracking-wide
                text-white/85
                transition
                ${
                  prefersReducedMotion
                    ? ""
                    : "animate-[pulse_2.8s_ease-in-out_infinite]"
                }
              `}
              style={{
                textShadow: "0 0 14px rgba(255,255,255,0.45)",
              }}
            >
              Tap to continue
            </button>
          )}
        </>
      )}

      {/* RITUAL MICRO-PAUSE STATE — VISUAL ONLY */}
      {isPaused && pauseVideoSrc && (
        <div
          className="absolute inset-0 z-20"
          onClick={exitPause}
          role="presentation"
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={pauseVideoSrc}
            muted
            playsInline
            preload="metadata"
          />
        </div>
      )}
    </div>
  );
}
