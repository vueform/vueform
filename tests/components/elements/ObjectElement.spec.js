import features from './../../features'
import elements from './../../../api/elements'
import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'

describe('Object Element', () => {
  const options = {
  }

  _.each(elements.object.features, (feature) => {
    if (!features[feature]) {
      throw new Error('Missing feature test: ' + feature)
    }

    describe(`${_.upperFirst(feature)} feature`, features[feature]('object', Object.assign({}, options.default, options[feature] || {})))
  })

  describe('Classes feature', () => {
    it('should set default `childrenContainer` class on the container of child elements', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'object',
            schema: {
              child1: {
                type: 'text'
              }
            }
          }
        }
      })

      let el = findAllComponents(form, { name: 'ObjectElement' }).at(0)
      let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
      
      expect(child1.element.parentElement.className.split(' ').indexOf(el.vm.classes.childrenContainer) !== -1).toBe(true)
    })
  })
})