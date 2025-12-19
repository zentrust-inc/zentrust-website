"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

type Props = {
  pauseVideoSrc?: string; // optional ritual micro-pause video
  heroImageSrc: string;
  heroImageAlt: string;
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
  heroImageSrc,
  heroImageAlt,
  pauseDurationMs = 15000,
  children,
}: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<number | null>(null);

  const [isPaused, setIsPaused] = useState(false);

  const canPause = useMemo(
    () => !!pauseVideoSrc && !prefersReducedMotion,
    [pauseVideoSrc, prefersReducedMotion]
  );

  // Handle entering pause
  const enterPause = () => {
    if (!canPause) return;
    setIsPaused(true);
  };

  // Handle exiting pause
  const exitPause = () => {
    setIsPaused(false);
  };

  // Auto-exit after duration
  useEffect(() => {
    if (!isPaused) return;

    timerRef.current = window.setTimeout(() => {
      exitPause();
    }, pauseDurationMs);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPaused, pauseDurationMs]);

  // Play video when paused
  useEffect(() => {
    if (!isPaused) return;
    const v = videoRef.current;
    if (!v) return;

    v.currentTime = 0;
    v.play().catch(() => {
      // If playback fails, immediately restore default view
      exitPause();
    });
  }, [isPaused]);

  return (
    <div className="relative h-[100svh] w-full overflow-hidden bg-black">
      {/* Default hero state */}
      {!isPaused && (
        <>
          <Image
            src={heroImageSrc}
            alt={heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Optional subtle pause trigger */}
          {canPause && (
            <button
              type="button"
              onClick={enterPause}
              className="absolute inset-0 z-10"
              aria-label="Tap to continue"
            >
              <span className="sr-only">Tap to continue</span>
            </button>
          )}

          {/* Hero foreground */}
          {children && <div className="hero-foreground">{children}</div>}
        </>
      )}

      {/* Micro-pause state */}
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
            preload="auto"
          />
        </div>
      )}
    </div>
  );
}
