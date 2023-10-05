import { createForm, destroy } from 'test-helpers'
export { path } from './path'


export const dataPath = function (elementType, elementName) {
  
  it('should have `dataPath` equal to null if parent is not provided', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.dataPath).toBe(null)
  })
  
  it('should have `dataPath` equal to parents dataPath if provided', () => {
    
    let form = createForm({
      schema: {
        parent: {
          type: 'object',
          schema: {
            el: {
              type: elementType,
            }
          }
        }
      }
    })
    
    let el = form.vm.el$('parent.el')
    
    expect(el.dataPath).toBe('parent')
  })
}

export const flat = function (elementType, elementName) {
  
  it('should have `flat` equal to "true"', () => {
  
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.flat).toBe(true)

    // destroy() // teardown
  })
}