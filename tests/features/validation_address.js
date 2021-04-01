import flushPromises from 'flush-promises'

export { dirty, validated, invalid, validate, clean, resetValidators, messageBag } from './validation_object'

export const errors = function (elementType, elementName, options) {
  it('should collect `errors` from available children', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          required: true,
        }
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()

    expect(el.errors.length).toBe(_.filter(el.children$, child$ => !!child$.rules && child$.available).length)

    // destroy() // teardown
  })
}