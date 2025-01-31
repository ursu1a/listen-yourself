/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    disableWebpackCache: true,
  },
};

module.exports = nextConfig;
