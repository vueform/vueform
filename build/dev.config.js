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
  },
  obfuscatorOptions: {
    domainLock: [
      'localhost',
      '.localhost',
      '.test',
      '.local',
      '.amplifyapp.com',
      '.azureedge.net',
      '.cloudfront.net',
      '.csb.app',
      '.elasticbeanstalk.com',
      '.gitpod.io',
      '.netlify.com',
      '.vercel.app',
      '.windows.net',
    ],
    domainLockRedirectUrl: 'https://vueform.com/not-allowed?k=dev-sdk'
  }
})