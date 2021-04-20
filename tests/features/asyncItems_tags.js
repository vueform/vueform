import { createForm, destroy } from 'test-helpers'
import flushPromises from 'flush-promises'

export const updateItems = function (elementType, elementName, options) {
  it('should update items', async () => {
    let option3 = 3

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: async () => {
            return await new Promise((resolve, reject) => {
              resolve([1,2,option3])
            })
          },
        }
      }
    })

    await flushPromises()

    let el = form.vm.el$('el')
    
    expect(el.input.fo).toStrictEqual([
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 }
    ])

    option3 = 4

    el.updateItems()

    await flushPromises()
    
    expect(el.input.fo).toStrictEqual([
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 4, label: 4 }
    ])
    
    // destroy(form) // teardown
  })
}