"use client";

import { useEffect, useRef, useState } from "react";
import { Sprout, Waves, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

const ROTATING_LINES = [
  "Nothing was taken. Something began to move.",
  "Your gift is the water that wakes the seed.",
  "A small flow, entering a much longer river.",
];

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

function fireDonationConversionOnce() {
  // Prevent double-firing due to React Strict Mode or client re-renders.
  const key = "zt_ads_conversion_fired_v1";
  try {
    if (typeof window !== "undefined" && window.sessionStorage.getItem(key) === "1") {
      return;
    }
    window.sessionStorage.setItem(key, "1");
  } catch {
    // If storage is blocked, we still try to fire once per load.
  }

  if (!window.gtag) return;

  // IMPORTANT: Your site sets default consent with ad_storage denied.
  // On the real donation success page, you must update consent before firing Ads conversion,
  // otherwise Google Ads will silently drop the event.
  window.gtag("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    analytics_storage: "granted",
  });

  window.gtag("event", "conversion", {
    send_to: "AW-17898582360/BssVCI6UwuwbENji2tZC",
    // If you do not want to report value, remove value and currency.
    value: 5.0,
    currency: "USD",
  });
}

async function waitForGtagAndFire(timeoutMs = 6000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      fireDonationConversionOnce();
      return;
    }
    await new Promise((r) => setTimeout(r, 150));
  }
  // If gtag never loads, we do nothing. This avoids false confidence.
}

export default function ThankYouPage() {
  const [index, setIndex] = useState(0);
  const [iconFlip, setIconFlip] = useState(true);
  const didStartRotation = useRef(false);

  // -----------------------------------------------------------------------------
  // Google Ads conversion fire, after ensuring consent is updated on this page.
  // -----------------------------------------------------------------------------
  useEffect(() => {
    if (typeof window === "undefined") return;
    void waitForGtagAndFire();
  }, []);

  // -----------------------------------------------------------------------------
  // Rotating poetic lines
  // -----------------------------------------------------------------------------
  useEffect(() => {
    // Guard against Strict Mode running effects twice in dev.
    if (didStartRotation.current) return;
    didStartRotation.current = true;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_LINES.length);
      setIconFlip((v) => !v);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-[100svh] flex items-center justify-center px-6 py-16 bg-[#F6F0E6] dark:bg-[#0f1110]">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <Sprout
            className="h-12 w-12 text-green-600/80 dark:text-green-400/70"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </div>

        <p className="mb-4 text-[13px] tracking-[0.18em] uppercase font-medium text-black/70 dark:text-white/60">
          Stewardship Received
        </p>

        <h1 className="text-2xl sm:text-3xl font-semibold text-black/85 dark:text-white leading-tight mb-8">
          The ecosystem is stronger because you are in it.
        </h1>

        <div className="flex items-center justify-center gap-3 mb-8">
          {iconFlip ? (
            <Waves className="h-5 w-5 text-sky-700/70 dark:text-sky-400/60" />
          ) : (
            <Wind className="h-5 w-5 text-sky-700/70 dark:text-sky-400/60" />
          )}

          <p
            key={index}
            className="text-[15px] sm:text-base text-black/70 dark:text-white/70 animate-[fadeUp_0.8s_ease-out]"
          >
            {ROTATING_LINES[index]}
          </p>
        </div>

        <div className="mx-auto my-6 h-px w-20 bg-black/15 dark:bg-white/20" />

        <blockquote className="italic text-black/70 dark:text-white/70 text-base leading-relaxed mb-4">
          “The earth remembers every hand that helps it heal.”
        </blockquote>

        <p className="text-sm text-black/55 dark:text-white/55 mb-7">
          A receipt has been sent to your email.
        </p>

        <Button asChild className="rounded-full px-7 py-3 text-sm font-semibold">
          <a href="/">Return to the Field</a>
        </Button>

        <p className="mt-6 text-[11px] text-black/40 dark:text-white/40">
          ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487
        </p>

        <style jsx>{`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </main>
  );
}
