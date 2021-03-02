import { createForm } from 'test-helpers'

export const handleChange = function (elementType, elementName, options) {
  it('should set value on change', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default,
        }
      }
    })

    let el = form.vm.el$('el')
    
    switch (options.fieldType) {
      case 'toggle':
        el.input.update(options.value)
        break
    }

    expect(el.value).toBe(options.value)
  })
}