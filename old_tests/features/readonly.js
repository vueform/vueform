import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'

export default function(elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    testComputedOption(it, elementType, 'readonly', false, true)

    it('should render `readonly` attribute', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            readonly: true
          }
        }
      })

      let elWrapper = findAllComponents(form, { name: elementName }).at(0)

      testAttribute(elWrapper, options.fieldType, 'readonly', ['readonly', ''])
    })
  }
}