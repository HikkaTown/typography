/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
          @import './src/styles/__vars';
          @import './src/styles/__mixin';
      `,
  },
};
module.exports = nextConfig;
