import type { Metadata } from "next";
import "@/app/globals.css";
import { DarkSky } from "@/components/background/DarkSky";

export const metadata: Metadata = {
  title: "ZenTrust",
  description:
    "ZenTrust is a 501(c)(3) public charity advancing regenerative ecology, integrative wellbeing research, and open scientific education.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-foreground">
        {/* 🌌 Global dark-mode sky (visible only when .dark is present) */}
        <DarkSky />

        {/* App content ABOVE background */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
