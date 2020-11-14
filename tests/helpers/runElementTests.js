import elementsApi from './../../api/elements'
import features from './../features'
import elements from './../elements'

export default function (elementType, options, elementExports) {
  const elementName = `${_.upperFirst(elementType)}Element`
  const suiteName = `${_.upperFirst(elementType)} Element`

  describe(suiteName, () => {
    // Feature tests
    _.each(elementsApi[elementType].features, (feature) => {
      if (!features[feature]) {
        throw new Error('Missing feature test: ' + feature)
        return
      }

      describe(`${_.upperFirst(feature)} feature`, features[feature](elementType, Object.assign({}, options.default || {}, options[feature] || {})))
    })

    // Element tests
    _.each(elements[elementType] || {}, (suite) => {
      suite(elementType, elementName, options)
    })
  })
}