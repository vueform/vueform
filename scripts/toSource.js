const ncp = require('ncp')
const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const jestConfig = require('./../jest/jest.config.vue3')

const outputDir = path.resolve(__dirname, '../../@vueform-vueform-source')

const files = [
  'locales',
  'src',
  'themes',
  'tests',
  'babel.config.js',
  'postcss.config.js',
  'tailwind-prefixer.js',
  'tailwind.js',
  'vite.js',
  'CHANGELOG.md',
  ['build/source.config.js', 'build/rollup.config.js'],
  ['jest/jest.setup.js', 'jest.setup.js'],
  ['.gitignore.dist', '.gitignore'],
  ['.npmrc.source', '.npmrc'],
  ['README.source.md', 'README.md'],
]

function deleteFolderRecursiveSync(directory, deleteCurrent = false) {
  if (fs.existsSync(directory)) {
    fs.readdirSync(directory).forEach((file) => {
      const filePath = path.join(directory, file);
      if (fs.lstatSync(filePath).isDirectory() && file != '.git') {
        deleteFolderRecursiveSync(filePath, true);
      } else if (file != '.git') {
        fs.unlinkSync(filePath);
      }
    });

    if (deleteCurrent) {
      fs.rmdirSync(directory);
    }
  }
}

deleteFolderRecursiveSync(outputDir)

if (!fs.existsSync(outputDir)){
  fs.mkdirSync(outputDir, { recursive: true });
}

const copyFiles = function() {
  _.each(files, (filename) => {
    let fromPath = path.resolve(__dirname, '../', Array.isArray(filename) ? filename[0] : filename)
    let toPath = Array.isArray(filename) ? filename[1] : filename

    if (toPath.match(/\//)) {
      let dir = path.resolve(outputDir, toPath.split('/').slice(0,-1).join('/'))

      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
      }
    }
    
    if (!fs.existsSync(fromPath)) {
      return
    }

    ncp(fromPath, path.resolve(outputDir, toPath), function (err) {
      if (err) {
        return console.error(err);
      }
    })
  })
}

const copyPackageJson = function() {
  let packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../', 'package.json'), 'UTF-8'))
  let source = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../', 'source.package.json'), 'UTF-8'))

  source.name = '@vueform/vueform'
  source.version = packageJson.version
  source.private = false
  source.devDependencies = packageJson.devDependencies
  source.description = 'Vueform SDK source production build.'

  Object.keys(packageJson.dependencies).forEach((key) => {
    let dep = packageJson.dependencies[key]

    if (key.match(/^@vueform/)) {
      source.dependencies[key] = '^2.0.0'
    } else {
      source.dependencies[key] = dep
    }
  })

  delete source.dependencies['bootstrap']
  delete source.dependencies['moxios']
  delete source.dependencies['places.js']
  delete source.dependencies['tailwindcss']
  delete source.dependencies['vue-i18n']

  delete source.devDependencies['vue-next']
  delete source.devDependencies['vue-next-jest']
  delete source.devDependencies['vue-next-rollup-plugin-vue']
  delete source.devDependencies['vue-next-test-utils']

  delete source.devDependencies['vue-prev']
  delete source.devDependencies['vue-prev-jest']
  delete source.devDependencies['vue-prev-rollup-plugin-vue']
  delete source.devDependencies['vue-prev-test-utils']
  delete source.devDependencies['vue-template-compiler']

  delete source.devDependencies['javascript-obfuscator']
  delete source.devDependencies['rollup-plugin-javascript-obfuscator']
  delete source.devDependencies['rollup-plugin-obfuscator']
  delete source.devDependencies['rollup-plugin-obfuscator']
  delete source.devDependencies['@rollup/plugin-alias']
  delete source.devDependencies['argv']
  delete source.devDependencies['async']
  delete source.devDependencies['cross-env']
  delete source.devDependencies['drag-drop-touch']
  delete source.devDependencies['html5sortable']
  delete source.devDependencies['jest-progress-bar-reporter']
  delete source.devDependencies['jest-silent-reporter']
  delete source.devDependencies['module-alias']
  delete source.devDependencies['mutationobserver-shim']
  delete source.devDependencies['rollup-plugin-commonjs']
  delete source.devDependencies['rollup-plugin-multi-input']
  delete source.devDependencies['rollup-plugin-polyfill-node']
  delete source.devDependencies['rollup-plugin-sass']
  delete source.devDependencies['rollup-plugin-scss']
  delete source.devDependencies['rollup-plugin-vue']
  delete source.devDependencies['ts-loader']
  delete source.devDependencies['webpack']
  delete source.devDependencies['webpack-cli']
  delete source.devDependencies['webpack-notifier']
  delete source.devDependencies['@tailwindcss/postcss7-compat']

  source.devDependencies = {
    ...source.devDependencies,
    'vue': '^3.2.20',
    'vue-jest': 'npm:@vue/vue3-jest@^27.0.0-alpha.1',
    '@vue/test-utils': '2.0.0-rc.16',
  }

  fs.writeFileSync(
    path.resolve(outputDir, 'package.json'),
    JSON.stringify(source, null, 4)
  )
}

const copyJest = function(){
  jestConfig.rootDir = './'
  jestConfig.transform['.*\\.(vue)$'] = 'vue-jest'
  delete jestConfig.moduleNameMapper['^@vue/test-utils$']
  delete jestConfig.moduleNameMapper['^vue-jest$']
  jestConfig.moduleNameMapper['^vue$'] = '<rootDir>/node_modules/vue'
  jestConfig.setupFilesAfterEnv = ['<rootDir>/jest.setup.js']
  jestConfig.collectCoverage = false
  jestConfig.testTimeout = 20000

  fs.writeFileSync(
    path.resolve(outputDir, 'jest.config.js'),
    'module.exports = ' + JSON.stringify(jestConfig, null, 4)
  )
}

copyFiles()
copyPackageJson()
copyJest()