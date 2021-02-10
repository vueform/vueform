import { createForm, testPropDefault, findAllComponents, testAttribute } from 'test-helpers'

export const id = function (elementType, elementName, options) {
  it('should render `id` attribute', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          id: 'my-id'
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    testAttribute(elWrapper, options.fieldType, 'id', 'my-id')
  })
}