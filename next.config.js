/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // EXISTING unsplash config
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // ⭐ REQUIRED FOR TINA CLOUD MEDIA
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

export default nextConfig;
