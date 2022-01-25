import { createForm, destroy } from 'test-helpers'

export const templates = function (elementType, elementName, options) {
  // Computed Porps
  it('should return theme templates for `templates` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.Templates).toStrictEqual(el.theme.templates)
    
    // destroy(form) // teardown
  })
}