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
  plugins: [
    new CleanWebpackPlugin(
      dev ? [] : ['dist'], 
      {
        root: path.resolve(__dirname, '../')
        // exclude: [ 'dist/tmp' ] do we want to remove it everytime we build?
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
        'npm-debug.log'
      ],
      copyUnmodified: dev ? false : true
    })
  ]
};
module.exports = config;