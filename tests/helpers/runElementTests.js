import elementsApi from './../../api/elements'
import elementsConfig from './../../api/config'
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
      if (!features[feature]) {
        throw new Error('Missing feature test: ' + feature)
        return
      }

      const featureTest = features[`${feature}_${elementType}`] || features[`${feature}_${elementsConfig.typeAliases[elementType]}`] || features[feature]

      describe(`${_.upperFirst(feature)} feature`, featureTest(elementType, Object.assign({}, options.default || {}, options[feature] || {})))
    })

    // Element tests
    _.each(elements[elementType] || {}, (suite) => {
      suite(elementType, elementName, options)
    })
  })
}