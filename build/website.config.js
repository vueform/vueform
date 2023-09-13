import path from 'path'
import defaultConfig from './default.config'

export default defaultConfig({
  outputDir: path.resolve(__dirname, '../../vueform.com/libs/@vueform/vueform'),
  npmrc: '.npmrc.prod',
  readme: 'README.prod.md',
  packageJsonOptions: {
    description: 'Vueform SDK production build.',
  },
  obfuscatorOptions: {
    domainLock: ['localhost', 'vueform.com', '.vueform.com'],
    domainLockRedirectUrl: 'https://vueform.com/not-allowed?k=sdk-web',
  },
  noapi: true,
})