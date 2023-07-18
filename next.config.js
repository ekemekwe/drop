/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  images: {
    unoptimized: true,
    domains: ["gateway.ipfscdn.io"],
  },
};

module.exports = nextConfig;
