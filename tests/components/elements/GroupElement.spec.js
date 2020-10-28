import features from './../../features'
import elements from './../../../api/elements'
import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'

describe('Group Element', () => {
  const options = {
    slots: {
      slots: [
        'label', 'info', 'description', 'message',
        'before', 'between', 'after'
      ]
    }
  }

  _.each(elements.group.features, (feature) => {
    if (!features[feature]) {
      return
    }

    describe(`${_.upperFirst(feature)} feature`, features[feature]('group', Object.assign({}, options.default, options[feature] || {})))
  })
})