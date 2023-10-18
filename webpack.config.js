const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.hbs$/, loader: "handlebars-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
  ].concat(
    ["index", "about"].map(page => {
      return new HtmlWebpackPlugin({
        title: `${page} page`,
        filename: `${page}.html`,
        template: `view/${page}.hbs`
      })
    })
  ),
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true
  },
  optimization: {
    runtimeChunk: "single",
  },

  mode: "development"
}