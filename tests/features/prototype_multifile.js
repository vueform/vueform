import { createForm, testPropDefault, destroy } from 'test-helpers'
import { nextTick } from 'composition-api'

export const storeFileName = function (elementType, elementName, options) {
  it('should have "file" as `storeFileName` by default if object is true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          object: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.storeFileName).toBe('file')

    // destroy() // teardown
  })
}

export const prototype = function (elementType, elementName, options) {
  it('should have `prototype` as a single element when not object image=false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.prototype).toStrictEqual({
      type: 'file',
      image: false,
      auto: el.auto,
      view: el.view,
      layout: 'ElementLayout',
      disabled: el.disabled,
    })
  })
  it('should have `prototype` as a single element when not object image=true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          image: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.prototype).toStrictEqual({
      type: 'file',
      image: true,
      auto: el.auto,
      view: el.view,
      layout: 'ElementLayout',
      disabled: el.disabled,
    })
    
    // destroy(form) // teardown
  })

  it('should extend single element `prototype` with "file" object', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          file: {
            url: '/uploads/'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.prototype).toStrictEqual({
      type: 'file',
      image: false,
      auto: el.auto,
      url: '/uploads/',
      view: el.view,
      layout: 'ElementLayout',
      disabled: el.disabled,
    })
    
    // destroy(form) // teardown
  })

  it('should have `prototype` as an object element isObject true image=false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          object: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.prototype).toStrictEqual({
      type: 'object',
      schema: {
        file: {
          type: 'file',
          image: false,
          embed: true,
          auto: el.auto,
          view: el.view,
          layout: 'ElementLayout',
          disabled: el.disabled,
        }
      }
    })
    
    // destroy(form) // teardown
  })

  it('should have `prototype` as an object element isObject true image=true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          object: true,
          image: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.prototype).toStrictEqual({
      type: 'object',
      schema: {
        file: {
          type: 'file',
          image: true,
          embed: true,
          auto: el.auto,
          view: el.view,
          layout: 'ElementLayout',
          disabled: el.disabled,
        }
      }
    })
    
    // destroy(form) // teardown
  })

  it('should have object `prototype` with custom storeFile', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          object: true,
          storeFile: 'filename'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.prototype).toStrictEqual({
      type: 'object',
      schema: {
        filename: {
          type: 'file',
          image: false,
          embed: true,
          auto: el.auto,
          view: el.view,
          layout: 'ElementLayout',
          disabled: el.disabled,
        }
      }
    })
    
    // destroy(form) // teardown
  })

  it('should have object `prototype` with file extension', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          object: true,
          file: {
            url: '/uploads/'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.prototype).toStrictEqual({
      type: 'object',
      schema: {
        file: {
          type: 'file',
          auto: el.auto,
          image: false,
          embed: true,
          url: '/uploads/',
          view: el.view,
          layout: 'ElementLayout',
          disabled: el.disabled,
        }
      }
    })
    
    // destroy(form) // teardown
  })

  it('should have object `prototype` with storeOrder', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          object: true,
          storeOrder: 'order'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.prototype).toStrictEqual({
      type: 'object',
      schema: {
        file: {
          type: 'file',
          image: false,
          embed: true,
          auto: el.auto,
          view: el.view,
          layout: 'ElementLayout',
          disabled: el.disabled,
        },
        order: {
          type: 'hidden',
          meta: true
        }
      }
    })
    
    // destroy(form) // teardown
  })

  it('should have object `prototype` with fields', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          object: true,
          fields: {
            label: {
              type: 'text'
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.prototype).toStrictEqual({
      type: 'object',
      schema: {
        file: {
          type: 'file',
          image: false,
          embed: true,
          auto: el.auto,
          view: el.view,
          layout: 'ElementLayout',
          disabled: el.disabled,
        },
        label: {
          type: 'text'
        }
      }
    })

    // destroy() // teardown
  })
}

export const isObject = function (elementType, elementName, options) {
  it('should have `isObject` true if "object" true or "storeFile" / "storeOrder" / "fields" exists', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isObject).toBe(false)

    el.$set(form.vm.laraform.schema.el, 'object', true)
    await nextTick()

    expect(el.isObject).toBe(true)

    el.$delete(form.vm.laraform.schema.el, 'object')
    el.$set(form.vm.laraform.schema.el, 'storeFile', 'filename')
    await nextTick()
    
    expect(el.isObject).toBe(true)

    el.$delete(form.vm.laraform.schema.el, 'storeFile')
    el.$set(form.vm.laraform.schema.el, 'storeOrder', 'order')
    await nextTick()
    
    expect(el.isObject).toBe(true)

    el.$delete(form.vm.laraform.schema.el, 'storeOrder')
    el.$set(form.vm.laraform.schema.el, 'fields', { child: { type: 'text' }})
    await nextTick()
    
    expect(el.isObject).toBe(true)

    el.$set(form.vm.laraform.schema.el, 'fields', {})
    await nextTick()

    expect(el.isObject).toBe(false)

    // destroy() // teardown
  })
}