import path from 'path'
import defaultConfig from './default.config'
import distPackageJson from './../package.prod.json'

export default defaultConfig({
  outputDir: path.resolve(__dirname, '../../@vueform-vueform'),
  npmrc: '.npmrc.prod',
  readme: 'README.prod.md',
  distPackageJson,
  packageJsonOptions: {
    description: 'Vueform SDK production build.',
  }
})