import { nextTick } from 'vue'
import { createForm, destroy } from 'test-helpers'

export { list, sortable, isSortable, initSortable, destroySortable, watchers, onMounted } from './sort'

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
  expect(el.list.children[index].children[0].innerHTML).toContain(el.children$[index].children$.order.label(el.children$[index].children$.order))
}

const testSort = async (from, to, value, elementType) => {
  let formChangeMock = jest.fn()

  let form = createForm({
    schema: {
      el: {
        type: elementType,
        sort: true,
        auto: false,
        default: [
          {child:'a',order:1},
          {child:'b',order:2},
          {child:'c',order:3}
        ],
        orderBy: 'order',
        order: 'ASC',
        storeOrder: 'order',
        storeFile: 'child',
        fields: {
          child: {
            type: 'file',
          },
          order: {
            type: 'text',
            label(el$) {
              return 'label-' + el$.parent.name
            },
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
    form.vm
  )

  checkChildNode(el, 0)
  checkChildNode(el, 1)
  checkChildNode(el, 2)

  destroy(form)
}