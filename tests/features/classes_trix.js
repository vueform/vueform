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

    expect(el.classes.trix).not.toContain(el.classes.disabled)

    form.vm.$set(form.vm.laraform.schema.el, 'disabled', true)

    await nextTick()

    expect(el.classes.trix).toContain(el.classes.disabled)
    
  // destroy(form) // teardown
  })
}