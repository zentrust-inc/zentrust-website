"use client"
import { useEffect, useRef } from "react"

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.innerWidth >= 768) return // Mobile only

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const isDark = () =>
      document.documentElement.classList.contains("dark")

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.6,
      s: Math.random() * 0.2 + 0.05,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)

        ctx.fillStyle = isDark()
          ? "rgba(180,160,255,0.1)"   // cosmic stars
          : "rgba(255,255,255,0.15)"  // nature pollen

        ctx.fill()

        p.y -= p.s
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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 pointer-events-none block md:hidden"
    />
  )
}
