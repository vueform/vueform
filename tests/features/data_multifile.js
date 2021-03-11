import { nextTick } from 'vue'
import { createForm, listSchema, listChildValue } from 'test-helpers'
import asyncForEach from './../../src/utils/asyncForEach'

export { data, add, remove, load, update, clear, reset, } from './data_list'

export const filtered = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should "filtered" contained filtered data of children if prototype is a single element', async () => {
    let form = createForm(listSchema(options, 0, {
      type: elementType,
      initial: 0,
      parent: {
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
      schema: {
        el2: {
          type: 'text',
        },
        el3: {
          type: 'text',
        },
      }
    }))

    let el = form.vm.el$('el')
    let el2 = form.vm.el$('el2')
    let el3 = form.vm.el$('el3')

    expect(el.filtered).toStrictEqual({})

    el3.update('value3')

    expect(el.filtered).toStrictEqual({
      el: []
    })

    el.add(listChildValue(options, 0, 0))
    el.add(listChildValue(options, 0, 1))

    await nextTick()

    el2.update('value2')

    expect(el.filtered).toStrictEqual({
      el: [listChildValue(options, 0, 0), listChildValue(options, 0, 1)]
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
  })

  it('should `sortValue` "DESC" if "order" is "DESC" using single element', async () => {
    let form = createForm(listSchema(options, 0, {
      initial: 0,
      parent: { order: 'DESC' }
    }))

    let el = form.vm.el$('el')

    await el.load([3,2,4])

    expect(el.value).toStrictEqual([4,3,2])
  })

  it('should `sortValue` by "orderBy" "ASC" if "orderBy" is defined using object element', async () => {
    let form = createForm(listSchema(options, 1, {
      initial: 0,
      parent: {
        orderBy: 'order',
        order: 'ASC',
        storeOrder: 'order',
      }
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
  })

  it('should `sortValue` by "orderBy" "DESC" if "orderBy" is defined and "order" is "DESC" using object element', async () => {
    let form = createForm(listSchema(options, 1, {
      initial: 0,
      parent: {
        orderBy: 'order',
        order: 'DESC',
        storeOrder: 'order'
      }
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

      expect(el.value.length).toBe(2)
    })
  })
}