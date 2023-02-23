import { createForm, findAllComponents, findAll, destroy } from 'test-helpers'
import { nextTick } from 'vue'
import flushPromises from 'flush-promises'

export const resolvedOptions = function (elementType, elementName, options) {
  it('should skip over [null, undefined] values', () => {
    let options = [1, null, undefined, 3]
    let expected = [{value: 1, label: 1},{value: 3, label: 3}]
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: options,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.resolvedOptions).toStrictEqual(expected)
  })
  
  it('should throw warn if options is array of objects supplied without value prop', () => {
    let warnMock = jest.spyOn(console, 'warn').mockImplementation()
    let options = [{value: 1, label: 1},{label: 2},{value: 3, label: 3}] // middle element missing value for test
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: options,
        }
      }
    })
    
    expect(warnMock.mock.calls[0][0]).toBe('You must define `value` property for each item when using an array of objects options')
    
    jest.clearAllMocks()
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
    
    expect(elWrapper.vm.resolvedOptions).toStrictEqual([
      {
        value: 0,
        label: 1,
      },
      {
        value: 1,
        label: 2,
      },
      {
        value: 2,
        label: 3,
      },
    ])
    
    // destroy(form) // teardown
  })

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
    
    expect(elWrapper.vm.resolvedOptions).toStrictEqual([
      {
        value: 1,
        label: 1,
      },
      {
        value: 2,
        label: 2,
      },
      {
        value: 3,
        label: 3,
      },
    ])
    
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
    
    expect(elWrapper.vm.resolvedOptions).toStrictEqual([
      {
        value: '0',
        label: 1,
      },
      {
        value: '1',
        label: 2,
      },
      {
        value: '2',
        label: 3,
      },
    ])
    
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
    
    expect(elWrapper.vm.resolvedOptions).toStrictEqual([
      {
        value: 1,
        label: 1,
      },
      {
        value: 2,
        label: 2,
      },
      {
        value: 3,
        label: 3,
      },
    ])
    
    // destroy(form) // teardown
  })

  it('should resolve items from url', async () => {
    let getStub = jest.fn(() => { return { data: [1,2,3] } })
    let expected = [
      {
        value: 1,
        label: 1,
      },
      {
        value: 2,
        label: 2,
      },
      {
        value: 3,
        label: 3,
      },
    ]
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: '/url',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getStub
          }
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.updateItems()
    
    await flushPromises
    
    expect(el.resolvedOptions).toStrictEqual(expected)
    
    // destroy(form) // teardown
  })
}

export const updateItems = function (elementType, elementName, options) {
  
  // TODO: call resolveOptionsFromUrl
  
  // TODO: call resolveOptionsFromFunction
  
  it('should disable input while updating if not specified', async () => {
    let getStub = jest.fn(() => [1,2,3])
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: 'url',
        }
      }
    })
    
    form.vm.$vueform.services.axios.get = getStub
    
    let el = form.vm.el$('el')
    
    await flushPromises()
    
    el.updateItems()
    
    expect(el.isDisabled).toBe(true)
    
    await flushPromises()
    
    expect(el.isDisabled).toBe(false)
  })
  
  it('should not disable input while updating if false given to `updateItems`', async () => {
    let getStub = jest.fn(() => [1,2,3])
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: 'url',
        }
      }
    })
    
    form.vm.$vueform.services.axios.get = getStub
    
    let el = form.vm.el$('el')
    
    await flushPromises()
    
    el.updateItems(false)
    
    expect(el.isDisabled).toBe(false)
    
    await flushPromises()
    
    expect(el.isDisabled).toBe(false)
  })
  
  
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
    
    expect(el.resolvedOptions).toStrictEqual([
      {
        value: 1,
        label: 1,
      },
      {
        value: 2,
        label: 2,
      },
      {
        value: 3,
        label: 3,
      }
    ])

    option3 = 4

    el.updateItems()

    await flushPromises()
    
    expect(el.resolvedOptions).toStrictEqual([
      {
        value: 1,
        label: 1,
      },
      {
        value: 2,
        label: 2,
      },
      {
        value: 4,
        label: 4,
      },
    ])
    
    // destroy(form) // teardown
  })
}

export const resolveOptionsFromUrl = function (elementType, elementName, options) {
  it('should return [] on string if axios response is empty', async () => {
    let getStub = jest.fn(() => { return {data: null} })
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: '/url-4',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getStub
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.updateItems()
    
    await flushPromises()
    
    expect(el.resolvedOptions).toStrictEqual([])
  })
  
  it('should return options on string if axios response has data', async () => {
    let counter = 0
    
    let getStub = jest.fn(() => { return {data: counter ? [4,5,6] : [1,2,3] } })
    let expected1 = [{ value: 1, label: 1},{ value: 2, label: 2},{ value: 3, label: 3}]
    let expected2 = [{ value: 4, label: 4},{ value: 5, label: 5},{ value: 6, label: 6}]
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: '/url-5',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getStub
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    await flushPromises()
    
    expect(el.resolvedOptions).toStrictEqual(expected1)
    
    counter++
    
    el.updateItems()
    
    await flushPromises()
    
    expect(el.resolvedOptions).toStrictEqual(expected2)
  })
  
  it('should throw warn if url could not be resolved', async () => {
    let warnMock = jest.spyOn(console, 'warn').mockImplementation()
    let getStub = jest.fn(() => new Promise((resolve, reject) => {
      reject()
    }))
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: '/custom-lengthy-url-to-be-checked-against',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getStub
          }
        }
      }
    })
    
    await flushPromises()
    
    expect(warnMock.mock.calls[0][0]).toBe('Couldn\'t resolve items from /custom-lengthy-url-to-be-checked-against')
    
    jest.clearAllMocks()
  })
}

export const resolveOptionsFromFunction = function (elementType, elementName, options) {
  it('should return options', async () => {
    let getStub = jest.fn(() => { return { data: [1,2,3] } })
    let expected = [
      {
        value: 1,
        label: 1,
      },
      {
        value: 2,
        label: 2,
      },
      {
        value: 3,
        label: 3,
      },
    ]
  
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: '/url-3',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getStub
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    await flushPromises()
    
    el.updateItems()
    
    await flushPromises()
    
    expect(el.resolvedOptions).toStrictEqual(expected)
  })
  
  it('should throw warn if could not resolve items from async function', async () => {
    let warnMock = jest.spyOn(console, 'warn').mockImplementation()
    let getStub = jest.fn(() => new Promise((resolve, reject) => {
      reject()
    }))
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: '/resolve-from-function',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getStub
          }
        }
      }
    })
    
    await flushPromises()
    
    expect(warnMock.mock.calls[0][0]).toBe('Couldn\'t resolve items from /resolve-from-function')
    
    jest.clearAllMocks()
  })
}
