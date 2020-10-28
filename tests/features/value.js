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

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(el.vm.currentValue).not.toBe(undefined)
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

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(el.vm.previousValue).not.toBe(undefined)
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

    let el = findAllComponents(form, { name: elementName }).at(0)

    el.vm.currentValue = 'value'

    expect(el.vm.value).toBe(el.vm.currentValue)
  })

  it('should set currentValue as previousValue and passed over value as current value when setting `value`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = findAllComponents(form, { name: elementName }).at(0)

    el.vm.currentValue = 'value'

    el.vm.value = 'value2'

    expect(el.vm.previousValue).toBe('value')
    expect(el.vm.currentValue).toBe('value2')
    expect(el.vm.value).toBe('value2')
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

    let el = findAllComponents(form, { name: elementName }).at(0)

    await nextTick()

    testValue(el, options.fieldType, 'value')
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

    let el = findAllComponents(form, { name: elementName }).at(0)

    el.vm.value = 'value'

    expect(el.vm.model).toBe(el.vm.value)
  })

  it('should return set value when setting `model`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = findAllComponents(form, { name: elementName }).at(0)

    el.vm.model = 'value'

    expect(el.vm.value).toBe(el.vm.model)
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

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.model).toBe('value')

      setValue(el, options.fieldType, 'value2')
      
      expect(el.vm.model).toBe('value2')
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