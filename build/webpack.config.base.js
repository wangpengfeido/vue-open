const path = require('path');
module.exports = {
  entry: {
    'vue-open': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  externals: {
    vue: 'vue',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
      },
    ],
  },
};
