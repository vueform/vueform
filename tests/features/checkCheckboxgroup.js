import { createForm } from 'test-helpers'
import { check, uncheck } from './check'

export {
  check,
  uncheck,
}

export const checkAll = function (elementType, elementName, options) {
  it('should `checkAll`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            1: 'value',
            2: 'value2',
            3: 'value3'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.checkAll()
    
    expect(el.value).toStrictEqual(['1','2','3'])
  })
}

export const uncheckAll = function (elementType, elementName, options) {
  it('should `uncheckAll`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            '1': 'value',
            '2': 'value2',
            '3': 'value3'
          },
          default: [1,2,3],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual(['1','2','3'])

    el.uncheckAll()

    expect(el.value).toStrictEqual([])
  })
}