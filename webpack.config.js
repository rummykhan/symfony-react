var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'web/build/');
var APP_DIR = path.resolve(__dirname, 'app/Resources/assets/js');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
