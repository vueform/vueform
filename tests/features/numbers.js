import { createForm, destroy } from 'test-helpers'

export const nullValue = function (elementType, elementName, options) {
  it('should write tests force numbers', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    // let el = form.vm.el$('el')

    // expect(el.nullValue).toBe(null)

    // destroy() // teardown
  })
}