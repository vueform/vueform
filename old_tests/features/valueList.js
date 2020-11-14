import { createForm, findAllComponents, testValue, setValue , replacePrototypeValue} from 'test-helpers'
import { nextTick } from 'vue'
import { currentValue, previousValue } from './value'
import asyncForEach from './../../src/utils/asyncForEach'

export {
  currentValue,
  previousValue,
}

export const value = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should have `value` equal to an array of child values', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let values = [
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 1),
        replacePrototypeValue(options.childValues[i], 2),
      ]

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
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

export default function (elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName, options)
    })
  }
}