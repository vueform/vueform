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
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    elWrapper.get(options.fieldType).setValue('value')

    expect(el.value).toBe('value')

    // destroy() // teardown
  })
}