// next.config.ts
import type { NextConfig } from "next";

const repo = "next15-todos";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined
};

export default nextConfig;
