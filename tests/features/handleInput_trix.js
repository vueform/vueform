import flushPromises from 'flush-promises'
import { createForm, findAllComponents } from 'test-helpers'
import { watch } from 'composition-api'

export const handleInput = function (elementType, elementName, options) {
  it('should set model on input', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.input.trix$ = { value: 'value' }
    el.input.handleChange()

    expect(el.model).toBe('value')
  })

  it('should dirt the element if input value is different than the current', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dirty).toBe(false)
    
    el.input.trix$ = { value: 'value2' }
    el.input.handleChange()

    expect(el.dirty).toBe(true)
  })

  it('should not dirt the element on if input value is not different than the current', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dirty).toBe(false)
    
    el.input.trix$ = { value: 'value' }
    el.input.handleChange()

    expect(el.dirty).toBe(false)
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

    el.input.trix$ = { value: 'value' }
    el.input.handleChange()

    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should not trigger "change" event if value not changed', () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          default: 'value',
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.trix$ = { value: 'value' }
    el.input.handleChange()

    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should trigger validation on if validateOn contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      languages: {
        en: {
          label: 'English',
          code: 'en',
        }
      },
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.trix$ = { value: 'value' }
    el.input.handleChange()

    await flushPromises()

    expect(el.validated).toBe(false)

    form.vm.validateOn = 'submit|change'

    el.input.trix$ = { value: 'value2' }
    el.input.handleChange()

    await flushPromises()

    expect(el.validated).toBe(true)
  })
}