import { createForm } from 'test-helpers'

export { value, model } from './value'

export const currentValue = function (elementType, elementName) {
  it('should have `currentValue`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 5,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.currentValue).toStrictEqual(5)
  })

  it('should have `currentValue` when range', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [5, 10],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.currentValue).toStrictEqual([5, 10])
  })
}

export const previousValue = function (elementType, elementName) {
  it('should have `previousValue`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 5,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.previousValue).toStrictEqual(0)
  })

  it('should have `previousValue` when range', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [5, 10],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.previousValue).toStrictEqual([0, 0])
  })
}