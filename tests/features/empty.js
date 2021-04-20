import { createForm, destroy } from 'test-helpers'

const value = function(options) {
  return options.value !== undefined ? options.value : 'value'
}

const value2 = function(options) {
  return options.value2 !== undefined ? options.value2 : 'value2'
}

export const empty = function (elementType, elementName, options) {
  it('should have `empty` true when value is empty', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 0,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.empty).toBe(true)
    
    // destroy(form) // teardown
  })

  it('should have `empty` false when value is not empty', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
          default: value(options),
          auto: false, // for files
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.empty).toBe(false)

    // destroy() // teardown
  })
}