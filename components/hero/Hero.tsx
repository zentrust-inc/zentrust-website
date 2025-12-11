"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center pt-24 md:pt-32">
      {/* Background Image (full bleed) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1950&q=80')",
        }}
      />

      {/* Green overlay for readability */}
      <div className="absolute inset-0 bg-emerald-900/40 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl mx-auto text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          <span className="block">Healing Land.</span>
          <span className="block mt-1">Elevating Humanity.</span>
          <span className="block mt-1">Science for Regeneration.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-base sm:text-lg md:text-xl font-light drop-shadow-md">
          ZenTrust is a <strong>501(c)(3) public charity</strong> advancing regenerative ecology,
          BPSS integrative wellness, and open scientific education.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl px-8 py-6 text-lg rounded-xl"
            asChild
          >
            <Link href="/stewardship">Enter the Stewardship Portal</Link>
          </Button>
        </div>
      </div>

      {/* Bottom fade (transition into next section) */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
