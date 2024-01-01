/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: {
    rules: [
      {
        test: /\.js/,
        use: [{ loader: "@wyw-in-js/webpack-loader" }],
      },
    ],
  },
};

module.exports = nextConfig;
