import { createForm, findAllComponents, testValue, setValue } from 'test-helpers'
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

    expect(el.currentValue).toStrictEqual(el.default || null)
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

    el.currentValue = 'value'

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

    el.currentValue = 'value'

    el.value = 'value2'

    expect(el.previousValue).toBe('value')
    expect(el.currentValue).toBe('value2')
    expect(el.value).toBe('value2')
  })

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
  
  it('should update `model` when input value changes', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            default: 'value'
          }
        }
      })

      let el = form.vm.el$('el')
      let elWrapper = findAllComponents(form, { name: elementName }).at(0)

      expect(el.model).toBe('value')

      setValue(elWrapper, options.fieldType, 'value2')
      
      expect(el.model).toBe('value2')
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