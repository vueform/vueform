import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'

export const empty = function(elementType, elementName) {
  it('should have `empty` "true" if current language\'s value is empty', async () => {
    let form = createForm({
      language: 'en',
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.empty).toBe(true)

    el.update({
      en: 'value'
    })
    
    expect(el.empty).toBe(false)
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