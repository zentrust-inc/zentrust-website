"use client";

import { useEffect, useRef } from "react";

/* Muted drone loop for the hero. Paused for people who ask for reduced
   motion; the poster frame still shows the ridge.

   Mobile notes: React does not write the `muted` attribute into the HTML,
   and iOS/Android only autoplay videos they see as muted, so we set it on
   the element directly. If autoplay is still refused (Low Power Mode, data
   saver), we try again on the visitor's first touch or scroll. */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tryPlay = () => {
      if (mq.matches) return;
      v.play().catch(() => {});
    };
    const onFirstGesture = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("scroll", onFirstGesture);
    };
    const apply = () => {
      if (mq.matches) v.pause();
      else tryPlay();
    };

    apply();
    window.addEventListener("touchstart", onFirstGesture, { passive: true });
    window.addEventListener("scroll", onFirstGesture, { passive: true });
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("scroll", onFirstGesture);
    };
  }, []);

  return (
    <video
      ref={ref}
      poster="/nepal/hero-ridge-poster.jpg"
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/nepal/hero-ridge.mp4" type="video/mp4" />
      <source src="/nepal/hero-ridge.webm" type="video/webm" />
    </video>
  );
}
