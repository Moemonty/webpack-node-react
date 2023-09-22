const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  plugins: [new HtmlWebpackPlugin()],
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: "[name].bundle.js.map",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // Don't apply it to files in node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    static: './dist',
  },
};
