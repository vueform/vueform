import { createForm } from 'test-helpers'

export const labelId = function(elementType, elementName, options) {
  it('should return `labelId`', () => {
    let form = createForm({
      schema: {
        a: {
          type: elementType,
          id: 'elemId'
        }
      }
    })
    
    let a = form.vm.el$('a')
    
    expect(a.labelId).toBe('elemId__label')
  })
}

export const descriptionId = function(elementType, elementName, options) {
  it('should return `descriptionId`', () => {
    let form = createForm({
      schema: {
        a: {
          type: elementType,
          id: 'elemId'
        }
      }
    })
    
    let a = form.vm.el$('a')
    
    expect(a.descriptionId).toBe('elemId__description')
  })
}

export const infoId = function(elementType, elementName, options) {
  it('should return `infoId`', () => {
    let form = createForm({
      schema: {
        a: {
          type: elementType,
          id: 'elemId'
        }
      }
    })
    
    let a = form.vm.el$('a')
    
    expect(a.infoId).toBe('elemId__info')
  })
}

export const errorId = function(elementType, elementName, options) {
  it('should return `errorId`', () => {
    let form = createForm({
      schema: {
        a: {
          type: elementType,
          id: 'elemId'
        }
      }
    })
    
    let a = form.vm.el$('a')
    
    expect(a.errorId).toBe('elemId__error')
  })
}

export const aria = function(elementType, elementName, options) {
  it('should return `aria-*`', () => {
    let form = createForm({
      schema: {
        a: {
          type: elementType,
          id: 'elemId'
        }
      }
    })
    
    let a = form.vm.el$('a')
    
    expect(a.aria['aria-labelledby']).toBe('elemId__label')
    expect(a.aria['aria-describedby']).toBe(`elemId__description elemId__info`)
    expect(a.aria['aria-invalid']).toBe(false)
    expect(a.aria['aria-errormessage']).toBe('elemId__error')
    expect(a.aria['aria-disabled']).toBeFalsy()
    expect(a.aria['aria-busy']).toBe(false)
  })
}