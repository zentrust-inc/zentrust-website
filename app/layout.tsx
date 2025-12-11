export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";

import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrackPageView } from "@/components/analytics/TrackPageView";
import { AmbientBackground } from "@/components/global/AmbientBackground";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ZenTrust - Regenerative Ecology & Scientific Stewardship",
    template: "%s | ZenTrust",
  },
  description:
    "ZenTrust is a 501(c)(3) public charity advancing regenerative ecology, BPSS-integrative wellness research, and open scientific education.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>

      <body className={`${inter.className} text-foreground relative overflow-x-hidden`}>
        {/* Global Mobile Ambient Background */}
        <AmbientBackground className="absolute inset-0 -z-10 block md:hidden" />

        <Suspense fallback={null}>
          <TrackPageView />
        </Suspense>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="flex-1 relative z-10">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
