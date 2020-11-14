import flushPromises from 'flush-promises'
import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'

export const handleInput = function (elementType, elementName, options) {
  it('should set model on input', () => {
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
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    elWrapper.get('input').setValue('value')

    expect(el.model).toBe('value')
  })

  it('should dirt the element if input value is different than the current', () => {
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
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(el.dirty).toBe(false)

    elWrapper.get('input').setValue('value')

    expect(el.dirty).toBe(true)
  })

  it('should not dirt the element on if input value is not different than the current', () => {
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
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(el.dirty).toBe(false)

    elWrapper.get('input').setValue('value')

    expect(el.dirty).toBe(false)
  })

  it('should trigger "change" event if value changed', () => {
    let onChangeMock = jest.fn()

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
          onChange: onChangeMock
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    elWrapper.get('input').setValue('value')

    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should not trigger "change" event if value not changed', () => {
    let onChangeMock = jest.fn()

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
          onChange: onChangeMock,
          default: 'value',
        }
      }
    })
    
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    elWrapper.get('input').setValue('value')

    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should trigger validation on if validateOn contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
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
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    elWrapper.get('input').setValue('value')

    await flushPromises()

    expect(el.state.validated.en).toBe(false)

    form.vm.validateOn = 'submit|change'

    elWrapper.get('input').setValue('value2')

    await flushPromises()

    expect(el.state.validated.en).toBe(true)
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