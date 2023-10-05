import { createForm, destroy } from 'test-helpers'

export { isStatic, isArrayType, activate, deactivate } from './baseElement'

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

    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const isImageType = function (elementType, elementName, options) {
  it('should return `isImageType` true if view is `image`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          view: 'image'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isImageType).toBe(true)

    // destroy(form) // teardown
  })

  it('should return `isImageType` true if view is `gallery`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          view: 'gallery'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isImageType).toBe(true)

    // destroy(form) // teardown
  })

  it('should return `isImageType` false if not image', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isImageType).toBe(false)

    // destroy(form) // teardown
  })
}