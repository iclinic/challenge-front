const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/pages/index.js',
  plugins: [
    new HtmlWebpackPlugin({template: './src/pages/index.html'})
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
};