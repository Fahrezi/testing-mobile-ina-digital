/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_PATH: process.env.BASE_PATH,
    API_BACKEND: process.env.API_BACKEND,
  },
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.BASE_PATH,
};

export default nextConfig;
