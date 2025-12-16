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
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return reduced;
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // Coarse pointer + small viewport is a reliable heuristic for "phone-like"
    const mq = window.matchMedia("(pointer: coarse) and (max-width: 768px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return mobile;
}

export default function QuietMirrorHeroMedia({ mobileVideoSrc, heroImageSrc, heroImageAlt }: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoDone, setVideoDone] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const shouldUseVideo = useMemo(() => {
    return isMobile && !prefersReducedMotion && !videoError;
  }, [isMobile, prefersReducedMotion, videoError]);

  useEffect(() => {
    if (!shouldUseVideo) return;

    const v = videoRef.current;
    if (!v) return;

    const onEnded = () => setVideoDone(true);
    const onError = () => setVideoError(true);

    v.addEventListener("ended", onEnded);
    v.addEventListener("error", onError);

    // Attempt autoplay; if blocked, fail gracefully to image.
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
      {/* Always render the image in the background (fallback + post-video still) */}
      <Image
        src={heroImageSrc}
        alt={heroImageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Mobile: play once, muted, then allow the image behind to be the still state */}
      {shouldUseVideo && !videoDone && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={mobileVideoSrc}
          muted
          playsInline
          preload="auto"
          // Autoplay is attempted; if blocked, we fall back to image.
          autoPlay
          // IMPORTANT: do not loop (run-once discipline)
          loop={false}
          controls={false}
          aria-label="Quiet Mirror video: there is order beneath the disorder"
        />
      )}

      {/* Subtle overlay to keep text legible (no drama) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/10" />
    </div>
  );
}
