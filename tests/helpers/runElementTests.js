import elementsApi from './../../api/generated/elements-base'
import features from './../features'
import elements from './../elements'

const mockPlaces = (spy = null) => {
  let ShadowRoot = window.ShadowRoot

  global.MutationObserver = class {
    constructor(callback) {}
    disconnect() {}
    observe(element, initObject) {}
  }

  spy = jest.spyOn(global, 'window', 'get')
  spy.mockImplementation(() => ({
    ShadowRoot,
    google: {
      maps: {
        places: {
          Autocomplete: class {
            addListener() {}
          }
        }
      }
    },
    places: () => {
      return {
        on: () => {}
      }
    }
  }))

  return spy
}

export default function (elementType, options, elementExports) {
  const elementName = `${_.upperFirst(elementType)}Element`
  const suiteName = `${_.upperFirst(elementType)} Element`
  const spies = {}

  if (options.default && options.default.mockPlaces) {
    spies.window = mockPlaces()

    beforeEach(() => {
      spies.window = mockPlaces()
    })

    afterEach(() => {
      spies.window.mockRestore()
    })
  }

  describe(suiteName, () => {
    if (['Editor Element', 'TEditor Element'].indexOf(suiteName) !== -1) {
      it('should', () => {})
      return
    }

    if (elementsApi[elementType] === undefined) {
      it('should do something once', () => {})
      return
    }

    // Feature tests
    _.each(elementsApi[elementType].features, (feature) => {
      let baseFeature = feature.split('_')[0]

      const featureTest = features[`${baseFeature}_${elementType}`] || features[feature] || features[baseFeature]

      if (!featureTest) {
        throw new Error('Missing feature test: ' + feature)
        return
      }

      describe(`${_.upperFirst(baseFeature)} feature`, featureTest(elementType, Object.assign({}, options.default || {}, options[feature] || {}), spies))
    })

    // Element tests
    _.each(elements[elementType] || {}, (suite) => {
      suite(elementType, elementName, options.default)
    })
  })
}