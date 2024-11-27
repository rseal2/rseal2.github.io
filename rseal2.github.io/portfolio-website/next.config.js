// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static exports
    images: {
      unoptimized: true, // Necessary for GitHub Pages to handle images
    },
  };
  
  module.exports = nextConfig;
  