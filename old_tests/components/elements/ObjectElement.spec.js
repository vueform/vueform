import features from './../../features'
import elements from './../../../api/elements'
import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'
import { Object_ } from './../../elements/object'

export {
  Object_,
}

describe('Object Element', () => {
  const elementType = 'object'
  const elementName = `${_.upperFirst(elementType)}Element`
  const options = {
  }

  // Feature tests
  _.each(elements.object.features, (feature) => {
    if (!features[feature]) {
      throw new Error('Missing feature test: ' + feature)
    }

    describe(`${_.upperFirst(feature)} feature`, features[feature](elementType, Object.assign({}, options.default, options[feature] || {})))
  })

  // Custom tests
  _.each(exports, (suite) => {
    suite(elementType, elementName, options)
  })
})