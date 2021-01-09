import { createForm } from 'test-helpers'

export { isStatic, isFileType, isArrayType } from './baseElement_file'

export const isImageType = function (elementType, elementName, options) {
  it('should return `isImageType` true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isImageType).toBe(true)
  })
}