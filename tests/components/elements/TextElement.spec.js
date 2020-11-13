import features from './../../features'
import elements from './../../../api/elements'
import { Text } from './../../elements/text'

export {
  Text,
}

describe('Text Element', () => {
  const elementType = 'text'
  const elementName = `${_.upperFirst(elementType)}Element`
  const options = {
    default: {
      fieldType: 'input',
    },
    events: {
      events: ['change']
    }
  }

  // Feature tests
  _.each(elements.text.features, (feature) => {
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