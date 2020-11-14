import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'

export const autocomplete = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'autocomplete', false, 'on')

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