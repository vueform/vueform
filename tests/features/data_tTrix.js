import { createForm, testPropDefault } from 'test-helpers'
import flushPromises from 'flush-promises'
import { nextTick } from 'composition-api'
import { update as baseUpdate, clear as baseClear, reset as baseReset, } from './data_multilingual'

export { data, filtered, changed, updated, onCreated } from './data_multilingual'

export const load = function (elementType, elementName, options) {
  it('should `load` data', async () => {
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
      fr: el.nullValue.fr
    })

    await nextTick()

    expect(el.input.trix$.value).toBe('<div>value-en</div>')

    el.load({
      en: 'value-en-2',
      fr: 'value-fr',
    })

    expect(el.value).toStrictEqual({
      en: 'value-en-2',
      fr: 'value-fr'
    })

    await nextTick()

    expect(el.input.trix$.value).toBe('<div>value-en-2</div>')
  })

  it('should set value to null if provided value is "undefined" on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value'
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(undefined)

    expect(el.value).toStrictEqual(el.nullValue)
  })

  it('should format data if "formatLoad" is set on `load`', async () => {
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
  })
}

export const update = function (elementType, elementName, options) {
  baseUpdate(elementType, elementName, options)

  it('should update trix value on `update`', async () => {
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

    el.update('value')

    await nextTick()

    expect(el.input.trix$.value).toBe('<div>value</div>')
  })
}

export const reset = function (elementType, elementName, options) {
  baseUpdate(elementType, elementName, options)

  it('should update trix value on `reset`', async () => {
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

    el.update('value')

    await nextTick()

    expect(el.input.trix$.value).toBe('<div>value</div>')

    el.reset()

    await nextTick()

    expect(el.input.trix$.value).toBe('')
  })
}

export const clear = function (elementType, elementName, options) {
  baseUpdate(elementType, elementName, options)

  it('should update trix value on `clear`', async () => {
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
          default: 'value',
        }
      }
    })

    let el = form.vm.el$('el')

    el.clear()

    await nextTick()

    expect(el.input.trix$.value).toBe('')
  })
}