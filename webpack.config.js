const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: ["babel-loader", "eslint-loader"],
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpeg|jpg|gif|ico)?$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "./src/index.js"),
      filename: "index.js",
    }),
  ].filter(Boolean),
};
