// @ts-check
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Temporarily ignore ESLint during build (remove after fixing all issues)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Temporarily ignore TypeScript errors during build (remove after fixing)
    ignoreBuildErrors: true,
  },
  images: {
    // Add your image domains here if using next/image
    domains: [],
  },
  webpack: (config) => {
    // Add any custom webpack configurations here
    return config;
  },
  // Enable modern browser features
  experimental: {

  },
  // Polyfills for older browsers
  future: {
    webpack5: true,
  },
  // Environment variables
  env: {
    // Add your environment variables here
  }
};

export default nextConfig;