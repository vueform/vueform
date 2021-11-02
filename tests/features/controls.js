import { createForm } from 'test-helpers'
import { nextTick } from 'vue'

export const hasAdd = function (elementType, elementName, options) {
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