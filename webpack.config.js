const path = require('path');
const fs = require('fs');

const externals = fs.readdirSync('node_modules').filter(x => ['.bin'].indexOf(x) === -1).reduce((total, current) => Object.assign({}, total, { [current]: `commonjs ${current}` }));

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  target: 'electron-renderer',
  externals,
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
};
