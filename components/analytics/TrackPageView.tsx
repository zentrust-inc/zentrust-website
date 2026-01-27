"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Drop-in replacement goals:
 * 1) Never loads Google tag scripts (RootLayout owns loading).
 * 2) Never causes Preview domains to emit analytics requests.
 * 3) Tracks page views only when gtag already exists (production-only).
 *
 * IMPORTANT:
 * - Set NEXT_PUBLIC_GA_MEASUREMENT_ID to your GA4 ID (G-XXXX).
 * - Vercel exposes NEXT_PUBLIC_VERCEL_ENV in the browser.
 */
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const isVercelProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

type GtagFn = (...args: any[]) => void;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const gtag = (window as any).gtag as GtagFn | undefined;
  return typeof gtag === "function" ? gtag : null;
}

export function TrackPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Hard gate: never emit on preview or local dev.
    if (!isVercelProduction) return;

    // Must have a real GA4 measurement id.
    if (!measurementId) return;

    const gtag = getGtag();
    if (!gtag) return;

    const qs = searchParams?.toString();
    const pagePath = qs ? `${pathname}?${qs}` : pathname;

    // Page view without reconfiguring unrelated ids.
    // This updates the page_path for the configured GA4 property.
    gtag("event", "page_view", {
      page_path: pagePath,
    });
  }, [pathname, searchParams]);

  return null;
}
