"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

type Props = {
  /** Mobile-only ritual video (optional, non-authoritative) */
  pauseVideoSrc?: string;

  /** Fallback / canonical hero image */
  heroImageSrc?: string;
  heroImageAlt?: string;

  /** Foreground content (text, layout decided by page) */
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

function useIsMobile() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse) and (max-width: 768px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return mobile;
}

export default function QuietMirrorHeroMedia({
  pauseVideoSrc,
  heroImageSrc,
  heroImageAlt = "",
  children,
}: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [videoDone, setVideoDone] = useState(false);

  const shouldUseVideo = useMemo(
    () => Boolean(pauseVideoSrc && isMobile && !prefersReducedMotion),
    [pauseVideoSrc, isMobile, prefersReducedMotion]
  );

  useEffect(() => {
    if (!shouldUseVideo || !hasInteracted) return;

    const v = videoRef.current;
    if (!v) return;

    const onEnded = () => setVideoDone(true);
    v.addEventListener("ended", onEnded);

    v.play().catch(() => {
      // Quiet failure: fallback remains
      setVideoDone(true);
    });

    return () => v.removeEventListener("ended", onEnded);
  }, [shouldUseVideo, hasInteracted]);

  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      {/* Background media layer — never authoritative */}
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

      {shouldUseVideo && !videoDone && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={pauseVideoSrc}
          muted
          playsInline
          preload="metadata"
        />
      )}

      {/* Ritual interaction gate (mobile only) */}
      {shouldUseVideo && !hasInteracted && (
        <button
          type="button"
          onClick={() => setHasInteracted(true)}
          className="absolute inset-0 z-10 flex items-center justify-center
                     bg-transparent"
          aria-label="Tap to continue"
        >
          <span className="rounded-full bg-black/60 px-5 py-2 text-sm tracking-wide
                           text-white backdrop-blur">
            Tap to Continue
          </span>
        </button>
      )}

      {/* Foreground — inherits EVERYTHING from page */}
      {children && (
        <div className="relative z-20 text-inherit">
          {children}
        </div>
      )}
    </div>
  );
}
