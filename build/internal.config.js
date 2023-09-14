import path from 'path'
import defaultConfig from './default.config'
import distPackageJson from './../package.prod.json'

export default defaultConfig({
  outputDir: path.resolve(__dirname, '../../@vueform-vueform-internal'),
  npmrc: '.npmrc.internal',
  readme: 'README.prod.md',
  distPackageJson,
  packageJsonOptions: {
    description: 'Vueform SDK production build.',
    publishConfig: {
      registry: 'https://internal.vueform.com',
    },
  },
  obfuscatorOptions: {
    domainLock: ['localhost'],
    domainLockRedirectUrl: 'https://vueform.com/not-allowed?k=internal-sdk'
  }
})