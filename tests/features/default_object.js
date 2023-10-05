import { createForm } from 'test-helpers'

export const defaultValue = function (elementType, elementName, options) {
  
  it('should be equal to defaultValue if default is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.defaultValue).toStrictEqual(options.default)
  })
  
  it('should be equal to form default if form default is defined', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default,
        }
      },
      default: {
        el: options.default2,
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.defaultValue).toStrictEqual(options.default2)
  })
  
  it('should be equal to nullValue if default is not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.defaultValue).toStrictEqual(el.nullValue)
  })
}