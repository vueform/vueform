import { nextTick } from 'vue'
import { createForm, findAllComponents, testPropDefault, destroy } from 'test-helpers'
import flushPromises from 'flush-promises'

export const default_ = function(elementType, elementName) {
  it('should set `default` for each language if it is a primitive', async () => {
    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
          default: 'value'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual({
      en: 'value',
      fr: 'value',
    })
    
    // destroy(form) // teardown
  })

  it('should set `default` if it is an object', async () => {
    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
          default: {
            en: 'value-en',
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual({
      en: 'value-en',
      fr: el.nullValue.fr,
    })

    // destroy() // teardown
  })
}