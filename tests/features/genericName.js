import { createForm, destroy } from 'test-helpers'

export const genericName = function (elementType, elementName, options) {
  it('should return `fieldName` when fieldname is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          fieldName: 'field-name'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.genericName).toBe('field-name')
    
    // destroy(form) // teardown
  })

  it('should return label when label is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Element label'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.genericName).toBe('Element label')
    
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

    expect(el.genericName).toBe('Element floating')
    
    // destroy(form) // teardown
  })

  it('should return placeholder when placeholder is defined and condig.floatPlaceholders=true', () => {
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

    expect(el.genericName).toBe('Element placeholder')
    
    // destroy(form) // teardown
  })

  it('should return generic name when placeholder is defined and condig.floatPlaceholders=false', () => {
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