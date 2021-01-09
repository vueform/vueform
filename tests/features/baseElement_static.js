import { createForm } from 'test-helpers'

export { isFileType, isImageType, isArrayType } from './baseElement'

export const isStatic = function (elementType, elementName, options) {
  it('should return `isStatic` true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isStatic).toBe(true)
  })
}