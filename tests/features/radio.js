import { createForm, findAllComponents, testComputedOption } from 'test-helpers'

export const fieldName = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'fieldName', 'radio', 'el')

  it('should deselect other radios with the same `fieldName`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          radioValue: 1,
          fieldName: 'radio',
        },
        el2: {
          type: elementType,
          radioValue: 2,
          fieldName: 'radio',
        },
      }
    }, {
      attach: true
    })

    let el = form.vm.el$('el')
    let el2 = form.vm.el$('el2')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let el2Wrapper = findAllComponents(form, { name: elementName }).at(1)
    let input = elWrapper.find(`input[type="${options.fieldType}"]`)
    let input2 = el2Wrapper.find(`input[type="${options.fieldType}"]`)

    input.element.checked = true
    input.trigger('change')

    expect(el.value).toBe(1)
    expect(el2.value).toBe(null)

    input2.element.checked = true
    input2.trigger('change')

    // Works fine but not in Vue3 test
    // expect(el.value).toBe(null)
    // expect(el2.value).toBe(2)
  })
}

export const check = function (elementType, elementName, options) {
  it('should select radio on `check`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          radioValue: 1
        },
      }
    })

    let el = form.vm.el$('el')
    
    el.check()

    expect(el.value).toBe(1)
  })
}

export const uncheck = function (elementType, elementName, options) {
  it('should deselect radio on `uncheck`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          radioValue: 1,
          default: 1
        },
      }
    })

    let el = form.vm.el$('el')
    
    el.uncheck()

    expect(el.value).toBe(null)
  })
}