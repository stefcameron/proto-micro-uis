const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src');
const DEST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: `${SRC_PATH}/index.js`
  },
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
    filename: '[name].bundle.[hash].js',
    publicPath: '/'
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
    publicPath: '/',
    port: 3000,
    open: 'Google Chrome Canary',
    watchContentBase: true,
    historyApiFallback: true
  }
};
