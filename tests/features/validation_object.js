import flushPromises from 'flush-promises'
import { createForm, findAllComponents, destroy } from 'test-helpers'

jest.useFakeTimers()

export const dirty = function (elementType, elementName, options) {
  it('should be not `dirty` if none of the children is dirty', () => {
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

    expect(el.dirty).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should be `dirty` if any of the children is dirty', () => {
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
    let child1 = form.vm.el$(`el.${_.keys(el.children)[0]}`)

    child1.dirt()

    expect(el.dirty).toBe(true)

    // destroy() // teardown
  })
}

export const validated = function (elementType, elementName, options) {
  it('should not be `validated` if any of the children is not validated', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          required: true,
          schema: {
            child1: {
              type: 'text',
              rules: 'required',
            },
            child2: {
              type: 'text',
              rules: 'required',
            },
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let child1 = form.vm.el$(`el.${_.keys(el.children)[0]}`)

    child1.validate()

    await flushPromises()

    expect(el.validated).toBe(false)
  })
  
  it('should be `validated` if all of the children are validated', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          required: true,
          schema: {
            child1: {
              type: 'text',
              rules: 'required',
            },
            child2: {
              type: 'text',
              rules: 'required',
            },
          }
        }
      }
    })

    let el = form.vm.el$('el')
   
    el.validate()

    await flushPromises()

    expect(el.validated).toBe(true)

    // destroy() // teardown
  })
}

export const invalid = function (elementType, elementName, options) {
  it('should not be `invalid` if none of the children is invalid', () => {
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
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.invalid).toBe(false)
  })
  
  it('should be `invalid` if any of the children is invalid', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          required: true,
          schema: {
            child1: {
              type: 'text',
              rules: 'required'
            },
            child2: {
              type: 'text',
            },
          }
        }
      }
    })

    let el = form.vm.el$('el')

    let child1 = form.vm.el$(`el.${_.keys(el.children)[0]}`)

    child1.validate()

    await flushPromises()

    expect(el.invalid).toBe(true)

    // destroy() // teardown
  })
}

export const pending = function (elementType, elementName, options) {
  it('should not be `pending` if none of the children is pending', () => {
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
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.pending).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should be `pending` if any of the children is pending', async () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text',
              rules: 'unique:param',
            },
            child2: {
              type: 'text',
            },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    let child1 = form.vm.el$(`el.${_.keys(el.children)[0]}`)

    child1.$vueform.services.axios.request = axiosPostMock

    child1.validate()

    expect(el.pending).toBe(true)

    await flushPromises()

    expect(el.pending).toBe(false)

    // destroy() // teardown
  })
}

export const debouncing = function (elementType, elementName, options) {
  it('should not be `debouncing` if none of the children is debouncing', () => {
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
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.debouncing).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should be `debouncing` if any of the children is debouncing', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text',
              rules: 'required',
              default: 'aaa',
              debounce: 1
            },
            child2: {
              type: 'text',
            },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)

    child1.vm.validate()

    expect(el.debouncing).toBe(true)

    jest.advanceTimersByTime(1)
    await flushPromises()

    expect(el.debouncing).toBe(false)

    // destroy() // teardown
  })
}

export const busy = function (elementType, elementName, options) {
  it('should not be `busy` if none of the children is busy', () => {
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
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.busy).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should be `busy` if any of the children is busy', async () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text',
              rules: 'unique:param',
            },
            child2: {
              type: 'text',
            },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)

    child1.vm.$vueform.services.axios.request = axiosPostMock

    child1.vm.validate()

    expect(el.busy).toBe(true)

    await flushPromises()
    
    expect(el.busy).toBe(false)

    // destroy() // teardown
  })
}

