import { createForm } from 'test-helpers'

export const baseElement = function (elementType, elementName, options) {
  it('should return `genericName` when label is defined', () => {
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
  })

  it('should return `genericName` when placeholder is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          placeholder: 'Element placeholder'
        }
      }
    })

    let el = form.vm.el$('el')

    if (el.placeholder !== undefined) {
      expect(el.genericName).toBe('Element placeholder')
    }
  })

  it('should return `genericName` when no placeholder nor label is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.genericName).toBe('El')
  })
}