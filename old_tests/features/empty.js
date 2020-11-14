import { createForm, findAllComponents, testComputedOption } from 'test-helpers'

export default function empty (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    it('should have `empty` true when value is empty', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.empty).toBe(true)

      el.update('')

      expect(el.empty).toBe(true)

      el.update(null)

      expect(el.empty).toBe(true)
    })

    it('should have `empty` false when value is not empty', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            default: 'value'
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.empty).toBe(false)
    })
  }
}