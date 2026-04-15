import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Declares Turbopack usage (`next dev --turbo`) so Next does not warn that only webpack is configured.
  turbopack: {},
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [{ source: "/mission", destination: "/about", permanent: true }];
  },
  images: {
    remotePatterns: [],
  },
  // Avoids dev-only RSC/client-manifest bugs with SegmentViewNode (Next 15 devtools).
  // Re-enable when upgrading Next if you use the App Router segment explorer in DevTools.
  experimental: {
    devtoolSegmentExplorer: false,
  },
  // Dev uses Turbopack via `next dev --turbo` (see package.json) to avoid webpack server
  // chunk/runtime mismatches (MODULE_NOT_FOUND ./598.js, __webpack_modules__ not a function)
  // that show up often with OneDrive or interrupted compiles. This hook applies only to webpack
  // (`npm run dev:webpack`).
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
