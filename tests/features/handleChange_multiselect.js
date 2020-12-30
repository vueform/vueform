import flushPromises from 'flush-promises'
import { createForm, findAllComponents, findAll, setMultiselectValue } from 'test-helpers'
import { nextTick } from 'composition-api'

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

    expect(el.dirty).toBe(false)

    el.value = options.value
    el.handleChange()

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

    expect(el.dirty).toBe(false)

    el.value = options.value
    el.handleChange()

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

    let el = form.vm.el$('el')

    el.value = options.value
    el.handleChange()

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

    let el = form.vm.el$('el')

    el.value = options.value
    el.handleChange()

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
    
    el.value = options.value
    el.handleChange()

    await flushPromises()

    expect(el.validated).toBe(false)

    form.vm.validateOn = 'submit|change'

    el.value = options.value2
    el.handleChange()

    await flushPromises()

    expect(el.validated).toBe(true)
  })
}

export const rendering = function (elementType, elementName, options) {
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

    await nextTick()

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let input = findAll(elWrapper, 'select').at(0)

    setMultiselectValue(input, options.value)

    expect(onChangeMock).toHaveBeenCalledWith(el.currentValue, el.previousValue)
  })
}