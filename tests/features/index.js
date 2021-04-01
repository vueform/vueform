import _ from 'lodash'
import { runFeatureTests, destroy } from 'test-helpers'

import fs from 'fs'

const files = fs.readdirSync(__dirname)

const exclude = ['_template.js', 'index.js', '.DS_Store']

const features = {}

_.each(files, (file) => {
  if (exclude.indexOf(file) !== -1 || file.substr(0,1) === '_') {
    return
  }
  
  let feature = file.replace('.js', '')

  features[feature] = require('./' + feature)
})

const wrapped = {}

const wrap = function (tests) {
  return function(elementType, options, spies) {
    return runFeatureTests(elementType, options, tests, spies)
  }
}

_.each(features, (tests, name) => {
  wrapped[name] = wrap(tests)
})

export default wrapped