import { createForm } from 'test-helpers'

export const sorting = function (elementType, elementName, options) {
  it('should false by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.sorting).toBe(false)

    // destroy() // teardown
  })
}