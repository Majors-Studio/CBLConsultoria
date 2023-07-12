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
    SERVICE_ID: "service_57x8ngt",
    TEMPLATE_ID: "template_hg8njfj",
    PUBLIC_KEY: "n4kNGxJoxsUwbYu2k",
    WORDPRESS_API_URL: "http://cblconsultoria.local/graphql",
    CONTENTFUL_SPACE_ID: "xllzfatgqvcu",
    CONTENTFUL_ACCESS_TOKEN: "1eaHiuJMJqaihTs9ACRBiyZSRERVzx-SF-hr-oSTmMs",
  },
}

module.exports = nextConfig;
