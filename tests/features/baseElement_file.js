import { createForm } from 'test-helpers'

export { isImageType, isArrayType } from './baseElement'

export const isFileType = function (elementType, elementName, options) {
  it('should return `isFileType` true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isFileType).toBe(true)
  })
}