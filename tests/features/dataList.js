import { nextTick } from 'vue'
import {
  createForm, findAllComponents, testComputedOption, replacePrototypeValue,
  prototypeChildType, prototypeChildSchema, prototypeAddOptions, 
  prototypeAddChildOptions, 
} from 'test-helpers'
import flushPromises from 'flush-promises'
import { submit, data, formatData, formatLoad } from './data'
import asyncForEach from './../../src/utils/asyncForEach'

export {
  // Computed
  submit,
  data,
  formatData,
  formatLoad,
}

export const filtered = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should "filtered" contained filtered data of children if prototype is a single element', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 2,
          element: {
            type: 'text',
            conditions: [
              ['el2', 'value2']
            ]
          },
          conditions: [
            ['el3', 'value3']
          ]
        },
        el2: {
          type: 'text',
        },
        el3: {
          type: 'text',
        },
      }
    })

    let el = form.vm.el$('el')
    let el2 = form.vm.el$('el2')
    let el3 = form.vm.el$('el3')
    let child0_1 = form.vm.el$('el.0')

    expect(el.filtered).toStrictEqual({})

    el3.update('value3')

    expect(el.filtered).toStrictEqual({
      el: []
    })

    el2.update('value2')

    expect(el.filtered).toStrictEqual({
      el: [null, null]
    })

    child0_1.update('child1-value')

    expect(el.filtered).toStrictEqual({
      el: ['child1-value', null]
    })
  })

  it('should "filtered" contained filtered data of children prototype is an object', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 2,
          object: {
            schema: {
              child1: {
                type: 'text',
                default: 'child1-value',
                conditions: [
                  ['el3', 'value3']
                ]
              },
              child2: {
                type: 'text',
                default: 'child2-value',
                conditions: [
                  ['el.*.child1', 'child1-value2']
                ]
              },
            },
            conditions: [
              ['el2', 'value2']
            ]
          },
          conditions: [
            ['el4', 'value4']
          ]
        },
        el2: {
          type: 'text',
        },
        el3: {
          type: 'text',
        },
        el4: {
          type: 'text',
        },
      }
    })

    let el = form.vm.el$('el')
    let el2 = form.vm.el$('el2')
    let el3 = form.vm.el$('el3')
    let el4 = form.vm.el$('el4')
    let child0_1 = form.vm.el$('el.0.child1')

    expect(el.filtered).toStrictEqual({})

    el4.update('value4')

    expect(el.filtered).toStrictEqual({
      el: []
    })

    el2.update('value2')

    expect(el.filtered).toStrictEqual({
      el: [{}, {}]
    })

    el3.update('value3')

    expect(el.filtered).toStrictEqual({
      el: [
        {
          child1: 'child1-value',
        },
        {
          child1: 'child1-value',
        }
      ]
    })

    child0_1.update('child1-value2')

    expect(el.filtered).toStrictEqual({
      el: [
        {
          child1: 'child1-value2',
          child2: 'child2-value',
        },
        {
          child1: 'child1-value',
        }
      ]
    })
  })

  it('should have "filtered" according to `formatData` if it is set', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
            formatData(name, value) {
              return {
                custom: {
                  [name]: value
                }
              }
            }
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      expect(el.filtered).toStrictEqual({
        custom: {
          el: el.value
        }
      })
    })
  })
}

export const initial = function (elementType, elementName, options) {
  it('should have '+options.initial+' as `initial` by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.initial).toBe(options.initial)
  })

  it('should set `initial` from schema', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 3,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.initial).toBe(3)
  })

  it('should set `initial` based on default length', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [1,2,3],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.initial).toBe(3)
  })

  it('should `initial` be equal to initial option if default length is smaller', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 5,
          default: [1,2,3],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.initial).toBe(5)
  })

  it('should `initial` be equal to default length if initial is smaller', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 3,
          default: [1,2,3,4,5],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.initial).toBe(5)
  })
}

export const next = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `next` be equal to 0 if there are no instances', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      expect(el.next).toBe(0)
    })
  })

  it('should `next` be equal to 1 + the highest key from instances', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add() // key: 0
      el.add() // key: 1
      el.add() // key: 2
      el.add() // key: 3

      el.remove(1) // key: 1

      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(2)
      expect(el.instances[2].key).toBe(3)

      expect(el.next).toBe(4)
    })
  })
}

