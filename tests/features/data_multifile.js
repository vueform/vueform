import { nextTick } from 'vue'
import { createForm, listSchema, listChildValue } from 'test-helpers'
import asyncForEach from './../../src/utils/asyncForEach'

export { data, next, add, insert, remove, load, update, clear, reset, updated } from './data_list'

export const filtered = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should "filtered" contained filtered data of children if prototype is a single element', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 2,
          auto: false,
          file: {
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

  it('should "filtered" contained filtered data of children prototype is an object', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          object: true,
          fields: {
            child: {
              type: 'text',
              conditions: [
                ['el2', 'value2']
              ]
            }
          }
        },
        el2: {
          type: 'text',
        },
      }
    })

    let el = form.vm.el$('el')
    let el2 = form.vm.el$('el2')

    el.add()

    await nextTick()

    expect(el.filtered).toStrictEqual({
      el: [
        {
          file: null,
        }
      ]
    })

    el2.load('value2')

    expect(el.filtered).toStrictEqual({
      el: [
        {
          file: null,
          child: null,
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

export const orderValue = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `orderValue` "ASC" if "order" is "ASC" using single element', async () => {
    let form = createForm(listSchema(options, 0, {
      initial: 0,
      parent: { order: 'ASC' }
    }))

    let el = form.vm.el$('el')

    await nextTick()

    el.load([3,2,4])

    await nextTick()

    expect(el.value).toStrictEqual([2,3,4])
  })

  it('should `orderValue` "DESC" if "order" is "DESC" using single element', async () => {
    let form = createForm(listSchema(options, 0, {
      initial: 0,
      parent: { order: 'DESC' }
    }))

    let el = form.vm.el$('el')

    await nextTick()

    el.load([3,2,4])

    await nextTick()

    expect(el.value).toStrictEqual([4,3,2])
  })

  it('should `orderValue` by "orderBy" "ASC" if "orderBy" is defined using object element', async () => {
    let form = createForm(listSchema(options, 1, {
      initial: 0,
      parent: {
        orderBy: 'order',
        order: 'ASC',
        storeOrder: 'order',
      }
    }))

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
    let form = createForm(listSchema(options, 1, {
      initial: 0,
      parent: {
        orderBy: 'order',
        order: 'DESC',
        storeOrder: 'order'
      }
    }))

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

export const handleAdd = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should trigger add on `handleAdd` if not disabled', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 0,
      }))

      let el = form.vm.el$('el')

      await nextTick()

      el.handleAdd()

      expect(el.instances.length).toBe(1)

      el.disable()

      el.handleAdd()

      expect(el.instances.length).toBe(1)
    })
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

      await nextTick()

      el.handleRemove(1)

      expect(el.instances.length).toBe(2)

      el.disable()

      el.handleRemove(1)

      expect(el.instances.length).toBe(2)
    })
  })

  it('should trigger remove on `handleRemove` when clicking "Remove" button', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 3,
      }))

      let el = form.vm.el$('el')
      let child = form.vm.el$('el.0')

      await nextTick()

      child.$emit('remove')

      expect(el.instances.length).toBe(2)
    })
  })
}