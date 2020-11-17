import { createForm, testComputedOption, findAll, findAllComponents } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

export const disables = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'disables', [], ['1','2'])

  it('should transform integer `disables` to strings', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disables: [1, 2],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.disables).toStrictEqual(['1', '2'])
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
    expect(el.disables).toStrictEqual(['1'])

    el.disable(['2', 3])
    expect(el.disables).toStrictEqual(['1', '2', '3'])
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
    expect(el.disables).toStrictEqual(['2', '3'])

    el.enable(['2', 3])
    expect(el.disables).toStrictEqual([])
  })
}

export const disabled = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'disabled', false, true)

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
  })
}

export const disableAll = function (elementType, elementName, options) {
  it('should `disableAll` set disabled to "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.disableAll()

    expect(el.disabled).toBe(true)
  })
}

export const enableAll = function (elementType, elementName, options) {
  it('should `enableAll` set disabled to "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.enableAll()

    expect(el.disabled).toBe(false)
  })
}