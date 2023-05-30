import { createForm } from 'test-helpers'
import { nextTick } from 'vue'

export const hasAdd = function (elementType, elementName, options) {

  it('should return true by default', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasAdd).toBe(true)
  })

  it('should return true if max is `-1`', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          max: -1,
          initial: 1,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasAdd).toBe(true)
  })

  it('should be false if disabled', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasAdd).toBe(false)
  })

  it('should be false if max has been reached', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          max: 3,
          element: {
            type: 'text'
          },
        }
      }
    })

    let el = form.vm.el$('el')

    el.add()
    await nextTick()
    expect(el.hasAdd).toBe(true)

    el.add()
    await nextTick()
    expect(el.hasAdd).toBe(false)

    el.clear()
    await nextTick()
    expect(el.hasAdd).toBe(true)
  })

  it('should be true if not disabled, has add control and max has not been reached', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          controls: {
            add: true,
          },
          disabled: false,
          max: 2,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasAdd).toBe(true)

    el.add()
    await nextTick()
    expect(el.hasAdd).toBe(false)

    el.clear()
    expect(el.hasAdd).toBe(true)
    form.vm.$set(form.vm.vueform.schema.el.controls, 'add', false)
    await nextTick()
    expect(el.hasAdd).toBe(false)

    form.vm.$set(form.vm.vueform.schema.el.controls, 'add', true)
    await nextTick()
    expect(el.hasAdd).toBe(true)
    form.vm.$set(form.vm.vueform.schema.el, 'disabled', true)
    await nextTick()
    expect(el.hasAdd).toBe(false)
  })
}

export const hasRemove = function (elementType, elementName, options) {

  it('should return true by default', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasRemove).toBe(true)
  })

  it('should return true if min is `-1`', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          min: -1,
          element: {
            type: 'text'
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasRemove).toBe(true)
  })

  it('should be false if disabled', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasRemove).toBe(false)
  })

  it('should be false if min has been reached', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          min: 1,
          initial: 3,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    await nextTick()

    el.remove(0)
    await nextTick()
    expect(el.hasRemove).toBe(true)

    el.remove(0)
    await nextTick()
    expect(el.hasRemove).toBe(false)

    el.clear()
    await nextTick()
    expect(el.hasRemove).toBe(false)
  })

  it('should be true if not disabled, has remove control and min has not been reached', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          controls: {
            remove: true,
          },
          disabled: false,
          min: 1,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasRemove).toBe(false)

    el.add()
    await nextTick()
    expect(el.hasRemove).toBe(true)

    form.vm.$set(form.vm.vueform.schema.el.controls, 'remove', false)
    await nextTick()
    expect(el.hasRemove).toBe(false)

    form.vm.$set(form.vm.vueform.schema.el.controls, 'remove', true)
    await nextTick()
    expect(el.hasRemove).toBe(true)
    form.vm.$set(form.vm.vueform.schema.el, 'disabled', true)
    await nextTick()
    expect(el.hasRemove).toBe(false)

    form.vm.$set(form.vm.vueform.schema.el, 'disabled', false)
    await nextTick()
    expect(el.hasRemove).toBe(true)
    el.clear()
    await nextTick()
    expect(el.hasRemove).toBe(false)
  })
}

export const hasSort = function (elementType, elementName, options) {

  it('should return false by default', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasSort).toBe(false)
  })

  it('should return true if sort=true', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: {
            type: 'text'
          },
          sort: true
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasSort).toBe(true)
  })

  it('should be true if not disabled, has sort control and sort is enabled', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          controls: {
            sort: true,
          },
          disabled: false,
          sort: true,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasSort).toBe(true)

    form.vm.$set(form.vm.vueform.schema.el.controls, 'sort', false)
    await nextTick()
    expect(el.hasSort).toBe(false)

    form.vm.$set(form.vm.vueform.schema.el.controls, 'sort', true)
    await nextTick()
    expect(el.hasSort).toBe(true)
    form.vm.$set(form.vm.vueform.schema.el, 'disabled', true)
    await nextTick()
    expect(el.hasSort).toBe(false)

    form.vm.$set(form.vm.vueform.schema.el, 'disabled', false)
    await nextTick()
    expect(el.hasSort).toBe(true)
    form.vm.$set(form.vm.vueform.schema.el, 'sort', false)
    await nextTick()
    expect(el.hasSort).toBe(false)
  })
}

export const addLabel = function (elementType, elementName, options) {

  it('should return default addlabel (addText in list) if not defined', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.addLabel).toBe('+ Add')
  })

  it('should return addlabel (addText in list)', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: {
            type: 'text'
          },
          addText: 'New add button 123',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.addLabel).toBe('New add button 123')
  })
}