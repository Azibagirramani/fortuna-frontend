const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePath: [path.join(__dirname, 'scss')],
  },
  env: {
    backendUrl: process.env.backendUrl,
  }
}

module.exports = nextConfig
