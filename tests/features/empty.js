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

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.empty).toBe(true)

      el.vm.update('')

      expect(el.vm.empty).toBe(true)

      el.vm.update(null)

      expect(el.vm.empty).toBe(true)
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

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.empty).toBe(false)
    })
  }
}