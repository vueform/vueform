import { createForm, testPropDefault, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const storeFileName = function (elementType, elementName, options) {
  
  it('should return `storeFile` if defined and object is true', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          object: true,
          storeFile: 'keyInObject'
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.storeFileName).toBe('keyInObject')
    
    // destroy() // teardown
  })
  
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
  
  it('should have "file" as `storeFileName` by default if fields prop length > 0', () => {
  
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          fields: {
            text: { type: 'text', }
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.storeFileName).toBe('file')
  })
  
  it('should have "file" as `storeFileName` by default if order is defined', () => {
  
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          storeOrder: 'order',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.storeFileName).toBe('file')
  })

  //@todo:adam delete unreachable code in usePrototype
  // it('should have "null" as `storeFileName` by if not object, no storeOrder or fields is defined', () => {
  //
  //   let form = createForm({
  //     schema: {
  //       el: {
  //         type: elementType,
  //       }
  //     }
  //   })
  //
  //   let el = form.vm.el$('el')
  //
  //   expect(el.storeFileName).toBe(null)
  // })
}

export const prototype = function (elementType, elementName, options) {
  
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
      auto: el.auto,
      url: '/uploads/',
      view: el.view,
      layout: 'ElementLayout',
      disabled: el.disabled,
      clickable: true,
      params: {},
      previewUrl: undefined,
      removeEndpoint: undefined,
      removeTempEndpoint: undefined,
      softRemove: false,
      uploadTempEndpoint: undefined,
    })
    
    // destroy(form) // teardown
  })
  
  it('should return ElementLayoutInline if view = gallery', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          view: 'gallery',
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.prototype).toStrictEqual({
      type: 'file',
      auto: el.auto,
      url: '/',
      view: el.view,
      layout: 'ElementLayoutInline',
      disabled: el.disabled,
      clickable: true,
      params: {},
      previewUrl: undefined,
      removeEndpoint: undefined,
      removeTempEndpoint: undefined,
      softRemove: false,
      uploadTempEndpoint: undefined,
    })
    
    // destroy(form) // teardown
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
          type: 'file',
          embed: true,
          auto: el.auto,
          view: el.view,
          layout: 'ElementLayout',
          disabled: el.disabled,
          clickable: true,
          params: {},
          previewUrl: undefined,
          removeEndpoint: undefined,
          removeTempEndpoint: undefined,
          softRemove: false,
          uploadTempEndpoint: undefined,
          url: '/',
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
          embed: true,
          auto: el.auto,
          view: el.view,
          layout: 'ElementLayout',
          disabled: el.disabled,
          clickable: true,
          params: {},
          previewUrl: undefined,
          removeEndpoint: undefined,
          removeTempEndpoint: undefined,
          softRemove: false,
          uploadTempEndpoint: undefined,
          url: '/',
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
          embed: true,
          url: '/uploads/',
          view: el.view,
          layout: 'ElementLayout',
          disabled: el.disabled,
          clickable: true,
          params: {},
          previewUrl: undefined,
          removeEndpoint: undefined,
          removeTempEndpoint: undefined,
          softRemove: false,
          uploadTempEndpoint: undefined,
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
          embed: true,
          auto: el.auto,
          view: el.view,
          layout: 'ElementLayout',
          disabled: el.disabled,
          clickable: true,
          params: {},
          previewUrl: undefined,
          removeEndpoint: undefined,
          removeTempEndpoint: undefined,
          softRemove: false,
          uploadTempEndpoint: undefined,
          url: '/',
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
          embed: true,
          auto: el.auto,
          view: el.view,
          layout: 'ElementLayout',
          disabled: el.disabled,
          clickable: true,
          params: {},
          previewUrl: undefined,
          removeEndpoint: undefined,
          removeTempEndpoint: undefined,
          softRemove: false,
          uploadTempEndpoint: undefined,
          url: '/',
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
  
  it('should `isObject` return false by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.isObject).toBe(false)
  })
  
  it('should `isObject` return true if `object` is true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          object: true,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.isObject).toBe(true)
  })
  
  it('should `isObject` return true if `storeOrder` is true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          storeOrder: 'someObjectKey',
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.isObject).toBe(true)
  })
  
  it('should `isObject` return true if wrapper element and has children', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          storeOrder: 'someObjectKey',
          element: {
            type: 'text',
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.isObject).toBe(true)
  })
}