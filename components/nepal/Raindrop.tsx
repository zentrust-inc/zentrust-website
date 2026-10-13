"use client";

import { useEffect, useRef, useState } from "react";

/* "Follow a raindrop": a scroll-driven cross-section of the hillside.
   Steps 0–2 show the pine monoculture, step 3 the layered forest.
   Brown = needle litter and runoff, blue = water that soaks in. */

const STEPS = [
  {
    title: "Monsoon rain falls on a pine hillside",
    body: "Most of the year's rain arrives in a few months. What happens next depends on what covers the ground.",
    swatch: "var(--spring)",
  },
  {
    title: "Pine needles shed the water",
    body: "Pine needles pile up into a dry, slow-rotting mat that little grows through. Rain runs over it and carries soil downhill.",
    swatch: "var(--duff)",
  },
  {
    title: "Little soaks in, so the spring fades",
    body: "With less water reaching the ground below, springs that families rely on weaken in the dry season.",
    swatch: "var(--duff)",
  },
  {
    title: "A layered forest drinks the rain",
    body: "Under mixed trees, shrubs and ground cover, leaf litter and roots keep the soil open. Rain soaks in and feeds the spring.",
    swatch: "var(--spring)",
  },
];

// Hill surface as a polyline; y(x) places trees and arrows on it.
const SURF: [number, number][] = [
  [0, 150], [140, 182], [280, 228], [420, 282], [560, 330], [700, 372], [820, 404],
];
function y(x: number) {
  for (let i = 0; i < SURF.length - 1; i++) {
    const [x0, y0] = SURF[i];
    const [x1, y1] = SURF[i + 1];
    if (x >= x0 && x <= x1) return y0 + ((x - x0) / (x1 - x0)) * (y1 - y0);
  }
  return SURF[SURF.length - 1][1];
}
const surfD = "M" + SURF.map(([a, b]) => `${a} ${b}`).join(" L");
const offset = (dy: number) => "M" + SURF.map(([a, b]) => `${a} ${b + dy}`).join(" L");

const PINES = [50, 115, 185, 250, 320, 390, 455, 525, 595];
const BROAD = [
  { x: 70, r: 46, h: 96 }, { x: 205, r: 52, h: 104 }, { x: 350, r: 44, h: 92 }, { x: 495, r: 50, h: 100 },
];
const MID = [135, 280, 425, 570];
const SHRUB = [30, 100, 170, 240, 310, 380, 450, 520, 590, 640];
const DROPS = Array.from({ length: 16 }, (_, i) => ({ x: 30 + i * 41 + ((i * 37) % 23), d: (i * 0.29) % 1.4 }));
const SINK_X = [60, 130, 200, 270, 340, 410, 480, 550, 620];

