const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pkg = require('./package.json');
const SRC_PATH = path.resolve(__dirname, 'src');
const DEST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
  name: 'main',
  mode: 'production',
  entry: `${SRC_PATH}/index.js`,
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  performance: {hints: false},
  output: {
    path: DEST_PATH,
    filename: '[name].bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: `${SRC_PATH}/index.html`})],
  devServer: {
    contentBase: DEST_PATH,
    port: 3000,
    open: 'Google Chrome Canary',
    watchContentBase: true,
    historyApiFallback: true
  }
};
