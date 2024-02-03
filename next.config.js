/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.autoclikfastfit.com', 'autoclick.ach.co.th', 'http://localhost:8085','http://localhost:1337','127.0.0.1','3x51s9tl-8085.asse.devtunnels.ms'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["3x51s9tl-3000.asse.devtunnels.ms", "localhost:3000"]
    }
  }
};

module.exports = nextConfig;