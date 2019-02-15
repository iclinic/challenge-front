const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm

module.exports = {
  mode: 'development',
  entry: './src/pages/index.js',
  plugins: [
    new HtmlWebpackPlugin({ template: './src/pages/index.html' })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
