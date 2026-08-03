import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Image Optimisation ────────────────────────────────────────────────────
  images: {
    // Modern formats: Next.js will auto-serve AVIF / WebP to supporting browsers
    formats: ["image/avif", "image/webp"],

    // Responsive device breakpoints for <Image> srcset
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048],

    // Sizes used for fixed-width images (icon, avatar, thumbnail)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache optimised images for 30 days (CDN-friendly)
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days in seconds

    // Allowed remote image hosts
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "**.cloudinary.com" },
      { protocol: "https", hostname: "**.githubusercontent.com" },
    ],

    // Allow SVGs served through the Image component with a strict CSP
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    contentDispositionType: "attachment",
  },

  // ─── Security / Cache Headers ──────────────────────────────────────────────
  async headers() {
    return [
      {
        // Long-term immutable caching for all public images
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache-control for the API-served workspace assets
        source: "/api/assets/serve",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        // Security headers applied to every response
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  // ─── Performance ────────────────────────────────────────────────────────────
  compress: true,        // Enable gzip/brotli compression
  poweredByHeader: false, // Don't expose server technology

  experimental: {
    // Tree-shake react-icons to only ship used icons
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
