const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';

const config = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js'
  },
  devtool: dev ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true
          // fix: true DO WE WANT TO ENABLE AUTO FIX?
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(
      dev ? [] : ['dist'],
      {
        root: path.resolve(__dirname, '../')
        // exclude: [ 'dist/tmp' ] DO WE WANT TO REMOVE PREVIOUS PACKAGES EVERYTIME WE BUILD?
      }
    ),
    new webpack.optimize.UglifyJsPlugin({
      mangle: dev ? false : true,
      sourcemap: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '**/*'),
        to: path.resolve(__dirname, 'dist')
      }
    ],
    {
      ignore: [
        'node_modules/**/*',
        'tmp/**/*',
        'dist/**/*',
        'npm-debug.log'
      ],
      copyUnmodified: dev ? false : true
    })
  ]
};
module.exports = config;
