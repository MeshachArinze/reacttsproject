/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcTraceProfiling: true,
    
  },
  swcMinify: false,
};

module.exports = nextConfig;
