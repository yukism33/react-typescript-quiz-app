const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const { start } = require('repl');

const outputPath = path.resolve(__dirname, 'build');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: outputPath,
    hot: true,
    open: true,
  },
});
