import flushPromises from 'flush-promises'
import { createForm, findAllComponents, findAll } from 'test-helpers'

const value = function(options) {
  return options.value !== undefined ? options.value : 'value'
}

const value2 = function(options) {
  return options.value2 || 'value2'
}

export const handleChange = function (elementType, elementName, options) {
  it('should dirt the element if input value is different than the current', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            1: 'value',
            2: 'value2'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let input = findAll(elWrapper, `input[type="${options.fieldType}"]`).at(0)

    expect(el.dirty).toBe(false)

    input.element.checked = true
    input.trigger('change')

    expect(el.dirty).toBe(true)
  })

  it('should trigger "change" event if value changed', () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          items: {
            1: 'value',
            2: 'value2'
          }
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let input = findAll(elWrapper, `input[type="${options.fieldType}"]`).at(0)

    input.element.checked = true
    input.trigger('change')

    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should trigger validation on if validateOn contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          rules: 'required',
          items: {
            1: 'value',
            2: 'value2'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let input = findAll(elWrapper, `input[type="${options.fieldType}"]`).at(0)

    input.element.checked = true
    input.trigger('change')

    await flushPromises()

    expect(el.validated).toBe(false)

    input.element.checked = false

    form.vm.validateOn = 'submit|change'

    input.element.checked = true
    input.trigger('change')

    await flushPromises()

    expect(el.validated).toBe(true)
  })
}