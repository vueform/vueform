import { createForm, findAllComponents, testValue } from 'test-helpers'
import { nextTick } from 'vue'

export const currentValue = function (elementType, elementName) {
  it('should have `currentValue`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.currentValue).toStrictEqual(el.defaultValue || null)
  })
}

export const previousValue = function (elementType, elementName) {
  it('should have `previousValue`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.previousValue).toStrictEqual(el.nullValue || null)
  })
}

export const value = function (elementType, elementName, options) {
  it('should return currentValue for `value`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = options.value || 'value'

    expect(el.value).toBe(el.currentValue)
  })

  it('should set currentValue as previousValue and passed over value as current value when setting `value`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = options.value || 'value'

    el.value = options.value2 || 'value2'

    expect(el.previousValue).toStrictEqual(options.value || 'value')
    expect(el.currentValue).toStrictEqual(options.value2 || 'value2')
    expect(el.value).toStrictEqual(options.value2 || 'value2')
  })
}

export const model = function (elementType, elementName, options) {
  it('should return value for `model`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = 'value'

    expect(el.model).toBe(el.value)
  })

  it('should return set value when setting `model`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.model = 'value'

    expect(el.value).toBe(el.model)
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