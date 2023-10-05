import { createForm, testPropDefault, findAll, findAllComponents, destroy } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick } from 'vue'

expect.extend({toBeVisible})

export const disabledItems = function (elementType, elementName, options) {

  it('should transform integer `disables` to strings', () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [1, 2],
          disables: [1, 2],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.disabledItems).toStrictEqual(['1', '2'])

    // destroy(form) // teardown
  })

  it('should disable items contained in `disables`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disables: [1],
          items: {
            1: 'value',
            2: 'value2',
          }
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let checkbox1 = findAll(elWrapper, `input[type="${options.fieldType}"]`).at(0)
    let checkbox2 = findAll(elWrapper, `input[type="${options.fieldType}"]`).at(1)

    expect(checkbox1.attributes('disabled') !== undefined).toBe(true)
    expect(checkbox2.attributes('disabled') === undefined).toBe(true)

    // destroy() // teardown
  })
}


export const isDisabled = function (elementType, elementName, options) {
  
  it('should disable all items if `disabled` is true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true,
          items: {
            1: 'value',
            2: 'value2',
          }
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let checkbox1 = findAll(elWrapper, `input[type="${options.fieldType}"]`).at(0)
    let checkbox2 = findAll(elWrapper, `input[type="${options.fieldType}"]`).at(1)

    expect(checkbox1.attributes('disabled') !== undefined).toBe(true)
    expect(checkbox2.attributes('disabled') !== undefined).toBe(true)

    // destroy() // teardown
  })
}


export const disable = function (elementType, elementName, options) {
  it('should `disable` single or multiple items', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            1: 'value',
            2: 'value2',
            3: 'value3',
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.disable(1)
    expect(el.disabledItems).toStrictEqual(['1'])

    el.disable(['2', 3])
    expect(el.disabledItems).toStrictEqual(['1', '2', '3'])

    // destroy() // teardown
  })
}

export const enable = function (elementType, elementName, options) {
  it('should `enable` single or multiple items', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            1: 'value',
            2: 'value2',
            3: 'value3',
          },
          disables: [1,2,3]
        }
      }
    })

    let el = form.vm.el$('el')

    el.enable(1)
    expect(el.disabledItems).toStrictEqual(['2', '3'])

    el.enable(['2', 3])
    expect(el.disabledItems).toStrictEqual([])

    // destroy() // teardown
  })
}

export const disableAll = function (elementType, elementName, options) {
  it('should `disableAll` set disabled to "true"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            1: 'value',
            2: 'value2',
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let checkbox1 = findAll(elWrapper, `input[type="${options.fieldType}"]`).at(0)
    let checkbox2 = findAll(elWrapper, `input[type="${options.fieldType}"]`).at(1)

    el.disableAll()

    await nextTick()

    expect(el.isDisabled).toBe(true)
    expect(checkbox1.attributes('disabled') !== undefined).toBe(true)
    expect(checkbox2.attributes('disabled') !== undefined).toBe(true)

    // destroy() // teardown
  })
}

export const enableAll = function (elementType, elementName, options) {
  it('should `enableAll` set disabled to "false"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true,
          items: {
            1: 'value',
            2: 'value2',
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let checkbox1 = findAll(elWrapper, `input[type="${options.fieldType}"]`).at(0)
    let checkbox2 = findAll(elWrapper, `input[type="${options.fieldType}"]`).at(1)

    el.enableAll()

    await nextTick()

    expect(el.isDisabled).toBe(false)
    expect(checkbox1.attributes('disabled') !== undefined).toBe(false)
    expect(checkbox2.attributes('disabled') !== undefined).toBe(false)

    // destroy() // teardown
  })
}