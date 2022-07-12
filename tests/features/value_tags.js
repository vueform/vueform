import { createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'
import flushPromises from 'flush-promises'

import { value as baseValue } from './value'

export const value = function (elementType, elementName, options) {
  baseValue(elementType, elementName, options)

  it('should value be equal to selected options\' value when items are an array & native=false', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: [1,2,3],
          default: [1],
        }
      }
    }, { 
      attach: true,
    })

    let el = form.vm.el$('el')
    let select = el.input

    // Default value
    expect(el.value).toStrictEqual([1])
    expect(select.ev).toStrictEqual([1])
    expect(select.iv).toStrictEqual([{ value: 1, label: 1 }])

    // Loaded value
    el.load([2])
    expect(el.value).toStrictEqual([2])
    await nextTick()
    expect(select.ev).toStrictEqual([2])
    expect(select.iv).toStrictEqual([{ value: 2, label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick({ value: 3, label: 3 })
    await nextTick()
    expect(select.ev).toStrictEqual([3])
    expect(select.iv).toStrictEqual([{ value: 3, label: 3 }])

    destroy(form)
    
    // destroy(form) // teardown
  })

  it('should value be equal to selected options\' value when items are an array & native=false', async () => {
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
    expect(el.value).toStrictEqual(['0'])
    expect(select.ev).toStrictEqual(['0'])
    expect(select.iv).toStrictEqual([{ value: '0', label: 1 }])

    // Loaded value
    el.load(['1'])
    expect(el.value).toStrictEqual(['1'])
    await nextTick()
    expect(select.ev).toStrictEqual(['1'])
    expect(select.iv).toStrictEqual([{ value: '1', label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick({ value: '2', label: 3 })
    await nextTick()
    expect(select.ev).toStrictEqual(['2'])
    expect(select.iv).toStrictEqual([{ value: '2', label: 3 }])

    destroy(form)
    
    // destroy(form) // teardown
  })

  it('should value be equal to selected options\' value when items are an array & native=false', async () => {
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
    expect(el.value).toStrictEqual([0])
    expect(select.ev).toStrictEqual([0])
    expect(select.iv).toStrictEqual([{ value: 0, label: 1 }])

    // Loaded value
    el.load([1])
    expect(el.value).toStrictEqual([1])
    await nextTick()
    expect(select.ev).toStrictEqual([1])
    expect(select.iv).toStrictEqual([{ value: 1, label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick({ value: 2, label: 3 })
    await nextTick()
    expect(select.ev).toStrictEqual([2])
    expect(select.iv).toStrictEqual([{ value: 2, label: 3 }])

    destroy(form)
    
    // destroy(form) // teardown
  })

  it('should value be equal to selected options\' value when items are an array & native=false', async () => {
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
          default: [1],
        }
      }
    }, { 
      attach: true,
    })

    await flushPromises()

    let el = form.vm.el$('el')
    let select = el.input

    // Default value
    expect(el.value).toStrictEqual([1])
    expect(select.ev).toStrictEqual([1])
    expect(select.iv).toStrictEqual([{ value: 1, label: 1 }])

    // Loaded value
    el.load([2])
    expect(el.value).toStrictEqual([2])
    await nextTick()
    expect(select.ev).toStrictEqual([2])
    expect(select.iv).toStrictEqual([{ value: 2, label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick({ value: 3, label: 3 })
    await nextTick()
    expect(select.ev).toStrictEqual([3])
    expect(select.iv).toStrictEqual([{ value: 3, label: 3 }])

    destroy(form)
  })
  
  it('should value be equal to selected options\' value when items are an array & native=false object=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: [1,2,3],
          default: [{ value: 1, label: 1 }],
          extendOptions: {
            object: true
          }
        }
      }
    }, { 
      attach: true,
    })

    let el = form.vm.el$('el')
    let select = el.input

    await nextTick()

    // Default value
    expect(el.value).toStrictEqual([{ value: 1, label: 1 }])
    expect(select.ev).toStrictEqual([{ value: 1, label: 1 }])
    expect(select.iv).toStrictEqual([{ value: 1, label: 1 }])

    // Loaded value
    el.load([{ value: 2, label: 2 }])
    expect(el.value).toStrictEqual([{ value: 2, label: 2 }])
    await nextTick()
    expect(select.ev).toStrictEqual([{ value: 2, label: 2 }])
    expect(select.iv).toStrictEqual([{ value: 2, label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick([{ value: 3, label: 3 }])
    await nextTick()
    expect(select.ev).toStrictEqual([{ value: 3, label: 3 }])
    expect(select.iv).toStrictEqual([{ value: 3, label: 3 }])

    destroy(form)
    
    // destroy(form) // teardown
  })

  it('should value be equal to selected options\' value when items are an object & native=false object=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: {0:1,1:2,2:3},
          default: [{ value: '0', label: 1 }],
          extendOptions: {
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
    expect(el.value).toStrictEqual([{ value: '0', label: 1 }])
    expect(select.ev).toStrictEqual([{ value: '0', label: 1 }])
    expect(select.iv).toStrictEqual([{ value: '0', label: 1 }])

    // Loaded value
    el.load([{ value: '1', label: 2 }])
    expect(el.value).toStrictEqual([{ value: '1', label: 2 }])
    await nextTick()
    expect(select.ev).toStrictEqual([{ value: '1', label: 2 }])
    expect(select.iv).toStrictEqual([{ value: '1', label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick([{ value: '2', label: 3 }])
    await nextTick()
    expect(select.ev).toStrictEqual([{ value: '2', label: 3 }])
    expect(select.iv).toStrictEqual([{ value: '2', label: 3 }])

    destroy(form)
    
    // destroy(form) // teardown
  })

  it('should value be equal to selected options\' value when items are an array of objects & native=false object=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: [
            { v: 1, label: 1 },
            { v: 2, label: 2 },
            { v: 3, label: 3 },
          ],
          default: [{ v: 1, label: 1 }],
          extendOptions: {
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
    expect(el.value).toStrictEqual([{ v: 1, label: 1 }])
    expect(select.ev).toStrictEqual([{ v: 1, label: 1 }])
    expect(select.iv).toStrictEqual([{ v: 1, label: 1 }])

    // Loaded value
    el.load([{ v: 2, label: 2 }])
    expect(el.value).toStrictEqual([{ v: 2, label: 2 }])
    await nextTick()
    expect(select.ev).toStrictEqual([{ v: 2, label: 2 }])
    expect(select.iv).toStrictEqual([{ v: 2, label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick([{ v: 2, label: 3 }])
    await nextTick()
    expect(select.ev).toStrictEqual([{ v: 2, label: 3 }])
    expect(select.iv).toStrictEqual([{ v: 2, label: 3 }])

    destroy(form)
    
    // destroy(form) // teardown
  })

  it('should value be equal to selected options\' value when items are async & native=false object=true', async () => {
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
          default: [{ value: 1, label: 1 }],
          extendOptions: {
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
    expect(el.value).toStrictEqual([{ value: 1, label: 1 }])
    expect(select.ev).toStrictEqual([{ value: 1, label: 1 }])
    expect(select.iv).toStrictEqual([{ value: 1, label: 1 }])

    // Loaded value
    el.load([{ value: 2, label: 2 }])
    expect(el.value).toStrictEqual([{ value: 2, label: 2 }])
    await nextTick()
    expect(select.ev).toStrictEqual([{ value: 2, label: 2 }])
    expect(select.iv).toStrictEqual([{ value: 2, label: 2 }])

    // Selected value
    select.clear()
    select.handleOptionClick([{ value: 2, label: 3 }])
    await nextTick()
    expect(select.ev).toStrictEqual([{ value: 2, label: 3 }])
    expect(select.iv).toStrictEqual([{ value: 2, label: 3 }])

    destroy(form)

    // destroy() // teardown
  })
}