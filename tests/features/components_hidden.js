import { createForm, destroy } from 'test-helpers'

export const components = function (elementType, elementName, options) {
  // Computed Porps
  it('should return theme components for `components` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.components).toStrictEqual(el.theme.components)
    
    // destroy(form) // teardown
  })
}