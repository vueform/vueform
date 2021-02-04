import _ from 'lodash'
import fs from 'fs'
import Parser from './../../parser/single'

const filesPath = process.cwd() + '/src/components/'
const outputPath = process.cwd() + '/api/components/components.js'

const files = fs.readdirSync(filesPath).filter(f=>['.DS_Store'].indexOf(f) === -1 && f.match(/\.js$/))
const components = {}

const include = []
const exclude = []

_.each(files, (file) => {
  let parser = new Parser(filesPath, file, false)
  let name = file.replace('.js','').trim()

  if (include.length > 0 && include.indexOf(name) === -1) {
    return
  }

  if (exclude.length > 0 && exclude.indexOf(name) !== -1) {
    return
  }

  parser.init()

  components[name] = parser.get().base
})

fs.writeFileSync(outputPath, 'export default ' + JSON.stringify(components, null, 2))