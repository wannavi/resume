/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const name = "resume";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${name}/` : "",
};

module.exports = nextConfig;
