import { createForm, destroy } from 'test-helpers'

export const isReadonly = function (elementType, elementName, options) {
  it('should be true when readonly=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          readonly: true,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.isReadonly).toBe(true)

    // destroy() // teardown
  })

  it('should be false when readonly=false', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          readonly: false,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.isReadonly).toBe(false)

    // destroy() // teardown
  })

  it('should be false when readonly is not defined', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.isReadonly).toBe(false)

    // destroy() // teardown
  })
}