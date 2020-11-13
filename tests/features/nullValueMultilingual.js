import flushPromises from 'flush-promises'
import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'

export const nullValue = function (elementType, elementName, options) {
  it('should `nullValue` have "null" for each languages', () => {
    let form = createForm({
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
    
    expect(el.nullValue).toStrictEqual({
      en: null,
      fr: null,
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