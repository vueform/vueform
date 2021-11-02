export { dirty, validated, invalid, pending, errors, error, validate, resetValidators, dirt, clean, messageBag, Validators, watchers, } from './validation'

import flushPromises from 'flush-promises'

export const busy = function (elementType, elementName, options) {
  it('should have `busy` "true" if any of the validators is pending and "false" when async validation finished', async () => {
    let axiosRequestMock = jest.fn(() => Promise.resolve({ data: {} }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'unique:param'
        }
      }
    })

    let el = form.vm.el$('el')

    el.$vueform.services.axios.request = axiosRequestMock

    el.validate()

    expect(el.busy).toBe(true)

    await flushPromises()

    expect(el.busy).toBe(false)
    
    // destroy(form) // teardown
  })
}