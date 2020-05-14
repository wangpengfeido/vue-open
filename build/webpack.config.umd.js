const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = webpackMerge(baseConfig, {
  output: {
    filename: '[name].umd.js',
    libraryExport: 'default',
    library: 'vueOpen',
    libraryTarget: 'umd',
  },
  mode: 'production',
  externals: {
    vue: 'Vue',
  },
});

module.exports = config;
