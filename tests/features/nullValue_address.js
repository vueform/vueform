import { createForm, destroy } from 'test-helpers'

export const nullValue = function (elementType, elementName, options) {
  it('should have "{addressFields}" as `nullValue`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.nullValue).toStrictEqual({
      address: null,
      address2: null,
      zip: null,
      city: null,
      state: null,
      country: null,
    })

    // destroy() // teardown
  })
}