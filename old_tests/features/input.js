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

      let el = form.vm.el$('el')

      expect(el.input instanceof HTMLInputElement).toBe(true)
      expect(el.input.type).toBe(el.inputType)
    })
  }
}