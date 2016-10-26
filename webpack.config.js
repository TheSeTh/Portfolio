var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [{ 
      test: /\.js$/, 
      exclude: /node_modules/, 
      loader: "babel-loader" 
    }]
  }
};