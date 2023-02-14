import {createForm} from 'test-helpers'

export {descriptionId, infoId, errorId, labelId} from './a11y'

export const aria = function(elementType, elementName, options) {
  it('should return `aria-*` with label if `text` is set', () => {
    let form = createForm({
      schema: {
        a: {
          type: elementType,
          id: 'elemId',
          text: 'Checkbox has text'
        }
      }
    })
    
    let a = form.vm.el$('a')
    
    expect(a.aria['aria-label']).toBe(`Checkbox has text`)
    expect(a.aria['aria-labelledby']).toBeFalsy()
    expect(a.aria['aria-describedby']).toBe(`elemId__label elemId__description elemId__info`)
    expect(a.aria['aria-invalid']).toBe(false)
    expect(a.aria['aria-errormessage']).toBe('elemId__error')
    expect(a.aria['aria-disabled']).toBe(false)
    expect(a.aria['aria-busy']).toBe(false)
  })
  
  it('should return `aria-*` with labelledby if `text` is unset', () => {
    let form = createForm({
      schema: {
        a: {
          type: elementType,
          id: 'elemId',
        }
      }
    })
    
    let a = form.vm.el$('a')
    
    expect(a.aria['aria-label']).toBeFalsy()
    expect(a.aria['aria-labelledby']).toBe('elemId__label')
    expect(a.aria['aria-describedby']).toBe(`elemId__label elemId__description elemId__info`)
    expect(a.aria['aria-invalid']).toBe(false)
    expect(a.aria['aria-errormessage']).toBe('elemId__error')
    expect(a.aria['aria-disabled']).toBe(false)
    expect(a.aria['aria-busy']).toBe(false)
  })
}