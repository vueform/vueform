import { createForm, findAllComponents } from 'test-helpers'

export const Group = function (elementType, elementName, options) {
  describe('Classes feature', () => {
    it('should set default `childrenContainer` class on the container of child elements', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            schema: {
              child1: {
                type: 'text'
              }
            }
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)
      let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
      
      expect(child1.element.parentElement.className.split(' ').indexOf(el.vm.classes.childrenContainer) !== -1).toBe(true)
    })
  })
}