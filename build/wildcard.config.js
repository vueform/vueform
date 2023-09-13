import path from 'path'
import defaultConfig from './default.config'
import distPackageJson from './../package.wildcard.json'

export default defaultConfig({
  outputDir: path.resolve(__dirname, '../../@vueform-vueform-wildcard'),
  npmrc: '.npmrc.wildcard',
  readme: 'README.wildcard.md',
  distPackageJson,
  packageJsonOptions: {
    description: 'Vueform SDK wildcard production build.',
  },
  noapi: true,
})