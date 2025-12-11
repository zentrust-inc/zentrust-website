"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [offsetY, setOffsetY] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  /* PARALLAX SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.3)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* PARTICLE FOG ANIMATION */
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
      speed: Math.random() * 0.4 + 0.2,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255,255,255,0.25)"
        ctx.fill()

        p.y -= p.speed
        if (p.y < 0) p.y = height
      })

      requestAnimationFrame(animate)
    }

    animate()

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", resize)

    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* 🔥 HERO BACKGROUND (Your Forest Image + Parallax) */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url('/images/zentrust-hero-image.jpeg')`,
          transform: `translateY(${offsetY}px)`,
        }}
      />

      {/* 🌿 GREEN / DARK OVERLAY */}
      <div className="absolute inset-0 bg-emerald-900/40 backdrop-blur-[1px]" />

      {/* ✨ PARTICLE FOG CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 🌞 CONTENT */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto text-white drop-shadow-xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Healing Land.<br />
          Elevating Humanity.<br />
          Science for Regeneration.
        </h1>

        <p className="mt-6 text-lg md:text-xl font-light max-w-2xl mx-auto">
          ZenTrust is a <strong>501(c)(3) public charity</strong> advancing regenerative ecology,
          BPSS integrative wellness research, and open scientific education.
        </p>

        <Button
          size="lg"
          className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl"
          asChild
        >
          <Link href="/stewardship">Enter the Stewardship Portal</Link>
        </Button>
      </div>

      {/* 🌫 BOTTOM FADE */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
