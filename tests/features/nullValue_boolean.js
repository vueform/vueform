import { createForm, destroy } from 'test-helpers'

export const nullValue = function (elementType, elementName, options) {
  it('should have "falseValue" as `nullValue`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          falseValue: 'off'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.nullValue).toBe(el.falseValue)

    // destroy() // teardown
  })
}