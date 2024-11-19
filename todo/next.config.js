/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@fullcalendar/common',
    '@fullcalendar/daygrid',
    '@fullcalendar/react',
    '@fullcalendar/resource',
    '@fullcalendar/resource-timeline',
  ],
};

module.exports = nextConfig;
