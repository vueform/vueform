import path from 'path'
import defaultConfig from './default.config'

export default defaultConfig({
  outputDir: path.resolve(__dirname, '../../@vueform-vueform-wildcard'),
  npmrc: '.npmrc.wildcard',
  readme: 'README.wildcard.md',
  packageJsonOptions: {
    description: 'Vueform SDK wildcard production build.',
  },
  noapi: true,
})