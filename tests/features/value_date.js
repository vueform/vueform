import { createForm } from 'test-helpers'

export { currentValue, previousValue } from './value'

export const model = function (elementType, elementName, options) {
  it('should return currentValue for `model`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = moment(options.value, options.valueFormat).toDate()

    expect(el.model).toStrictEqual(el.currentValue)
  })

  it('should set currentValue as previousValue and passed over value as current value when setting `model`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = null
    el.model = moment(options.value, options.valueFormat).toDate()

    expect(el.currentValue).toStrictEqual(moment(options.value, options.valueFormat).toDate())
    expect(el.previousValue).toStrictEqual(null)
  })

  it('should throw error when setting `model` with not a Date instance', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(() => {
      el.model = options.value
    }).toThrowError()
  })
}

export const value = function (elementType, elementName, options) {
  it('should format `value` according to valueFormat', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat2
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = moment(options.value, options.valueFormat).toDate()

    expect(el.value).toStrictEqual(options.value2)
  })

  it('should return Date instance for `value` if valueFormat is false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: false,
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = moment(options.value, options.valueFormat).toDate()

    expect(el.value).toStrictEqual(moment(options.value, options.valueFormat).toDate())
  })

  it('should set `value` to model', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat2
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = moment(options.value, options.valueFormat).toDate()

    expect(el.model).toStrictEqual(moment(options.value, options.valueFormat).toDate())

    el.value = options.value2

    expect(el.model).toStrictEqual(moment(options.value2, options.valueFormat2).toDate())
  })

  it('should throw error when setting `value` with string date that does not have valueFormat', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat2
        }
      }
    })

    let el = form.vm.el$('el')

    expect(() => {
      el.value = options.value
    }).toThrowError()

    expect(() => {
      el.value = options.value2
    }).not.toThrowError()
  })
}