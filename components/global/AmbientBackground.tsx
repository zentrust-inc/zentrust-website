"use client";

import { useRef, useEffect } from "react";
import { Leaf, Bird, Sparkles, Flower2 } from "lucide-react";

export function AmbientBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Extract Lucide SVG path into Path2D
  const makePath = (Icon: any) => {
    const svg = Icon({ size: 64 });
    const path = svg.props.children.find((c: any) => c.type === "path");
    return new Path2D(path.props.d);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.innerWidth >= 768) return; // mobile only

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const leafPath = makePath(Leaf);
    const birdPath = makePath(Bird);
    const sparklePath = makePath(Sparkles);
    const flowerPath = makePath(Flower2);

    const pollenCount = 40;
    const pollen = Array.from({ length: pollenCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      s: Math.random() * 0.4 + 0.1,
    }));

    const leaves = Array.from({ length: 6 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      rot: Math.random() * 360,
      drift: Math.random() * 0.4 + 0.2,
    }));

    const birds = Array.from({ length: 2 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const dark = document.documentElement.classList.contains("dark");

      if (!dark) {
        // 🌿 Light Mode Botanical Background
        const g = ctx.createLinearGradient(0, 0, 0, height);
        g.addColorStop(0, "rgba(235,250,242,1)");
        g.addColorStop(1, "rgba(220,242,230,1)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);

        // Pollen
        pollen.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,200,0.35)";
          ctx.fill();
          p.y -= p.s;
          if (p.y < -10) p.y = height + 10;
        });

        // Leaves
        leaves.forEach(l => {
          ctx.save();
          ctx.translate(l.x, l.y);
          ctx.rotate((l.rot * Math.PI) / 180);
          ctx.scale(0.7, 0.7);
          ctx.fillStyle = "rgba(16,122,72,0.28)";
          ctx.fill(leafPath);
          ctx.restore();

          l.y -= l.drift;
          l.rot += 0.3;
          if (l.y < -50) {
            l.y = height + 40;
            l.x = Math.random() * width;
          }
        });

        // Birds (butterfly analog)
        birds.forEach(b => {
          const yOffset = Math.sin(t * 2 + b.phase) * 6;

          ctx.save();
          ctx.translate(b.x, b.y + yOffset);
          ctx.scale(0.6, 0.6);
          ctx.globalAlpha = 0.55;
          ctx.fillStyle = "rgba(0,140,255,0.65)";
          ctx.fill(birdPath);
          ctx.restore();

          b.y -= 0.6;
          b.x += Math.sin(t + b.phase) * 0.6;

          if (b.y < -40) {
            b.y = height + 40;
            b.x = Math.random() * width;
          }
        });
      } else {
        // 🌌 Dark Mode Cosmic Background
        const g = ctx.createRadialGradient(width / 2, height / 2, 20, width / 2, height / 2, height);
        g.addColorStop(0, "rgba(6,10,28,1)");
        g.addColorStop(1, "rgba(2,4,12,1)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);

        // Stars
        ctx.fillStyle = "white";
        for (let i = 0; i < 80; i++) {
          const x = (Math.sin(i * 12.2) * 2000 + 2000) % width;
          const y = (Math.cos(i * 8.3) * 1500 + 1500) % height;
          ctx.globalAlpha = 0.3 + Math.sin(t * 4 + i) * 0.2;
          ctx.beginPath();
          ctx.arc(x, y, 1.1, 0, Math.PI * 2);
          ctx.fill();
        }

        // Aurora
        const aur = ctx.createLinearGradient(0, height * 0.2, width, height * 0.8);
        aur.addColorStop(0, "rgba(140,90,255,0.15)");
        aur.addColorStop(0.5, "rgba(0,230,255,0.12)");
        aur.addColorStop(1, "rgba(0,255,210,0.14)");
        ctx.fillStyle = aur;
        ctx.fillRect(0, 0, width, height);
      }

      t += 0.01;
      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />
  );
}
