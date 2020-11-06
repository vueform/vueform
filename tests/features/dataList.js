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

  it('should `add` child', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add()

      await nextTick()

      expect(el.child$.length).toBe(2)
      expect(el.child$[0].schema.type).toStrictEqual(prototypeChildType(prototype))
      expect(el.child$[1].schema.type).toStrictEqual(prototypeChildType(prototype))

      expect(_.keys(el.children$).length).toBe(2)
      expect(el.children$[0].schema.type).toStrictEqual(prototypeChildType(prototype))
      expect(el.children$[1].schema.type).toStrictEqual(prototypeChildType(prototype))

      expect(el.instances.length).toBe(2)
      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(1)
    })
  })

  it('should `add` multiple children', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add()
      el.add()
      el.add()

      await nextTick()

      expect(el.child$.length).toBe(4)
      expect(el.child$[0].schema.type).toStrictEqual(prototypeChildType(prototype))
      expect(el.child$[1].schema.type).toStrictEqual(prototypeChildType(prototype))
      expect(el.child$[2].schema.type).toStrictEqual(prototypeChildType(prototype))
      expect(el.child$[3].schema.type).toStrictEqual(prototypeChildType(prototype))

      expect(_.keys(el.children$).length).toBe(4)
      expect(el.children$[0].schema.type).toStrictEqual(prototypeChildType(prototype))
      expect(el.children$[1].schema.type).toStrictEqual(prototypeChildType(prototype))
      expect(el.children$[2].schema.type).toStrictEqual(prototypeChildType(prototype))
      expect(el.children$[3].schema.type).toStrictEqual(prototypeChildType(prototype))

      expect(el.instances.length).toBe(4)
      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(1)
      expect(el.instances[2].key).toBe(2)
      expect(el.instances[3].key).toBe(3)
    })
  })

  it('should `add` child with data', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add(options.childValues[i])

      await nextTick()

      expect(el.child$.length).toBe(2)
      expect(el.child$[1].value).toStrictEqual(options.childValues[i])

      expect(_.keys(el.children$).length).toBe(2)
      expect(el.children$[1].schema.type).toStrictEqual(prototypeChildType(prototype))

      expect(el.instances.length).toBe(2)
      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(1)
    })
  })

  it('should `add` multiple children with data', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add(options.childValues[i])
      el.add(options.childValues[i])
      el.add(options.childValues[i])

      await nextTick()

      expect(el.child$.length).toBe(4)
      expect(el.child$[1].value).toStrictEqual(options.childValues[i])
      expect(el.child$[2].value).toStrictEqual(options.childValues[i])
      expect(el.child$[3].value).toStrictEqual(options.childValues[i])

      expect(_.keys(el.children$).length).toBe(4)
      expect(el.children$[1].schema.type).toStrictEqual(prototypeChildType(prototype))
      expect(el.children$[2].schema.type).toStrictEqual(prototypeChildType(prototype))
      expect(el.children$[3].schema.type).toStrictEqual(prototypeChildType(prototype))

      expect(el.instances.length).toBe(4)
      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(1)
      expect(el.instances[2].key).toBe(2)
      expect(el.instances[3].key).toBe(3)
    })
  })

  it('should `add` with or without "triggerChange", "shouldValidate" & "shouldDirt"', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            rules: 'required',
            initial: 1,
            onChange: onChangeMock,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      expect(el.validated).toBe(false)
      expect(el.dirty).toBe(false)

      el.add(null /*true, true, true*/)

      await flushPromises()
      await nextTick()

      expect(onChangeMock).toHaveBeenCalledTimes(1)
      expect(el.validated).toBe(true)
      expect(el.dirty).toBe(true)

      el.state.validated = false
      el.state.dirty = false

      el.add(null, false, false, false)

      await flushPromises()
      await nextTick()

      expect(onChangeMock).toHaveBeenCalledTimes(1)
      expect(el.validated).toBe(false)
      expect(el.dirty).toBe(false)
    })
  })

  it('should `add` with data without "triggerChange", "shouldValidate", "shouldDirt" on child', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototypeAddChildOptions(prototype, {
            rules: 'required',
            onChange: onChangeMock,
          }))
        }
      })

      let el = form.vm.el$('el')

      el.add(options.childValues[i])

      await flushPromises()
      await nextTick()

      let child0 = form.vm.el$('el.0')

      expect(onChangeMock).not.toHaveBeenCalled()
      expect(child0.dirty).toBe(false)
      expect(child0.validated).toBe(false)
    })
  })

  it('should return index on `add`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      let index1 = el.add()
      let index2 = el.add()
      let index3 = el.add()

      expect(index1).toBe(1)
      expect(index2).toBe(2)
      expect(index3).toBe(3)
    })
  })

  it('should `add` instances of prototypes with key to "instances"', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add()

      expect(el.instances.length).toBe(2)
      expect(el.instances[0]).toStrictEqual(Object.assign({}, prototypeChildSchema(prototype), {
        key: 0
      }))
      expect(el.instances[1]).toStrictEqual(Object.assign({}, prototypeChildSchema(prototype), {
        key: 1
      }))
    })
  })

  it('should add order to "storeOrder" field on `add` if is object', async () => {
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

    el.add()
    el.add()
    el.add()

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

  it('should `remove` child', async () => {
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

      el.add(replacePrototypeValue(options.childValues[i], 0))
      el.add(replacePrototypeValue(options.childValues[i], 1))
      el.add(replacePrototypeValue(options.childValues[i], 2))

      await nextTick()

      expect(el.child$.length).toBe(3)

      el.remove(1)
      
      await nextTick()

      // @todo
      // expect(el.child$.length).toBe(2)
      expect(el.child$[0].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 0))
      expect(el.child$[1].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 2))
      expect(el.child$[0].schema.key).toStrictEqual(0)
      expect(el.child$[1].schema.key).toStrictEqual(2)

      expect(_.keys(el.children$).length).toBe(2)
      expect(el.children$[0].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 0))
      expect(el.children$[1].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 2))
      expect(el.children$[0].schema.key).toStrictEqual(0)
      expect(el.children$[1].schema.key).toStrictEqual(2)

      expect(el.instances.length).toBe(2)
      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(2)
    })
  })

  it('should `remove` multiple children', async () => {
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

      el.add(replacePrototypeValue(options.childValues[i], 0))
      el.add(replacePrototypeValue(options.childValues[i], 1))
      el.add(replacePrototypeValue(options.childValues[i], 2))
      el.add(replacePrototypeValue(options.childValues[i], 3))
      el.add(replacePrototypeValue(options.childValues[i], 4))

      await nextTick()

      expect(el.child$.length).toBe(5)

      el.remove(3)
      el.remove(1)
      
      await nextTick()

      // @todo
      // expect(el.child$.length).toBe(3)
      expect(el.child$[0].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 0))
      expect(el.child$[1].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 2))
      expect(el.child$[2].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 4))
      expect(el.child$[0].schema.key).toStrictEqual(0)
      expect(el.child$[1].schema.key).toStrictEqual(2)
      expect(el.child$[2].schema.key).toStrictEqual(4)

      // expect(_.keys(el.children$).length).toBe(3)
      expect(el.children$[0].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 0))
      expect(el.children$[1].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 2))
      expect(el.children$[2].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 4))
      expect(el.children$[0].schema.key).toStrictEqual(0)
      expect(el.children$[1].schema.key).toStrictEqual(2)
      expect(el.children$[2].schema.key).toStrictEqual(4)

      expect(el.instances.length).toBe(3)
      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(2)
      expect(el.instances[2].key).toBe(4)
    })
  })

  it('should `remove` with and without "triggerChange", "shouldValidate" and "shouldDirt"', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            rules: 'required',
            initial: 1,
            onChange: onChangeMock,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      expect(el.validated).toBe(false)
      expect(el.dirty).toBe(false)

      el.remove(0 /*true, true, true*/)

      await flushPromises()
      await nextTick()

      expect(onChangeMock).toHaveBeenCalledTimes(1)
      expect(el.validated).toBe(true)
      expect(el.dirty).toBe(true)

      el.add(null, false, false, false)
      el.state.validated = false
      el.state.dirty = false

      el.remove(0, false, false, false)

      await flushPromises()
      await nextTick()

      expect(onChangeMock).toHaveBeenCalledTimes(1)
      expect(el.validated).toBe(false)
      expect(el.dirty).toBe(false)
    })
  })

  it('should refresh order store if object and has "storeOrder" on remove', async () => {
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

    el.add()
    el.add()
    el.add()

    await nextTick()

    el.remove(1)

    await nextTick()

    let order0 = form.vm.el$('el.0.order')
    let order1 = form.vm.el$('el.1.order')

    expect(order0.value).toBe(1)
    // @todo: after value
    // expect(order1.value).toBe(2)
  })
}

