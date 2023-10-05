import Sortable from 'sortablejs'
import { nextTick } from 'vue'
import {
  createForm, destroy
} from 'test-helpers'

export const list = function (elementType, elementName, options) {
  it('should be the reference to list items container', () => {
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

    expect(el.list.children[1].children[0]).toStrictEqual(el.children$[1].$el)

    // destroy() // teardown
  })
}

export const sortable = function (elementType, elementName, options) {
  it('should be null by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.sortable).toBe(null)

    // destroy() // teardown
  })
}

export const isSortable = function (elementType, elementName, options) {
  it('should be false if sort is not set', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.isSortable).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should be true if sort is true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: true,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.isSortable).toBe(true)
    
    // destroy(form) // teardown
  })

  it('should be false if sort is true && disabled', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: true,
          disabled: true,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.isSortable).toBe(false)

    // destroy() // teardown
  })
}

export const initSortable = function (elementType, elementName, options) {
  it('should init sortable', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.sortable).toBe(null)

    el.initSortable()
  
    expect(el.sortable instanceof Sortable).toBe(true)

    // destroy() // teardown
  })
}

export const destroySortable = function (elementType, elementName, options) {
  it('should destroy sortable', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: true,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.sortable).not.toBe(null)

    el.destroySortable()

    expect(el.sortable).toBe(null)

    // destroy() // teardown
  })
}

export const handleSort = function (elementType, elementName, options) {
  it('should reposition from 0 to 1', async () => {
    await testSort(0, 1, [
      {child:'b',order:1},
      {child:'a',order:2},
      {child:'c',order:3}
    ], elementType)
    
    // destroy(form) // teardown
  })

  it('should reposition from 1 to 0', async () => {
    await testSort(1, 0, [
      {child:'b',order:1},
      {child:'a',order:2},
      {child:'c',order:3}
    ], elementType)
    
    // destroy(form) // teardown
  })

  it('should reposition from 0 to 2', async () => {
    await testSort(0, 2, [
      {child:'b',order:1},
      {child:'c',order:2},
      {child:'a',order:3},
    ], elementType)
    
    // destroy(form) // teardown
  })

  it('should reposition from 2 to 0', async () => {
    await testSort(2, 0, [
      {child:'c',order:1},
      {child:'a',order:2},
      {child:'b',order:3},
    ], elementType)
    
    // destroy(form) // teardown
  })

  it('should reposition from 1 to 2', async () => {
    await testSort(1, 2, [
      {child:'a',order:1},
      {child:'c',order:2},
      {child:'b',order:3},
    ], elementType)
    
    // destroy(form) // teardown
  })

  it('should reposition from 2 to 1', async () => {
    await testSort(2, 1, [
      {child:'a',order:1},
      {child:'c',order:2},
      {child:'b',order:3},
    ], elementType)

    // destroy() // teardown
  })
}

export const watchers = function (elementType, elementName, options) {
  it('should init sortable if sort becomes true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: false,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.sortable).toBe(null)
    
    form.vm.$set(form.vm.vueform.schema.el, 'sort', true)

    await nextTick()

    expect(el.sortable).not.toBe(null)
    
    // destroy(form) // teardown
  })

  it('should destroy sortable if sort becomes false', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: true,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.sortable).not.toBe(null)
    
    form.vm.$set(form.vm.vueform.schema.el, 'sort', false)

    await nextTick()

    expect(el.sortable).toBe(null)

    // destroy() // teardown
  })
}

export const onMounted = function (elementType, elementName, options) {
  it('should init sortable if sort is true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: true,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.sortable).not.toBe(null)
    
    // destroy(form) // teardown
  })

  it('should not init sortable if sort is not true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: {
            type: 'text'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.sortable).toBe(null)
  })
}

const imitateSort = (el, from, to) => {
  let item = el.list.children[from]

  el.list.children[from].remove()
  el.list.insertBefore(item, el.list.children[to])

  el.handleSort({
    oldIndex: from,
    newIndex: to,
    item: item
  })
}

const checkChildNode = (el, index) => {
  expect(el.list.children[index].children[0].innerHTML).toContain(el.children$[index].label(el.children$[index]))
}

const testSort = async (from, to, value, elementType) => {
  let formChangeMock = jest.fn()

  let form = createForm({
    schema: {
      el: {
        type: elementType,
        sort: true,
        default: [
          {child:'a',order:1},
          {child:'b',order:2},
          {child:'c',order:3}
        ],
        orderBy: 'order',
        order: 'ASC',
        storeOrder: 'order',
        object: {
          label(el$) {
            return 'label-' + el$.name
          },
          schema: {
            child: {
              type: 'text',
            },
            order: {
              type: 'text'
            }
          }
        }
      },
    }
  }, {
    attach: true,
  })

  form.vm.on('change', formChangeMock)

  let el = form.vm.el$('el')
  
  imitateSort(el, from, to)

  await nextTick()

  expect(el.value).toStrictEqual(value)

  expect(formChangeMock).toHaveBeenCalledTimes(1)
  expect(formChangeMock).toHaveBeenLastCalledWith(
    {el:value},
    {el:[{child:'a',order:1},{child:'b',order:2},{child:'c',order:3}]},
    form.vm,
  )

  checkChildNode(el, 0)
  checkChildNode(el, 1)
  checkChildNode(el, 2)

  destroy(form)
}