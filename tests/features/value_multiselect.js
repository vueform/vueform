import { createForm, setMultiselectValue, findAllComponents, findAll, destroy } from 'test-helpers'
import { nextTick } from 'vue'
import flushPromises from 'flush-promises'

import { value as baseValue } from './value_tags'

export const value = function (elementType, elementName, options) {
  baseValue(elementType, elementName, options)

  it('should value be equal to selected options\' value when items are an array & native=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: [1,2,3],
          default: [1],
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, `select`).at(0)

    // Default value
    expect(el.value).toStrictEqual([1])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('1')

    // Loaded value
    el.load([2])
    expect(el.value).toStrictEqual([2])
    await nextTick()
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('2')

    // Selected value
    setMultiselectValue(select, [3])
    expect(el.value).toStrictEqual([3])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('3')
  })
  
  it('should value be equal to selected options\' value when items are an object & native=true', async () => {
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
    expect(el.value).toStrictEqual([0])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('0')

    // Loaded value
    el.load([1])
    expect(el.value).toStrictEqual([1])
    await nextTick()
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('1')

    // Selected value
    setMultiselectValue(select, [2])
    expect(el.value).toStrictEqual(['2'])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('2')
    
    // destroy(form) // teardown
  })

  it('should value be equal to selected options\' value when items are an array of objects & native=true', async () => {
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
    expect(el.value).toStrictEqual([0])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('0')

    // Loaded value
    el.load([1])
    expect(el.value).toStrictEqual([1])
    await nextTick()
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('1')

    // Selected value
    setMultiselectValue(select, [2])
    expect(el.value).toStrictEqual([2])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('2')
    
    // destroy(form) // teardown
  })

  it('should value be equal to selected options\' value when items are async & native=true', async () => {
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
          default: [1],
        }
      }
    })

    await flushPromises()

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, `select`).at(0)

    // Default value
    expect(el.value).toStrictEqual([1])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('1')

    // Loaded value
    el.load([2])
    expect(el.value).toStrictEqual([2])
    await nextTick()
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('2')

    // Selected value
    setMultiselectValue(select, [3])
    expect(el.value).toStrictEqual([3])
    expect(findAll(select, `option:checked`).at(0).element.value).toBe('3')

    // destroy() // teardown
  })
}