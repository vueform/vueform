import { createForm, findAllComponents, testValue, setValue } from 'test-helpers'
import { nextTick } from 'vue'

export const value = function (elementType, elementName) {
  it('should `value` equal to "radioValue" if model is "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.model = true

    expect(el.value).toBe(el.radioValue)
  })

  it('should `value` equal to "nullValue" if model is "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.model = false

    expect(el.value).toBe(el.nullValue)
  })

  it('should setting the `value` to "radioValue" should set the model to "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = el.radioValue

    expect(el.model).toBe(true)
  })

  it('should setting the `value` to "nullValue" should set the model to "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = el.nullValue

    expect(el.model).toBe(false)
  })

  it('should setting the `value` to anything else than "radioValue" or "falseValue" should set the model to "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = false
    expect(el.model).toBe(false)

    el.value = 'not-null'
    expect(el.model).toBe(false)
  })
}

export const model = function (elementType, elementName) {
  it('should `model` return "true" if "currentValue" equals to "radioValue"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = el.radioValue

    expect(el.model).toBe(true)
  })

  it('should `model` return "false" if "currentValue" does not equal to "radioValue"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = el.nullValue
    expect(el.model).toBe(false)

    el.currentValue = false
    expect(el.model).toBe(false)

    el.currentValue = 'not-null'
    expect(el.model).toBe(false)
  })

  it('should set "currentValue" & "previousValue" when setting `model`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.model = true

    expect(el.currentValue).toBe(el.radioValue)
    expect(el.previousValue).toBe(el.nullValue)
    
    el.model = false

    expect(el.currentValue).toBe(el.nullValue)
    expect(el.previousValue).toBe(el.radioValue)
  })
}