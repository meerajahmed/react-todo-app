const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    "mode": "development",
    "entry": "src/index.js",
    "output": {
      "path": path.join(__dirname, '/dist'),
      "filename": "[name].[chunkhash:8].js"
    },
    "devtool": "source-map",
    "module": {
      "rules": [
        {
          "test": /\.(js|jsx)$/,
          "exclude": /node_modules/,
          "use": {
            "loader": "babel-loader",
            "options": {
              "presets": [
                "env",
                "react"
              ],
              "plugins": [
                "transform-class-properties",
                "transform-object-rest-spread"
              ]
            }
          }
        },
        {
          "test": /\.scss$/,
          "use": [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    "plugins": [new MiniCssExtractPlugin({filename: "[name]-[contenthash:8].css"})]
  }
};