import { createForm, findAllComponents, findAll, destroy } from 'test-helpers'
import flushPromises from 'flush-promises'

export const resolvedItems = function (elementType, elementName, options) {
  it('should resolve items when items are an array', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [1,2,3],
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    expect(elWrapper.vm.resolvedItems).toStrictEqual({
      '1': {
        label: 1,
      },
      '2': {
        label: 2,
      },
      '3': {
        label: 3,
      },
    })
    
    // destroy(form) // teardown
  })

  it('should resolve items when items are an object', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            0: 1,
            1: 2,
            2: 3
          },
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    expect(elWrapper.vm.resolvedItems).toStrictEqual({
      '0': {
        label: 1,
      },
      '1': {
        label: 2,
      },
      '2': {
        label: 3,
      },
    })
    
    // destroy(form) // teardown
  })

  it('should resolve items when items are an array of objects', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            { value: 0, label: 1 },
            { value: 1, label: 2 },
            { value: 2, label: 3 },
          ]
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.vm.resolvedItems).toStrictEqual({
      '0': {
        value: 0,
        label: 1,
      },
      '1': {
        value: 1,
        label: 2,
      },
      '2': {
        value: 2,
        label: 3,
      },
    })
    
    // destroy(form) // teardown
  })

  it('should resolve items when items are async', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: async () => {
            return await new Promise((resolve, reject) => {
              resolve([1,2,3])
            })
          }
        }
      }
    })

    await flushPromises()

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    expect(elWrapper.vm.resolvedItems).toStrictEqual({
      '1': {
        label: 1,
      },
      '2': {
        label: 2,
      },
      '3': {
        label: 3,
      },
    })
    
    // destroy(form) // teardown
  })
}

export const updateItems = function (elementType, elementName, options) {
  it('should update async items', async () => {
    let option3 = 3

    let form = createForm({
      schema: {
        el: {
          type: elementType,
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
    
    expect(el.resolvedItems).toStrictEqual({
      '1': {
        label: 1,
      },
      '2': {
        label: 2,
      },
      '3': {
        label: 3,
      },
    })

    option3 = 4

    el.updateItems()

    await flushPromises()
    
    expect(el.resolvedItems).toStrictEqual({
      '1': {
        label: 1,
      },
      '2': {
        label: 2,
      },
      '4': {
        label: 4,
      },
    })    
    
    // destroy(form) // teardown
  })
}