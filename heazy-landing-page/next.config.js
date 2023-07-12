const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['api.producthunt.com'],
  },
  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
