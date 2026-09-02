import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/yacht-advisor",
  assetPrefix: "/yacht-advisor",
};
export default nextConfig;
