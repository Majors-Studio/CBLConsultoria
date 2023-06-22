/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "static.wixstatic.com",
      "images.unsplash.com",
      "source.unsplash.com",
    ],
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    PHONE_NUMBER: "5511973664376",
  },
};

module.exports = nextConfig;
