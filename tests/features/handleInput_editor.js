import flushPromises from 'flush-promises'
import { createForm, findAllComponents, destroy } from 'test-helpers'

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
    
    el.input.editor$ = { value: options.value }
    el.input.handleChange()

    expect(el.model).toBe(options.value )

    // destroy() // teardown
  })
}