import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'

export const isArrayType = function (elementType, elementName, options) {
  it('should have `isArrayType` "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isArrayType).toBe(true)
  })
}