"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Sprout, Waves, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

const ROTATING_LINES = [
  "Nothing was taken. Something began to move.",
  "Your gift is the water that wakes the seed.",
  "A small flow, entering a much longer river.",
];

export default function ThankYouPage() {
  const [index, setIndex] = useState(0);
  const [iconFlip, setIconFlip] = useState(true);
  const didStartRotation = useRef(false);

  // Rotating poetic lines (UI only)
  useEffect(() => {
    if (didStartRotation.current) return;
    didStartRotation.current = true;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_LINES.length);
      setIconFlip((v) => !v);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ------------------------------------------------------------------
          GOOGLE ADS CONVERSION — SYNCHRONOUS, DETERMINISTIC
          ------------------------------------------------------------------ */}
      <Script id="zt-ads-donation-conversion" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Update consent BEFORE firing conversion
          gtag('consent', 'update', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            analytics_storage: 'granted'
          });

          // Fire Google Ads conversion
          gtag('event', 'conversion', {
            send_to: 'AW-17898582360/BssVCI6UwuwbENji2tZC',
            value: 5.0,
            currency: 'USD'
          });
        `}
      </Script>

      {/* ------------------------------------------------------------------ */}
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
    </>
  );
}
