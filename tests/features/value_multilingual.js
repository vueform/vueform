import { createForm } from 'test-helpers'

export { currentValue, previousValue } from './value'

export const value = function (elementType, elementName) {
  it('should `value` equal to an object of language values', () => {
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
          default: {
            en: 'value-en',
            fr: 'value-fr',
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual({
      en: 'value-en',
      fr: 'value-fr',
    })
  })

  it('should update "previousValue" and "currentValue" when `value` is being set', () => {
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

    el.update('value-en')

    expect(el.previousValue).toStrictEqual({
      en: null,
      fr: null
    })

    expect(el.currentValue).toStrictEqual({
      en: 'value-en',
      fr: null
    })
  })
}

export const model = function (elementType, elementName, options) {
  it('should return current language value for `model`', () => {
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
          default: {
            en: 'value-en',
            fr: 'value-fr',
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.model).toBe('value-en')

    form.vm.setLanguage('fr')

    expect(el.model).toBe('value-fr')
  })

  it('should set current language value when setting `model`', () => {
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

    el.model = 'value-en'

    expect(el.value).toStrictEqual({
      en: 'value-en',
      fr: null
    })

    form.vm.setLanguage('fr')

    el.model = 'value-fr'

    expect(el.value).toStrictEqual({
      en: 'value-en',
      fr: 'value-fr'
    })
  })
}