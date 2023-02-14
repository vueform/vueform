import {createForm} from 'test-helpers'

export {descriptionId, infoId, errorId, labelId} from './a11y'

export const aria = function(elementType, elementName, options) {
  it('should check aria-*', () => {
    let form = createForm({
      schema: {
        a: {
          type: elementType,
          id: 'elemId'
        }
      }
    })
    
    let a = form.vm.el$('a')
    
    expect(a.aria['aria-describedby']).toBe(`elemId__description elemId__info`)
    expect(a.aria['aria-invalid']).toBe(false)
    expect(a.aria['aria-errormessage']).toBe('elemId__error')
    expect(a.aria['aria-disabled']).toBe(false)
    expect(a.aria['aria-busy']).toBe(false)
  })
}
