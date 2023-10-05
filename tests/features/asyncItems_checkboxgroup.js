import { createForm, findAllComponents, findAll, destroy } from 'test-helpers'
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
  })
  
  it('should return localized `resolvedOptions`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            {
              value: 0,
              label: {
                en: 'item-en-1',
                de: 'item-de-1',
              }
            },
            {
              value: '1',
              label: {
                en: 'item-en-2',
                de: 'item-de-2',
              }
            },
          ]
        }
      },
      locale: 'de'
    })
    
    let el = form.vm.el$('el')
    
    expect(el.resolvedOptions).toStrictEqual([
      {
        value: 0,
        label: 'item-de-1',
      },
      {
        value: '1',
        label: 'item-de-2',
      },
    ])
    
    // destroy(form) // teardown
  })
  
  it('should return options with nested object key mapped to value', () => {
    
    let options = {
      value1: { label: 'label1' },
      value2: { label: 'label2' },
      value3: { label: 'label3' },
    }
    
    let expected = [
      { value: 'value1', label: 'label1' },
      { value: 'value2', label: 'label2' },
      { value: 'value3', label: 'label3' },
    ]
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: options,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.resolvedOptions).toStrictEqual(expected)
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
    
    await el.updateItems()
    
    await flushPromises

    expect(el.resolvedOptions).toStrictEqual(expected)

    // destroy(form) // teardown
  })
}

export const updateItems = function (elementType, elementName, options) {

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

  it('should throw warn if `resolveOptionsFromUrl` was unsuccessful (meaning `resolveOptionsFromUrl` was called)', async() => {
    let warnMock = jest.spyOn(console, 'warn').mockImplementation()
    let getStub = jest.fn(() => new Promise((resolve, reject) => {
      reject()
    }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: '/failing-url',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getStub
          }
        }
      }
    })

    await flushPromises()

    expect(warnMock.mock.calls[0][0]).toBe('Couldn\'t resolve items from /failing-url')
  })

  it('should throw warn if `resolveOptionsFromFunction` was unsuccessful (meaning `resolveOptionsFromFunction` was called)', async() => {
    let warnMock = jest.spyOn(console, 'warn').mockImplementation()
    let valueStub = jest.fn(() => new Promise((resolve, reject) => {
      reject()
    }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: valueStub,
        }
      }
    })

    await flushPromises()

    expect(warnMock.mock.calls[0][0]).toBe('Couldn\'t resolve items from async function')
  })
  
  it('should return empty array if `resolveOptionsFromFunction` was called and function return is null or undefined', async() => {
    
    let valueStub = jest.fn(() => new Promise((resolve, reject) => {
      reject()
    }))
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: async () => {
            return await new Promise((resolve, reject) => {
              resolve(null)
            })
          }
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    await flushPromises()
    
    expect(el.resolvedOptions).toStrictEqual([])
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

export const watchers = function (elementType, elementName, options) {

  it('should resolve options on items prop change', async () => {
    let options1 = [1, 2, 3]
    let options2 = [4, 5, 6]

    let expectedOptions1 = [{value: 1, label: 1}, {value: 2, label: 2}, {value: 3, label: 3}]
    let expectedOptions2 = [{value: 4, label: 4}, {value: 5, label: 5}, {value: 6, label: 6}]

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: options1,
          native: false
        }
      }
    })

    let el = form.vm.el$('el')

    await flushPromises()

    expect(el.resolvedOptions).toStrictEqual(expectedOptions1)

    form.vm.$set(form.vm.vueform.schema.el, 'items', options2)

    await flushPromises()

    expect(el.resolvedOptions).toStrictEqual(expectedOptions2)
  })
}