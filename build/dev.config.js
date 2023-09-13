import path from 'path'
import defaultConfig from './default.config'

export default defaultConfig({
  outputDir: path.resolve(__dirname, '../../@vueform-vueform-dev'),
  npmrc: '.npmrc.dev',
  readme: 'README.dev.md',
  packageJsonOptions: {
    description: 'Vueform SDK development build.',
  },
  obfuscatorOptions: {
    domainLock: ['localhost', '.csb.app'],
    domainLockRedirectUrl: 'https://vueform.com/not-allowed?k=dev-sdk'
  }
})