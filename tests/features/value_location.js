import { createForm, findAllComponents, testValue, setValue, destroy } from 'test-helpers'
import { nextTick } from 'vue'
import { value as baseValue } from './value'

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
    
    await nextTick()

    expect(el.input.value).toBe('value')

    el.value = {}

    await nextTick()

    expect(el.input.value).toBe('')

    // destroy() // teardown
  })
}