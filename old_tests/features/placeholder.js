import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'

export default function placeholder (elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    testComputedOption(it, elementType, 'placeholder', null, 'Placeholder')

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
}