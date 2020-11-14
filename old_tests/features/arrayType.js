import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'

export default function (elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
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
}