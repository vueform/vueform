import { createForm, destroy } from 'test-helpers'

export const nullValue = function (elementType, elementName, options) {
  it('should have min as `nullValue`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          min: 3
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.nullValue).toBe(3)
    
    // destroy(form) // teardown
  })

  it('should have min array as `nullValue` when default is an array', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [3, 5]
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.nullValue).toStrictEqual([0, 0])

    // destroy() // teardown
  })
}