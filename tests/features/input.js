import { createForm, destroy } from 'test-helpers'

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

    switch (options.inputType) {
      case 'input':
        expect(el.input instanceof HTMLInputElement).toBe(true)
        break

      case 'textarea':
        expect(el.input instanceof HTMLTextAreaElement).toBe(true)
        break
    }

    // destroy() // teardown
  })
}