import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import obfuscator from 'rollup-plugin-obfuscator'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/installer.js',
    output: {
      file: 'dist/partials/installer.js',
      format: 'esm',
      sourcemap: false,
    },
    plugins: [
      vue(),
      commonjs(),
      babel(),
      nodeResolve(),
      obfuscator({
        fileOptions: {
          // Your javascript-obfuscator options here
          // Will be applied on each file separately. Set to `false` to disable
          // See what's allowed: https://github.com/javascript-obfuscator/javascript-obfuscator
        },
        globalOptions: {
          // Your javascript-obfuscator options here
          // Will be applied on the whole bundle. Set to `false` to disable
          // See what's allowed: https://github.com/javascript-obfuscator/javascript-obfuscator
          // domainLock: ['vueform.com'],
          // domainLockRedirectUrl: 'https://vueform.com'
        },
      }),
    ],
    external: ['composition-api', 'axios', 'lodash', 'moment'],
  },
  {
    input: 'src/components/Vueform.js',
    output: {
      file: 'dist/partials/Vueform.js',
      format: 'esm',
      sourcemap: false,
    },
    plugins: [
      vue(),
      commonjs(),
      babel(),
      nodeResolve(),
    ],
    external: ['composition-api', 'axios', 'lodash', 'moment'],
  },
  {
    input: 'src/composables/useVueform.js',
    output: {
      file: 'dist/partials/useVueform.js',
      format: 'esm',
      sourcemap: false,
    },
    plugins: [
      vue(),
      commonjs(),
      babel(),
      nodeResolve(),
    ],
    external: ['composition-api', 'axios', 'lodash', 'moment'],
  },
  {
    input: 'src/config/index.js',
    output: {
      file: 'dist/partials/config.js',
      format: 'esm',
      sourcemap: false,
    },
    plugins: [
      vue(),
      commonjs(),
      babel(),
      nodeResolve(),
    ],
    external: ['composition-api', 'axios', 'lodash', 'moment'],
  },
  {
    input: 'src/components/index.js',
    output: {
      file: 'dist/partials/components.js',
      format: 'esm',
      sourcemap: false,
    },
    plugins: [
      vue(),
      commonjs(),
      babel(),
      nodeResolve(),
    ],
    external: ['composition-api', 'axios', 'lodash', 'moment'],
  },
]