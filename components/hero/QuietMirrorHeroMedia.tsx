"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

type Props = {
  pauseVideoSrc?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  children?: ReactNode;
  pauseDurationMs?: number;
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
  heroImageAlt = "",
  children,
  pauseDurationMs = 15000,
}: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [ritualActive, setRitualActive] = useState(false);
  const [ritualUsed, setRitualUsed] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const ritualEnabled =
    Boolean(pauseVideoSrc) && !prefersReducedMotion && !ritualUsed;

  const enterRitual = () => {
    if (!ritualEnabled) return;
    setRitualActive(true);
    setRitualUsed(true);
  };

  const exitRitual = () => {
    setRitualActive(false);
    const v = videoRef.current;
    if (v) {
      try {
        v.pause();
        v.currentTime = 0;
      } catch {}
    }
  };

  useEffect(() => {
    if (!ritualActive) return;

    timeoutRef.current = window.setTimeout(
      exitRitual,
      Math.min(pauseDurationMs, 15000)
    );

    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.playsInline = true;
      v.loop = true;
      v.play().catch(exitRitual);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ritualActive]);

  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      {/* HERO MEDIA (unchanged behavior) */}
      {heroImageSrc && (
        <Image
          src={heroImageSrc}
          alt={heroImageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      {/* Click-to-enter ritual — media only */}
      {ritualEnabled && !ritualActive && (
        <button
          type="button"
          onClick={enterRitual}
          aria-label="Enter ritual"
          className="absolute inset-0 z-10"
          style={{ background: "transparent" }}
        />
      )}

      {/* HERO CONTENT — EXACT SAME POSITION AS BEFORE */}
      {!ritualActive && children}

      {/* RITUAL OVERLAY — DOES NOT AFFECT LAYOUT */}
      {ritualActive && (
        <div
          className="fixed inset-0 z-[9999]"
          onClick={exitRitual}
          role="button"
          tabIndex={0}
          aria-label="Exit ritual"
        >
          <div className="relative mx-auto h-full aspect-[9/16] max-w-[56vh]">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={pauseVideoSrc}
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      )}
    </div>
  );
}
