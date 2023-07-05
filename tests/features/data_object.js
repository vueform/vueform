import { createForm, destroy } from 'test-helpers'
import flushPromises from 'flush-promises'

export const data = function(elementType, elementName) {
  it('should have "data" as an object with values of children', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text',
              default: 'value',
            },
            child2: {
              type: 'text',
              default: 'value2',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    if (el.flat) {
      expect(el.data).toStrictEqual({
        child1: 'value',
        child2: 'value2',
      })
    } else {
      expect(el.data).toStrictEqual({
        el: {
          child1: 'value',
          child2: 'value2',
        },
      })
    }
  })
}


export const requestData = function(elementType, elementName) {
  
  it('should have formatted `requestData` if formatData exists', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          formatData(name, value) {
            return {
              someKey: {
                [name]: `${value}-formatted`
              }
            }
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.requestData.someKey).toStrictEqual({ el: `${el.data}-formatted` })
    
    // destroy(form) // teardown
  })
  
  it('should not contain child that is a static element', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'static',
            },
            child2: {
              type: 'text',
              default: 'value',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    expect(el.requestData).toStrictEqual({
      el: {
        child2: 'value'
      }
    })
    
    // destroy() // teardown
  })
  
  it('should have empty object as `requestData` if not available', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text',
            },
            child2: {
              type: 'text',
            },
          },
          conditions: [
            ['el2', 'value'],
          ],
        },
        el2: {
          type: 'text',
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    expect(el.requestData).toStrictEqual({})
    
    // destroy(form) // teardown
  })
  
  it('should have `requestData` equal to available children requestData values', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text',
              default: 'value',
            },
            child2: {
              type: 'text',
              default: 'value2',
              conditions: [
                ['el.child1', 'value2'],
              ],
            },
            child3: {
              type: elementType,
              schema: {
                child4: {
                  type: 'text',
                  default: 'value4',
                },
                child5: {
                  type: 'text',
                  default: 'value5',
                  conditions: [
                    ['el.child3.child4', 'value'],
                  ],
                },
              },
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    if (el.flat) {
      expect(el.requestData).toStrictEqual({
        child1: 'value',
        child4: 'value4',
      })
    } else {
      expect(el.requestData).toStrictEqual({
        el: {
          child1: 'value',
          child3: {
            child4: 'value4',
          },
        },
      })
    }
    
    // destroy() // teardown
  })
}

export const load = function(elementType, elementName) {
  
  it('should not load into child that is a static element', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'static',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    el.load({ child: 'value' })
    
    expect(el.value).toStrictEqual({})
    
    // destroy() // teardown
  })
  
  it('should load data to children on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    let child = form.vm.el$('el.child')
    
    el.load({ child: 'value' })
    
    expect(el.value).toStrictEqual({ child: 'value' })
    
    // destroy(form) // teardown
  })
  
  it('should format data if "formatData" is "true" on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text',
              formatLoad(value)
              {
                return `${ value }-formatted`
              },
            },
          },
          formatLoad(value)
          {
            return {
              child: `pre-${ value.child }`,
            }
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    el.load({ child: 'value' }, true)
    
    expect(el.value).toStrictEqual({ child: 'pre-value-formatted' })
    
    // destroy() // teardown
  })
  
  it('should clear element if child is flat (GroupElement is the only flat currently) on load', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'group',
              formatLoad(value)
              {
                return `${ value }-formatted`
              },
            },
          },
          formatLoad(value)
          {
            return {
              child: `pre-${ value.child }`,
            }
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    el.load({ child: 'value' }, true)
    
    expect(el.value).toStrictEqual({})
  })
}

export const update = function(elementType, elementName, options) {
  
  it('should not update child that is a static element', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'static',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    el.update({ child: 'value' })
    
    expect(el.value).toStrictEqual({})
    
    // destroy() // teardown
  })
  
  it('should allow updating with undefined if element is not flat', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              default: options.default,
              type: 'text',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')

    el.update({ child: undefined })
    
    expect(el.value).toStrictEqual({ child: "" })
  })
  
  it('should load data to children on `update`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    let child = form.vm.el$('el.child')
    
    el.update({ child: 'value' })
    
    expect(el.value).toStrictEqual({ child: 'value' })
    
    // destroy() // teardown
  })
  
  it('should update element if flat (GroupElement is the only flat currently)', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'group',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    el.update({ child: 'value' })
    
    expect(el.value).toStrictEqual({})
  })
}

export const clear = function(elementType, elementName) {
 
  it('should not clear child that is a static element', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'static',
            },
          },
        },
      },
    })
    
    
    let el = form.vm.el$('el')
    
    el.clear()
    
    expect(el.value).toStrictEqual({})
    
    // destroy() // teardown
  })
  
  it('should clear children on `clear`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text',
              default: 'value',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    let child = form.vm.el$('el.child')
    
    el.clear()
    
    expect(el.value).toStrictEqual({ child: child.nullValue })
    
    // destroy() // teardown
  })
}

export const reset = function(elementType, elementName) {
  
  it('should not clear child that is a static element', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'static',
            },
          },
        },
      },
    })
    
    
    let el = form.vm.el$('el')
    
    el.reset()
    
    expect(el.value).toStrictEqual({})
    
    // destroy() // teardown
  })
  
  it('should reset children on `reset`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text',
              rules: 'required',
              default: 'value',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    let child = form.vm.el$('el.child')
    
    child.update('')
    child.validate()
    
    await flushPromises()
    
    expect(child.invalid).toBe(true)
    expect(child.validated).toBe(true)
    expect(child.value).toBe('')
    
    el.reset()
    
    expect(child.invalid).toBe(false)
    expect(child.validated).toBe(false)
    expect(child.value).toBe('value')
  })
}