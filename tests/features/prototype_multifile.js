import { createForm, testComputedOption } from 'test-helpers'

export const auto = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'auto', true, false)
}

export const object = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'object', false, true)
}

export const file = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'file', {}, { url: '/uploads/' })
}

export const storeFile = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'storeFile', null, 'filename')

  it('should have "file" as `storeFile` by default if object is true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          object: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.storeFile).toBe('file')
  })
}

export const fields = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'fields', {}, { el2: { type: 'text' } })
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
          type: 'meta'
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
  it('should have `isObject` true if "object" true or "storeFile" / "storeOrder" / "fields" exists', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isObject).toBe(false)

    el.object = true

    expect(el.isObject).toBe(true)

    el.object = false
    el.storeFile = 'filename'
    
    expect(el.isObject).toBe(true)

    el.storeFile = null
    el.storeOrder = 'order'
    
    expect(el.isObject).toBe(true)

    el.storeOrder = null
    el.fields = { child: { type: 'text' } }
    
    expect(el.isObject).toBe(true)

    el.fields = {}

    expect(el.isObject).toBe(false)
  })
}