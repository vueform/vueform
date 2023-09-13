import path from 'path'
import defaultConfig from './default.config'
import distPackageJson from './../package.prod.json'

export default defaultConfig({
  outputDir: path.resolve(__dirname, '../../vueform.com/libs/@vueform/vueform'),
  npmrc: '.npmrc.prod',
  readme: 'README.prod.md',
  distPackageJson,
  packageJsonOptions: {
    description: 'Vueform SDK production build.',
  },
  obfuscatorOptions: {
    domainLock: ['localhost', 'vueform.com', '.vueform.com'],
    domainLockRedirectUrl: 'https://vueform.com/not-allowed?k=sdk-web',
  },
  noapi: true,
})