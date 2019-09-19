const jsonPlugin = require('rollup-plugin-json');
const resolvePlugin = require('rollup-plugin-node-resolve');
const cjsPlugin = require('rollup-plugin-commonjs');
const babelPlugin = require('rollup-plugin-babel');
const { uglify: uglifyPlugin } = require('rollup-plugin-uglify');

const pkg = require('./package.json');

const peerDeps = Object.keys(pkg.peerDependencies || {});

const banner = `/*!
* ${pkg.name} ${pkg.version}
*/`;

module.exports = {
  input: './src/index.js',
  output: [{
    file: `./dist/${pkg.name}.js`,
    format: 'cjs',
    sourcemap: true,
    banner
  }],
  preserveModules: false,
  external: [...peerDeps],
  plugins: [
    jsonPlugin(),
    resolvePlugin(),
    cjsPlugin({
      include: [
        'node_modules/**',

        // NOTE: this explicit path is required in order for this plugin to find
        //  the default export in this package
        // @see https://github.com/rollup/rollup-plugin-commonjs/issues/139#issuecomment-383884413
        '../node_modules/single-spa-react/lib/single-spa-react.js'
      ]
    }),
    babelPlugin({
      exclude: 'node_modules/**'
    }),
    uglifyPlugin()
  ]
};

