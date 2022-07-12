import { testPropDefault, createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const defaultValue = function (elementType, elementName, options) {
  it('should be equal to defaultValue if default is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default,
          auto: false, // for files
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual(options.default)
    
    // destroy(form) // teardown
  })

  it('should be equal to form default if form default is defined', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default,
          auto: false, // for files
        }
      },
      // Group default will not have a key for group element
      default: {
        el: options.default2,
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual(options.default2)
    
    // destroy(form) // teardown
  })

  it('should be equal to nullValue if default is not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false, // for files
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual(el.nullValue)

    // destroy() // teardown
  })
}