"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

type Props = {
  /** Ritual video (portrait 9:16). Enables ritual if provided. */
  pauseVideoSrc?: string;

  /** Hero image (fallback / first frame). */
  heroImageSrc?: string;
  heroImageAlt?: string;

  /** Hero foreground (text & layout controlled by page). */
  children?: ReactNode;

  /** Max ritual duration (ms). Doctrine: ≤ 15000. */
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
  const [showInvite, setShowInvite] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const ritualEnabled =
    Boolean(pauseVideoSrc) && !prefersReducedMotion && !ritualUsed;

  /** Show the invitation once, after a quiet delay */
  useEffect(() => {
    if (!ritualEnabled) return;
    const t = window.setTimeout(() => setShowInvite(true), 1400);
    return () => window.clearTimeout(t);
  }, [ritualEnabled]);

  const enterRitual = () => {
    if (!ritualEnabled) return;
    setRitualActive(true);
    setRitualUsed(true);
    setShowInvite(false);
  };

  const exitRitual = () => {
    setRitualActive(false);
    const v = videoRef.current;
    if (v) {
      try {
        v.pause();
        v.currentTime = 0;
      } catch {
        /* silence */
      }
    }
  };

  /** Ritual playback + hard stop */
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
        window.clearTimeout(timeoutRef.current);
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

      {/* HERO CONTENT — EXACTLY AS PROVIDED */}
      {!ritualActive && children}

      {/* QUIET INVITATION — ONCE, INTENTIONAL */}
      {ritualEnabled && showInvite && !ritualActive && (
        <div className="absolute left-0 right-0 z-20 flex justify-center mt-6">
          <button
            type="button"
            onClick={enterRitual}
            aria-label="Pause here"
            className="
              text-sm tracking-wide
              text-black/60 dark:text-white/60
              transition-opacity duration-500
            "
          >
            Pause here ▷ tap
          </button>
        </div>
      )}

      {/* RITUAL OVERLAY — NO TEXT, NO UI */}
      {ritualActive && (
        <div
          className="fixed inset-0 z-[9999]"
          role="button"
          tabIndex={0}
          aria-label="Exit ritual"
          onClick={exitRitual}
          onKeyDown={(e) => {
            if (
              e.key === "Escape" ||
              e.key === "Enter" ||
              e.key === " "
            ) {
              e.preventDefault();
              exitRitual();
            }
          }}
        >
          {/* Centered 9:16 ritual frame */}
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
