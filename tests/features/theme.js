import { createForm, destroy } from 'test-helpers'

export const theme = function (elementType, elementName, options) {
  it('should inject `theme`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.theme).toStrictEqual(form.vm.extendedTheme)

    // destroy() // teardown
  })
}