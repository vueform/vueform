import { createForm, destroy } from 'test-helpers'
import { classes as baseClasses } from './classes_list'
import { nextTick } from 'composition-api'

export { mainClass, rendering } from './classes'

export const classes = function (elementType, elementName, options) {
  let form = createForm({
    schema: {
      el: {
        type: elementType,
      }
    },
  })

  let el = form.vm.el$('el')

  baseClasses(elementType, elementName, Object.assign({}, options, {
    mergeWith: {
      list: el.classes.listDefault,
      listItem: el.classes.listItemDefault,
    }
  }))

  it('should add disabled class to list when disabled', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes.list).not.toContain(el.classes.disabled)

    el.disable()

    expect(el.classes.list).toContain(el.classes.disabled)
    
  // destroy(form) // teardown
  })

  it('should add sorting class to list when sorting', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes.list).not.toContain(el.classes.sorting)
    
    el.sorting = true

    expect(el.classes.list).toContain(el.classes.sorting)
    
  // destroy(form) // teardown
  })

  it('should add listGallery to list and listItemGallery to listItem class when view=gallery', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes.list).toContain(el.classes.listDefault)
    expect(el.classes.list).not.toContain(el.classes.listGallery)
    expect(el.classes.listItem).toContain(el.classes.listItemDefault)
    expect(el.classes.listItem).not.toContain(el.classes.listItemGallery)
    
    form.vm.$set(form.vm.laraform.schema.el, 'view', 'gallery')

    await nextTick()

    expect(el.classes.list).not.toContain(el.classes.listDefault)
    expect(el.classes.list).toContain(el.classes.listGallery)
    expect(el.classes.listItem).not.toContain(el.classes.listItemDefault)
    expect(el.classes.listItem).toContain(el.classes.listItemGallery)
    
  // destroy(form) // teardown
  })
}