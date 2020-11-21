import flushPromises from 'flush-promises'
import { createForm, findAllComponents, findAll } from 'test-helpers'

export const handleChange = function (elementType, elementName, options) {
  it('should dirt the element if input value is different than the current', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: options.items
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let input = findAll(elWrapper, `select`).at(0)

    expect(el.dirty).toBe(false)

    input.setValue(options.value)

    expect(el.dirty).toBe(true)
  })

  it('should not dirt the element if input value is not different than the current', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: options.items,
          default: options.value,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let input = findAll(elWrapper, `select`).at(0)

    expect(el.dirty).toBe(false)

    input.setValue(options.value)

    expect(el.dirty).toBe(false)
  })

  it('should trigger "change" event if value changed', () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          items: options.items,
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let input = findAll(elWrapper, `select`).at(0)

    input.setValue(options.value)

    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should not trigger "change" event if value has not changed', () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          items: options.items,
          default: options.value,
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let input = findAll(elWrapper, `select`).at(0)

    input.setValue(options.value)

    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should trigger validation on if validateOn contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          rules: 'required',
          items: options.items
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let input = findAll(elWrapper, `select`).at(0)

    input.setValue(options.value)

    await flushPromises()

    expect(el.validated).toBe(false)

    form.vm.validateOn = 'submit|change'

    input.setValue(options.value2)

    await flushPromises()

    expect(el.validated).toBe(true)
  })

  it('should trigger `handleChange` on native change', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          native: true,
          items: options.items,
          onChange: onChangeMock,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, 'select').at(0)

    select.setValue(options.value)

    expect(onChangeMock).toHaveBeenCalledWith(el.currentValue, el.previousValue)
  })

  it('should trigger `handleChange` on non native change', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      validateOn: 'submit',
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

    el.input.select(el.getOption(options.value))

    expect(onChangeMock).toHaveBeenCalledWith(el.currentValue, el.previousValue)
  })
}