/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio-website",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;