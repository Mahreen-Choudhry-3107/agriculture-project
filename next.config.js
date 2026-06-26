/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'agripunjab.gov.pk',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
