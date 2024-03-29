/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  }
};

export default nextConfig;

// module.exports = {
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false, net: false, tls: false };
//     return config;
//   },
// };


