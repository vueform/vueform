import { createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const watcher = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should update instance schemas when `prototype` changes using element', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          file: {
            label: 'label'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.add()

    await nextTick()

    let child = form.vm.el$('el.0')

    el.$set(form.vm.vueform.schema.el.file, 'label', 'new label') //@todo check if works

    await nextTick()
    await nextTick()

    expect(child.label).toBe('new label')
    
    // destroy(form) // teardown
  })

  it('should update instance schemas when `prototype` changes using object', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          object: true,
          file: {
            label: 'label'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.add()

    await nextTick()

    let child = form.vm.el$('el.0.file')

    el.$set(form.vm.vueform.schema.el.file, 'label', 'new label') //@todo check if works

    await nextTick()
    await nextTick()

    expect(child.label).toBe('new label')

    // destroy() // teardown
  })
}