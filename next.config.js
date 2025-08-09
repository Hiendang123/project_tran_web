/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/certificates/:path*',
        destination: '/api/certificates/:path*',
      },
    ]
  },
}

module.exports = nextConfig
