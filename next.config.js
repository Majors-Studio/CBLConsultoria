/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "static.wixstatic.com",
      "images.unsplash.com",
      "source.unsplash.com",
      "cdn-icons-png.flaticon.com",
      "cdn.icon-icons.com",
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

    CONTENTFUL_SPACE_ID: "gh2o5fgrc98m",
    CONTENTFUL_ACCESS_TOKEN: "Tol4tJb-WKGtUxyg0mKhHjmczuwz6XPL9TvsTRl76Z8",
  },
}

module.exports = nextConfig;
