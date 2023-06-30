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
    SERVICE_ID: "service_32jf0yc",
    TEMPLATE_ID: "template_qzhmxhn",
    PUBLIC_KEY: "WRzY65xBH3hhgKsK5"
  },
};

module.exports = nextConfig;
