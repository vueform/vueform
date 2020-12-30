import flushPromises from 'flush-promises'
import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'composition-api'

const valueOptions = (value, el) => {
  return _.isArray(value) ? _.map(value, (v) => el.input.getOption(v)) : el.input.getOption(value)
}

export const handleInput = function (elementType, elementName, options) {
  it('should set model on input using non-native', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: options.items,
        }
      }
    })

    let el = form.vm.el$('el')
    
    valueOptions(options.value, el).forEach((option) => {
      el.input.select(option)
    })

    expect(el.model).toStrictEqual(options.value)
  })

  it('should dirt the element if input value is different than the current', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: options.items,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dirty).toStrictEqual(false)
    
    valueOptions(options.value, el).forEach((option) => {
      el.input.select(option)
    })

    expect(el.dirty).toStrictEqual(true)
  })

  it('should trigger "change" event if value changed', () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: options.items,
          onChange: onChangeMock,
        }
      }
    })

    let el = form.vm.el$('el')
    
    valueOptions(options.value, el).forEach((option) => {
      el.input.select(option)
    })

    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should trigger validation on if validateOn contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          native: false,
          items: options.items,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')
    
    valueOptions(options.value, el).forEach((option) => {
      el.input.select(option)
    })

    await flushPromises()

    expect(el.validated).toStrictEqual(false)

    form.vm.validateOn = 'submit|change'
    
    el.input.clear()

    await flushPromises()

    expect(el.validated).toStrictEqual(true)
  })
}