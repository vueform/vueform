import features from './../../features'
import elements from './../../../api/elements'
import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'
import { List } from './../../elements/list'

export {
  List,
}

describe('List Element', () => {
  const elementType = 'list'
  const elementName = `${_.upperFirst(elementType)}Element`
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

  // Feature tests
  _.each(elements.list.features, (feature) => {
    if (!features[feature]) {
      throw new Error('Missing feature test: ' + feature)
    }

    describe(`${_.upperFirst(feature)} feature`, features[feature](elementType, Object.assign({}, options.default, options[feature] || {})))
  })
})