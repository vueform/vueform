import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import path from 'path'

import rmFeature from './utils/rmFeature'
import mkdirs from './utils/mkdirs'
import cp from './utils/cp'

// Create dist folder
mkdirs([
  path.resolve(__dirname, '../dist'),
])

// Copy files
cp([
  {
    from: 'bundles/dist/plugin.js',
    to: 'dist/plugin.js',
  },
])

// Create no api key validation version of installer
rmFeature(
  'api-key-validation',
  path.resolve(__dirname, '../src', 'installer.js'),
  path.resolve(__dirname, '../src', 'installer.noapi.js'),
)

// Files to transpile
const files = [
  {
    input: 'bundles/dist/index.js',
    output: 'dist/index.js',
  },
  {
    input: 'bundles/dist/element.js',
    output: 'dist/element.js',
  },
  {
    input: 'bundles/dist/installer.js',
    output: 'dist/installer.js',
  },
  {
    input: 'bundles/dist/installer.noapi.js',
    output: 'dist/installer.noapi.js',
  },
]

export default files.map((file) => ({
  input: file.input,
  output: {
    file: file.output,
    format: 'esm',
    sourcemap: false,
  },
  plugins: [
    json(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: /^(.+\/)?node_modules\/.+$/,
    }),
    nodeResolve(),
  ],
  external: ['vue', 'axios', 'lodash', 'moment']
}))