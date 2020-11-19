import { createForm } from 'test-helpers'
import { currentValue, previousValue } from './value'

export {
  currentValue,
  previousValue,
}

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

    el.currentValue = moment('2020-12-30').toDate()

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

    el.currentValue = moment('2020-12-29').toDate()
    el.model = moment('2020-12-30').toDate()

    expect(el.currentValue).toStrictEqual(moment('2020-12-30').toDate())
    expect(el.previousValue).toStrictEqual(moment('2020-12-29').toDate())
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
      el.model = '2020-12-30'
    }).toThrowError()
  })
}

export const value = function (elementType, elementName, options) {
  it('should format `value` according to valueFormat', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'DD-MM-YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = moment('2020-12-30').toDate()

    expect(el.value).toStrictEqual('30-12-2020')
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

    el.value = moment('2020-12-30').toDate()

    expect(el.value).toStrictEqual(moment('2020-12-30').toDate())
  })

  it('should set `value` to model', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = moment('2020-12-30').toDate()

    expect(el.model).toStrictEqual(moment('2020-12-30').toDate())
  })

  it('should throw error when setting `value` with not a Date instance', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(() => {
      el.value = '2020-12-30'
    }).toThrowError()
  })
}