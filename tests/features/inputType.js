import { createForm, findAllComponents, testComputedOption } from 'test-helpers'

export default function inputType (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
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

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.get('input').attributes('type')).toBe('date')
    })
  }
}