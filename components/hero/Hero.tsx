"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [offsetY, setOffsetY] = useState(0)
  const mobileCanvasRef = useRef<HTMLCanvasElement | null>(null)

  // Desktop parallax (forest image)
  useEffect(() => {
    const onScroll = () => {
      setOffsetY(window.scrollY * 0.3)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Mobile immersive background (inside hero only)
  useEffect(() => {
    const canvas = mobileCanvasRef.current
    if (!canvas) return
    if (window.innerWidth >= 768) return // only run on mobile

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const isDark = () =>
      document.documentElement.classList.contains("dark")

    // light mode elements
    const pollenCount = 40
    const leafCount = 8
    const butterflyCount = 3

    const pollen = Array.from({ length: pollenCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.4,
      s: Math.random() * 0.4 + 0.1,
    }))

    const leaves = Array.from({ length: leafCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 18 + 12,
      drift: Math.random() * 0.4 + 0.2,
      rot: Math.random() * 360,
      rotSpeed: Math.random() * 0.3 + 0.05,
    }))

    const butterflies = Array.from({ length: butterflyCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      s: Math.random() * 0.7 + 0.4,
      phase: Math.random() * Math.PI * 2,
      color: ["#FF8FD5", "#FFA74D", "#74D7FF", "#A6FF9F"][
        Math.floor(Math.random() * 4)
      ],
    }))

    // dark mode stars
    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.3 + 0.3,
      twinkle: Math.random() * 0.6 + 0.4,
    }))

    let t = 0

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      if (!isDark()) {
        // light background
        const lg = ctx.createLinearGradient(0, 0, 0, height)
        lg.addColorStop(0, "rgba(245,255,245,1)")
        lg.addColorStop(1, "rgba(230,245,235,1)")
        ctx.fillStyle = lg
        ctx.fillRect(0, 0, width, height)

        // pollen
        pollen.forEach((p) => {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(255,255,200,0.35)"
          ctx.fill()
          p.y -= p.s
          if (p.y < -10) p.y = height + 10
        })

        // leaves
        leaves.forEach((l) => {
          ctx.save()
          ctx.translate(l.x, l.y)
          ctx.rotate((l.rot * Math.PI) / 180)
          ctx.fillStyle = "rgba(46,139,87,0.45)"
          ctx.beginPath()
          ctx.ellipse(0, 0, l.size, l.size * 0.45, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()

          l.y -= l.drift
          l.rot += l.rotSpeed
          if (l.y < -30) {
            l.y = height + 40
            l.x = Math.random() * width
          }
        })

        // butterflies
        butterflies.forEach((b) => {
          const flap = Math.sin(t * 3 + b.phase) * 5

          ctx.save()
          ctx.translate(b.x, b.y)
          ctx.fillStyle = b.color + "CC"
          ctx.beginPath()
          ctx.ellipse(-7, 0, 9 + flap, 13, 0, 0, Math.PI * 2)
          ctx.ellipse(7, 0, 9 - flap, 13, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()

          b.y -= b.s
          b.x += Math.sin(t + b.phase) * 0.8
          if (b.y < -20) {
            b.y = height + 25
            b.x = Math.random() * width
          }
        })
      } else {
        // dark cosmic background
        const dg = ctx.createRadialGradient(
          width / 2,
          height / 2,
          20,
          width / 2,
          height / 2,
          height * 0.9,
        )
        dg.addColorStop(0, "rgba(10,10,28,1)")
        dg.addColorStop(1, "rgba(2,2,12,1)")
        ctx.fillStyle = dg
        ctx.fillRect(0, 0, width, height)

        // stars
        stars.forEach((s) => {
          ctx.beginPath()
          ctx.arc(
            s.x,
            s.y,
            s.r * (0.6 + Math.sin(t + s.twinkle) * 0.2),
            0,
            Math.PI * 2,
          )
          ctx.fillStyle = `rgba(200,180,255,${s.twinkle})`
          ctx.fill()
        })

        // aurora
        const aurora = ctx.createLinearGradient(
          0,
          height * 0.3,
          width,
          height * 0.7,
        )
        aurora.addColorStop(0, "rgba(120,70,255,0.18)")
        aurora.addColorStop(0.5, "rgba(60,180,255,0.16)")
        aurora.addColorStop(1, "rgba(0,255,200,0.18)")
        ctx.fillStyle = aurora
        ctx.fillRect(0, 0, width, height)
      }

      t += 0.01
      requestAnimationFrame(animate)
    }

    animate()

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section
      className="
        relative min-h-screen flex items-center justify-center text-center overflow-hidden
        pt-24 md:pt-32
      "
    >
      {/* MOBILE ANIMATED BACKGROUND (no image) */}
      <canvas
        ref={mobileCanvasRef}
        className="absolute inset-0 w-full h-full -z-10 block md:hidden"
      />

      {/* DESKTOP BACKGROUND IMAGE (with parallax) */}
      <div
        className="
          absolute inset-0 bg-cover bg-center will-change-transform
          hidden md:block
        "
        style={{
          backgroundImage: "url('/images/zentrust-hero-image.jpeg')",
          transform: `translateY(${offsetY}px)`,
        }}
      />

      {/* DESKTOP OVERLAY */}
      <div className="absolute inset-0 bg-emerald-900/40 backdrop-blur-[1px] hidden md:block" />

      {/* HERO TEXT BLOCK */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">
        {/* BADGE */}
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium backdrop-blur mb-6">
          <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
          ZenTrust · Ecological & Scientific Stewardship
        </div>

        {/* HEADLINE */}
        <h1 className="font-bold leading-tight space-y-2">
          <span className="block text-4xl sm:text-5xl md:text-6xl">
            Healing Land.
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl text-orange-300">
            Elevating Humanity.
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl">
            Science for Regeneration.
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-lg md:text-xl font-light max-w-2xl mx-auto">
          ZenTrust is a <strong>501(c)(3) public charity (EIN 33-4318487)</strong> advancing
          regenerative ecology, BPSS-integrative wellness research, and open scientific
          education.
        </p>

        {/* IRS LINK */}
        <p className="text-sm opacity-90 mt-2">
          Recognized by the IRS as a 170(b)(1)(A)(vi) public charity.
          <a
            href="https://apps.irs.gov/pub/epostcard/dl/FinalLetter_33-4318487_ZENTRUSTINC_04072025_00.pdf"
            target="_blank"
            className="underline ml-1 font-semibold hover:text-emerald-200"
          >
            View official determination letter
          </a>
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl"
            asChild
          >
            <Link href="/stewardship">Enter the Stewardship Portal</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
