import { createForm, destroym  } from 'test-helpers'
import flushPromises from 'flush-promises'
export { data, requestData, clear, reset } from './data'

export const load = function(elementType, elementName) {
  it('should throw an error if provided value is not object on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(() => {
      el.load('value')
    }).toThrowError()    
    
    // destroy(form) // teardown
  })

  it('should `load` data', async () => {
    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
          default: 'value',
        }
      }
    })

    let el = form.vm.el$('el')

    el.load({
      en: 'value-en',
    })

    expect(el.value).toStrictEqual({
      en: 'value-en',
      fr: null
    })

    el.load({
      en: 'value-en',
      fr: 'value-fr',
    })

    expect(el.value).toStrictEqual({
      en: 'value-en',
      fr: 'value-fr'
    })    
    
    // destroy(form) // teardown
  })

  it('should format data if "formatLoad" is set on `load`', async () => {
    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
          default: 'value',
          formatLoad(value) {
            return {
              en: `${value.en}-formatted`,
              fr: `${value.fr}-formatted`,
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load({
      en: 'value-en',
      fr: 'value-fr',
    }, true)

    expect(el.value).toStrictEqual({
      en: 'value-en-formatted',
      fr: 'value-fr-formatted',
    })

    // destroy() // teardown
  })
}

export const update = function(elementType, elementName) {
  it('should `update` current language with a primitive value', async () => {
    let form = createForm({
      language: 'en',
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('value')

    expect(el.value).toStrictEqual({
      en: 'value',
      fr: el.nullValue.fr,
    })    
    
    // destroy(form) // teardown
  })

  it('should `update` all languages when an object is provided as value', async () => {
    let form = createForm({
      language: 'en',
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update({
      en: 'value-en',
    })

    expect(el.value).toStrictEqual({
      en: 'value-en',
      fr: el.nullValue.fr,
    })

    el.update({
      en: 'value-en',
      fr: 'value-fr',
    })

    expect(el.value).toStrictEqual({
      en: 'value-en',
      fr: 'value-fr',
    })
  })
}
