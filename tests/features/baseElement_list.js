import { createForm } from 'test-helpers'

export { isImageType, isFileType } from './baseElement'

export const isArrayType = function (elementType, elementName, options) {
  it('should return `isArrayType` true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isArrayType).toBe(true)
  })
}