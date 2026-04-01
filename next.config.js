/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  trailingSlash: false,
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH,
};
