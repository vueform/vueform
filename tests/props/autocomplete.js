import { createForm, findAllComponents, testAttribute } from 'test-helpers'

export const rendering = function (elementType, elementName, options) {
  it('should add `autocomplete` attribute to input', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          autocomplete: 'on'
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    testAttribute(elWrapper, options.fieldType, 'autocomplete', 'on')
  })
}