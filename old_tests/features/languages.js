import flushPromises from 'flush-promises'
import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'

export const languages = function (elementType, elementName, options) {
  it('should return an array of language codes for `languages`', () => {
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

    expect(el.languages).toStrictEqual(['en', 'fr'])
  })

  it('should return current language for `language`', () => {
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

    expect(el.language).toBe('en')

    form.vm.setLanguage('fr')

    expect(el.language).toBe('fr')
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