import flushPromises from 'flush-promises'
import { createForm, findAllComponents } from 'test-helpers'

export const handleInput = function (elementType, elementName, options) {
  it('should set value on input', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.input.trix$ = { value: options.value.en }
    el.input.handleChange()

    expect(el.model).toBe(options.value.en)
  })
}