import flushPromises from 'flush-promises'
import { createForm, findAllComponents } from 'test-helpers'

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
    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)

    child1.vm.dirt()

    expect(el.dirty).toBe(true)
  })
}

export const validated = function (elementType, elementName, options) {
  it('should not be `validated` if any of the children is not validated', async () => {
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
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)

    child1.vm.validate()

    await flushPromises()

    expect(el.validated).toBe(false)
  })
  
  it('should be `validated` if all of the children are validated', async () => {
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
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)

    child1.vm.validate()
    child2.vm.validate()

    await flushPromises()

    expect(el.validated).toBe(true)
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

    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)

    child1.vm.validate()

    await flushPromises()

    expect(el.invalid).toBe(true)
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

    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)

    child1.vm.$laraform.services.axios.post = axiosPostMock

    child1.vm.validate()

    expect(el.pending).toBe(true)

    await flushPromises()

    expect(el.pending).toBe(false)
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
  })

  it('should be `debouncing` if any of the children is debouncing', async () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text',
              rules: 'required',
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

    child1.vm.$laraform.services.axios.post = axiosPostMock

    child1.vm.validate()

    expect(el.debouncing).toBe(true)

    setTimeout(() => {
      expect(el.debouncing).toBe(false)
    }, 1)
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

    child1.vm.$laraform.services.axios.post = axiosPostMock

    child1.vm.validate()

    expect(el.busy).toBe(true)

    setTimeout(() => {
      expect(el.busy).toBe(false)
    }, 1)
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
  })
}

export const validate = function (elementType, elementName, options) {
  it('should validate all children on `validate`', async () => {
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
          },
        }
      }
    })

    let el = form.vm.el$('el')

    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(child1.vm.validated).toBe(false)
    expect(child2.vm.validated).toBe(false)

    el.validate()

    await flushPromises()

    expect(child1.vm.validated).toBe(true)
    expect(child2.vm.validated).toBe(true)
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

    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)

    child1.vm.dirt()
    child2.vm.dirt()

    el.clean()

    expect(child1.vm.dirty).toBe(false)
    expect(child2.vm.dirty).toBe(false)
  })
}

export const resetValidators = function (elementType, elementName, options) {
  it('should reset validators for all children on `resetValidators`', async () => {
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
          },
        }
      }
    })

    let el = form.vm.el$('el')

    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)

    child1.vm.validate()
    child2.vm.validate()

    await flushPromises()

    el.resetValidators()

    expect(child1.vm.validated).toBe(false)
    expect(child2.vm.validated).toBe(false)
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

    expect(el.messageBag instanceof el.$laraform.services.messageBag).toBe(true)
  })
}