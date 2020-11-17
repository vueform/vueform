import { createForm } from 'test-helpers'
import { currentValue, previousValue } from './value'

export {
  currentValue,
  previousValue,
}

export const value = function (elementType, elementName) {
  it('should `value` equal to "currentValue" with strings', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = [1,2,3]
    
    expect(el.value).toStrictEqual(['1', '2', '3'])
  })

  it('should update "previousValue" and "currentValue" with strings when `value` is being set', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = [1,2]
    el.value = [1,2,3]
    
    expect(el.currentValue).toStrictEqual(['1', '2', '3'])
    expect(el.previousValue).toStrictEqual(['1', '2'])
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

    el.value = [1,2,3]
    
    expect(el.model).toStrictEqual(el.value)
  })

  it('should set value when setting `model`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.model = [1,2,3]
    
    expect(el.value).toStrictEqual(['1','2','3'])
  })
}