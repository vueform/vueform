import { createForm, testPropDefault } from 'test-helpers'
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
  })
}

export const prototype = function (elementType, elementName, options) {
  it('should have `prototype` as a single element when not object', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.prototype).toStrictEqual({
      type: options.fileType,
      auto: el.auto,
    })
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
      type: options.fileType,
      auto: el.auto,
      url: '/uploads/'
    })
  })

  it('should have `prototype` as an object element isObject true', () => {
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
          type: options.fileType,
          auto: el.auto,
        }
      }
    })
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
          type: options.fileType,
          auto: el.auto,
        }
      }
    })
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
          type: options.fileType,
          auto: el.auto,
          url: '/uploads/',
        }
      }
    })
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
          type: options.fileType,
          auto: el.auto,
        },
        order: {
          type: 'hidden',
          meta: true
        }
      }
    })
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
          type: options.fileType,
          auto: el.auto,
        },
        label: {
          type: 'text'
        }
      }
    })
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

    el.$set(form.vm.schema.el, 'object', true)
    await nextTick()

    expect(el.isObject).toBe(true)

    el.$delete(form.vm.schema.el, 'object')
    el.$set(form.vm.schema.el, 'storeFile', 'filename')
    await nextTick()
    
    expect(el.isObject).toBe(true)

    el.$delete(form.vm.schema.el, 'storeFile')
    el.$set(form.vm.schema.el, 'storeOrder', 'order')
    await nextTick()
    
    expect(el.isObject).toBe(true)

    el.$delete(form.vm.schema.el, 'storeOrder')
    el.$set(form.vm.schema.el, 'fields', { child: { type: 'text' }})
    await nextTick()
    
    expect(el.isObject).toBe(true)

    el.$set(form.vm.schema.el, 'fields', {})
    await nextTick()

    expect(el.isObject).toBe(false)
  })
}