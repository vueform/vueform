import ncp from 'ncp'
import babel from '@rollup/plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import fs from 'fs'
import _ from 'lodash'

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
]

const copy = [
  {
    from: 'bundles/dist/plugin.js',
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
      sourcemap: false,
    },
    plugins: [
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: /^(.+\/)?node_modules\/.+$/,
      }),
      nodeResolve(),
      terser(),
    ],
    external: ['composition-api', 'vue', 'axios', 'lodash', 'moment']
  })
})

export default exports