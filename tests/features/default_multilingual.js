import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'

export const default_ = function(elementType, elementName) {
  it('should set `default` for each language if it is a primitive', async () => {
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
          default: 'value'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual({
      en: 'value',
      fr: 'value',
    })
  })

  it('should set `default` if it is an object', async () => {
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
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual({
      en: 'value-en',
      fr: el.nullValue.fr,
    })
  })
}