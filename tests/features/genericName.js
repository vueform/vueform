import { createForm, destroy } from 'test-helpers'

export const genericName = function (elementType, elementName, options) {
  
  it('should return `fieldName` when fieldName is defined', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          fieldName: 'someFieldName'
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.genericName).toBe('someFieldName')

    // destroy(form) // teardown
  })
  
  it('should return localized `fieldName` when fieldName has multiple languages', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          fieldName: {
            en: 'field-name',
            de: 'field-name-de'
          }
        }
      },
      locale: 'de'
    })
    
    let el = form.vm.el$('el')
    
    expect(el.genericName).toBe('field-name-de')

    // destroy(form) // teardown
  })
  
  it('should return `Label` when label is defined', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Element label'
        }
      }
    })

    let el = form.vm.el$('el')

    if (el.label !== undefined) {
      expect(el.genericName).toBe('Element label')
      expect(el.genericName).toBe(el.Label)
    }
    
    // destroy(form) // teardown
  })
  
  it('should return localized `Label` when label has multiple languages', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: {
            en: 'label-en',
            de: 'label-de',
          }
        }
      },
      locale: 'de'
    })

    let el = form.vm.el$('el')

    if (el.label !== undefined) {
      expect(el.genericName).toBe('label-de')
      expect(el.genericName).toBe(el.Label)
    }
    
    // destroy(form) // teardown
  })

  it('should return floating when floating is defined', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          floating: 'Element floating'
        }
      }
    })

    let el = form.vm.el$('el')

    if (el.floating !== undefined) {
      expect(el.genericName).toBe('Element floating')
    }
    
    // destroy(form) // teardown
  })
  
  it('should return localized floating when floating has multiple languages', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          floating: {
            en: 'floating-en',
            de: 'floating-de',
          }
        }
      },
      locale: 'de'
    })

    let el = form.vm.el$('el')

    if (el.floating !== undefined) {
      expect(el.genericName).toBe('floating-de')
    }
    
    // destroy(form) // teardown
  })

  it('should return placeholder when placeholder is defined and config.floatPlaceholders=true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          placeholder: 'Element placeholder'
        }
      }
    }, {
      config: {
        floatPlaceholders: true
      }
    })

    let el = form.vm.el$('el')
    
    if (el.placeholder !== undefined) {
      expect(el.genericName).toBe('Element placeholder')
    }
    
    // destroy(form) // teardown
  })

  it('should return localized placeholder when placeholder is defined and config.floatPlaceholders=true and has multiple languages', () => {
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
    }, {
      config: {
        floatPlaceholders: true
      }
    })

    let el = form.vm.el$('el')
    
    if (el.placeholder !== undefined) {
      expect(el.genericName).toBe('placeholder-de')
    }
    
    // destroy(form) // teardown
  })

  it('should return generic name when placeholder is defined and config.floatPlaceholders=false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          placeholder: 'Element placeholder'
        }
      }
    }, {
      config: {
        floatPlaceholders: false
      }
    })

    let el = form.vm.el$('el')

    expect(el.genericName).toBe('El')
    
    // destroy(form) // teardown
  })

  it('should return genericName when no floating no label nor fieldName is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.genericName).toBe('El')

    // destroy() // teardown
  })
}