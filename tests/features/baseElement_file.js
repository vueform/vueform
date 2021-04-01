import { createForm, destroy } from 'test-helpers'

export { isStatic, isArrayType } from './baseElement'

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
  it('should return `isImageType` true if image', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          image: true
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