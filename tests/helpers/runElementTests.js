import elementsApi from './../../api/elements'
import features from './../features'
import elements from './../elements'

export default function (elementType, options, elementExports) {
  const elementName = `${_.upperFirst(elementType)}Element`
  const suiteName = `${_.upperFirst(elementType)} Element`

  describe(suiteName, () => {
    if (elementsApi[elementType] === undefined) {
      it('should do something once', () => {})
      return
    }

    // Feature tests
    _.each(elementsApi[elementType].features, (feature) => {
      const featureTest = features[`${feature}_${elementType}`] || features[feature]

      if (!featureTest) {
        throw new Error('Missing feature test: ' + feature)
        return
      }

      describe(`${_.upperFirst(feature)} feature`, featureTest(elementType, Object.assign({}, options.default || {}, options[feature] || {})))
    })

    // Element tests
    _.each(elements[elementType] || {}, (suite) => {
      suite(elementType, elementName, options.default)
    })
  })
}