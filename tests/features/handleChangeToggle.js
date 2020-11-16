import flushPromises from 'flush-promises'
import { createForm, findAllComponents } from 'test-helpers'

export const handleChange = function (elementType, elementName, options) {
  it('should set model on change', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.input.toggle()

    expect(el.model).toBe(true)
  })

  it('should dirt the element if input value is different than the current', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dirty).toBe(false)

    el.input.toggle()

    expect(el.dirty).toBe(true)
  })

  it('should trigger "change" event if value changed', () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.toggle()

    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should trigger validation on if validateOn contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.toggle()

    await flushPromises()

    expect(el.validated).toBe(false)

    el.input.toggle()

    form.vm.validateOn = 'submit|change'

    el.input.toggle()

    await flushPromises()

    expect(el.validated).toBe(true)
  })
}