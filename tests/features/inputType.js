import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'

export const inptuType = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'inputType', 'text', 'date')

  it('should render input with given `inputType`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          inputType: 'date'
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    testAttribute(elWrapper, options.fieldType, 'type', 'date')
  })
}