/* eslint-disable */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 8080,
      historyApiFallback: true,
      proxy: {
        '/api': 'http://localhost:3000'
      }
    }
});