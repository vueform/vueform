import { createForm, findAllComponents, testValue, setValue } from 'test-helpers'
import { nextTick } from 'vue'
import { value as baseValue } from './value'

export { previousValue, currentValue, model } from './value'

export const value = function (elementType, elementName, options) {
  baseValue(elementType, elementName, options)

  it('should set input value when `value` is set to displayKey value if exists', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = {
      [el.displayKey]: 'value'
    }

    expect(el.input.value).toBe('value')

    el.value = {}

    expect(el.input.value).toBe('')
  })
}