import type { NextConfig } from 'next';

const nextConfig = {
  /* config options here */

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bfudvcqvyaxvyfrxrjnf.supabase.co',
        pathname: '/storage/v1/object/**',
      },
    ],
  },
};

export default nextConfig;
