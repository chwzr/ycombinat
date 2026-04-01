/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  trailingSlash: false,
  output: "export",
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH,
  experimental: {
    webpackBuildWorker: true,
  },
  webpack(config, context) {
    config.module.rules.push({
      test: /\.txt$/,
      use: "raw-loader",
    });
    return config;
  },
};
