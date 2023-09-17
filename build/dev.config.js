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
    domainLock: [
      'localhost',
      '.localhost',
      '.test',
      '.local',
      '.csb.app',
      '.elasticbeanstalk.com',
      '.netlify.com',
      '.vercel.app',
      '.gitpod.io',
      '.cloudfront.net',
      '.amplifyapp.com',
      '.azureedge.net',
      '.windows.net',
    ],
    domainLockRedirectUrl: 'https://vueform.com/not-allowed?k=dev-sdk'
  }
})