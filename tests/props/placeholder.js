import { createForm, findAllComponents, testPropDefault, testAttribute } from 'test-helpers'

export const placeholder = function (elementType, elementName, options) {
  it('should render `placeholder` attribute', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          placeholder: 'Placeholder'
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    testAttribute(elWrapper, options.fieldType, 'placeholder', 'Placeholder')
  })
}