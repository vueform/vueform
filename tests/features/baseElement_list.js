import { createForm, destroy } from 'test-helpers'

export { isStatic, isImageType, isFileType, activate, deactivate } from './baseElement'

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

    // destroy(form) // teardown
  })
}