export const add = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should add children with or without value on `add`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add()
      el.add(options.childValues[i])

      await nextTick()

      expect(el.value).toStrictEqual([
        options.childNulls[i],
        options.childValues[i]
      ])
    })
  })

  it('should return index of new child on `add`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      expect(el.add()).toBe(0)
      expect(el.add()).toBe(1)
    })
  })

  it('should trigger updated on `add` on next tick', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add()
      
      await nextTick()
      await nextTick()

      expect(el.dirty).toBe(true)
    })
  })

  it('should trigger "add" event on `add` on next tick', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onAddMock = jest.fn()

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
            onAdd: onAddMock,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add()
      
      await nextTick()

      expect(onAddMock).toHaveBeenCalled()
    })
  })
}

export const insert = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should insert new children with or without data based on their prototype assigning a "key" property on `insert`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.insert()
      el.insert(options.childValues[i])

      expect(el.instances[0]).toStrictEqual(Object.assign({}, el.prototype, { key: 0 }))
      expect(el.instances[1]).toStrictEqual(Object.assign({}, el.prototype, { key: 1 }))

      await nextTick()

      expect(el.value).toStrictEqual([
        options.childNulls[i],
        options.childValues[i]
      ])
    })
  })

  it('should fill in "storeOrder" value if object and "storeOrder" is defined on `insert`', async () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
          initial: 0,
          storeOrder: 'order',
        }, prototypeAddOptions(prototypes[1], {
          order: {
            type: 'text'
          }
        }))
      }
    })

    let el = form.vm.el$('el')

    el.insert()
    el.insert()
    el.insert()

    await nextTick()

    let order0 = form.vm.el$('el.0.order')
    let order1 = form.vm.el$('el.1.order')
    let order2 = form.vm.el$('el.2.order')

    expect(order0.value).toBe(1)
    expect(order1.value).toBe(2)
    expect(order2.value).toBe(3)
  })
}

export const remove = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should remove child on `remove` if a single index is provided', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            default: [
              replacePrototypeValue(options.childValues[i], 0),
              replacePrototypeValue(options.childValues[i], 1),
              replacePrototypeValue(options.childValues[i], 2),
            ]
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.remove(1)

      await nextTick()

      expect(el.value).toStrictEqual([
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 2),
      ])
    })
  })

  it('should trigger "remove" event before a child is being removed on `remove`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onRemoveMock = jest.fn()

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            default: [
              replacePrototypeValue(options.childValues[i], 0),
              replacePrototypeValue(options.childValues[i], 1),
              replacePrototypeValue(options.childValues[i], 2),
            ],
            onRemove: onRemoveMock,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      let child$ = el.children$[1]

      await nextTick()

      el.remove(1)

      expect(onRemoveMock).toHaveBeenCalledWith(child$, 1)
    })
  })

  it('should trigger "updated" when a child has been removed on `remove` on next tick', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            default: [
              replacePrototypeValue(options.childValues[i], 0),
              replacePrototypeValue(options.childValues[i], 1),
              replacePrototypeValue(options.childValues[i], 2),
            ],
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      expect(el.dirty).toBe(false)

      el.remove(1)

      await nextTick()
      await nextTick()
      
      expect(el.dirty).toBe(true)
    })
  })

  it('should refresh order store when a child has been removed on `remove` on next tick when using object', async () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
          initial: 0,
          storeOrder: 'order',
        }, prototypeAddOptions(prototypes[1], {
          order: {
            type: 'text'
          }
        }))
      }
    })

    let el = form.vm.el$('el')

    el.insert()
    el.insert()
    el.insert()

    await nextTick()

    el.remove(1)

    await nextTick()
    await nextTick()

    let child0 = form.vm.el$('el.0')
    let child1 = form.vm.el$('el.1')
    let order0 = form.vm.el$('el.0.order')
    let order1 = form.vm.el$('el.1.order')

    expect(order0.value).toBe(1)
    expect(order1.value).toBe(2)
    expect(child0.schema.key).toBe(0)
    expect(child1.schema.key).toBe(2)
  })
}

