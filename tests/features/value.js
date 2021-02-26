import { createForm, findAllComponents, testValue, createInlineForm } from 'test-helpers'
import { nextTick } from 'vue'

export const value = function (elementType, elementName, options) {
  it('should be nullValue by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual(el.nullValue)
  })

  it('should be default if defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual(options.default)
  })

  it('should fill in v-model with default field value if v-model is an empty object', async () => {
    let { form, app } = createInlineForm({
      model: {},
      props: {
        schema: {
          el: {
            type: elementType,
            default: options.default
          }
        },
      }
    })

    let el = form.vm.el$('el')

    await nextTick()

    // Default
    expect(el.value).toStrictEqual(options.default)
    expect(app.vm.data.el).toStrictEqual(options.default)
  })

  it('should be equal to v-model value if v-model has value for element', async () => {
    let { form, app } = createInlineForm({
      model: {
        el: options.default,
      },
      props: {
        schema: {
          el: {
            type: elementType,
            default: options.value
          }
        },
      }
    })

    let el = form.vm.el$('el')

    // Default 
    expect(el.value).toStrictEqual(options.default)

    // Setting element value
    el.value = options.value
    await nextTick()
    expect(app.vm.data.el).toStrictEqual(options.value)
    expect(el.value).toStrictEqual(options.value)

    // Setting v-model value
    app.vm.data.el = options.value2
    await nextTick()
    expect(el.value).toStrictEqual(options.value2)
  })

  it('should fill form data with default field value if v-model is not defined and data is empty', async () => {
    let { form, app } = createInlineForm({
      props: {
        schema: {
          el: {
            type: elementType,
            default: options.default
          }
        },
      }
    })

    let el = form.vm.el$('el')

    await nextTick()

    // Default
    expect(el.value).toStrictEqual(options.default)
    expect(form.vm.data.el).toStrictEqual(options.default)
  })
}

export const watchers = function (elementType, elementName, options) {
  it('should not trigger change by default', async () => {
    let formChangeMock = jest.fn()
    let elChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: elChangeMock,
        }
      }
    })

    form.vm.on('change', formChangeMock)

    await nextTick()

    // expect(formChangeMock).not.toHaveBeenCalled()
    expect(elChangeMock).not.toHaveBeenCalled()
  })
}

export const rendering = function (elementType, elementName, options) {
  it('should render `value` attribute', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value'
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    await nextTick()

    testValue(elWrapper, options.fieldType, 'value')
  })
}