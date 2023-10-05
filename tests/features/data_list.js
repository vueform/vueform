import { nextTick } from 'vue'
import { createForm, findAllComponents, listSchema, listChildValue } from 'test-helpers'
import asyncForEach from './../../src/utils/asyncForEach'

export const requestData = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should "requestData" contain requestData of children if prototype is a single element', () => {
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
    
    expect(el.requestData).toStrictEqual({})
    
    el3.update('value3')
    
    expect(el.requestData).toStrictEqual({
      el: []
    })
    
    el2.update('value2')
    
    expect(el.requestData).toStrictEqual({
      el: [null, null]
    })
    
    child0_1.update('child1-value')
    
    expect(el.requestData).toStrictEqual({
      el: ['child1-value', null]
    })
    
    // destroy(form) // teardown
  })
  
  it('should "requestData" containe requestData of children prototype is an object', () => {
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
    
    expect(el.requestData).toStrictEqual({})
    
    el4.update('value4')
    
    expect(el.requestData).toStrictEqual({
      el: []
    })
    
    el2.update('value2')
    
    expect(el.requestData).toStrictEqual({
      el: [{}, {}]
    })
    
    el3.update('value3')
    
    expect(el.requestData).toStrictEqual({
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
    
    expect(el.requestData).toStrictEqual({
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
    
    // destroy(form) // teardown
  })
  
  it('should have "requestData" according to `formatData` if it is set', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 1,
        parent: {
          formatData(name, value) {
            return {
              custom: {
                [name]: value
              }
            }
          }
        }
      }))
      
      let el = form.vm.el$('el')
      
      expect(el.requestData).toStrictEqual({
        custom: {
          el: el.value
        }
      })
      
      // destroy(form) // teardown
    })
    
    // destroy() // teardown
  })
}

export const length = function (elementType, elementName, options) {
  
  it('should return correct amount of list elements if initial is not defined', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: { type: 'text' }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.value.length).toStrictEqual(1)
  })
  
  it('should return correct amount of list elements if zero', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 0,
          element: { type: 'text' }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    
    
    expect(el.value.length).toStrictEqual(0)
  })
  
  it('should return correct amount of list elements if integer', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 3,
          element: { type: 'text' }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.value.length).toStrictEqual(3)
  })
}


export const add = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should add children with or without value on `add`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 0,
      }))
      
      let el = form.vm.el$('el')
      
      el.add()
      el.add(options.childValues[i])
      
      await nextTick()
      
      expect(el.value).toStrictEqual([
        options.childNulls[i],
        options.childValues[i]
      ])
      
      // destroy(form) // teardown
    })
  })
  
  it('should return index of new child on `add`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 0,
      }))
      
      let el = form.vm.el$('el')
      
      expect(el.add()).toBe(0)
      expect(el.add()).toBe(1)
      
      // destroy(form) // teardown
    })
  })
  
  it('should trigger updated on `add` on next tick', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 0,
      }))
      
      let el = form.vm.el$('el')
      
      el.add()
      
      await nextTick()
      
      expect(el.dirty).toBe(true)
      
      // destroy(form) // teardown
    })
  })
  
  it('should trigger "add" event on `add` on next tick', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onAddMock = jest.fn()
      
      let form = createForm(listSchema(options, i, {
        initial: 2,
        parent: { onAdd: onAddMock, }
      }))
      
      let el = form.vm.el$('el')
      
      el.add()
      
      await nextTick()
      
      expect(onAddMock).toHaveBeenCalled()
      
      // destroy(form) // teardown
    })
    
    // destroy() // teardown
  })
  
  it('should add value and prefill storeOrder', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          storeOrder: 'order',
          initial: 0, // for list
          object: {
            type: 'object',
            schema: {
              name: { type: 'text' },
              order: { type: 'text' },
            }
          }
        }
      }
    })
    
    let el = form.vm.el$('el')

    el.add({ name: 'John' })
    
    await nextTick()
    
    expect(el.value[0].name).toBe('John')
    expect(el.value[0].order).toBe(1)
    
  })
}

