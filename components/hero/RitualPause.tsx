"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

type RitualVideo = {
  src: string;
};

/* ---------------------------------
   IMPORTANT:
   These paths MUST match /public exactly
---------------------------------- */

const MOBILE_RITUALS: RitualVideo[] = [
  { src: "/video/ritual/mobile/mobile-bpss-v1-quiet-mirror.mp4" },
  { src: "/video/ritual/mobile/mobile-syntropy-v1-quiet-mirror.mp4" },
  { src: "/video/ritual/mobile/riverFlowers.mp4" },
  { src: "/video/ritual/mobile/syntropic-food-forest.mp4" },
  { src: "/video/ritual/mobile/water-flowing.mp4" },
];

const DESKTOP_RITUALS: RitualVideo[] = [
  { src: "/video/ritual/desktop/Cell Neuron.mp4" },
  { src: "/video/ritual/desktop/Memories.mp4" },
  { src: "/video/ritual/desktop/Metamorphosis.mp4" },
  { src: "/video/ritual/desktop/Petri Dish.mp4" },
  { src: "/video/ritual/desktop/Wonders-Of-Life.mp4" },
];

type RitualPauseProps = {
  enabled?: boolean;
  timeoutMs?: number;
  onActiveChange?: (active: boolean) => void;
};

/* ---------------------------------
   Deterministic hash (pathname only)
---------------------------------- */
const hashString = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

export function RitualPause({
  enabled = true,
  timeoutMs = 15000,
  onActiveChange,
}: RitualPauseProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  const timerRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const cappedTimeout = Math.min(timeoutMs, 15000);

  /* ---------------------------------
     Viewport detection
  ---------------------------------- */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /* ---------------------------------
     Deterministic ritual selection
  ---------------------------------- */
  useEffect(() => {
    const seed = hashString(pathname ?? "");
    if (MOBILE_RITUALS.length) {
      setMobileIndex(seed % MOBILE_RITUALS.length);
    }
    if (DESKTOP_RITUALS.length) {
      setDesktopIndex(seed % DESKTOP_RITUALS.length);
    }
  }, [pathname]);

  const source = useMemo(() => {
    const list = isMobile ? MOBILE_RITUALS : DESKTOP_RITUALS;
    if (!list.length) return null;
    const index = isMobile ? mobileIndex : desktopIndex;
    return list[index % list.length];
  }, [isMobile, mobileIndex, desktopIndex]);

  /* ---------------------------------
     Enter / Exit ritual
  ---------------------------------- */
  const exitRitual = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setActive(false);
    onActiveChange?.(false);
  };

  const enterRitual = () => {
    if (!enabled || !source) return;
    setActive(true);
    onActiveChange?.(true);

    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(exitRitual, cappedTimeout);
  };

  /* ---------------------------------
     Lock background scroll
  ---------------------------------- */
  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [active]);

  /* ---------------------------------
     SAFE playback (iOS compliant)
  ---------------------------------- */
  useEffect(() => {
    if (!active || !source) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    // @ts-ignore — required for iOS Safari
    video.playsInline = true;
    video.currentTime = 0;

    requestAnimationFrame(() => {
      video.play().catch(() => {});
    });

    const handleEnded = () => exitRitual();
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [active, source]);

  /* ---------------------------------
     Render
  ---------------------------------- */
  return (
    <>
      <button
        type="button"
        onClick={enterRitual}
        disabled={!enabled || !source}
        className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-3 py-2 text-sm tracking-wide text-foreground/80 transition hover:border-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:cursor-not-allowed disabled:opacity-50"
        aria-pressed={active}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-foreground/30 text-[10px] font-semibold text-foreground/70">
          ▶
        </span>
        <span>Pause here ▷ tap</span>
      </button>

      {active && source &&
        createPortal(
          <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            >
              <source src={source.src} type="video/mp4" />
            </video>

            <button
              type="button"
              onClick={exitRitual}
              className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/40 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Close
            </button>
          </div>,
          document.body
        )}
    </>
  );
}
