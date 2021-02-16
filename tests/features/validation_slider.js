import flushPromises from 'flush-promises'
import { createForm } from 'test-helpers'

import { validate as baseValidate } from './validation'

export { 
  dirty, validated, invalid, pending, debouncing, 
  busy, errors, error, resetValidators, dirt, clean, messageBag, Validators } from './validation'

export const validate = function (elementType, elementName, options) {
  baseValidate(elementType, elementName, options)

  it('should `validate` multiple values', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [5, 10],
          rules: 'numeric|max:20'
        }
      }
    })

    let el = form.vm.el$('el')

    el.validate()
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update([15, 25])
    await flushPromises()
    expect(el.invalid).toBe(true)
  })
}