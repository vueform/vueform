import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'

export default function autocomplete(elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
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
}