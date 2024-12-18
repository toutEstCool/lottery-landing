import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cutesolution.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      }
    ]
  }
};

export default nextConfig;
