import flushPromises from 'flush-promises'
import { createForm, destroy } from 'test-helpers'

export { dirty, validated, pending, debouncing, busy,
         errors, error, validate, resetValidators, dirt, clean, messageBag, Validators, watchers } from './validation'

export const invalid = function (elementType, elementName, options) {
  it('should have `invalid` "true" if any of the validators is invalid', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required|email'
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.editor$ = { value: 'value' }
    el.input.handleChange()

    el.validate()

    await flushPromises()

    expect(el.invalid).toBe(true)
  })
  
  it('should have `invalid` "false" if none of the validators is invalid', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required'
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.input.editor$ = { value: 'value' }
    el.input.handleChange()

    el.validate()

    await flushPromises()

    expect(el.invalid).toBe(false)

    // destroy() // teardown
  })
}