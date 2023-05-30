import { createForm, destroy } from 'test-helpers'

export const defaultValue = function (elementType, elementName, options) {
  
  it('should return localized default value', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: {
            en: 'default-en',
            de: 'default-de',
          }
        }
      },
      locale: 'de'
    })
    
    let el = form.vm.el$('el')

    expect(el.defaultValue).toBe('default-de')
    
    // destroy(form) // teardown
  })
}