import { nextTick } from 'vue'
import { createForm, findAllComponents, findAll, destroy } from 'test-helpers'
import flushPromises from 'flush-promises'

jest.useFakeTimers()

export const resolvedOptions = function (elementType, elementName, options) {
  it('should return options prop as is if native is false', () => {
    let options = [1,2,3,'asdasd']

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: options,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.resolvedOptions).toStrictEqual(options)
  })

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

    expect(warnMock.mock.calls[0][0]).toBe('You must define `value` property for each option when using an array of objects options for select element')
  })

  it('should return options mapped with value/label pairs with valueProp and/or labelProps defined when array of objects', () => {
    let options = [
      { myValue: 1, myLabel: 'value1' },
      { myValue: 2, myLabel: 'value2' },
      { myValue: 3, myLabel: 'value3' }
    ]

    let expected = [
      { value: 1, label: 'value1' },
      { value: 2, label: 'value2' },
      { value: 3, label: 'value3' }
    ]

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: options,
          valueProp: 'myValue',
          labelProp: 'myLabel'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.resolvedOptions).toStrictEqual(expected)
  })
  
  it('should return options object with value=label when array', () => {
    let options = [1,2,3,'someString']
    let expected = [
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 'someString', label: 'someString' }
    ]

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: options
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.resolvedOptions).toStrictEqual(expected)
  })

  it('should return options mapped value/label as index/item when items is a single object', async () => {
    let options = {10: 1, 8: 2, 2: 3, 'myKey': 'someString'}
    let expected = [
      { value: "2", label: 3 },
      { value: "8", label: 2 },
      { value: "10", label: 1 },
      { value: "myKey", label: 'someString' }
    ] // order does matter!

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: options
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.resolvedOptions).toStrictEqual(expected)
  })
  
  it('should return localized `nativeItems`', () => {
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
  
  it('should return empty array on createAsyncOptionsFromUrl', async () => {
    
    let getStub = jest.fn(() => ({ ObjectWithoutDataKey: true }))
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          search: true,
          items: '/async-options-from-url',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getStub
          }
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    expect(await (el.resolvedOptions)()).toStrictEqual([])
  })
  
  it('should return array on specific key in createAsyncOptionsFromUrl', async () => {
    
    let getStub = jest.fn(() => ({ data: { specificKey: [1,2,3] } }))
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          search: true,
          items: '/async-options-from-url',
          dataKey: 'specificKey',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getStub
          }
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    expect(await (el.resolvedOptions)()).toStrictEqual([1,2,3])
  })
  
  it('should return empty array on specific key in createAsyncOptionsFromUrl', async () => {
    
    let getStub = jest.fn(() => ({ data: { specificKey: null } }))
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          search: true,
          items: '/async-options-from-url',
          dataKey: 'specificKey',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getStub
          }
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    expect(await (el.resolvedOptions)()).toStrictEqual([])
  })
  
  it('should create proper url with single parameter', async () => {
    
    let getMock = jest.fn(() => ({ data: [1,2,3] }))
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          search: true,
          items: '/async-options-from-url',
          delay: 0,
          searchParam: 'param1',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getMock
          }
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    el.input.search = 'something'
    
    await nextTick()

    jest.advanceTimersByTime(0)
    
    await flushPromises()
    
    expect(getMock).toHaveBeenLastCalledWith('/async-options-from-url?param1=something')
    
    // destroy(form) // teardown
  })
  
  it('should create proper url with multiple parameters', async () => {
    
    let getMock = jest.fn(() => ({ data: [1,2,3] }))
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          search: true,
          items: '/async-options-from-url?existing-param=something',
          delay: 0,
          searchParam: 'param1',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getMock
          }
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    el.input.search = 'something-else'
    
    await nextTick()
    
    jest.advanceTimersByTime(0)
    
    await flushPromises()
    
    expect(getMock).toHaveBeenLastCalledWith('/async-options-from-url?existing-param=something&param1=something-else')
  })
  
  
  it('should render select options when items are an array', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: [1,2,3],
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let options = findAll(elWrapper, `option`)

    expect(options.at(0).attributes('value')).toBe('1')
    expect(options.at(0).element.innerHTML.trim()).toBe('1')
    expect(options.at(1).attributes('value')).toBe('2')
    expect(options.at(1).element.innerHTML.trim()).toBe('2')
    expect(options.at(2).attributes('value')).toBe('3')
    expect(options.at(2).element.innerHTML.trim()).toBe('3')

    // destroy(form) // teardown
  })

  it('should render select options when items are an object', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: {
            0: 1,
            1: 2,
            2: 3,
          },
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let options = findAll(elWrapper, `option`)

    expect(options.at(0).attributes('value')).toBe('0')
    expect(options.at(0).element.innerHTML.trim()).toBe('1')
    expect(options.at(1).attributes('value')).toBe('1')
    expect(options.at(1).element.innerHTML.trim()).toBe('2')
    expect(options.at(2).attributes('value')).toBe('2')
    expect(options.at(2).element.innerHTML.trim()).toBe('3')

    // destroy(form) // teardown
  })

  it('should render select options when items are an array of objects', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: [
            { value: 0, label: 1 },
            { value: 1, label: 2 },
            { value: 2, label: 3 },
          ]
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let options = findAll(elWrapper, `option`)

    expect(options.at(0).attributes('value')).toBe('0')
    expect(options.at(0).element.innerHTML.trim()).toBe('1')
    expect(options.at(1).attributes('value')).toBe('1')
    expect(options.at(1).element.innerHTML.trim()).toBe('2')
    expect(options.at(2).attributes('value')).toBe('2')
    expect(options.at(2).element.innerHTML.trim()).toBe('3')

    // destroy(form) // teardown
  })

  it('should render select options when items are async', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: async () => {
            return await new Promise((resolve, reject) => {
              resolve([1,2,3])
            })
          }
        }
      }
    })

    // await nextTick()

    await flushPromises()

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let options = findAll(elWrapper, `option`)

    expect(options.at(0).attributes('value')).toBe('1')
    expect(options.at(0).element.innerHTML.trim()).toBe('1')
    expect(options.at(1).attributes('value')).toBe('2')
    expect(options.at(1).element.innerHTML.trim()).toBe('2')
    expect(options.at(2).attributes('value')).toBe('3')
    expect(options.at(2).element.innerHTML.trim()).toBe('3')

    destroy(form) // teardown

    // destroy() // teardown
  })

  it('should render select options when items are string', async () => {
    let getMock = jest.fn(() => ( {data:[1,2,3]} ))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: '/method',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = getMock
          }
        }
      }
    })

    await flushPromises()

    form.vm.el$('el').updateItems()

    await flushPromises()

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let options = findAll(elWrapper, `option`)

    expect(options.at(0).attributes('value')).toBe('1')
    expect(options.at(0).element.innerHTML.trim()).toBe('1')
    expect(options.at(1).attributes('value')).toBe('2')
    expect(options.at(1).element.innerHTML.trim()).toBe('2')
    expect(options.at(2).attributes('value')).toBe('3')
    expect(options.at(2).element.innerHTML.trim()).toBe('3')

    // destroy(form) // teardown

    // destroy() // teardown
  })

  it('should render select options when items are string using dataKey & native', async () => {
    let getMock = jest.fn(() => ({data:{options:[1,2,3]}}))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: '/url-1',
          dataKey: 'options'
        }
      }
    })

    form.vm.$vueform.services.axios.get = getMock

    await flushPromises()

    form.vm.el$('el').updateItems()

    await flushPromises()

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let options = findAll(elWrapper, `option`)

    expect(options.at(0).attributes('value')).toBe('1')
    expect(options.at(0).element.innerHTML.trim()).toBe('1')
    expect(options.at(1).attributes('value')).toBe('2')
    expect(options.at(1).element.innerHTML.trim()).toBe('2')
    expect(options.at(2).attributes('value')).toBe('3')
    expect(options.at(2).element.innerHTML.trim()).toBe('3')

    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const updateItems = function (elementType, elementName, options) {

  it('should call resolveOptions if native false', async () => {
    let getStub = jest.fn(() => [1,2,3])

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: 'url',
        }
      }
    })

    form.vm.$vueform.services.axios.get = getStub

    let el = form.vm.el$('el')

    expect(typeof el.resolvedOptions).toBe('function')
  })

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

  it('should return options if object/array is given just like resolvedOptions', async () => {
    let counter = 0

    let getStub = jest.fn(() => { return {data: counter ? [4,5,6] : [1,2,3] } })
    let expected1 = [{ value: 1, label: 1},{ value: 2, label: 2},{ value: 3, label: 3}]
    let expected2 = [{ value: 4, label: 4},{ value: 5, label: 5},{ value: 6, label: 6}]

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: '/some-url',
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
  
  it('should return options as label/value pairs', () => {
    
    let options = [1,2,3,'someString']
    let expected = [
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 'someString', label: 'someString' }
    ]
    
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
    
    el.updateItems()
    
    expect(el.resolvedOptions).toStrictEqual(expected)
  })
  

  it('should update items when native=true', async () => {
    let option3 = 3

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
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
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 }
    ])

    option3 = 4

    el.updateItems()

    await flushPromises()

    expect(el.resolvedOptions).toStrictEqual([
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 4, label: 4 }
    ])

    // destroy(form) // teardown
  })

  it('should update items when native=false', async () => {
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

export const watchers = function (elementType, elementName, options) {
  it('should resolve options on items prop change', async () => {
    let options1 = [1,2,3]
    let options2 = [4,5,6]

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

    expect(el.resolvedOptions).toStrictEqual(options1)

    form.vm.$set(form.vm.vueform.schema.el, 'items', options2)

    await flushPromises()

    expect(el.resolvedOptions).toStrictEqual(options2)
  })

  it('should resolve options on native prop change', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [1],
          native: true
        }
      }
    })

    let el = form.vm.el$('el')

    await flushPromises()

    expect(el.resolvedOptions).toStrictEqual([{value: 1, label: 1}])

    form.vm.$set(form.vm.vueform.schema.el, 'native', false)

    await flushPromises()

    expect(el.resolvedOptions).toStrictEqual([1])
  })
}