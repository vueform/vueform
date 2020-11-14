import { createForm, findAllComponents } from 'test-helpers'

export default function nullValue (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    // Computed Props
    it('should have "[]" as `nullValue`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.nullValue).toStrictEqual([])
    })
  }
}