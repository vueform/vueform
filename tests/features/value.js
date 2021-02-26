import { createForm, findAllComponents, testValue, createInlineForm } from 'test-helpers'
import { nextTick } from 'vue'

export const value = function (elementType, elementName, options) {
  it('should be nullValue by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual(el.nullValue)
  })
}