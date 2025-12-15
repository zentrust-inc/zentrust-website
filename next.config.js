/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─────────────────────────────
  // Build stability (MANDATORY)
  // ─────────────────────────────
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ─────────────────────────────
  // Canonical redirects (GOOGLE AD GRANTS)
  // ─────────────────────────────
  async redirects() {
    return [
      // WWW → non-WWW (single canonical domain)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.zentrust.world",
          },
        ],
        destination: "https://zentrust.world/:path*",
        permanent: true,
      },

      // Index variants → /
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // ─────────────────────────────
  // Images
  // ─────────────────────────────
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.tina.io",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // ─────────────────────────────
  // Security headers
  // ─────────────────────────────
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' http://localhost:3000 http://localhost:4001;",
          },
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
