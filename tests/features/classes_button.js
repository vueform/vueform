import { createForm, destroy } from 'test-helpers'
import { classes as baseClasses } from './classes'
import { nextTick } from 'composition-api'

export { mainClass, rendering } from './classes'

export const classes = function (elementType, elementName, options) {
  baseClasses(elementType, elementName, options)

  it('should add disabled class to button when disabled', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes.button).not.toContain(el.classes.disabled)

    form.vm.$set(form.vm.laraform.schema.el, 'disabled', true)

    await nextTick()

    expect(el.classes.button).toContain(el.classes.disabled)
    
  // destroy(form) // teardown
  })

  it('should add loading class to button when loading', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes.button).not.toContain(el.classes.loading)

    form.vm.$set(form.vm.laraform.schema.el, 'loading', true)

    await nextTick()

    expect(el.classes.button).toContain(el.classes.loading)
    
  // destroy(form) // teardown
  })
}