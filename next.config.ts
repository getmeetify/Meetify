import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: [
        'https://symmetrical-barnacle-7jw9vwxx7wwc675-3000.app.github.dev/',
        'localhost:3000'
      ],
    },
  },
};

export default nextConfig;