export const load = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should unload on `load` if load value is undefined', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.update([options.childValues[i]])

      expect(el.instances.length).toBe(1)

      el.load(undefined)

      expect(el.instances.length).toBe(0)
    })
  })

  it('should unload on `load` if not available', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
            conditions: [
              ['el2', 'value2']
            ]
          }, prototype),
          el2: {
            type: 'text',
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.instances.length).toBe(3)

      el.load([
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 1),
      ])

      await nextTick()

      expect(el.instances.length).toBe(0)
    })
  })

  it('should `load` if available', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.load([
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 1),
      ])

      await nextTick()

      let child0 = form.vm.el$('el.0')
      let child1 = form.vm.el$('el.1')

      expect(child0.value).toStrictEqual(replacePrototypeValue(options.childValues[i], 0))
      expect(child1.value).toStrictEqual(replacePrototypeValue(options.childValues[i], 1))
    })
  })

  it('should `load` with and without "triggerChange", "shouldValidate", "shouldDirt" and "format"', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onChangeMock = jest.fn()
      let formatLoadMock = jest.fn()

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            rules: 'required',
            onChange: onChangeMock,
            formatLoad() {
              formatLoadMock()
            }
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.load([
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 1),
      ] /*false, false, false, false*/)

      await flushPromises()
      await nextTick()

      expect(onChangeMock).not.toHaveBeenCalled()
      expect(formatLoadMock).not.toHaveBeenCalled()
      expect(el.dirty).toBe(false)
      expect(el.state.validated).toBe(false)

      el.load([
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 1),
      ], true, true, true, true)

      await flushPromises()
      await nextTick()

      expect(onChangeMock).toHaveBeenCalledTimes(1)
      expect(formatLoadMock).toHaveBeenCalledTimes(1)
      expect(el.dirty).toBe(true)
      expect(el.state.validated).toBe(true)
    })
  })

  it('should sort data by ASC on `load` with "element" type if "order" is "true"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          order: true,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load([3,2,4])

    await nextTick()

    expect(el.value).toStrictEqual([2,3,4])
  })

  it('should sort data by DESC on `load` with "element" type if "order" is "DESC"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          order: 'DESC',
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load([3,2,4])

    await nextTick()

    expect(el.value).toStrictEqual([4,3,2])
  })

  it('should sort data by DESC on `load` with "element" type if "order" is "desc"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          order: 'desc',
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load([3,2,4])

    await nextTick()

    expect(el.value).toStrictEqual([4,3,2])
  })

  it('should sort data ASC on `load` with "object" type if "order" is "true" and "orderBy" is defined', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          order: true,
          orderBy: 'order',
          object: {
            schema: {
              child: {
                type: 'text',
              },
              order: {
                type: 'text',
              },
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load([
      {
        child: 'value3',
        order: 3
      },
      {
        child: 'value2',
        order: 2
      },
      {
        child: 'value4',
        order: 4
      },
    ])

    await nextTick()

    expect(el.value).toStrictEqual([
      {
        child: 'value2',
        order: 2
      },
      {
        child: 'value3',
        order: 3
      },
      {
        child: 'value4',
        order: 4
      },
    ])
  })

  it('should sort data DESC on `load` with "object" type if "order" is "DESC" and "orderBy" is defined', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          order: 'DESC',
          orderBy: 'order',
          object: {
            schema: {
              child: {
                type: 'text',
              },
              order: {
                type: 'text',
              },
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load([
      {
        child: 'value3',
        order: 3
      },
      {
        child: 'value2',
        order: 2
      },
      {
        child: 'value4',
        order: 4
      },
    ])

    await nextTick()

    expect(el.value).toStrictEqual([
      {
        child: 'value4',
        order: 4
      },
      {
        child: 'value3',
        order: 3
      },
      {
        child: 'value2',
        order: 2
      },
    ])
  })

  it('should sort data DESC on `load` with "object" type if "order" is "desc" and "orderBy" is defined', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          order: 'desc',
          orderBy: 'order',
          object: {
            schema: {
              child: {
                type: 'text',
              },
              order: {
                type: 'text',
              },
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load([
      {
        child: 'value3',
        order: 3
      },
      {
        child: 'value2',
        order: 2
      },
      {
        child: 'value4',
        order: 4
      },
    ])

    await nextTick()

    expect(el.value).toStrictEqual([
      {
        child: 'value4',
        order: 4
      },
      {
        child: 'value3',
        order: 3
      },
      {
        child: 'value2',
        order: 2
      },
    ])
  })
}

export const unload = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  // it('should clear and reset validators on `unload` & remove dirty state afterwards', async () => {
  //   await asyncForEach(prototypes, async (prototype, i) => {
  //     let form = createForm({
  //       schema: {
  //         el: Object.assign({}, {
  //           type: elementType,
  //           default: [
  //             replacePrototypeValue(options.childValues[i], 0),
  //             replacePrototypeValue(options.childValues[i], 1),
  //           ],
  //           rules: 'required'
  //         }, prototype)
  //       }
  //     })

  //     let el = form.vm.el$('el')

  //     el.dirt()
  //     el.validate()

  //     await flushPromises()

  //     expect(el.validated).toBe(true)
  //     expect(el.dirty).toBe(true)
  //     expect(el.instances.length).toBe(2)

  //     el.unload()

  //     await nextTick()

  //     expect(el.instances.length).toBe(0)
  //     expect(el.validated).toBe(false)
  //     expect(el.dirty).toBe(false)
  //   })
  // })
}

export const update = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `update` children', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.update([options.childValues[i]])

      expect(el.value).toStrictEqual([
        options.childValues[i],
        options.childNulls[i],
      ])
    })
  })
}

export const reset = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `reset` to initial instances', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')
      
      el.add()
      el.add()

      expect(el.instances.length).toBe(3)

      el.reset()

      await nextTick()
      
      expect(el.instances.length).toBe(1)
    })
  })

  it('should `reset` to default instances', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            default: [
              replacePrototypeValue(options.childValues[i], 0),
              replacePrototypeValue(options.childValues[i], 1),
            ]
          }, prototype)
        }
      })

      let el = form.vm.el$('el')
      
      el.add()
      el.add()

      expect(el.instances.length).toBe(4)

      await nextTick()

      el.reset()

      await nextTick()
      
      expect(el.instances.length).toBe(2)
      expect(el.child$[0].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 0))
      expect(el.child$[1].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 1))
    })
  })
}

export const clear = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should clear instance on `clear`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')
      
      el.clear()
      
      expect(el.instances.length).toBe(0)

      // await nextTick()
      
      // @todo
      // expect(el.child$.length).toBe(0)
      // expect(_.keys(el.children$).length).toBe(0)
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