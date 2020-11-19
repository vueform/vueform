import { createForm } from 'test-helpers'

export const empty = function (elementType, elementName, options) {
  it('should have `empty` true when value is empty', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.empty).toBe(true)

    el.update('')

    expect(el.empty).toBe(true)

    el.update(null)

    expect(el.empty).toBe(true)
  })

  it('should have `empty` false when value is not empty', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.value || 'value'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.empty).toBe(false)
  })
}