import { createForm, destroy } from 'test-helpers'

export const Placeholder = function (elementType, elementName) {
  
  it('should work', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          placeholder: {
            en: 'placeholder-en',
            de: 'placeholder-de',
          }
        }
      },
      locale: 'de'
    })
    
    const el = form.vm.el$('el')
    
    expect(el.Placeholder).toBe('placeholder-de')
    
  })
}