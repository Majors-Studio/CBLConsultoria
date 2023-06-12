/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "static.wixstatic.com", "images.unsplash.com", "source.unsplash.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
