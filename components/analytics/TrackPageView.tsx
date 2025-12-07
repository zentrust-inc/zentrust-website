"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function TrackPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!measurementId || typeof window === "undefined") {
      return
    }

    const gtag = (window as any).gtag as ((...args: unknown[]) => void) | undefined
    if (!gtag) return

    const pagePath = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`
    gtag("config", measurementId, {
      page_path: pagePath,
    })
  }, [pathname, searchParams])

  return null
}
