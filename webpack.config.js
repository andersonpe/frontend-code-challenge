const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/bundle'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Real State',
      myPageHeader: 'Real State',
      template: './src/app/index.html',
      path: path.join(__dirname, "../dist/"),
      filename: 'index.html' 
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './bundle'),
    compress: true,
    port: 9000
  }
};
