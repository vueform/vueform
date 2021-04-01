import { createForm, findAllComponents, testPropDefault, testAttribute, destroy } from 'test-helpers'

export const check = function (elementType, elementName, options) {
  it('should set value to "trueValue" on `check`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trueValue: 'on',
          falseValue: 'off',
        }
      }
    })

    let el = form.vm.el$('el')

    el.check()

    expect(el.value).toBe('on')
  })
}


export const uncheck = function (elementType, elementName, options) {
  it('should set value to "trueValue" on `check`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trueValue: 'on',
          falseValue: 'off',
          default: 'on',
        }
      }
    })

    let el = form.vm.el$('el')

    el.uncheck()

    expect(el.value).toBe('off')
  })
}

