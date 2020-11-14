import { createForm, testComputedOption } from 'test-helpers'
import { nextTick } from 'composition-api'

export const autogrow = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'autogrow', true, false)

  testComputedOption(it, elementType, 'rows', 3, 5)
}

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

    el.$laraform.services.autosize.update = updateMock

    el.autosize()

    await nextTick()

    expect(updateMock).toHaveBeenCalled()
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

    el.$laraform.services.autosize.update = updateMock

    el.autosize()

    await nextTick()

    expect(updateMock).not.toHaveBeenCalled()
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

    el.$laraform.services.autosize = autosizeMock

    await nextTick()

    expect(autosizeMock).not.toHaveBeenCalled()

    el.autogrow = true

    await nextTick()

    expect(autosizeMock).toHaveBeenCalled()
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

    el.$laraform.services.autosize.destroy = destroyMock

    await nextTick()

    el.autogrow = false

    await nextTick()

    expect(destroyMock).toHaveBeenCalled()
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

    el.$laraform.services.autosize = autosizeMock

    await nextTick()
    
    expect(autosizeMock).toHaveBeenCalled()
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

    el.$laraform.services.autosize = autosizeMock

    await nextTick()
    
    expect(autosizeMock).not.toHaveBeenCalled()
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

    el.$laraform.services.autosize.update = updateMock

    await nextTick()

    expect(updateMock).not.toHaveBeenCalled()

    el.update('value')

    await nextTick()

    expect(updateMock).toHaveBeenCalled()
  })
}