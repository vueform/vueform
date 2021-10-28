import flushPromises from 'flush-promises'
import { createForm, listSchema, listChild } from 'test-helpers'
import { nextTick } from 'vue'
import asyncForEach from './../../src/utils/asyncForEach'
import Validator from './../../src/services/validation/validator'

export {
  dirt, messageBag, Validators, watchers, dirty, validated, invalid,
  errors, error, validate, validateValidators, validateChildren, clean, resetValidators,
} from './validation_list'

import { pending as basePending } from './validation'
import { busy as baseBusy } from './validation_checkbox'

jest.useFakeTimers()

const asyncRule = class extends Validator {
  get isAsync() {
    return true
  }

  async check() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 1)
    })
  }
}

export const pending = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  basePending(elementType, elementName, options)

  it('should be `pending` if any of the children is pending', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: [asyncRule] },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      el.validate()

      await flushPromises()

      expect(el.pending).toBe(true)

      await flushPromises()
      jest.advanceTimersByTime(1)
      await nextTick()
      await nextTick()
      
      expect(el.pending).toBe(false)
    })

    // destroy() // teardown
  })
}

export const busy = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseBusy(elementType, elementName, options)

  it('should have `busy` "true" if any of the children is pending and "false" when async validation finished', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: [asyncRule] },
      }))

      let el = form.vm.el$('el')

      el.validate()

      await flushPromises()

      expect(el.busy).toBe(true)

      await flushPromises()
      jest.advanceTimersByTime(1)
      await nextTick()
      await nextTick()
      
      expect(el.busy).toBe(false)
    })
    
    // destroy(form) // teardown
  })
}