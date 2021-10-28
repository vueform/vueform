import { createForm, destroy } from 'test-helpers'

export const empty = function(elementType, elementName) {
  it('should have `empty` "true" if current language\'s value is empty', async () => {
    let form = createForm({
      language: 'en',
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.empty).toBe(true)

    el.update({
      en: 'value'
    })
    
    expect(el.empty).toBe(false)

    // destroy() // teardown
  })
}