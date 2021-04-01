import { createForm, destroy } from 'test-helpers'

export const form$ = function (elementType, elementName, options) {
  it('should inject `form$`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.form$).toStrictEqual(form.vm)

    // destroy() // teardown
  })
}