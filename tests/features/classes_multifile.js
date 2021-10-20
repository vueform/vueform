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
      list: el.classes.list_file,
      listItem: el.classes.listItem_file,
      handle: el.classes.handle_file,
      handleIcon: el.classes.handleIcon_file,
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

    expect(el.classes.list).not.toContain(el.classes.list_disabled)

    el.disable()

    expect(el.classes.list).toContain(el.classes.list_disabled)
    
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

    expect(el.classes.list).not.toContain(el.classes.list_sorting)
    
    el.sorting = true

    expect(el.classes.list).toContain(el.classes.list_sorting)
    
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

    expect(el.classes.list).toContain(el.classes.list_file)
    expect(el.classes.list).not.toContain(el.classes.list_image)
    expect(el.classes.list).not.toContain(el.classes.list_gallery)
    
    expect(el.classes.listItem).toContain(el.classes.listItem_file)
    expect(el.classes.listItem).not.toContain(el.classes.listItem_gallery)

    expect(el.classes.handle).toContain(el.classes.handle_file)
    expect(el.classes.handle).not.toContain(el.classes.handle_image)
    expect(el.classes.handle).not.toContain(el.classes.handle_gallery)
    
    expect(el.classes.handleIcon).toContain(el.classes.handleIcon_file)
    expect(el.classes.handleIcon).not.toContain(el.classes.handleIcon_image)
    expect(el.classes.handleIcon).not.toContain(el.classes.handleIcon_gallery)
    
    form.vm.$set(form.vm.laraform.schema.el, 'view', 'gallery')

    await nextTick()

    expect(el.classes.list).not.toContain(el.classes.list_file)
    expect(el.classes.list).not.toContain(el.classes.list_image)
    expect(el.classes.list).toContain(el.classes.list_gallery)

    expect(el.classes.listItem).not.toContain(el.classes.listItem_file)
    expect(el.classes.listItem).not.toContain(el.classes.listItem_image)
    expect(el.classes.listItem).toContain(el.classes.listItem_gallery)

    expect(el.classes.handle).not.toContain(el.classes.handle_file)
    expect(el.classes.handle).not.toContain(el.classes.handle_image)
    expect(el.classes.handle).toContain(el.classes.handle_gallery)

    expect(el.classes.handleIcon).not.toContain(el.classes.handleIcon_file)
    expect(el.classes.handleIcon).not.toContain(el.classes.handleIcon_image)
    expect(el.classes.handleIcon).toContain(el.classes.handleIcon_gallery)
    
  // destroy(form) // teardown
  })
}