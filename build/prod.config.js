import path from 'path'
import defaultConfig from './default.config'

export default defaultConfig({
  outputDir: path.resolve(__dirname, '../../@vueform-vueform'),
  npmrc: '.npmrc.prod',
  readme: 'README.prod.md',
  packageJsonOptions: {
    description: 'Vueform SDK production build.',
  }
})