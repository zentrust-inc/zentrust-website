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
 * Your measurement IDs
 * Keep these centralized so you do not accidentally mismatch loader vs config.
 */
const GA4_PRIMARY_ID = "G-V8LRV2WBDE";
const GA4_SECONDARY_ID = "G-2G4CVKHFZR";
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

        {/* Only load Google tags on real production deployments */}
        {IS_VERCEL_PRODUCTION && (
          <>
            {/* CONSENT DEFAULT
               Note: this only sets the default state.
               If you use a consent banner/CMP, it must call gtag('consent','update', ...) after user choice.
            */}
            <Script id="consent-default" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}

                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  analytics_storage: 'granted'
                });
              `}
            </Script>

            {/* GOOGLE TAG LOADER */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_PRIMARY_ID}`}
              strategy="afterInteractive"
            />

            {/* GOOGLE TAG INIT (GA4 + ADS) */}
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                // GA4 (keep both only if you truly need both properties)
                gtag('config', '${GA4_SECONDARY_ID}', { anonymize_ip: true });
                gtag('config', '${GA4_PRIMARY_ID}');

                // Google Ads
                gtag('config', '${GOOGLE_ADS_ID}');
              `}
            </Script>
          </>
        )}

        {/* SERVICE WORKER
           Gate by Vercel production, not NODE_ENV, because Preview builds also have NODE_ENV="production".
        */}
        {IS_VERCEL_PRODUCTION && (
          <Script id="sw-register" strategy="afterInteractive">
            {`
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').catch(() => {});
              }
            `}
          </Script>
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
