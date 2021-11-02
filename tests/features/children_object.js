import { createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const children$Array = function (elementType, elementName) {
  it('should have `children$Array` as an empty array by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children$Array).toStrictEqual([])    
    
    // destroy(form) // teardown
  })

  it('should collect elements to `children$Array`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text'
            },
            child2: {
              type: 'text'
            },
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children$Array.length).toBe(2)    
    
    // destroy(form) // teardown
  })

  it('should update `children$Array` when schema changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text'
            },
            child2: {
              type: 'text'
            },
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children$Array[0]).toStrictEqual(form.vm.el$('el.child1'))
    expect(el.children$Array[1]).toStrictEqual(form.vm.el$('el.child2'))

    form.vm.$set(form.vm.vueform.schema.el, 'schema', {
      child2: {
        type: 'text'
      },
      child1: {
        type: 'text'
      },
    })

    await nextTick()

    expect(el.children$Array[0]).toStrictEqual(form.vm.el$('el.child2'))
    expect(el.children$Array[1]).toStrictEqual(form.vm.el$('el.child1'))
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const children = function (elementType, elementName) {
  it('should have `children` equal to schema object', () => {
    let childrenSchema = {
      child1: {
        type: 'text'
      },
      child2: {
        type: 'text'
      },
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: childrenSchema,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children).toStrictEqual(childrenSchema)
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const children$ = function (elementType, elementName) {
  it('should have `children$` equal to an object of child element components', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text'
            },
            child2: {
              type: 'text'
            },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children$.child1.name).toBe('child1')
    expect(el.children$.child2.name).toBe('child2')
    
    // destroy(form) // teardown
  })
}