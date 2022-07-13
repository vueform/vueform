import path from 'path'
import obfuscator from 'rollup-plugin-obfuscator'

export default (commandLineArgs) => {
  const files = [
    {
      input: path.resolve(__dirname, '../dist/installer.js'),
      output: path.resolve(__dirname, '../../vueform-web/packages/vueform-production/installer.js'),
      lock: true,
    },
    {
      input: path.resolve(__dirname, '../dist/element.js'),
      output: path.resolve(__dirname, '../../vueform-web/packages/vueform-production/element.js'),
      lock: true,
    },
  ]

  return files.map((file) => {
    let globalOptions = {
      identifierNamesGenerator: 'mangled-shuffled',
    }

    if (file.lock) {
      globalOptions = {
        ...globalOptions,
        domainLock: ['localhost', 'vueform.com', 'www.vueform.com', 'new.vueform.com', 'vueform.loc', 'builder.vueform.com', 'builder.vueform.loc'],
        domainLockRedirectUrl: 'https://vueform.com/not-allowed?k=vueform'
      }
    }

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
          globalOptions,
        }),
      ],
      external: ['vue', 'axios', 'lodash', 'moment'],
    }
  })
}
