import ncp from 'ncp'
import vueNext from 'vue-next-rollup-plugin-vue'
import vuePrev from 'vue-prev-rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
// import alias from '@rollup/plugin-alias'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import fs from 'fs'
import _ from 'lodash'

const files = [
  {
    vue: 2,
    input: 'src/core.js',
    output: 'dist/vue2/core.js',
    babel: true,
  },
  {
    vue: 2,
    input: 'src/installer.js',
    output: 'dist/vue2/installer.js',
    babel: true,
  },
  {
    vue: 3,
    input: 'src/core.js',
    output: 'dist/core.js',
    babel: true,
  },
  {
    vue: 3,
    input: 'src/installer.js',
    output: 'dist/installer.js',
    babel: true,
  },
]

const copy = [
  {
    from: 'src/dist.js',
    to: 'dist/index.js',
  },
  {
    from: 'src/dist.js',
    to: 'dist/vue2/index.js',
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
      file.vue === 2 ? vuePrev() : vueNext(),
      commonjs(),
      file.babel ? babel({
        babelHelpers: 'bundled',
      }) : null,
      nodeResolve(),
      terser(),
    ],
    external: ['composition-api', 'vue', 'axios', 'lodash', 'moment'],
  })
})

export default exports