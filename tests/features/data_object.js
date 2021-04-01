import { createForm, destroy } from 'test-helpers'
import flushPromises from 'flush-promises'

export const plainData = function (elementType, elementName) {
  it('should have "plainData" as an object with values of children', () => {
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
          }
        }
      }
    })

    let el = form.vm.el$('el')

    if (el.flat) {
      expect(el.plainData).toStrictEqual({
        child1: 'value',
        child2: 'value2',
      })
    }
    else {
      expect(el.plainData).toStrictEqual({
        el: {
          child1: 'value',
          child2: 'value2',
        }
      })
    }
  })
}


export const data = function(elementType, elementName) {
  it('should have empty object as `data` if not available', async () => {
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
            ['el2', 'value']
          ]
        },
        el2: {
          type: 'text',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({})    
    
    // destroy(form) // teardown
  })

  it('should have `data` equal to available children data values', async () => {
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
                ['el.child1', 'value2']
              ]
            },
            child3: {
              type: elementType,
              schema: {
                child4: {
                  type: 'text',
                  default: 'value4'
                },
                child5: {
                  type: 'text',
                  default: 'value5',
                  conditions: [
                    ['el.child3.child4', 'value']
                  ]
                },
              }
            }
          },
        },
      }
    })

    let el = form.vm.el$('el')

    if (el.flat) {
      expect(el.data).toStrictEqual({
        child1: 'value',
        child4: 'value4'
      })
    }
    else {
      expect(el.data).toStrictEqual({
        el: {
          child1: 'value',
          child3: {
            child4: 'value4'
          }
        }
      })
    }

    // destroy() // teardown
  })
}

export const load = function(elementType, elementName) {
  it('should load data to children on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text'
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let child = form.vm.el$('el.child')

    el.load({ child: 'value' })

    expect(el.value).toStrictEqual({ child: 'value' })    
    
    // destroy(form) // teardown
  })

  it('should should format data if "formatData" is "true" on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text',
              formatLoad(value) {
                return `${value}-formatted`
              }
            }
          },
          formatLoad(value) {
            return {
              child: `pre-${value.child}`
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load({ child: 'value' }, true)
    
    expect(el.value).toStrictEqual({ child: 'pre-value-formatted' })

    // destroy() // teardown
  })
}

export const update = function(elementType, elementName) {
  it('should load data to children on `update`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text'
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let child = form.vm.el$('el.child')

    el.update({ child: 'value' })

    expect(el.value).toStrictEqual({ child: 'value' })

    // destroy() // teardown
  })
}

export const clear = function(elementType, elementName) {
  it('should clear children on `clear`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text',
              default: 'value'
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let child = form.vm.el$('el.child')

    el.clear()

    expect(el.value).toStrictEqual({ child: child.nullValue })

    // destroy() // teardown
  })
}

export const reset = function(elementType, elementName) {
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
            }
          }
        }
      }
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