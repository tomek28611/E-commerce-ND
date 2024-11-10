/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['auto-dily.s3.amazonaws.com', 'moto-rental.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
