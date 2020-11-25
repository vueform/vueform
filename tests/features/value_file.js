import { createForm } from 'test-helpers'

export { currentValue, previousValue, model } from './value'

export const value = function (elementType, elementName, options) {
  it('should `value` return currentValue', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = options.value

    expect(el.value).toStrictEqual(el.currentValue)
  })

  it('should clone currentValue to previousValue and set currentValue when setting `value`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = options.value

    expect(el.previousValue).toStrictEqual(null)
    expect(el.currentValue).toStrictEqual(options.value)

    el.value = options.value2

    expect(el.previousValue).toStrictEqual(options.value)
    expect(el.currentValue).toStrictEqual(options.value2)

    el.value = options.value

    expect(el.previousValue).toStrictEqual(options.value2)
    expect(el.currentValue).toStrictEqual(options.value)
  })
}