export const load = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should load data to children if provided value is not "undefined" on `load`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      let values = [
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 1),
        replacePrototypeValue(options.childValues[i], 2),
      ]
      
      el.load(values)

      expect(el.instances.length).toBe(3)

      await nextTick()

      expect(el.value).toStrictEqual(values)
      expect(el.dirty).toBe(false)
    })
  })

  it('should should format data if "formatData" is "true" on `load`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
            formatLoad(value) {
              elFormatLoadMock()

              return value
            }
          }, prototypeAddChildOptions(prototype, {
            formatLoad(value) {
              childFormatLoadMock()

              return value
            }
          }))
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      let values = [
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 1),
        replacePrototypeValue(options.childValues[i], 2),
      ]
      
      el.load(values)

      expect(el.instances.length).toBe(3)

      await nextTick()

      expect(el.value).toStrictEqual(values)
    })
  })

  it('should null value if value is "undefined" on `load`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
            default: [
              replacePrototypeValue(options.childValues[i], 0),
              replacePrototypeValue(options.childValues[i], 1),
              replacePrototypeValue(options.childValues[i], 2),
            ]
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.load(undefined)

      await nextTick()

      expect(el.value).toStrictEqual([])
    })
  })

  it('should order value on `load` if "order" is not "null" when object', async () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
          initial: 0,
          storeOrder: 'order',
          order: 'ASC',
        }, prototypeAddOptions(prototypes[1], {
          order: {
            type: 'text'
          }
        }))
      }
    })

    let el = form.vm.el$('el')

    await nextTick()

    el.load([
      {
        order: 3
      },
      {
        order: 2
      },
      {
        order: 4
      },
    ])

    await nextTick()

    expect(el.value).toStrictEqual([
      Object.assign({}, options.childNulls[1], {
        order: 2
      }),
      Object.assign({}, options.childNulls[1], {
        order: 3
      }),
      Object.assign({}, options.childNulls[1], {
        order: 4
      }),
    ])
  })

  it('should order value on `load` if "order" is not "null" when element', async () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
          initial: 0,
          order: 'DESC',
        }, prototypes[0])
      }
    })

    let el = form.vm.el$('el')

    await nextTick()

    el.load([3,2,4])

    await nextTick()

    expect(el.value).toStrictEqual([4,3,2])
  })
}

export const update = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should update children on `update`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      let values = [
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 1),
        replacePrototypeValue(options.childValues[i], 2),
      ]
      
      el.update(values)

      expect(el.instances.length).toBe(3)

      await nextTick()

      expect(el.value).toStrictEqual(values)
    })
  })

  it('should trigger updated on `update` on next tick', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()
      
      el.update([
        replacePrototypeValue(options.childValues[i], 0),
      ])

      await nextTick()
      await nextTick()

      expect(el.dirty).toBe(true)
    })
  })
}

export const clear = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should clear children on `clear`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()
      
      el.clear()

      expect(el.instances.length).toBe(0)
    })
  })

  it('should trigger updated on `clear` on next tick', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()
      
      el.clear()

      await nextTick()
      await nextTick()

      expect(el.dirty).toBe(true)
    })
  })
}

export const reset = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should set default instances on `reset`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.add()
      el.add()
      
      el.reset()

      await nextTick()

      expect(el.instances.length).toBe(3)
    })
  })

  it('should trigger "change" event on `reset` if value changed', async () => {
    let onChangeMock = jest.fn()

    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
            onChange: onChangeMock,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.add()
      el.add()
      
      el.reset()

      await nextTick()
      await nextTick()

      expect(onChangeMock).toHaveBeenCalled()
    })
  })
}

