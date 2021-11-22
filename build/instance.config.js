import obfuscator from 'rollup-plugin-obfuscator'


export default (commandLineArgs) => {
  const key = commandLineArgs.configKey
  const version = commandLineArgs.configVersion
  const domains = commandLineArgs.configDomains.split(',')
  const apiPath = commandLineArgs.apiPath

  return [
    {
      input: 'dist/partials/installer.js',
      output: {
        file: `${apiPath}/storage/app/instances/${key}/${version}/vueform/dist/partials/installer.js`,
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
}
