const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const pkg = require('./package.json');

// NOTE: In reality, we should be using vue-loader and .vue files to pre-compile
//  the Vue code so that we only need to include the runtime in the main app.
// @see https://vue-loader.vuejs.org/guide/

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${pkg.name}.js`,
    library: pkg.name,
    libraryTarget: 'commonjs2'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      commonjs: 'vue',
      amd: 'vue'
    }
  }
};
