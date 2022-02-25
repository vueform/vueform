import { createForm } from 'test-helpers'
import { nextTick } from 'vue'

export const hasAdd = function (elementType, elementName, options) {
  it('should be true if not disabled, has add control', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          controls: {
            add: true,
          },
          disabled: false,
          auto: false,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasAdd).toBe(true)

    expect(el.hasAdd).toBe(true)
    form.vm.$set(form.vm.vueform.schema.el.controls, 'add', false)
    await nextTick()
    expect(el.hasAdd).toBe(false)

    form.vm.$set(form.vm.vueform.schema.el.controls, 'add', true)
    await nextTick()
    expect(el.hasAdd).toBe(true)

    form.vm.$set(form.vm.vueform.schema.el, 'disabled', true)
    await nextTick()
    expect(el.hasAdd).toBe(true)
  })
}

export const hasRemove = function (elementType, elementName, options) {
  it('should be true if not disabled, has remove control and not uploading', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          controls: {
            remove: true,
          },
          disabled: false,
          auto: false,
        }
      }
    })

    let el = form.vm.el$('el')

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

    el.add(new File([''], 'file.jpg'))
    await nextTick()

    el.children$[0].request = {}
    await nextTick()
    expect(el.hasRemove).toBe(false)
  })
}

export const hasSort = function (elementType, elementName, options) {
  it('should be true if not disabled, has sort control and not uploading', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          controls: {
            sort: true,
          },
          disabled: false,
          sort: true,
          auto: false,
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

    form.vm.$set(form.vm.vueform.schema.el, 'sort', true)
    await nextTick()
    expect(el.hasSort).toBe(true)

    el.add(new File([''], 'file.jpg'))
    await nextTick()

    el.children$[0].request = {}
    await nextTick()
    expect(el.hasSort).toBe(false)
  })
}