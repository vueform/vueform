import { createForm, findAllComponents } from 'test-helpers'

export default function input (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    it('should set ref input DOM to `input` prop', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.input instanceof HTMLInputElement).toBe(true)
      expect(el.vm.input.type).toBe(el.vm.inputType)
    })
  }
}