/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcTraceProfiling: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rb.gy",
        port: "",
        pathname: "/y9mwtb/**",
      },
      {
        protocol: "https",
        hostname: "rb.gy",
        port: "",
        pathname: "/xkacau/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["image/avif", "image/webp"],
  },
  swcMinify: false,
};

module.exports = nextConfig;
