import autoprefixer from 'autoprefixer'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'esm',
    },
    plugins: [
      json(),
      vue({
        preprocessStyles: true
      }),
      postcss({
        plugins: [require('autoprefixer')],
        inject: true,
        minimize: true,
        sourceMap: false,
        extensions: ['.sass', '.scss', '.css']
      }),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: /^(.+\/)?node_modules\/.+$/,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      }),
      nodeResolve(),
      terser(),
    ],
    external: ['vue', 'axios', 'lodash', 'moment']
  },
  {
    input: 'src/style/index.scss',
    output: {
      file: 'dist/index.css',
    },
    plugins: [
      postcss({
        extract: true,
        minimize: false,
        plugins: [
          autoprefixer(),
        ]
      }),
    ]
  }
]