/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  eslint: {
    ignoreDuringBuilds: true, 
  },
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'], 
  },
};

module.exports = nextConfig;
