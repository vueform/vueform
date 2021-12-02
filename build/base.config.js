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
    vue: 2,
    input: 'src/bundle/dist/index.js',
    output: 'dist/vue2/index.js',
  },
  {
    vue: 2,
    input: 'src/bundle/dist/installer.js',
    output: 'dist/vue2/installer.js',
  },
  {
    vue: 3,
    input: 'src/bundle/dist/index.js',
    output: 'dist/index.js',
  },
  {
    vue: 3,
    input: 'src/bundle/dist/installer.js',
    output: 'dist/installer.js',
  },
]

const copy = [
  {
    from: 'src/bundle/dist/plugin.js',
    to: 'dist/vue2/plugin.js',
  },
  {
    from: 'src/bundle/dist/plugin.js',
    to: 'dist/plugin.js',
  },
]

const dirs = [
  path.resolve(__dirname, '../dist'),
  path.resolve(__dirname, '../dist/vue2'),
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
      }),
      nodeResolve(),
      terser(),
    ],
    external: ['composition-api', 'vue', 'axios', 'lodash', 'moment'],
  })
})

export default exports