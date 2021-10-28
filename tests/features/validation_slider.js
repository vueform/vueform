import flushPromises from 'flush-promises'
import { createForm, destroy } from 'test-helpers'

import { validate as baseValidate } from './validation'

export { 
  dirty, validated, invalid, pending, errors, error, resetValidators,
  dirt, clean, messageBag, Validators, watchers
} from './validation'

export { 
  busy
} from './validation_checkbox'

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

    // destroy() // teardown
  })
}