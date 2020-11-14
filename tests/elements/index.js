import _ from 'lodash'
import fs from 'fs'

const files = fs.readdirSync(__dirname)

const exclude = ['index.js']

const elements = {}

_.each(files, (file) => {
  if (exclude.indexOf(file) !== -1) {
    return
  }
  
  let element = file.replace('.js', '')

  elements[element] = require('./' + element)
})

export default elements