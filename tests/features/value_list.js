import { createForm, listSchema, listChild, listChildValue } from 'test-helpers'
import { nextTick } from 'vue'
import asyncForEach from './../../src/utils/asyncForEach'

export { currentValue, previousValue } from './value'

export const value = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should have `value` equal to an array of child values', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let values = [
        listChildValue(options, i, 0),
        listChildValue(options, i, 1),
        listChildValue(options, i, 2),
      ]

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            auto: false,
            default: values
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      expect(el.value).toStrictEqual(values)
    })
  })

  it('should throw an error when trying to directly set `value`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            auto: false,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      expect(() => {
        el.value = []
      }).toThrowError()
    })
  })
}