export const orderValue = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `orderValue` "ASC" if "order" is "ASC" using single element', async () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
          initial: 0,
          order: 'ASC',
        }, prototypes[0])
      }
    })

    let el = form.vm.el$('el')

    await nextTick()

    el.load([3,2,4])

    await nextTick()

    expect(el.value).toStrictEqual([2,3,4])
  })

  it('should `orderValue` "DESC" if "order" is "DESC" using single element', async () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
          initial: 0,
          order: 'DESC',
        }, prototypes[0])
      }
    })

    let el = form.vm.el$('el')

    await nextTick()

    el.load([3,2,4])

    await nextTick()

    expect(el.value).toStrictEqual([4,3,2])
  })

  it('should `orderValue` by "orderBy" "ASC" if "orderBy" is defined using object element', async () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
          initial: 0,
          orderBy: 'order',
          order: 'ASC',
        }, prototypeAddOptions(prototypes[1], {
          order: {
            type: 'text'
          }
        }))
      }
    })

    let el = form.vm.el$('el')

    await nextTick()

    el.load([
      {
        order: 3
      },
      {
        order: 2
      },
      {
        order: 4
      },
    ])

    await nextTick()

    expect(el.value).toStrictEqual([
      Object.assign({}, options.childNulls[1], {
        order: 2
      }),
      Object.assign({}, options.childNulls[1], {
        order: 3
      }),
      Object.assign({}, options.childNulls[1], {
        order: 4
      }),
    ])
  })

  it('should `orderValue` by "orderBy" "DESC" if "orderBy" is defined and "order" is "DESC" using object element', async () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
          initial: 0,
          orderBy: 'order',
          order: 'DESC',
        }, prototypeAddOptions(prototypes[1], {
          order: {
            type: 'text'
          }
        }))
      }
    })

    let el = form.vm.el$('el')

    await nextTick()

    el.load([
      {
        order: 3
      },
      {
        order: 2
      },
      {
        order: 4
      },
    ])

    await nextTick()

    expect(el.value).toStrictEqual([
      Object.assign({}, options.childNulls[1], {
        order: 4
      }),
      Object.assign({}, options.childNulls[1], {
        order: 3
      }),
      Object.assign({}, options.childNulls[1], {
        order: 2
      }),
    ])
  })
}

export const updated = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should dirt element on `updated` if value changed', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.previousValue = options.childNulls[i]
      el.currentValue = options.childValues[i]

      el.updated()

      await nextTick()

      expect(el.dirty).toBe(true)
    })
  })

  it('should not dirt element on `updated` if value has not changed', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.previousValue = options.childValues[i]
      el.currentValue = options.childValues[i]

      el.updated()

      expect(el.dirty).toBe(false)
    })
  })

  it('should trigger "change" event on `updated` if value changed', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
            onChange: onChangeMock,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.previousValue = options.childNulls[i]
      el.currentValue = options.childValues[i]

      el.updated()

      await nextTick()

      expect(onChangeMock).toHaveBeenCalledWith(options.childValues[i], options.childNulls[i])
    })
  })

  it('should not trigger "change" event on `updated` if value has not changed', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
            onChange: onChangeMock,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.previousValue = options.childValues[i]
      el.currentValue = options.childValues[i]

      el.updated()

      expect(onChangeMock).not.toHaveBeenCalled()
    })
  })

  it('should validate validators only on `updated` if "validateOn" contains "change"', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        validateOn: 'submit|change',
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
            rules: 'required',
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.updated()

      await flushPromises()

      expect(el.validated).toBe(true)
    })
  })

  it('should not validate validators on `updated` if "validateOn" does not contain "change"', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        validateOn: 'submit',
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
            rules: 'required',
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.updated()

      await flushPromises()

      expect(el.validated).toBe(false)
    })
  })
}

export const handleAdd = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should trigger add on `handleAdd` if not disabled', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.handleAdd()

      expect(el.instances.length).toBe(1)

      el.disabled = true

      el.handleAdd()

      expect(el.instances.length).toBe(1)
    })
  })

  it('should trigger add on `handleAdd` when clicking "Add" button', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')
      let elWrapper = findAllComponents(form, { name: elementName }).at(0)

      await nextTick()

      elWrapper.find(`.${el.defaultClasses.add}`).trigger('click')

      expect(el.instances.length).toBe(1)
    })
  })
}

export const handleRemove = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should trigger remove on `handleRemove` if not disabled', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.handleRemove(1)

      expect(el.instances.length).toBe(2)

      el.disabled = true

      el.handleRemove(1)

      expect(el.instances.length).toBe(2)
    })
  })

  it('should trigger remove on `handleRemove` when clicking "Remove" button', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')
      let elWrapper = findAllComponents(form, { name: elementName }).at(0)

      await nextTick()

      elWrapper.find(`.${el.defaultClasses.remove}`).trigger('click')

      expect(el.instances.length).toBe(2)
    })
  })
}

export const setInitialInstances = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should not set `initialInstances` if prototype is not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 3,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.instances.length).toBe(0)
  })

  it('should set `initialInstances` if prototype is defined', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      expect(el.instances.length).toBe(3)
    })
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