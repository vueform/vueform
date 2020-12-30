import { createForm, setMultiselectValue, findAllComponents, findAll, destroy } from 'test-helpers'
import { nextTick } from 'composition-api'
import flushPromises from 'flush-promises'

export { previousValue, currentValue, value } from './value_select'

export const model = function (elementType, elementName, options) {
  it('should model be equal to selected options\' value when items are an array & native=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: [1,2,3],
          default: [0],
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, `select`).at(0)

    // Default value
    expect(el.model).toStrictEqual([0])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('0')

    // Loaded value
    el.load([1])
    expect(el.model).toStrictEqual([1])
    await nextTick()
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('1')

    // Selected value
    setMultiselectValue(select, [2])
    expect(el.model).toStrictEqual([2])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('2')
  })
  
  it('should model be equal to selected options\' value when items are an object & native=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: {0:1,1:2,2:3},
          default: [0],
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, `select`).at(0)

    // Default value
    expect(el.model).toStrictEqual([0])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('0')

    // Loaded value
    el.load([1])
    expect(el.model).toStrictEqual([1])
    await nextTick()
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('1')

    // Selected value
    setMultiselectValue(select, [2])
    expect(el.model).toStrictEqual([2])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('2')
  })

  it('should model be equal to selected options\' value when items are an array of objects & native=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: [
            { value: 0, label: 1 },
            { value: 1, label: 2 },
            { value: 2, label: 3 },
          ],
          default: [0],
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, `select`).at(0)

    // Default value
    expect(el.model).toStrictEqual([0])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('0')

    // Loaded value
    el.load([1])
    expect(el.model).toStrictEqual([1])
    await nextTick()
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('1')

    // Selected value
    setMultiselectValue(select, [2])
    expect(el.model).toStrictEqual([2])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('2')
  })

  it('should model be equal to selected options\' value when items are async & native=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: async () => {
            return await new Promise((resolve, reject) => {
              resolve([1,2,3])
            })
          },
          default: [0],
        }
      }
    })

    await flushPromises()

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, `select`).at(0)

    // Default value
    expect(el.model).toStrictEqual([0])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('0')

    // Loaded value
    el.load([1])
    expect(el.model).toStrictEqual([1])
    await nextTick()
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('1')

    // Selected value
    setMultiselectValue(select, [2])
    expect(el.model).toStrictEqual([2])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('2')
  })

  it('should model be equal to selected options\' value when items are an array & native=false', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: [1,2,3],
          default: [0],
        }
      }
    }, { 
      attach: true,
    })

    let el = form.vm.el$('el')
    let select = el.input

    // Default value
    expect(el.model).toStrictEqual([0])
    expect(select.externalValue).toStrictEqual([0])
    expect(select.internalValue).toStrictEqual([{ value: 0, label: 1 }])

    // Loaded value
    el.load([1])
    expect(el.model).toStrictEqual([1])
    await nextTick()
    expect(select.externalValue).toStrictEqual([1])
    expect(select.internalValue).toStrictEqual([{ value: 1, label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick({ value: 2, label: 3 })
    await nextTick()
    expect(select.externalValue).toStrictEqual([2])
    expect(select.internalValue).toStrictEqual([{ value: 2, label: 3 }])

    destroy(form)
  })

  it('should model be equal to selected options\' value when items are an array & native=false', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: {0:1,1:2,2:3},
          default: ['0'],
        }
      }
    }, { 
      attach: true,
    })

    let el = form.vm.el$('el')
    let select = el.input

    // Default value
    expect(el.model).toStrictEqual(['0'])
    expect(select.externalValue).toStrictEqual(['0'])
    expect(select.internalValue).toStrictEqual([{ value: '0', label: 1 }])

    // Loaded value
    el.load(['1'])
    expect(el.model).toStrictEqual(['1'])
    await nextTick()
    expect(select.externalValue).toStrictEqual(['1'])
    expect(select.internalValue).toStrictEqual([{ value: '1', label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick({ value: '2', label: 3 })
    await nextTick()
    expect(select.externalValue).toStrictEqual([2])
    expect(select.internalValue).toStrictEqual([{ value: '2', label: 3 }])

    destroy(form)
  })

  it('should model be equal to selected options\' value when items are an array & native=false', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: [
            { value: 0, label: 1 },
            { value: 1, label: 2 },
            { value: 2, label: 3 },
          ],
          default: [0],
        }
      }
    }, { 
      attach: true,
    })

    let el = form.vm.el$('el')
    let select = el.input

    // Default value
    expect(el.model).toStrictEqual([0])
    expect(select.externalValue).toStrictEqual([0])
    expect(select.internalValue).toStrictEqual([{ value: 0, label: 1 }])

    // Loaded value
    el.load([1])
    expect(el.model).toStrictEqual([1])
    await nextTick()
    expect(select.externalValue).toStrictEqual([1])
    expect(select.internalValue).toStrictEqual([{ value: 1, label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick({ value: 2, label: 3 })
    await nextTick()
    expect(select.externalValue).toStrictEqual([2])
    expect(select.internalValue).toStrictEqual([{ value: 2, label: 3 }])

    destroy(form)
  })

  it('should model be equal to selected options\' value when items are an array & native=false', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: async () => {
            return await new Promise((resolve, reject) => {
              resolve([1,2,3])
            })
          },
          default: [0],
        }
      }
    }, { 
      attach: true,
    })

    await flushPromises()

    let el = form.vm.el$('el')
    let select = el.input

    // Default value
    expect(el.model).toStrictEqual([0])
    expect(select.externalValue).toStrictEqual([0])
    expect(select.internalValue).toStrictEqual([{ value: 0, label: 1 }])

    // Loaded value
    el.load([1])
    expect(el.model).toStrictEqual([1])
    await nextTick()
    expect(select.externalValue).toStrictEqual([1])
    expect(select.internalValue).toStrictEqual([{ value: 1, label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick({ value: 2, label: 3 })
    await nextTick()
    expect(select.externalValue).toStrictEqual([2])
    expect(select.internalValue).toStrictEqual([{ value: 2, label: 3 }])

    destroy(form)
  })
  
  it('should model be equal to selected options\' value when items are an array & native=false object=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: [1,2,3],
          default: [{ value: 0, label: 1 }],
          options: {
            object: true
          }
        }
      }
    }, { 
      attach: true,
    })

    let el = form.vm.el$('el')
    let select = el.input

    // Default value
    expect(el.model).toStrictEqual([{ value: 0, label: 1 }])
    expect(select.externalValue).toStrictEqual([{ value: 0, label: 1 }])
    expect(select.internalValue).toStrictEqual([{ value: 0, label: 1 }])

    // Loaded value
    el.load([{ value: 1, label: 2 }])
    expect(el.model).toStrictEqual([{ value: 1, label: 2 }])
    await nextTick()
    expect(select.externalValue).toStrictEqual([{ value: 1, label: 2 }])
    expect(select.internalValue).toStrictEqual([{ value: 1, label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick([{ value: 2, label: 3 }])
    await nextTick()
    expect(select.externalValue).toStrictEqual([{ value: 2, label: 3 }])
    expect(select.internalValue).toStrictEqual([{ value: 2, label: 3 }])

    destroy(form)
  })

  it('should model be equal to selected options\' value when items are an object & native=false object=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: {0:1,1:2,2:3},
          default: [{ value: '0', label: 1 }],
          options: {
            object: true
          }
        }
      }
    }, { 
      attach: true,
    })

    let el = form.vm.el$('el')
    let select = el.input

    // Default value
    expect(el.model).toStrictEqual([{ value: '0', label: 1 }])
    expect(select.externalValue).toStrictEqual([{ value: '0', label: 1 }])
    expect(select.internalValue).toStrictEqual([{ value: '0', label: 1 }])

    // Loaded value
    el.load([{ value: '1', label: 2 }])
    expect(el.model).toStrictEqual([{ value: '1', label: 2 }])
    await nextTick()
    expect(select.externalValue).toStrictEqual([{ value: '1', label: 2 }])
    expect(select.internalValue).toStrictEqual([{ value: '1', label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick([{ value: '2', label: 3 }])
    await nextTick()
    expect(select.externalValue).toStrictEqual([{ value: '2', label: 3 }])
    expect(select.internalValue).toStrictEqual([{ value: '2', label: 3 }])

    destroy(form)
  })

  it('should model be equal to selected options\' value when items are an array of objects & native=false object=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: [
            { v: 0, label: 1 },
            { v: 1, label: 2 },
            { v: 2, label: 3 },
          ],
          default: [{ v: 0, label: 1 }],
          options: {
            object: true,
            valueProp: 'v'
          }
        }
      }
    }, { 
      attach: true,
    })

    let el = form.vm.el$('el')
    let select = el.input

    // Default value
    expect(el.model).toStrictEqual([{ v: 0, label: 1 }])
    expect(select.externalValue).toStrictEqual([{ v: 0, label: 1 }])
    expect(select.internalValue).toStrictEqual([{ v: 0, label: 1 }])

    // Loaded value
    el.load([{ v: 1, label: 2 }])
    expect(el.model).toStrictEqual([{ v: 1, label: 2 }])
    await nextTick()
    expect(select.externalValue).toStrictEqual([{ v: 1, label: 2 }])
    expect(select.internalValue).toStrictEqual([{ v: 1, label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick([{ v: 2, label: 3 }])
    await nextTick()
    expect(select.externalValue).toStrictEqual([{ v: 2, label: 3 }])
    expect(select.internalValue).toStrictEqual([{ v: 2, label: 3 }])

    destroy(form)
  })

  it('should model be equal to selected options\' value when items are async & native=false object=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: async () => {
            return await new Promise((resolve, reject) => {
              resolve([1,2,3])
            })
          },
          default: [{ value: 0, label: 1 }],
          options: {
            object: true,
          }
        }
      }
    }, { 
      attach: true,
    })

    await flushPromises()

    let el = form.vm.el$('el')
    let select = el.input

    // Default value
    expect(el.model).toStrictEqual([{ value: 0, label: 1 }])
    expect(select.externalValue).toStrictEqual([{ value: 0, label: 1 }])
    expect(select.internalValue).toStrictEqual([{ value: 0, label: 1 }])

    // Loaded value
    el.load([{ value: 1, label: 2 }])
    expect(el.model).toStrictEqual([{ value: 1, label: 2 }])
    await nextTick()
    expect(select.externalValue).toStrictEqual([{ value: 1, label: 2 }])
    expect(select.internalValue).toStrictEqual([{ value: 1, label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick([{ value: 2, label: 3 }])
    await nextTick()
    expect(select.externalValue).toStrictEqual([{ value: 2, label: 3 }])
    expect(select.internalValue).toStrictEqual([{ value: 2, label: 3 }])

    destroy(form)
  })
}