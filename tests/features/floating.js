import { createForm, destroy } from 'test-helpers'

export const hasFloating = function (elementType, elementName, options) {
  it('should return true if has floating', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          floating: 'Floating'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasFloating).toBe(true)
    
    // destroy(form) // teardown
  })

  it('should return false if has no floating & config.floatPlaceholder=false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    }, {
      config: {
        floatPlaceholder: false,
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasFloating).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should return true if has no floating and has placeholder & config.floatPlaceholder=true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          placeholder: 'Placeholder'
        }
      }
    }, {
      config: {
        floatPlaceholder: true,
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasFloating).toBe(true)
    
    // destroy(form) // teardown
  })
}