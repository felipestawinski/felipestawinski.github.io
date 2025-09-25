import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  // Only apply basePath and assetPrefix in production for GitHub Pages
  ...(isProduction && {
    basePath: '/felipestawinski.github.io',
    assetPrefix: '/felipestawinski.github.io/',
  }),
};

export default nextConfig;