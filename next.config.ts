import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  optimizeFonts: true,
   images: {
    remotePatterns: [new URL('https://d1tm14lrsghf7q.cloudfront.net/public/media/**'),new URL('https://gavaznkafsh.com/**')],
  },
};

export default nextConfig;
