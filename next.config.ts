import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [],
  },
  // Avoids dev-only RSC/client-manifest bugs with SegmentViewNode (Next 15 devtools).
  // Re-enable when upgrading Next if you use the App Router segment explorer in DevTools.
  experimental: {
    devtoolSegmentExplorer: false,
  },
  // Webpack’s default dev filesystem cache uses .next/cache/webpack/*.pack.gz. Those files
  // go missing (ENOENT) when another process deletes or locks them — common with OneDrive
  // sync on Desktop. Memory cache is slower on cold compile but avoids corrupt chunks.
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  },
};

export default nextConfig;
