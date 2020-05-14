const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = webpackMerge(baseConfig, {
  output: {
    filename: '[name].common.js',
    libraryExport: 'default',
    library: 'vueOpen',
    libraryTarget: 'commonjs2',
  },
  mode: 'production',
  performance: {
    hints: false,
  },
  stats: {
    children: false,
  },
  optimization: {
    minimize: false,
  },
});

module.exports = config;
