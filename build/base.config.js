import ncp from 'ncp'
import vueNext from 'vue-next-rollup-plugin-vue'
import vuePrev from 'vue-prev-rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import alias from '@rollup/plugin-alias'
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

const copy = {
  'src/dist.js': 'dist/index.js',
  'src/dist.js': 'dist/vue2/index.js',
}

const dirs = [
  path.resolve(__dirname, '../dist/vue2'),
]

_.each(dirs, (dir) => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
})

_.each(copy, (to, from) => {
  ncp(path.resolve(__dirname, '../', from), path.resolve(__dirname, '../', to), function (err) {
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
      alias({
        entries: [
          { find: 'composition-api', replacement: file.vue === 2 ? '@vue/composition-api' : 'vue' },
        ]
      }),
      terser(),
    ],
    external: ['@vue/composition-api', 'vue', 'axios', 'lodash', 'moment'],
  })
})

export default exports