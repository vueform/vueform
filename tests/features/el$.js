import { createForm, destroy } from 'test-helpers'

export const el$ = function (elementType, elementName, options) {
  it('should inject `el$`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.el$).toStrictEqual(el)

    // destroy() // teardown
  })
}