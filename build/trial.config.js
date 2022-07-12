import path from 'path'
import obfuscator from 'rollup-plugin-obfuscator'

const ncp = require('ncp')
const fs = require('fs')
const _ = require('lodash')

const outputDir = path.resolve(__dirname, '../../@vueform')

const copyFiles = {
  'dist': '',
  'themes': 'themes',
  'locales': 'locales',
  'LICENSE.txt': 'LICENSE.txt',
  'README.md': 'README.md',
  'tailwind.js': 'tailwind.js',
  'tailwind-prefixer.js': 'tailwind-prefixer.js',
  'src/plugins.js': 'plugin.js',
}

export default (commandLineArgs) => {
  const version = commandLineArgs.configVersion

  if (!version) {
    throw new Error('Version missing')
  }

  const copyPackageJson = function() {
    let packageJson = fs.readFileSync(path.resolve(__dirname, '../', 'dist.package.json'), 'UTF-8')

    packageJson = packageJson.replace(/"\d\.\d\.\d"/, `"${version}"`)

    fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageJson)
  }

  if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
  }

  _.each(copyFiles, (to, from) => {
    const fromPath = path.resolve(__dirname, '../', from)
    
    if (!fs.existsSync(fromPath)) {
      return
    }

    ncp(fromPath, path.resolve(outputDir, to), function (err) {
      if (err) {
        return console.error(err);
      }
    })
  })

  copyPackageJson()

  const files = [
    {
      input: path.resolve(__dirname, '../dist/installer.js'),
      output: path.resolve(__dirname, '../../@vueform/installer.js'),
      lock: true,
    },
    {
      input: path.resolve(__dirname, '../dist/element.js'),
      output: path.resolve(__dirname, '../../@vueform/element.js'),
      lock: true,
    },
    {
      input: path.resolve(__dirname, '../dist/index.js'),
      output: path.resolve(__dirname, '../../@vueform/index.js'),
      lock: true,
    },
  ]

  return files.map((file) => {
    let globalOptions = {
      identifierNamesGenerator: 'mangled-shuffled',
      forceTransformStrings: [
        'https://api.vueform.com/check?key=',
      ],
      splitStrings: true,
      stringArrayCallsTransform: true,
      stringArrayEncoding: ['base64'],
    }

    if (file.lock) {
      globalOptions = {
        ...globalOptions,
        domainLock: ['localhost'],
        domainLockRedirectUrl: 'https://vueform.com/not-allowed?k=trial'
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
