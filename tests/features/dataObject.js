import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'
import { submit, formatData, formatLoad } from './data'

export {
  // Computed
  submit,
  formatData,
  formatLoad,
}

export const data = function (elementType, elementName) {
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
          }
        }
      }
    })

    let el = form.vm.el$('el')

    if (el.flat) {
      expect(el.data).toStrictEqual({
        child1: 'value',
        child2: 'value2',
      })
    }
    else {
      expect(el.data).toStrictEqual({
        el: {
          child1: 'value',
          child2: 'value2',
        }
      })
    }
  })

  it('should have "data" according to `formatData` if it is set', () => {
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
          formatData(name, value) {
            return {
              custom: value
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      custom: {
        child1: 'value',
        child2: 'value2',
      }
    })
  })
}


export const filtered = function(elementType, elementName) {
  it('should have empty object as `filtered` if not available', async () => {
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

    expect(el.filtered).toStrictEqual({})
  })

  it('should have `filtered` equal to available children filtered values', async () => {
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
      expect(el.filtered).toStrictEqual({
        child1: 'value',
        child4: 'value4'
      })
    }
    else {
      expect(el.filtered).toStrictEqual({
        el: {
          child1: 'value',
          child3: {
            child4: 'value4'
          }
        }
      })
    }
  })
}

export const load = function(elementType, elementName) {
  it('should `load` data to children', async () => {
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
        },
      }
    })

    let el = form.vm.el$('el')
    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)

    if (el.flat) {
      el.load({
        child1: 'value',
        child2: 'value2',
      })
    }
    else {
      el.load({
        el: {
          child1: 'value',
          child2: 'value2',
        }
      })
    }

    expect(child1.vm.value).toBe('value')
    expect(child2.vm.value).toBe('value2')
  })
}

export const update = function(elementType, elementName) {
  it('should update children on `update`', () => {
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
            child3: {
              type: elementType,
              schema: {
                child4: {
                  type: 'text',
                  default: 'value4'
                },
                child5: {
                  type: 'text',
                  default: 'value5'
                },
              }
            },
          }
        },
      }
    })

    let el = form.vm.el$('el')
    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)
    let child4 = findAllComponents(form, { name: 'TextElement' }).at(2)
    let child5 = findAllComponents(form, { name: 'TextElement' }).at(3)

    if (el.flat) {
      el.update({
        child1: 'not-value',
        child4: 'not-value4'
      })
    }
    else {
      el.update({
        child1: 'not-value',
        child3: {
          child4: 'not-value4'
        }
      })
    }

    expect(child1.vm.value).toBe('not-value')
    expect(child2.vm.value).toBe('value2')
    expect(child4.vm.value).toBe('not-value4')
    expect(child5.vm.value).toBe('value5')
  })
}

export const clear = function(elementType, elementName) {
  it('should clear all children on `clear`', async () => {
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
        },
      }
    })

    let el = form.vm.el$('el')
    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)

    el.clear()

    expect(child1.vm.value).toBe(child1.vm.nullValue)
    expect(child2.vm.value).toBe(child1.vm.nullValue)
  })
}

export const reset = function(elementType, elementName)
{
  it('should reset all children on `reset`', async () => {
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
        },
      }
    })

    let el = form.vm.el$('el')
    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)

    child1.vm.update('not-value')
    child2.vm.update('not-value2')

    el.reset()

    expect(child1.vm.value).toBe('value')
    expect(child2.vm.value).toBe('value2')
  })
}

export default function (elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName, options)
    })
  }
}