import obfuscator from 'rollup-plugin-obfuscator'

export default [
  {
    input: 'dist/partials/installer.js',
    output: {
      file: './../vueform-api/storage/instances/7ass8f438/1.0.0/vueform/dist/partials/installer.js',
      format: 'esm',
      sourcemap: false,
    },
    plugins: [
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
]