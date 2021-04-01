import { createForm, destroy } from 'test-helpers'

export const fieldId = function (elementType, elementName, options) {
  it('should be equal to name when id is not defined`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.fieldId).toBe('el')
    
    // destroy(form) // teardown
  })

  it('should be equal to id when defined`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          id: 'not-el'
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.fieldId).toBe('not-el')

    // destroy() // teardown
  })
}