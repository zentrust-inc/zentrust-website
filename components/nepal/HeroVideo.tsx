"use client";

import { useEffect, useRef } from "react";

/* Muted drone loop for the hero. Paused for people who ask for reduced
   motion; the poster frame still shows the ridge. */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) v.pause();
      else v.play().catch(() => {});
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={ref}
      src="/nepal/hero-ridge.mp4"
      poster="/nepal/hero-ridge-poster.jpg"
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-hidden="true"
    />
  );
}
