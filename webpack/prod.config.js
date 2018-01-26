'use strict'

const webpack = require('webpack')

const common = require('./common')

const validate = require('webpack-validator')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate({
  entry: common.entry,
  output: common.output,
  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { 'warnings': false }
    }),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new HtmlPlugin(common.htmlPluginConfig('template-dev.html'))
  ],
  module: {
    preLoaders: [common.standardPreLoader],

    loaders: [
      common.jsLoader,
      Object.assign({}, common.cssLoader, {
        loaders: undefined,
        loader: ExtractTextPlugin.extract.apply(null, common.cssLoader.loaders)
      })
    ]
  },
  resolve: common.resolve
})
