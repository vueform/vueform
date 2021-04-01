import { createForm, findAllComponents, findAll, destroy } from 'test-helpers'
import flushPromises from 'flush-promises'

export const nativeItems = function (elementType, elementName, options) {
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

    expect(options.at(0).attributes('value')).toBe('0')
    expect(options.at(0).element.innerHTML.trim()).toBe('1')
    expect(options.at(1).attributes('value')).toBe('1')
    expect(options.at(1).element.innerHTML.trim()).toBe('2')
    expect(options.at(2).attributes('value')).toBe('2')
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

    await flushPromises()

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let options = findAll(elWrapper, `option`)

    expect(options.at(0).attributes('value')).toBe('0')
    expect(options.at(0).element.innerHTML.trim()).toBe('1')
    expect(options.at(1).attributes('value')).toBe('1')
    expect(options.at(1).element.innerHTML.trim()).toBe('2')
    expect(options.at(2).attributes('value')).toBe('2')
    expect(options.at(2).element.innerHTML.trim()).toBe('3')
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const updateItems = function (elementType, elementName, options) {
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
    
    expect(el.nativeItems).toStrictEqual([
      { value: 0, label: 1 },
      { value: 1, label: 2 },
      { value: 2, label: 3 }
    ])

    option3 = 4

    el.updateItems()

    await flushPromises()
    
    expect(el.nativeItems).toStrictEqual([
      { value: 0, label: 1 },
      { value: 1, label: 2 },
      { value: 2, label: 4 }
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
    
    expect(el.input.filteredOptions).toStrictEqual([
      { value: 0, label: 1 },
      { value: 1, label: 2 },
      { value: 2, label: 3 }
    ])

    option3 = 4

    el.updateItems()

    await flushPromises()
    
    expect(el.input.filteredOptions).toStrictEqual([
      { value: 0, label: 1 },
      { value: 1, label: 2 },
      { value: 2, label: 4 }
    ])
    
    // destroy(form) // teardown
  })
}