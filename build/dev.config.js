import path from 'path'
import defaultConfig from './default.config'
import distPackageJson from './../package.prod.json'

export default defaultConfig({
  outputDir: path.resolve(__dirname, '../../@vueform-vueform-dev'),
  npmrc: '.npmrc.dev',
  readme: 'README.dev.md',
  distPackageJson,
  packageJsonOptions: {
    description: 'Vueform SDK development build.',
    publishConfig: {
      registry: 'https://dev.vueform.com',
    },
  },
  obfuscatorOptions: {
    domainLock: ['localhost', '.csb.app'],
    domainLockRedirectUrl: 'https://vueform.com/not-allowed?k=dev-sdk'
  }
})