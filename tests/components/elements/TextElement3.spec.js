import features from './../../features'
import elements from './../../../api/elements'

describe('Text Element Features', () => {
  _.each(elements.text.features, (feature) => {
    if (!features[feature]) {
      return
    }

    describe(`${_.upperFirst(feature)} feature`, features[feature]('text'))
  })

  // Default classes
  it('should set default `input` class on `input`', () => {
  })

  it('should set default `inputContainer` class on field wrapper if it has addon', () => {
  })

  it('should not set default `inputContainer` class on field wrapper if it does not have addon', () => {
  })

})