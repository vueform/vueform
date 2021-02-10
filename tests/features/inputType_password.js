import { createForm, findAllComponents, testPropDefault, testAttribute } from 'test-helpers'

export const inputType = function (elementType, elementName, options) {
  it('should have `inputType` "password" which cannot be changed', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.inputType).toBe('password')

    const originalConsoleWarn = console.warn
    const originalConsoleError = console.error

    console.warn = () => {}
    console.error = () => {}

    el.inputType = 'text'

    console.warn = originalConsoleWarn
    console.error = originalConsoleError

    expect(el.inputType).toBe('password')
  })

  it('should render input with given `inputType`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    testAttribute(elWrapper, options.fieldType, 'type', 'password')
  })
}