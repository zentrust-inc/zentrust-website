export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrackPageView } from "@/components/analytics/TrackPageView";
import { DarkSky } from "@/components/background/DarkSky";

/**
 * Vercel sets this automatically:
 * - production on your real domain
 * - preview on *.vercel.app
 * - development locally
 */
const IS_VERCEL_PRODUCTION = process.env.VERCEL_ENV === "production";

/**
 * Measurement IDs
 * NOTE: The gtag.js loader uses ONE ID, but you can config multiple IDs after.
 */
const GA4_LOADER_ID = "G-V8LRV2WBDE";
const GA4_CONFIG_IDS = ["G-V8LRV2WBDE", "G-2G4CVKHFZR"] as const;
const GOOGLE_ADS_ID = "AW-17898582360";

export const metadata: Metadata = {
  title: {
    default: "ZenTrust - Regenerative Agriculture & Environmental Stewardship",
    template: "%s | ZenTrust",
  },
  description:
    "ZenTrust promotes sustainable agriculture, environmental restoration, and community empowerment through research, education, and direct action programs.",
  metadataBase: new URL("https://zentrust.world"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />

        {/* PRODUCTION-ONLY: Google tags + service worker
           This prevents Vercel preview domains from being detected by Google diagnostics.
        */}
        {IS_VERCEL_PRODUCTION && (
          <>
            {/* GOOGLE TAG LOADER */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_LOADER_ID}`}
              strategy="afterInteractive"
            />

            {/* GOOGLE TAG INIT (NO CONSENT MODE)
               Option A: Consent Mode removed entirely.
            */}
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                // GA4
                ${GA4_CONFIG_IDS.map(
                  (id) => `gtag('config', '${id}', { anonymize_ip: true });`
                ).join("\n")}

                // Google Ads
                gtag('config', '${GOOGLE_ADS_ID}');
              `}
            </Script>

            {/* SERVICE WORKER */}
            <Script id="sw-register" strategy="afterInteractive">
              {`
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                }
              `}
            </Script>
          </>
        )}
      </head>

      <body className="font-sans" suppressHydrationWarning>
        <Suspense fallback={null}>
          <TrackPageView />
        </Suspense>

        <Suspense fallback={null}>
          <DarkSky />
        </Suspense>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
