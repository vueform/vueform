import { createForm, destroy } from 'test-helpers'

export const Templates = function (elementType, elementName, options) {
  // Computed Props
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