export const errors = function (elementType, elementName, options) {
  it('should collect `errors` from available children', () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text',
              rules: 'required',
            },
            child2: {
              type: 'text',
              rules: 'required',
            },
            child3: {
              type: 'text',
              rules: 'required',
              conditions: [
                ['el.child2', 'value']
              ]
            },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)
    let child3 = findAllComponents(form, { name: 'TextElement' }).at(2)

    child1.vm.validate()
    child2.vm.validate()
    child3.vm.validate()

    expect(el.errors.length).toBe(2)

    // destroy() // teardown
  })
}

export const validate = function (elementType, elementName, options) {
  it('should validate all children on `validate`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          required: true,
          schema: {
            child1: {
              type: 'text',
              rules: 'required',
            },
            child2: {
              type: 'text',
              rules: 'required',
            },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    _.each(el.children$, (child$) => {
      if (!child$.rules) {
        return
      }

      expect(child$.validated).toBe(false)
    })

    el.validate()

    await flushPromises()

    _.each(el.children$, (child$) => {
      expect(child$.validated).toBe(true)
    })

    // destroy() // teardown
  })
}

export const clean = function (elementType, elementName, options) {
  
  it('should clean all children on `clean`', async () => {
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
        }
      }
    })

    let el = form.vm.el$('el')

    _.each(el.children$, (child$) => {
      child$.dirt()
    })

    el.clean()

    _.each(el.children$, (child$) => {
      expect(child$.dirty).toBe(false)
    })

    // destroy() // teardown
  })
  
  // it('should not clean children that are isStatic true', async () => {
  //   let form = createForm({
  //     schema: {
  //       el: {
  //         type: elementType,
  //         schema: {
  //           child1: {
  //             type: 'static',
  //           },
  //           child2: {
  //             type: 'button',
  //           },
  //         },
  //       }
  //     }
  //   })
  //
  //   let el = form.vm.el$('el')
  //
  //   _.each(el.children$, (child$) => {
  //     child$.dirt()
  //   })
  //
  //   el.clean()
  //
  //   _.each(el.children$, (child$) => {
  //     expect(child$.dirty).toBe(false)
  //   })
  //
  //   // destroy() // teardown
  // })
}

export const clearMessages = function (elementType, elementName, options) {
  
  it('should not clear all elements', () => {
    
    const messageBagMock = jest.fn()
    let originalMessageBag
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onBeforeCreate(el$) {
            originalMessageBag = el$.$vueform.services.messageBag
            el$.$vueform.services.messageBag = class {
              clear() { messageBagMock() }
            }
          },
          schema: {
            child1: {
              type: 'text',
            },
            child2: {
              type: 'text',
            },
            child3: {
              type: 'text',
            },
          },
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    el.clearMessages()
    
    expect(messageBagMock).toHaveBeenCalledTimes(4)
    
    el.$vueform.services.messageBag = originalMessageBag
  })
  
  it('should not clear child element if child element isStatic is true', () => {
    
    const messageBagMock = jest.fn()
    let originalMessageBag
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onBeforeCreate(el$) {
            originalMessageBag = el$.$vueform.services.messageBag
            el$.$vueform.services.messageBag = class {
              clear() { messageBagMock() }
            }
          },
          schema: {
            child: {
              type: 'static', // or button
            },
          },
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    el.clearMessages()
    
    expect(messageBagMock).toHaveBeenCalledTimes(1)
    
    el.$vueform.services.messageBag = originalMessageBag
  })
}

export const resetValidators = function (elementType, elementName, options) {
  it('should reset validators for all children on `resetValidators`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          required: true,
          schema: {
            child1: {
              type: 'text',
              rules: 'required',
            },
            child2: {
              type: 'text',
              rules: 'required',
            },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()

    el.resetValidators()

    _.each(el.children$, (child$) => {
      if (!child$.rules) {
        return
      }
      
      expect(child$.validated).toBe(false)
    })

    // destroy() // teardown
  })
}

export const messageBag = function (elementType, elementName, options) {
  it('should init `messageBag`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.messageBag instanceof el.$vueform.services.messageBag).toBe(true)

    // destroy() // teardown
  })
}