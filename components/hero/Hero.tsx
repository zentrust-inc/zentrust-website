"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero/forest.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center">
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="px-4 py-2 text-sm rounded-full bg-white/20 backdrop-blur text-white font-medium">
            Advancing ecological regeneration, BPSS research & scientific education.
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white font-extrabold leading-tight text-5xl sm:text-6xl md:text-7xl space-y-2"
        >
          <div>Healing Land.</div>
          <div className="text-green-300">Elevating Humanity.</div>
          <div>Science for Regeneration.</div>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-white/90 mt-6 text-lg md:text-xl leading-relaxed max-w-3xl"
        >
          ZenTrust is a 501(c)(3) public charity (EIN 33-4318487) advancing
          regenerative ecology, BPSS-integrative wellness research, and open
          scientific education.
          <br />
          <span className="block mt-3 text-sm opacity-80">
            Recognized by the IRS as a 170(b)(1)(A)(vi) public charity.{" "}
            <Link
              href="/irs-letter"
              className="underline hover:text-green-200 transition"
            >
              View official determination letter
            </Link>
          </span>
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10"
        >
          <Link href="/stewardship">
            <button className="px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-lg shadow-lg flex items-center gap-2 transition">
              Enter the Stewardship Portal <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
