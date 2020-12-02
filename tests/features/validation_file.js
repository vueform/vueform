
import { busy as baseBusy } from './validation'
import { createForm } from 'test-helpers'
import { validate as baseValidate } from './validation'
import flushPromises from 'flush-promises'

export { messageBag, Validators, rules, messages, dirty, validated, invalid, pending,
         debouncing, errors, error, displayError, dirt, clean, resetValidators, } from './validation'

export const busy = function (elementType, elementName, options) {
  baseBusy(elementType, elementName, options)

  it('should have `busy` "true" when uploading and "false" when async validation finished', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.request = {}

    expect(el.busy).toBe(true)
    
    el.request = null

    expect(el.busy).toBe(false)
  })

  it('should have `busy` "true" when removing', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.removing = true

    expect(el.busy).toBe(true)
    
    el.removing = false

    expect(el.busy).toBe(false)
  })
}

export const validate = function (elementType, elementName, options) {
  baseValidate(elementType, elementName, options)

  it('should `validate`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required'
        }
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()

    expect(el.validated).toBe(true)
  })

  it('should not `validate` if form validation is turned off', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required'
        }
      }
    })

    let el = form.vm.el$('el')

    form.vm.validation = false

    el.validate()

    await flushPromises()

    expect(el.validated).toBe(false)
  })

  it('should `validate` restricted rules if the value is a File object', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required|min:30'
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(new File([''], 'filename'))

    el.validate()

    await flushPromises()

    expect(el.errors.length).toBe(1)
  })

  it('should not `validate` restricted rules if the value is not a File object', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required|min:30'
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('filename.jpg')

    el.validate()

    await flushPromises()

    expect(el.errors.length).toBe(0)
  })
}