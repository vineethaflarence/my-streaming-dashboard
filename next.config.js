/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org'], // Add TMDB hostname here
  },
};

module.exports = nextConfig;
