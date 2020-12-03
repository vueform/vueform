import { createForm, testComputedOption, testAttribute } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

export const disabled = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'disabled', false, true)
}

export const disable = function (elementType, elementName, options) {
  it('should `disable` element', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.disabled).toBe(false)

    el.disable()

    expect(el.disabled).toBe(true)
  })
}

export const enable = function (elementType, elementName, options) {
  it('should `enable` element', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.disabled).toBe(true)

    el.enable()

    expect(el.disabled).toBe(false)
  })
}

export const rendering = function (elementType, elementName, options) {
  if (options.fieldType === undefined) {
    return
  }
  
  it('should disable input when `disabled`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    testAttribute(elWrapper, options.fieldType, 'disabled', ['disabled', '', true])
  })
  
  it('should not disable input when not `disabled`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: false
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    testAttribute(elWrapper, options.fieldType, 'disabled', [undefined, false])
  })
}