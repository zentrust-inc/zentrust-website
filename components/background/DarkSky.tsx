"use client";

/**
 * DarkSky
 * ----------
 * Canonical global dark-mode background.
 * Provides a unified night-sky canvas with subtle twinkling stars.
 * Mounted once at the app root. No interaction, no motion logic.
 */
export function DarkSky() {
  return (
    <div
      aria-hidden="true"
      className="
        fixed inset-0 z-0
        hidden dark:block
        pointer-events-none
      "
    >
      {/* Night sky gradient */}
      <div className="absolute inset-0 bg-dark-sky" />

      {/* Subtle star field */}
      <div className="absolute inset-0 starfield" />
    </div>
  );
}
