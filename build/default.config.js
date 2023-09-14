import path from 'path'
import obfuscator from 'rollup-plugin-obfuscator'
import { terser } from 'rollup-plugin-terser'

import packageJson from './../package.json'
import createPackageJson from './utils/createPackageJson'
import rmDir from './utils/rmDir'
import mkdirs from './utils/mkdirs'
import cp from './utils/cp'

export default function({ outputDir, npmrc, readme, distPackageJson, packageJsonOptions, obfuscatorOptions = {}, noapi = false }) {

  // Remove existing folder
  rmDir(outputDir)

  // Create output dir
  mkdirs([
    outputDir,
  ])

  // Copy files
  cp({
    'themes': 'themes',
    'locales': 'locales',
    'CHANGELOG.md': 'CHANGELOG.md',
    'tailwind.js': 'tailwind.js',
    'tailwind-prefixer.js': 'tailwind-prefixer.js',
    'vite.js': 'vite.js',
    'src/plugin.js': 'plugin.js',
    '.gitignore.dist': '.gitignore',
    [npmrc]: '.npmrc',
    [readme]: 'README.md',
  }, outputDir)

  // Create package.json
  createPackageJson(distPackageJson, path.resolve(outputDir, 'package.json'), {
    name: '@vueform/vueform',
    version: packageJson.version,
    private: false,
    ...packageJsonOptions,
  })

  // Files to transpile
  const files = [
    {
      input: path.resolve(__dirname, `../dist/installer.${noapi?'noapi.':''}js`),
      output: path.resolve(outputDir, 'installer.js'),
      lock: true,
      id: 'installer',
    },
    {
      input: path.resolve(__dirname, '../dist/element.js'),
      output: path.resolve(outputDir, 'element.js'),
      lock: false,
      id: 'element',
    },
    {
      input: path.resolve(__dirname, '../dist/index.js'),
      output: path.resolve(outputDir, 'index.js'),
      lock: false,
      id: 'index',
    },
  ]

  return files.map((file) => {
    let extendedOptions = {
      ...obfuscatorOptions,
    }

    if (!file.lock) {
      delete extendedOptions.domainLock
      delete extendedOptions.domainLockRedirectUrl
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
          fileOptions: {
            identifiersPrefix: file.id,
          },
          globalOptions: {
            compact: false,
            forceTransformStrings: [
              '//stat.vueform.com/sdk?key=',
              '//vueform.com/not-allowed?k=',
            ],
            ...extendedOptions,
          },
        }),
        terser(),
      ],
      external: ['vue', 'axios', 'lodash', 'moment'],
    }
  })
  
}