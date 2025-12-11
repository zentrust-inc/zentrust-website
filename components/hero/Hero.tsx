"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const missionAreas = [
  {
    title: "Regenerative Ecology",
    desc: "Restoring forests, watersheds, soils, and native ecosystems.",
    status: "Launching 2025",
  },
  {
    title: "BPSS Integrative Wellness Research",
    desc: "Research linking ecological conditions and holistic human health.",
    status: "In Development",
  },
  {
    title: "Open Scientific Education",
    desc: "Workshops, training, and open-access public education programs.",
    status: "Starting Soon",
  },
  {
    title: "Global Partnerships & Grantmaking",
    desc: "Supporting aligned nonprofits advancing regeneration.",
    status: "Forming Now",
  },
]

export function Hero() {
  const [offsetY, setOffsetY] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  /* PARALLAX SCROLL */
  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY * 0.3)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* PARTICLE FOG */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      s: Math.random() * 0.4 + 0.2,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255,255,255,0.25)"
        ctx.fill()
        p.y -= p.s
        if (p.y < 0) p.y = height
      })
      requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-36">

      {/* BACKGROUND IMAGE + PARALLAX */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url('/images/zentrust-hero-image.jpeg')`,
          transform: `translateY(${offsetY}px)`,
        }}
      />

      {/* DARK GREEN OVERLAY */}
      <div className="absolute inset-0 bg-emerald-900/40 backdrop-blur-[1px]" />

      {/* PARTICLE FOG */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* CONTENT GRID (LEFT TEXT + RIGHT MISSION AREAS) */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 text-white">

        {/* LEFT SIDE TEXT */}
        <div className="space-y-6 max-w-xl">

          {/* BADGE */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium backdrop-blur">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
            Advancing ecological regeneration, BPSS research & open education.
          </div>

          {/* HEADLINE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-xl">
            Healing Land.<br />
            Elevating Humanity.<br />
            Science for Regeneration.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl font-light drop-shadow-md">
            ZenTrust is a <strong>501(c)(3) public charity (EIN 33-4318487)</strong> advancing regenerative ecology,
            BPSS-integrative wellness research, and open scientific education.
          </p>

          {/* IRS LINK */}
          <p className="text-sm opacity-90 drop-shadow">
            Recognized by the IRS as a 170(b)(1)(A)(vi) public charity.
            <a
              href="https://apps.irs.gov/pub/epostcard/dl/FinalLetter_33-4318487_ZENTRUSTINC_04072025_00.pdf"
              target="_blank"
              className="underline ml-1 font-semibold hover:text-emerald-200"
            >
              View determination letter
            </a>
          </p>

          {/* CTA BUTTON */}
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl"
            asChild
          >
            <Link href="/stewardship">Enter the Stewardship Portal</Link>
          </Button>
        </div>

        {/* RIGHT SIDE: MISSION AREAS */}
        <div className="space-y-4 backdrop-blur-sm">

          <h3 className="text-2xl font-bold mb-2 drop-shadow">Our Mission Areas</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {missionAreas.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-white/10 backdrop-blur text-white shadow">
                <div className="font-semibold text-lg mb-1">{item.title}</div>
                <div className="text-xs opacity-90 mb-1">{item.status}</div>
                <p className="text-xs opacity-80 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-bold drop-shadow">The Journey Begins</h4>
            <p className="text-sm opacity-90 drop-shadow">
              Building long-term ecological and community architectures that support regeneration.
            </p>
            <Button asChild size="sm" className="mt-3 bg-white/10 backdrop-blur text-white hover:bg-white/20 w-full">
              <Link href="/about">Explore Our Vision</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
