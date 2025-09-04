import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/next15-todos' : '',
  assetPrefix: isProd ? '/next15-todos/' : undefined,
  trailingSlash: true,
};

export default nextConfig;