export function Raindrop() {
  const [step, setStep] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setStep(Number((e.target as HTMLElement).dataset.step));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const pine = step < 3;
  const cls = (on: boolean) => "rd-fade" + (on ? "" : " rd-off");

  return (
    <div className="np-rain-grid">
      <div className="np-rain-stage" aria-hidden="true">
        <svg className="rd" viewBox="0 0 820 520" role="img">
          <defs>
            <clipPath id="rd-ground">
              <path d={`${surfD} L820 520 L0 520 Z`} />
            </clipPath>
          </defs>

          {/* Ground, topsoil and groundwater */}
          <path d={`${surfD} L820 520 L0 520 Z`} fill="#b9a786" />
          <path d={`${offset(26)} L820 520 L0 520 Z`} fill="#a8946f" />
          <g clipPath="url(#rd-ground)">
            <path
              className="rd-fade"
              d="M0 430 C 220 418, 470 440, 820 452 L820 520 L0 520 Z"
              fill="var(--spring)"
              opacity={pine ? 0.22 : 0.62}
            />
            <path
              className="rd-fade"
              d="M0 380 C 220 372, 470 398, 820 418 L820 520 L0 520 Z"
              fill="var(--spring)"
              opacity={pine ? 0 : 0.28}
            />
          </g>

          {/* Pine monoculture: needle mat on the surface */}
          <path className={cls(pine)} d={offset(-3)} fill="none" stroke="var(--duff)" strokeWidth={step >= 1 && pine ? 9 : 5} strokeLinecap="round" />
          <g className={cls(pine)}>
            {PINES.map((x) => {
              const b = y(x);
              return (
                <g key={x}>
                  <line x1={x} y1={b} x2={x} y2={b - 118} stroke="#3d2f22" strokeWidth={3} />
                  <path d={`M${x - 15} ${b - 52} L${x} ${b - 128} L${x + 15} ${b - 52} Z`} fill="#2b4a3a" />
                  <path d={`M${x - 11} ${b - 84} L${x} ${b - 136} L${x + 11} ${b - 84} Z`} fill="#335744" />
                </g>
              );
            })}
          </g>

          {/* Layered forest */}
          <g className={cls(!pine)}>
            {SHRUB.map((x) => (
              <ellipse key={"s" + x} cx={x} cy={y(x) - 6} rx={20} ry={10} fill="#7fa64a" />
            ))}
            {MID.map((x) => {
              const b = y(x);
              return (
                <g key={"m" + x}>
                  <line x1={x} y1={b} x2={x} y2={b - 52} stroke="#4a3a28" strokeWidth={3} />
                  <circle cx={x} cy={b - 62} r={24} fill="#8bb24f" />
                  <circle cx={x - 8} cy={b - 60} r={3.5} fill="#e0a83a" />
                  <circle cx={x + 9} cy={b - 68} r={3.5} fill="#e0a83a" />
                </g>
              );
            })}
            {BROAD.map(({ x, r, h }) => {
              const b = y(x);
              return (
                <g key={"b" + x}>
                  <line x1={x} y1={b} x2={x} y2={b - h + 10} stroke="#4a3a28" strokeWidth={4} />
                  <circle cx={x} cy={b - h} r={r} fill="#4f7f35" />
                  <circle cx={x + r * 0.45} cy={b - h + 10} r={r * 0.6} fill="#5e8f3c" />
                </g>
              );
            })}
            {/* Roots */}
            {[...BROAD.map((t) => t.x), ...MID].map((x) => {
              const b = y(x);
              return (
                <path key={"r" + x} d={`M${x} ${b} q -14 26 -26 40 M${x} ${b} q 4 30 2 48 M${x} ${b} q 16 22 28 34`} fill="none" stroke="#6d5535" strokeWidth={2} />
              );
            })}
          </g>

          {/* Rain */}
          <g>
            {DROPS.map((d, i) => (
              <path
                key={i}
                className="rd-drop"
                style={{ animationDelay: `${d.d}s` }}
                d={`M${d.x} ${y(d.x) - 170} q -4 8 0 12 q 4 -4 0 -12 Z`}
                fill="var(--spring)"
              />
            ))}
          </g>

          {/* Runoff over the needle mat */}
          <g className={cls(pine && step >= 1)}>
            {[-16, -26].map((dy, i) => (
              <path
                key={dy}
                className="rd-run"
                style={{ animationDelay: `${i * 0.4}s` }}
                d={offset(dy)}
                fill="none"
                stroke="var(--duff)"
                strokeWidth={4}
                strokeDasharray="18 30"
                strokeLinecap="round"
              />
            ))}
            {[640, 690, 735, 770].map((x, i) => (
              <circle key={x} cx={x} cy={y(x) - 10 - (i % 2) * 6} r={4} fill="#7a5a2c" />
            ))}
            <text x={300} y={y(300) - 150}>Runoff carries soil away</text>
          </g>

          {/* Water soaking in */}
          <g>
            {SINK_X.map((x, i) => {
              const on = !pine || i % 4 === 0;
              return (
                <path
                  key={x}
                  className={"rd-fade" + (on ? "" : " rd-off")}
                  d={`M${x} ${y(x) + 14} l 0 ${pine ? 18 : 40} m -6 -8 l 6 8 l 6 -8`}
                  fill="none"
                  stroke="var(--spring)"
                  strokeWidth={3}
                  strokeLinecap="round"
                  opacity={pine ? 0.55 : 1}
                />
              );
            })}
          </g>

          {/* The spring */}
          <g>
            <path d="M742 400 q 24 4 40 18 q 14 12 38 16 L820 446 L742 446 Z" fill="#8f7d5e" />
            <path className={cls(pine)} d="M760 408 q 20 10 42 22" fill="none" stroke="#6f6046" strokeWidth={3} strokeDasharray="4 6" />
            <g className={cls(!pine)}>
              <path className="rd-flow" d="M752 404 q 22 12 44 26 q 10 6 24 10" fill="none" stroke="var(--spring)" strokeWidth={6} strokeLinecap="round" strokeDasharray="10 8" />
              <ellipse cx={792} cy={444} rx={30} ry={6} fill="var(--spring)" />
            </g>
            <text x={598} y={480} className={cls(step === 2)}>The spring weakens</text>
            <text x={622} y={480} className={cls(!pine)}>The spring is fed</text>
          </g>

          <text x={20} y={500} className={cls(pine)}>Pine monoculture</text>
          <text x={20} y={500} className={cls(!pine)}>Layered forest</text>
        </svg>
      </div>

      <div className="np-rain-steps">
        {STEPS.map((s, i) => (
          <div
            key={s.title}
            ref={(el) => { refs.current[i] = el; }}
            data-step={i}
            className={"np-step" + (step === i ? " is-active" : "")}
          >
            <div className="np-step-card">
              <h3>
                <span className="np-step-swatch" style={{ background: s.swatch }} aria-hidden="true" />
                {s.title}
              </h3>
              <p>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
