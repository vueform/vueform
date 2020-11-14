import { createForm } from 'test-helpers'

export const input = function (elementType, elementName, options) {
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