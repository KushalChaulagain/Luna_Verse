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
};

export default nextConfig;
