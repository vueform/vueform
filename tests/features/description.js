import { createForm, testComputedOption, findAllComponents } from 'test-helpers'

export default function description (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`
  
  return () => {
    testComputedOption(it, elementType, 'description', null, 'description')

    it('should should render `ElementDescription` if has description', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            description: 'Description'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)
      let ElementDescription = findAllComponents(el, { name: 'ElementDescription' })

      expect(ElementDescription.length).toBe(1)
    })

    it('should should not render `ElementDescription` if has no description', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)
      let ElementDescription = findAllComponents(el, { name: 'ElementDescription' })

      expect(ElementDescription.length).toBe(0)
    })
  }
}