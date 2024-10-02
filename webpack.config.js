const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '#assets': path.resolve(__dirname, 'public/assets'),
    },
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        loader: "ts-loader",
        test: /\.ts|tsx$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public/assets/favicon.ico'), to: path.resolve(__dirname, 'dist') },
        { from: path.resolve(__dirname, 'netlify/_redirects'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 4242,
    open: true,
    hot: true,
  },
  mode: "development",
};