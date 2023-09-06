import _ from 'lodash'
import fs from 'fs'
import ncp from 'ncp'
import path from 'path'
import autoprefixer from 'autoprefixer'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const files = [
  {
    type: 'script',
    input: 'src/index.js',
    output: 'dist/index.js',
  },
  {
    type: 'script',
    input: 'src/element.js',
    output: 'dist/element.js',
  },
  {
    type: 'script',
    input: 'src/installer.js',
    output: 'dist/installer.js',
  },
  {
    type: 'style',
    minimize: false,
    input: 'themes/vueform/scss/index.scss',
    output: 'themes/vueform/css/index.css',
  },
  {
    type: 'style',
    minimize: true,
    input: 'themes/vueform/scss/index.scss',
    output: 'themes/vueform/css/index.min.css',
  },
  {
    type: 'style',
    minimize: false,
    input: 'themes/material/scss/index.scss',
    output: 'themes/material/css/index.css',
  },
  {
    type: 'style',
    minimize: true,
    input: 'themes/material/scss/index.scss',
    output: 'themes/material/css/index.min.css',
  },
  {
    type: 'style',
    minimize: false,
    input: 'themes/tailwind-material/scss/index.scss',
    output: 'themes/tailwind-material/css/index.css',
  },
  {
    type: 'style',
    minimize: true,
    input: 'themes/tailwind-material/scss/index.scss',
    output: 'themes/tailwind-material/css/index.min.css',
  },
  {
    type: 'style',
    minimize: true,
    input: 'themes/bootstrap/css/index.css',
    output: 'themes/bootstrap/css/index.min.css',
  },
]

const copy = [
  {
    from: 'src/plugin.js',
    to: 'dist/plugin.js',
  },
]

const dirs = [
  path.resolve(__dirname, '../dist'),
]

_.each(dirs, (dir) => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
})

_.each(copy, (file) => {
  ncp(path.resolve(__dirname, '../', file.from), path.resolve(__dirname, '../', file.to), function (err) {
    if (err) {
      return console.error(err);
    }
  })
})

const exports = []

_.each(files, (file) => {
  exports.push({
    input: file.input,
    output: {
      file: file.output,
      format: 'esm',
    },
    plugins: file.type === 'script' ? [
      json(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: /^(.+\/)?node_modules\/.+$/,
      }),
      nodeResolve(),
      terser(),
    ] : (file.type === 'style' ? [
      postcss({
        extract: true,
        minimize: file.minimize,
        plugins: [
          autoprefixer(),
        ]
      }),
    ] : []),
    external: ['vue', 'axios', 'lodash', 'moment']
  })
})

export default exports