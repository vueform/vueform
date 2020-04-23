const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

let banner = 
	" Laraform\n" +
	" License: https://laraform.io/terms\n" +
	" Copyright (c) Adam Berecz <adam@laraform.io>"

let file = {
  entry: 'index.js',
  output: 'full.js',
}

if (process.env.BUNDLE == 'essentials') {
  file = {
    entry: 'essentials.js',
    output: 'essentials.js',
  } 
}
else if (process.env.BUNDLE == 'core') {
  file = {
    entry: 'core.js',
    output: 'core.js',
  }
}

module.exports = {
  entry: './src/' + file.entry,
  mode: 'production',
  output: {
    path: path.resolve('dist'),
    filename: file.output,
    library: 'Laraform',
		libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // transforms functions to objects
            presets: [
              ['@babel/preset-env', { modules: false, forceAllTransforms: true }]
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              ['@babel/plugin-transform-runtime', { helpers: false }]
            ],
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new WebpackNotifierPlugin({
      title: 'Laraform'
    }),
    new webpack.BannerPlugin({
      banner: banner
    })
  ],

  externals: {
    axios: {
      commonjs: 'axios',
      commonjs2: 'axios',
      amd: 'axios',
      root: 'axios'
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    },
    moment: {
      commonjs: 'moment',
      commonjs2: 'moment',
      amd: 'moment',
      root: 'moment'
    },
  },

  resolve: {
		extensions: ['.json', '.js', '.vue'],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    }
  },

  devtool: false,
}