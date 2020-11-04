import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'
import { submit, data, formatData, formatLoad } from './data'
import asyncForEach from './../../src/utils/asyncForEach'
import { replaceValue } from './childrenList'

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
        replaceValue(options.childValues[i], 0),
        replaceValue(options.childValues[i], 1),
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
        replaceValue(options.childValues[i], 0),
        replaceValue(options.childValues[i], 1),
      ])

      await nextTick()

      let child0 = form.vm.el$('el.0')
      let child1 = form.vm.el$('el.1')

      expect(child0.value).toStrictEqual(replaceValue(options.childValues[i], 0))
      expect(child1.value).toStrictEqual(replaceValue(options.childValues[i], 1))
    })
  })

  it('should not be dirty after `load`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.dirt()

      el.load([
        replaceValue(options.childValues[i], 0),
        replaceValue(options.childValues[i], 1),
      ])

      await nextTick()
      await nextTick()
      await nextTick()

      expect(el.dirty).toBe(false)
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

  it('should clear and reset validators on `unload` & remove dirty state afterwards', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            default: [
              replaceValue(options.childValues[i], 0),
              replaceValue(options.childValues[i], 1),
            ],
            rules: 'required'
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.dirt()
      el.validate()

      await flushPromises()

      expect(el.validated).toBe(true)
      expect(el.dirty).toBe(true)
      expect(el.instances.length).toBe(2)

      el.unload()

      await nextTick()

      expect(el.instances.length).toBe(0)
      expect(el.validated).toBe(false)

      await nextTick()
      await nextTick()

      expect(el.dirty).toBe(false)
    })
  })
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
              replaceValue(options.childValues[i], 0),
              replaceValue(options.childValues[i], 1),
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
      expect(el.child$[0].value).toStrictEqual(replaceValue(options.childValues[i], 0))
      expect(el.child$[1].value).toStrictEqual(replaceValue(options.childValues[i], 1))
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

export default function (elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName, options)
    })
  }
}