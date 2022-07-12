import { createForm, testPropDefault, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const autosize = function (elementType, elementName, options) {
  it('should invoke autosize\'s "updated" method on `autosize` if "autogrow" is true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          autogrow: true
        }
      }
    })

    let el = form.vm.el$('el')

    let updateMock = jest.fn()

    el.$vueform.services.autosize.update = updateMock

    el.autosize()

    await nextTick()

    expect(updateMock).toHaveBeenCalled()    
    
    // destroy(form) // teardown
  })

  it('should not invoke autosize\'s "updated" method on `autosize` if "autogrow" is false', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          autogrow: false
        }
      }
    })

    let el = form.vm.el$('el')

    let updateMock = jest.fn()

    el.$vueform.services.autosize.update = updateMock

    el.autosize()

    await nextTick()

    expect(updateMock).not.toHaveBeenCalled()    
    
    // destroy(form) // teardown
  })

  it('should init `autosize` when autogrow becomes "true"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          autogrow: false
        }
      }
    })

    let el = form.vm.el$('el')

    let autosizeMock = jest.fn()

    el.$vueform.services.autosize = autosizeMock

    await nextTick()

    expect(autosizeMock).not.toHaveBeenCalled()

    form.vm.vueform.schema.el.autogrow = true

    await nextTick()

    expect(autosizeMock).toHaveBeenCalled()    
    
    // destroy(form) // teardown
  })

  it('should destroy `autosize` when autogrow becomes "false"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          autogrow: true
        }
      }
    })

    let el = form.vm.el$('el')

    let destroyMock = jest.fn()

    el.$vueform.services.autosize.destroy = destroyMock

    await nextTick()

    form.vm.vueform.schema.el.autogrow = false

    await nextTick()

    expect(destroyMock).toHaveBeenCalled()    
    
    // destroy(form) // teardown
  })

  it('should init `autosize` if autogrow is "true"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          autogrow: true
        }
      }
    })

    let el = form.vm.el$('el')

    let autosizeMock = jest.fn()

    el.$vueform.services.autosize = autosizeMock

    await nextTick()
    
    expect(autosizeMock).toHaveBeenCalled()    
    
    // destroy(form) // teardown
  })

  it('should not init `autosize` if autogrow is "false"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          autogrow: false
        }
      }
    })

    let el = form.vm.el$('el')

    let autosizeMock = jest.fn()

    el.$vueform.services.autosize = autosizeMock

    await nextTick()
    
    expect(autosizeMock).not.toHaveBeenCalled()    
    
    // destroy(form) // teardown
  })

  it('should invoke `autosize` if value changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          autogrow: true,
        }
      }
    })

    let el = form.vm.el$('el')

    let updateMock = jest.fn()

    el.$vueform.services.autosize.update = updateMock

    await nextTick()

    expect(updateMock).not.toHaveBeenCalled()

    el.update('value')

    await nextTick()

    expect(updateMock).toHaveBeenCalled()
    
    // destroy(form) // teardown
  })
}