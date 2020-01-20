const withCSS = require("@zeit/next-css");
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = withCSS({
  cssLoaderOptions: {
    importLoaders: 1
  },
  webpack: function(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  }
});
