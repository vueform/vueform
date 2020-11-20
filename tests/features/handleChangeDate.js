import flushPromises from 'flush-promises'
import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'composition-api'

export const handleChange = function (elementType, elementName, options) {
  it('should set model on change', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    let date = moment(options.value, options.valueFormat).toDate()
    
    el.input.update([date])

    expect(el.model).toStrictEqual(date)
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

    let date = moment(options.value, options.valueFormat).toDate()
    
    el.input.update([date])

    expect(el.dirty).toBe(true)
  })

  it('should not dirt the element if input value is not different than the current', () => {
    let date = moment(options.value, options.valueFormat).toDate()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: date,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dirty).toBe(false)
    
    el.input.update([date])

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

    let date = moment(options.value, options.valueFormat).toDate()
    
    el.input.update([date])

    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should not trigger "change" event if value has not changed', () => {
    let onChangeMock = jest.fn()
    let date = moment(options.value, options.valueFormat).toDate()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          default: date,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.input.update([date])

    expect(onChangeMock).not.toHaveBeenCalled()
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
    
    el.input.update([moment(options.value, options.valueFormat).toDate()])

    await flushPromises()

    expect(el.validated).toBe(false)

    form.vm.validateOn = 'submit|change'

    el.input.update([moment(options.value2, options.valueFormat2).toDate()])

    await flushPromises()

    expect(el.validated).toBe(true)
  })
}