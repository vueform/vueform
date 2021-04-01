import { createForm, destroy } from 'test-helpers'

export const nullValue = function (elementType, elementName, options) {
  it('should have "{}" as `nullValue`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.nullValue).toStrictEqual({})

    // destroy() // teardown
  })
}