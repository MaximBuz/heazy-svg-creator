/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'api.producthunt.com',
    ],
  },
}

module.exports = nextConfig
