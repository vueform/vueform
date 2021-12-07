import vue from 'vue-next-rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import commonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'
import _ from 'lodash'
import obfuscator from 'rollup-plugin-obfuscator'

const files = [
  {
    input: 'bundles/public/vueform.js',
    output: 'public/vueform.js',
  },
]

const exports = []

_.each(files, (file) => {
  exports.push({
    input: file.input,
    output: {
      file: file.output,
      format: 'iife',
      sourcemap: false,
      name: 'Vueform',
      exports: 'named',
      globals: {
        vue: 'Vue',
        moment: 'moment',
        lodash: '_',
        axios: 'axios'
      }
    },
    plugins: [
      vue({
        target: 'browser',
        preprocessStyles: true
      }),
      scss(),
      commonjs(),
      resolve({
        extensions: ['.mjs', '.js', '.json', '.node', '.vue', '.css']
      }),
      nodePolyfills(),
      json(),
      alias({
        entries: [
          { find: 'composition-api', replacement: 'vue' },
        ]
      }),
      babel({
        babelHelpers: 'runtime',
        skipPreflightCheck: true,
        plugins: [
          ["@babel/plugin-transform-runtime", {
            "regenerator": true
          }]
        ],
      }),
      terser(),
      obfuscator({
        fileOptions: false,
        globalOptions: {
          optionsPreset: 'medium-obfuscation',
          domainLock: ['playcode.io'],
          domainLockRedirectUrl: 'https://vueform.com/not-allowed'
        },
      }),
    ],
    external: ['vue', 'axios', 'lodash', 'moment'],
  })
})

export default exports