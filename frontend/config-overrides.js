const {
  override,
  addWebpackAlias,
  addWebpackPlugin,
} = require("customize-cra");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  webpack: override(
    addWebpackAlias({
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
    }),
    addWebpackPlugin(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src/assets"),
            to: "assets",
          },
        ],
      }),
    ),
  ),
};
