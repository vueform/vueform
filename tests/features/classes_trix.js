import { createForm } from 'test-helpers'
import { classes as baseClasses } from './classes'
import { nextTick } from 'composition-api'

export { mainClass, rendering } from './classes'

export const classes = function (elementType, elementName, options) {
  baseClasses(elementType, elementName, options)

  it('should add disabled class to trix when disabled', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes.input).not.toContain(el.classes.input_disabled)

    form.vm.$set(form.vm.laraform.schema.el, 'disabled', true)

    await nextTick()

    expect(el.classes.input).toContain(el.classes.input_disabled)
    
  // destroy(form) // teardown
  })
}