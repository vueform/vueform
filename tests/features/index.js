import _ from 'lodash'
import { runFeatureTests } from 'test-helpers'

import fs from 'fs'

const files = fs.readdirSync(__dirname)

const exclude = ['_template.js', 'index.js']

const features = {}

_.each(files, (file) => {
  if (exclude.indexOf(file) !== -1) {
    return
  }
  
  let feature = file.replace('.js', '')

  features[feature] = require('./' + feature)
})

const wrapped = {}

const wrap = function (tests) {
  return function(elementType, options) {
    return runFeatureTests(elementType, options, tests)
  }
}

_.each(features, (tests, name) => {
  wrapped[name] = wrap(tests)
})

export default wrapped