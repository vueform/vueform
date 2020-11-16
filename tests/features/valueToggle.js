import { createForm, findAllComponents, testValue, setValue } from 'test-helpers'
import { nextTick } from 'vue'

export const value = function (elementType, elementName) {
  it('should `value` equal to "trueValue" if model is "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trueValue: 'on',
          falseValue: 'off',
        }
      }
    })

    let el = form.vm.el$('el')

    el.model = true

    expect(el.value).toBe('on')
  })

  it('should `value` equal to "falseValue" if model is "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trueValue: 'on',
          falseValue: 'off',
        }
      }
    })

    let el = form.vm.el$('el')

    el.model = false

    expect(el.value).toBe('off')
  })

  it('should setting the `value` to "trueValue" should set the model to "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trueValue: 'on',
          falseValue: 'off',
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = 'on'

    expect(el.model).toBe(true)
  })

  it('should setting the `value` to "falseValue" should set the model to "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trueValue: 'on',
          falseValue: 'off',
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = 'off'

    expect(el.model).toBe(false)
  })

  it('should setting the `value` to anything else than "trueValue" or "falseValue" should set the model to "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trueValue: 'on',
          falseValue: 'off',
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = 'not-on'

    expect(el.model).toBe(false)
  })
}
export const model = function (elementType, elementName) {
  it('should `model` return "true" if "currentValue" equals to "trueValue"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trueValue: 'on',
          falseValue: 'off',
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = 'on'

    expect(el.model).toBe(true)
  })

  it('should `model` return "false" if "currentValue" does not equal to "trueValue"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trueValue: 'on',
          falseValue: 'off',
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = 'off'

    expect(el.model).toBe(false)

    el.currentValue = 'not-on'

    expect(el.model).toBe(false)
  })

  it('should set "currentValue" & "previousValue" when setting `model`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trueValue: 'on',
          falseValue: 'off',
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.model = true

    expect(el.currentValue).toBe('on')
    expect(el.previousValue).toBe('off')
    
    el.model = false

    expect(el.currentValue).toBe('off')
    expect(el.previousValue).toBe('on')
  })
}