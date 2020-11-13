import features from './../../features'
import elements from './../../../api/elements'
import { Text } from './../../elements/text'

export {
  Text,
}

describe('TText Element', () => {
  const elementType = 'tText'
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
  _.each(elements.tText.features, (feature) => {
    if (!features[feature]) {
      throw new Error('Missing feature test: ' + feature)
      return
    }

    describe(`${_.upperFirst(feature)} feature`, features[feature](elementType, Object.assign({}, options.default, options[feature] || {})))
  })

  // Custom tests
  _.each(exports, (suite) => {
    suite(elementType, elementName, options)
  })
})