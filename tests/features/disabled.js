import { createForm, testPropDefault, testAttribute, destroy } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

export const localDisabled = function (elementType, elementName, options) {

  it('should toggle with enable/disable', () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true,
        }
      }
    })

    let el = form.vm.el$('el')

    el.enable()

    expect(el.localDisabled).toBe(false)

    el.disable()

    expect(el.localDisabled).toBe(true)

    // destroy(form) // teardown
  })
}


export const isDisabled = function (elementType, elementName, options) {
  it('should not be isDisabled by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isDisabled).toBe(false)

    // destroy(form) // teardown
  })

  it('should be isDisabled if disabled is true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isDisabled).toBe(true)

    // destroy() // teardown
  })
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

    expect(el.isDisabled).toBe(false)

    el.disable()

    expect(el.isDisabled).toBe(true)

    // destroy() // teardown
  })
}

export const enable = function (elementType, elementName, options) {
  it('should `enable` element', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isDisabled).toBe(false)

    el.disable()
    el.enable()

    expect(el.isDisabled).toBe(false)

    // destroy(form) // teardown
  })

  it('should `enable` element even if disabled is true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isDisabled).toBe(true)

    el.enable()

    expect(el.isDisabled).toBe(false)

    // destroy() // teardown
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

    // destroy() // teardown
  })
}