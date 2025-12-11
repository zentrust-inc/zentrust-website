"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

export function Hero() {
  const [offsetY, setOffsetY] = useState(0)

  /* Desktop parallax */
  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth < 768) return
      setOffsetY(window.scrollY * 0.25)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      className={clsx(
        "relative min-h-screen flex items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden",
        "bg-gradient-to-b from-[#F5FAF7] to-[#ECF5F0] dark:from-[#030A08] dark:to-[#0A1E17]",
        "md:bg-none"
      )}
    >

      {/* DESKTOP PARALLAX IMAGE */}
      <div
        className="
          hidden md:block absolute inset-0 bg-cover bg-center
          brightness-[0.88] contrast-[1.05] saturate-[.85]
          will-change-transform
        "
        style={{
          backgroundImage: `url('/images/zentrust-hero-image.jpeg')`,
          transform: `translateY(${offsetY}px)`
        }}
      />

      {/* DESKTOP OVERLAY */}
      <div className="hidden md:block absolute inset-0 bg-emerald-900/30 backdrop-blur-[1px]" />

      {/* TEXT */}
      <div className="relative z-10 max-w-2xl mx-auto">

        {/* Glowing Badge */}
        <div className="
          inline-flex items-center px-3 py-1.5 mb-6 rounded-full
          bg-emerald-600/10 dark:bg-white/10
          text-emerald-900 dark:text-white text-xs sm:text-sm font-medium
          backdrop-blur animate-pulse-slow
        ">
          ZenTrust · Ecological & Scientific Stewardship
        </div>

        {/* IMMERSIVE GLOWING HEADLINE */}
        <h1 className="font-bold leading-tight space-y-2">

          <span className="
            block text-4xl sm:text-5xl md:text-6xl 
            bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-700 
            dark:from-emerald-200 dark:via-emerald-300 dark:to-emerald-400
            bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.35)]
          ">
            Healing Land.
          </span>

          <span className="
            block text-4xl sm:text-5xl md:text-6xl
            bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600
            dark:from-amber-300 dark:via-amber-400 dark:to-amber-300
            bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(251,191,36,0.35)]
          ">
            Elevating Humanity.
          </span>

          <span className="
            block text-4xl sm:text-5xl md:text-6xl
            bg-gradient-to-r from-emerald-700 via-cyan-400 to-blue-500
            dark:from-indigo-200 dark:via-blue-300 dark:to-cyan-300
            bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]
          ">
            Science for Regeneration.
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-base md:text-lg text-neutral-700 dark:text-neutral-300 font-light leading-relaxed max-w-xl mx-auto">
          ZenTrust is a <strong>501(c)(3) public charity</strong> advancing regenerative ecology,
          BPSS-integrative wellness research, and open scientific education.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button
            asChild
            className="
              px-9 py-4 rounded-full text-lg shadow-xl
              bg-emerald-600 hover:bg-emerald-700 text-white
              hover:shadow-emerald-600/40 transition-all duration-300
            "
          >
            <Link href="/stewardship">Enter the Stewardship Portal</Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
