import { createForm } from 'test-helpers'

export const isImageType = function (elementType, elementName, options) {
  it('should return `isImageType` false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isImageType).toBe(false)
  })
}

export const isFileType = function (elementType, elementName, options) {
  it('should return `isFileType` false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isFileType).toBe(false)
  })
}

export const isArrayType = function (elementType, elementName, options) {
  it('should return `isArrayType` false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isArrayType).toBe(false)
  })
}