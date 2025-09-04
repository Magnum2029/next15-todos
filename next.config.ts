// next.config.ts
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // gera site 100% estático para o GitHub Pages
  output: 'export',

  // base do projeto (IMPORTANTÍSSIMO p/ project pages)
  basePath: isProd ? '/next15-todos' : '',

  // garante que os assets (CSS/JS) carreguem no GitHub Pages
  assetPrefix: isProd ? '/next15-todos/' : undefined,

  // ajuda o Pages a encontrar index.html nas pastas
  trailingSlash: true,
};

export default nextConfig;
