import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: false,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  trailingSlash: true,
  basePath: "/yacht-advisor",
  assetPrefix: "/yacht-advisor",
};
export default nextConfig;