export const remove = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should remove child on `remove` if a single index is provided', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        default: [
          listChildValue(options, i, 0),
          listChildValue(options, i, 1),
          listChildValue(options, i, 2),
        ]
      }))
      
      let el = form.vm.el$('el')
      
      el.remove(1)
      
      expect(el.value).toStrictEqual([
        listChildValue(options, i, 0),
        listChildValue(options, i, 2),
      ])
      
      // destroy(form) // teardown
    })
  })
  
  it('should trigger "remove" when child is being removed on `remove`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onRemoveMock = jest.fn()
      
      let form = createForm(listSchema(options, i, {
        default: [
          listChildValue(options, i, 0),
          listChildValue(options, i, 1),
          listChildValue(options, i, 2),
        ],
        parent: { onRemove: onRemoveMock, }
      }))
      
      let el = form.vm.el$('el')
      
      el.remove(1)
      
      expect(onRemoveMock).toHaveBeenCalledWith(1, el.value)
      
      // destroy(form) // teardown
    })
    
    // destroy() // teardown
  })
}

export const load = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should load data to children if provided value is not "undefined" on `load`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 0,
      }))
      
      let el = form.vm.el$('el')
      
      let values = [
        listChildValue(options, i, 0),
        listChildValue(options, i, 1),
        listChildValue(options, i, 2),
      ]
      
      await el.load(values)
      
      expect(el.value).toStrictEqual(values)
      
      // destroy(form) // teardown
    })
  })
  
  it('should should format data if "format" is "true" on `load`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let elFormatLoadMock = jest.fn()
      
      let form = createForm(listSchema(options, i, {
        initial: 0,
        parent: {
          formatLoad(value) {
            elFormatLoadMock()
            
            return value
          }
          ,}
      }))
      
      let el = form.vm.el$('el')
      
      let values = [
        listChildValue(options, i, 0),
        listChildValue(options, i, 1),
        listChildValue(options, i, 2),
      ]
      
      await el.load(values, true)
      expect(el.value).toStrictEqual(values)
      
      expect(elFormatLoadMock).toHaveBeenCalled()
      
      // destroy(form) // teardown
    })
  })
  
  it('should order value on `load` if "order" is not "null" when object', async () => {
    let form = createForm(listSchema(options, 1, {
      initial: 0,
      child: { rules: 'required' },
      parent: {
        storeOrder: 'order',
        order: 'ASC',
      },
      orderField: true,
    }))
    
    let el = form.vm.el$('el')
    
    await el.load([
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
    
    // destroy(form) // teardown
  })
  
  it('should order value on `load` if "order" is not "null" when element', async () => {
    let form = createForm(listSchema(options, 0, {
      initial: 0,
      parent: { order: 'DESC' },
    }))
    
    let el = form.vm.el$('el')
    
    await el.load([3,2,4])
    
    expect(el.value).toStrictEqual([4,3,2])
    
    // destroy() // teardown
  })
}

export const reset = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should add elements list is empty but initial is more than zero', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: {
            type: 'text'
          },
          initial: 3
        },
      },
    })
    
    
    let el = form.vm.el$('el')
    
    el.remove(0)
    el.remove(0)
    el.remove(0)
    
    el.reset()
    
    expect(el.value.length).toBe(3)
  })
  
  it('should set default value on `reset`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        default: [undefined, undefined, undefined]
      }))
      
      let el = form.vm.el$('el')
      
      el.add()
      el.add()
      
      el.reset()
      
      expect(el.value.length).toBe(3)
      
      // destroy(form) // teardown
    })
    
    // destroy() // teardown
  })
}

