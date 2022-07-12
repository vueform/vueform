import { createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const handleChange = function (elementType, elementName, options) {
  it('should set value on change', async () => {
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
      case 'dates':
        el.input.update(options.value)
        break

      case 'date':
        el.input.update([options.value])
        break
    }

    await nextTick()

    expect(el.value).toStrictEqual(options.value)

    // destroy() // teardown
  })
}