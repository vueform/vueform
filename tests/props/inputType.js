import { createForm, findAllComponents, testPropDefault, testAttribute } from 'test-helpers'

export const inputType = function (elementType, elementName, options) {
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