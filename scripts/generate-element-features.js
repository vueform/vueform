import _ from 'lodash'
import fs from 'fs'
import Parser from './parser'

const filesPath = process.cwd() + '/src/composables/elements/'
const outputPath = process.cwd() + '/api/generated/element-features.js'

const files = fs.readdirSync(filesPath).filter(f=>['.DS_Store', 'useTemplate.js'].indexOf(f) === -1 && f.match(/\.js$/))

const features = {}

const include = []

_.each(files, (file) => {
  let parser = new Parser(filesPath, file, false)
  let featureName = _.lowerFirst(file.replace('.js','').replace(/^use/, '').trim())

  if (include.length > 0 && include.indexOf(featureName) === -1) {
    return
  }

  parser.init()

  features[featureName] = parser.get()
})

fs.writeFileSync(outputPath, 'export default ' + JSON.stringify(features, null, 2))