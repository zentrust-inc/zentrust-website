/** @type {import('next').NextConfig} */

// Import next-pwa safely (it may or may not be installed)
const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,           // 🔥 THIS IS THE KEY — DISABLE SERVICE WORKER
  register: false,
  skipWaiting: false,
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.tina.io',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "frame-ancestors 'self' http://localhost:3000 http://localhost:4001;",
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
