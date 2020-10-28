import { createForm, findAllComponents } from 'test-helpers'

export default function nullValue (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    // Computed Props
    it('should have "null" as `nullValue`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.nullValue).toBe(null)
    })
  }
}