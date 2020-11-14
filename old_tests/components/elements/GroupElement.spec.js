import features from './../../features'
import elements from './../../../api/elements'
import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'
import { Group } from './../../elements/group'

export {
  Group,
}

describe('Group Element', () => {
  const elementType = 'group'
  const elementName = `${_.upperFirst(elementType)}Element`
  const options = {
    slots: {
      slots: [
        'label', 'info', 'description', 'message',
        'before', 'between', 'after'
      ]
    }
  }

  // Feature tests
  _.each(elements.group.features, (feature) => {
    if (!features[feature]) {
      throw new Error('Feature wasn\'t found: `'+feature+'`')
    }

    describe(`${_.upperFirst(feature)} feature`, features[feature](elementType, Object.assign({}, options.default, options[feature] || {})))
  })

  // Custom tests
  _.each(exports, (suite) => {
    suite(elementType, elementName, options)
  })
})