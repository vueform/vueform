import { createForm, destroy } from 'test-helpers'

export const request = function (elementType, elementName, options) {
  
  it('should `request` be null by default', async () => {
  
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.request).toBe(null)

    // destroy() // teardown
  })
}

export const axios = function (elementType, elementName, options) {
  
  it('should `axios` be set on mounted', async () => {
  
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.axios).toStrictEqual(form.vm.$vueform.services.axios)

    // destroy() // teardown
  })
}

export const uploading = function (elementType, elementName, options) {
  
  it('should `uploading` be true if request is not null', async () => {
  
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.uploading).toBe(false)

    el.request = {}

    expect(el.uploading).toBe(true)

    // destroy() // teardown
  })
}