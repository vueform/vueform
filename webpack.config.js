const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
    laraform: './src/index.js',
    themes: './src/themes/index.js',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
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
        use: 'vue-loader'
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
        use: 'json-loader'
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
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
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'vue'
    },
    "composition-api": {
      commonjs: 'composition-api',
      commonjs2: 'composition-api',
      amd: 'composition-api',
      root: 'composition-api'
    },
  },
  resolve: {
		extensions: ['.tsx', '.ts', '.json', '.js', '.vue'],
  },

  devtool: false,
}