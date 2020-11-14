import { createForm } from 'test-helpers'
import { path } from './path'

export {
  path,
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
  })
}