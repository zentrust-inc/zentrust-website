"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

/**
 * QuietMirrorHeroMedia
 * --------------------
 * A doctrine-safe ritual container.
 * - Media is environmental, never authoritative.
 * - Ritual (micro-pause) hides ALL text/UI.
 * - Ritual media is ALWAYS 9:16, even on desktop.
 * - No forced background or text colors.
 */

type Props = {
  /** Ritual video (silent, portrait). Enables ritual if provided. */
  pauseVideoSrc?: string;

  /** Hero image (fallback + first frame). */
  heroImageSrc?: string;
  heroImageAlt?: string;

  /** Hero foreground (text, CTAs). Controlled entirely by page. */
  children?: ReactNode;

  /** Max ritual duration (ms). Doctrine: ≤ 15000. Default 15000. */
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

  /** Ritual state */
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
      } catch {
        /* silent */
      }
    }
  };

  /** Start ritual playback + hard timeout */
  useEffect(() => {
    if (!ritualActive) {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    timeoutRef.current = window.setTimeout(
      exitRitual,
      Math.min(Math.max(pauseDurationMs, 0), 15000)
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
    <div className="relative min-h-[100svh] w-full overflow-hidden">
      {/* =========================
          RITUAL FRAME (9:16 ONLY)
         ========================= */}
      <div className="relative mx-auto h-[100svh] aspect-[9/16] max-w-[56vh]">
        {/* Base hero image */}
        {heroImageSrc && (
          <Image
            src={heroImageSrc}
            alt={heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 56vh"
          />
        )}

        {/* Click-to-enter ritual (media area only) */}
        {ritualEnabled && !ritualActive && (
          <button
            type="button"
            aria-label="Enter ritual pause"
            onClick={enterRitual}
            className="absolute inset-0 z-10"
            style={{ background: "transparent" }}
          />
        )}
      </div>

      {/* =========================
          HERO FOREGROUND (NORMAL)
         ========================= */}
      {!ritualActive && children && (
        <div className="relative z-20 text-inherit">
          {children}
        </div>
      )}

      {/* =========================
          RITUAL OVERLAY (NO TEXT)
         ========================= */}
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
          {/* Centered 9:16 ritual window */}
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
          {/* Intentionally NOTHING else here */}
        </div>
      )}
    </div>
  );
}