export const data = function (elementType, elementName, options) {
  it('should have "data" as an object with element name as property and element value as value by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default,
          auto: false, // for files
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    await nextTick()

    expect(el.data).toStrictEqual({
      el: el.value
    })
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const sortValue = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should `sortValue` "ASC" if "order" is "ASC" using single element', async () => {
    let form = createForm(listSchema(options, 0, {
      initial: 0,
      parent: { order: 'ASC' }
    }))
    
    let el = form.vm.el$('el')
    
    await el.load([3,2,4])
    
    expect(el.value).toStrictEqual([2,3,4])
    
    // destroy(form) // teardown
  })
  
  it('should `sortValue` "DESC" if "order" is "DESC" using single element', async () => {
    let form = createForm(listSchema(options, 0, {
      initial: 0,
      parent: { order: 'DESC', }
    }))
    
    let el = form.vm.el$('el')
    
    await el.load([3,2,4])
    
    expect(el.value).toStrictEqual([4,3,2])
    
    // destroy(form) // teardown
  })
  
  it('should `sortValue` by "orderBy" "ASC" if "orderBy" is defined using object element', async () => {
    let form = createForm(listSchema(options, 1, {
      initial: 0,
      parent: {
        orderBy: 'order',
        order: 'ASC',
      },
      orderField: true
    }))
    
    let el = form.vm.el$('el')
    
    await el.load([
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
    
    // destroy(form) // teardown
  })
  
  it('should `sortValue` by "orderBy" "DESC" if "orderBy" is defined and "order" is "DESC" using object element', async () => {
    let form = createForm(listSchema(options, 1, {
      initial: 2,
      parent: {
        orderBy: 'order',
        order: 'DESC',
      },
      orderField: true,
    }))
    
    let el = form.vm.el$('el')
    
    await el.load([
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
    
    // destroy(form) // teardown
  })
}

export const handleAdd = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should trigger add on `handleAdd` if not disabled', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 0,
      }))
      
      let el = form.vm.el$('el')
      
      el.handleAdd()
      
      expect(el.value.length).toBe(1)
      
      el.disable()
      
      el.handleAdd()
      
      expect(el.value.length).toBe(1)
    })
    
    // destroy(form) // teardown
  })
  
  it('should trigger add on `handleAdd` when clicking "Add" button', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 0,
      }))
      
      let el = form.vm.el$('el')
      let elWrapper = findAllComponents(form, { name: elementName }).at(0)
      
      await nextTick()
      
      elWrapper.find(`[class="${el.template.data().defaultClasses.add}"]`).trigger('click')
      
      expect(el.value.length).toBe(1)
      
      // destroy(form) // teardown
    })
    
    // destroy() // teardown
  })
}

export const handleRemove = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should trigger remove on `handleRemove` if not disabled', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 3,
      }))
      
      let el = form.vm.el$('el')
      
      el.handleRemove(1)
      
      expect(el.value.length).toBe(2)
      
      el.disable()
      
      el.handleRemove(1)
      
      expect(el.value.length).toBe(2)
      
      // destroy(form) // teardown
    })
  })
  
  it('should trigger remove on `handleRemove` when clicking "Remove" button', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 3,
      }))
      
      let el = form.vm.el$('el')
      let elWrapper = findAllComponents(form, { name: elementName }).at(0)
      
      await nextTick()
      
      elWrapper.find(`.${el.template.data().defaultClasses.remove}`).trigger('click')
      
      expect(el.value.length).toBe(2)
      
      // destroy(form) // teardown
    })
    
    // destroy() // teardown
  })
}


export const update = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should update children on `update`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 0,
      }))

      let el = form.vm.el$('el')

      let values = [
        listChildValue(options, i, 0),
        listChildValue(options, i, 1),
        listChildValue(options, i, 2),
      ]
      
      el.update(values)

      expect(el.value).toStrictEqual(values)
    
      // destroy(form) // teardown
    })

    // destroy() // teardown
  })
}

export const clear = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should clear children on `clear`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 3,
      }))

      let el = form.vm.el$('el')

      await nextTick()
      
      el.clear()

      expect(el.value).toStrictEqual([])
    
      // destroy(form) // teardown
    })

    // destroy() // teardown
  })
}

export const setInitialInstances = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should set `initialInstances`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 3,
      }))

      let el = form.vm.el$('el')

      expect(el.value.length).toBe(3)
    
      // destroy(form) // teardown
    })
  })
}