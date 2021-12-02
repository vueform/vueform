import path from 'path'
import obfuscator from 'rollup-plugin-obfuscator'

export default (commandLineArgs) => {
  const files = [
    {
      vue: 2,
      input: path.resolve(__dirname, '../dist/vue2/installer.js'),
      output: path.resolve(__dirname, '../../vueform-web/packages/vueform-production/dist/vue2/installer.js'),
    },
    {
      vue: 3,
      input: path.resolve(__dirname, '../dist/installer.js'),
      output: path.resolve(__dirname, '../../vueform-web/packages/vueform-production/dist/installer.js'),
    },
  ]

  return files.map((file) => {
    return {
      input: file.input,
      output: {
        file: file.output,
        format: 'esm',
        sourcemap: false,
      },
      plugins: [
        obfuscator({
          fileOptions: false,
          globalOptions: {
            identifierNamesGenerator: 'mangled-shuffled',
            domainLock: ['vueform.com', 'www.vueform.com', 'new.vueform.com', 'vueform.loc'],
            domainLockRedirectUrl: 'https://vueform.com/not-allowed?k=vueform'
          },
        }),
      ],
      external: ['composition-api', 'axios', 'lodash', 'moment'],
    }
  })
}
