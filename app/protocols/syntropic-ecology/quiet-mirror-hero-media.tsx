"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  mobileVideoSrc: string;
  heroImageSrc: string;
  heroImageAlt: string;
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
  mobileVideoSrc,
  heroImageSrc,
  heroImageAlt,
}: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoDone, setVideoDone] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const shouldUseVideo = useMemo(
    () => isMobile && !prefersReducedMotion && !videoError,
    [isMobile, prefersReducedMotion, videoError]
  );

  useEffect(() => {
    if (!shouldUseVideo) return;
    const v = videoRef.current;
    if (!v) return;

    const onEnded = () => setVideoDone(true);
    const onError = () => setVideoError(true);

    v.addEventListener("ended", onEnded);
    v.addEventListener("error", onError);

    const p = v.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => setVideoError(true));
    }

    return () => {
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("error", onError);
    };
  }, [shouldUseVideo]);

  return (
    <div className="relative h-[100svh] w-full overflow-hidden bg-black">
      {/* Base image (fallback + final still state) */}
      <Image
        src={heroImageSrc}
        alt={heroImageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Mobile run-once video */}
      {shouldUseVideo && !videoDone && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={mobileVideoSrc}
          muted
          playsInline
          preload="auto"
          autoPlay
          loop={false}
          controls={false}
        />
      )}

      {/* Bi-directional neutral scrim */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Subtle vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: "inset 0 0 140px rgba(0,0,0,0.45)",
        }}
      />
    </div>
  );
}
