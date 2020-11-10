import features from './../../features'
import elements from './../../../api/elements'
import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'

describe('List Element', () => {
  const options = {
    default: {
      initial: 1,
      prototypes: [
        {
          element: {
            type: 'text'
          }
        },
        {
          object: {
            schema: {
              child: {
                type: 'text'
              }
            }
          }
        },
      ],
      childValues: ['value{i}', { child: 'value{i}' }],
      childNulls: [null, { child: null }],
    },
    events: {
      events: ['change', 'add', 'remove', 'sort']
    }
  }

  _.each(elements.list.features, (feature) => {
    if (!features[feature]) {
      throw new Error('Missing feature test: ' + feature)
    }

    describe(`${_.upperFirst(feature)} feature`, features[feature]('list', Object.assign({}, options.default, options[feature] || {})))
  })
})