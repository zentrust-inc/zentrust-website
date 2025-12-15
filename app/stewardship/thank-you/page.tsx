"use client";

import { useEffect, useState } from "react";
import { Waves, Wind } from "lucide-react";

export const dynamic = "force-dynamic";

/* =========================
   Rotating emotional lines
========================= */
const ROTATING_LINES = [
  "Nothing was taken. Something began to move.",
  "Your gift is the water that wakes the seed.",
  "A small flow, entering a much longer river.",
];

/* =========================
   Custom transparent sprout
========================= */
function BreathingSprout() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-green-600/80 animate-[sproutBreath_8s_ease-in-out_infinite]"
      aria-hidden="true"
    >
      {/* Ground */}
      <path d="M7 20h10" />
      {/* Stem */}
      <path d="M12 20V10" />
      {/* Right leaf */}
      <path d="M12 10c0-3.5 3-6 6-6 0 3.5-3 6-6 6z" />
      {/* Left leaf */}
      <path d="M12 10c0-3.5-3-6-6-6 0 3.5 3 6 6 6z" />
    </svg>
  );
}

export default function ThankYouPage() {
  const [index, setIndex] = useState(0);
  const [iconFlip, setIconFlip] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_LINES.length);
      setIconFlip((v) => !v);
    }, 9000); // slow, dignified cadence

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-[100svh] flex items-center justify-center px-6 py-16 bg-[#F6F0E6]">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="rounded-2xl bg-white/70 border border-black/5 shadow-sm px-6 py-5">
            <BreathingSprout />
          </div>
        </div>

        {/* Stewardship Received */}
        <p className="mb-4 text-[13px] tracking-[0.18em] uppercase font-medium text-black/70">
          Stewardship Received
        </p>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-black/85 leading-tight mb-8">
          The ecosystem is stronger because you are in it.
        </h1>

        {/* Rotating line */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {iconFlip ? (
            <Waves className="h-5 w-5 text-sky-700/70" />
          ) : (
            <Wind className="h-5 w-5 text-sky-700/70" />
          )}

          <p
            key={index}
            className="text-[15px] sm:text-base text-black/70
                       animate-[fadeUp_0.8s_ease-out]"
          >
            {ROTATING_LINES[index]}
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto my-6 h-px w-20 bg-black/15" />

        {/* Quote */}
        <blockquote className="italic text-black/70 text-base leading-relaxed mb-4">
          “The earth remembers every hand that helps it heal.”
        </blockquote>

        {/* Footer */}
        <p className="text-sm text-black/55 mb-7">
          A receipt has been sent to your email.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full
                     px-7 py-3 text-sm font-semibold
                     bg-black/80 text-white hover:bg-black/90 transition"
        >
          Return to the Field
        </a>

        {/* Legal */}
        <p className="mt-6 text-[11px] text-black/40">
          ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487
        </p>

        {/* Animations */}
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

          @keyframes sproutBreath {
            0%,
            100% {
              opacity: 0.85;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.035);
            }
          }
        `}</style>
      </div>
    </main>
  );
}
