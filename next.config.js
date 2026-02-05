/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/pokemon-catalog' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
