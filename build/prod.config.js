import path from 'path'
import obfuscator from 'rollup-plugin-obfuscator'

import packageJson from './../package.json'
import distPackageJson from './../package.prod.json'
import createPackageJson from './utils/createPackageJson'
import rmDir from './utils/rmDir'
import mkdirs from './utils/mkdirs'
import cp from './utils/cp'

const outputDir = path.resolve(__dirname, '../../@vueform-vueform')

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
  '.npmrc.prod': '.npmrc',
  'README.prod.md': 'README.md',
}, outputDir)

// Create package.json
createPackageJson(distPackageJson, path.resolve(outputDir, 'package.json'), {
  name: '@vueform/vueform',
  version: packageJson.version,
  private: false,
  description: 'Vueform SDK production build.',
})

// Files to transpile
const files = [
  {
    input: path.resolve(__dirname, '../dist/installer.js'),
    output: path.resolve(__dirname, '../../@vueform-vueform/installer.js'),
    id: 'installer',
  },
  {
    input: path.resolve(__dirname, '../dist/element.js'),
    output: path.resolve(__dirname, '../../@vueform-vueform/element.js'),
    id: 'element',
  },
  {
    input: path.resolve(__dirname, '../dist/index.js'),
    output: path.resolve(__dirname, '../../@vueform-vueform/index.js'),
    id: 'index',
  },
]

export default files.map((file) => ({
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
        identifierNamesGenerator: 'mangled-shuffled',
        forceTransformStrings: [
          '//stat.vueform.com/sdk?key=',
          '//vueform.com/not-allowed?k=',
        ],
        splitStrings: true,
        stringArrayCallsTransform: true,
        stringArrayEncoding: ['base64'],
      },
    }),
  ],
  external: ['vue', 'axios', 'lodash', 'moment'],
}))