import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    // Placeholder images are SVGs saved with a .png extension.
    // Set unoptimized: true so Next.js serves them as-is without trying to
    // run them through Sharp (which would fail on SVG content).
    // ⚠️  When you replace placeholders with real photos, set this to false
    // to re-enable Vercel's image optimisation pipeline.
    unoptimized: true,
  },
  // Compress output
  compress: true,
  // Enable React strict mode for best practices
  reactStrictMode: true,
};

export default nextConfig;
