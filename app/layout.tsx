import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { DarkSky } from "@/components/background/DarkSky";
import "@/app/globals.css";

/* -----------------------------------------
   Metadata
------------------------------------------ */
export const metadata: Metadata = {
  title: "ZenTrust",
  description:
    "ZenTrust is a 501(c)(3) public charity advancing regenerative ecology, integrative wellbeing research, and open scientific education.",
};

/* -----------------------------------------
   Root Layout
------------------------------------------ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 🌌 Global dark-mode sky (dark mode only via CSS) */}
          <DarkSky />

          {/* App content sits ABOVE the sky */}
          <div className="relative z-10 min-h-screen text-foreground">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
