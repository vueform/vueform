import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'
import { submit, formatData, formatLoad, prepare } from './data'

export {
  // Computed
  submit,
  formatData,
  formatLoad,

  // Methods
  prepare,
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

    let el = findAllComponents(form, { name: elementName }).at(0)

    if (el.vm.flat) {
      expect(el.vm.data).toStrictEqual({
        child1: 'value',
        child2: 'value2',
      })
    }
    else {
      expect(el.vm.data).toStrictEqual({
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

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(el.vm.data).toStrictEqual({
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

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(el.vm.filtered).toStrictEqual({})
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

    let el = findAllComponents(form, { name: elementName }).at(0)

    if (el.vm.flat) {
      expect(el.vm.filtered).toStrictEqual({
        child1: 'value',
        child4: 'value4'
      })
    }
    else {
      expect(el.vm.filtered).toStrictEqual({
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

    let el = findAllComponents(form, { name: elementName }).at(0)
    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)

    if (el.vm.flat) {
      el.vm.load({
        child1: 'value',
        child2: 'value2',
      })
    }
    else {
      el.vm.load({
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

    let el = findAllComponents(form, { name: elementName }).at(0)
    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)
    let child4 = findAllComponents(form, { name: 'TextElement' }).at(2)
    let child5 = findAllComponents(form, { name: 'TextElement' }).at(3)

    if (el.vm.flat) {
      el.vm.update({
        child1: 'not-value',
        child4: 'not-value4'
      })
    }
    else {
      el.vm.update({
        el: {
          child1: 'not-value',
          child3: {
            child4: 'not-value4'
          }
        }
      })
    }

    expect(child1.vm.value).toBe('not-value')
    expect(child2.vm.value).toBe('value2')
    expect(child4.vm.value).toBe('not-value4')
    expect(child5.vm.value).toBe('value5')
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

    let el = findAllComponents(form, { name: elementName }).at(0)
    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)

    child1.vm.update('not-value')
    child2.vm.update('not-value2')

    el.vm.reset()

    expect(child1.vm.value).toBe('value')
    expect(child2.vm.value).toBe('value2')
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

    let el = findAllComponents(form, { name: elementName }).at(0)
    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)

    el.vm.clear()

    expect(child1.vm.value).toBe(child1.vm.nullValue)
    expect(child2.vm.value).toBe(child1.vm.nullValue)
  })
}

export default function (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName)
    })
  }
}