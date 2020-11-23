import { createForm } from 'test-helpers'
import flushPromises from 'flush-promises'
export { submit, formatData, formatLoad, data, filtered, changed, clear, reset } from './data'

export const load = function(elementType, elementName) {
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
  })

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

export const update = function(elementType, elementName) {
  it('should `update` current language with a primitive value', async () => {
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

    el.update('value')

    expect(el.value).toStrictEqual({
      en: 'value',
      fr: null,
    })
  })

  it('should `update` all languages when an object is provided as value', async () => {
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

    el.update({
      en: 'value-en',
    })

    expect(el.value).toStrictEqual({
      en: 'value-en',
      fr: null,
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

export const updated = function (elementType, elementName) {
  it('should dirt element on `updated` if value changed', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = 'value'
    el.previousValue = null

    el.updated()

    expect(el.dirty).toBe(true)
  })

  it('should not dirt element on `updated` if value has not changed', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = 'value'
    el.previousValue = 'value'

    el.updated()

    expect(el.dirty).toBe(false)
  })

  it('should trigger "change" event on `updated` if value changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = 'value'
    el.previousValue = null

    el.updated()

    expect(onChangeMock).toHaveBeenCalledWith('value', null)
  })

  it('should not trigger "change" event on `updated` if value has not changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = 'value'
    el.previousValue = 'value'

    el.updated()

    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should validate element on `updated` if "validateOn" contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit|change',
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
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    el.updated()

    await flushPromises()

    expect(el.state.validated.en).toBe(true)
    expect(el.state.validated.fr).toBe(false)
  })

  it('should not validate element on `updated` if "validateOn" does not contain "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
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
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    el.updated()

    await flushPromises()

    expect(el.state.validated.en).toBe(false)
    expect(el.state.validated.fr).toBe(false)
  })
}