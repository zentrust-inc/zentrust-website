"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  // Desktop Parallax
  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY * 0.3);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Enable mobile transparent mode
  useEffect(() => {
    if (window.innerWidth < 768) {
      document.body.classList.add("hero-mobile-transparent");
    }
    return () => document.body.classList.remove("hero-mobile-transparent");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-28 md:pt-40">

      {/* Desktop Parallax Forest */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block will-change-transform z-0"
        style={{
          backgroundImage: "url('/images/zentrust-hero-image.jpeg')",
          transform: `translateY(${offsetY}px)`,
        }}
      />

      {/* Desktop Overlay */}
      <div className="absolute inset-0 hidden md:block bg-black/40 backdrop-blur-sm z-10" />

      {/* TEXT CONTENT */}
      <div className="relative z-20 max-w-4xl px-6 mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full mb-6 text-sm font-medium
          bg-white/80 md:bg-white/10
          text-[var(--hero-light-head)] md:text-white backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-emerald-500 md:bg-white mr-2 animate-pulse" />
          ZenTrust · Ecological & Scientific Stewardship
        </div>

        {/* Headline */}
        <h1 className="font-bold leading-tight space-y-2">
          <span className="block text-4xl sm:text-5xl md:text-6xl text-[var(--hero-light-head)] md:text-white">
            Healing Land.
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl text-amber-600 md:text-orange-300">
            Elevating Humanity.
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl text-[var(--hero-light-head)] md:text-white">
            Science for Regeneration.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto
          text-[var(--hero-light-body)] md:text-white/90">
          ZenTrust is a <strong>501(c)(3) public charity (EIN 33-4318487)</strong> advancing regenerative ecology, BPSS-integrative wellness research, and open scientific education.
        </p>

        {/* IRS Link */}
        <p className="text-xs sm:text-sm mt-3 text-[var(--hero-light-body)] md:text-white/80">
          Recognized by the IRS as a 170(b)(1)(A)(vi) public charity.
          <a
            href="https://apps.irs.gov/pub/epostcard/dl/FinalLetter_33-4318487_ZENTRUSTINC_04072025_00.pdf"
            target="_blank"
            className="underline ml-1 font-semibold hover:text-emerald-600 md:hover:text-emerald-200"
          >
            View official determination letter
          </a>
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-10 py-6 rounded-xl shadow-xl" asChild>
            <Link href="/stewardship">Enter the Stewardship Portal</Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
