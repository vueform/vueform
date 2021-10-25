import { createForm, destroy } from 'test-helpers'
import moment from 'moment'

import { value as baseValue } from './value'

export const value = function (elementType, elementName, options) {
  baseValue(elementType, elementName, options)

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

    el.value = moment('2020-11-20').toDate()

    expect(el.value).toStrictEqual('20-11-2020')
    
    // destroy(form) // teardown
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

    el.value = moment('2020-11-20').toDate()

    expect(el.value).toStrictEqual(moment('2020-11-20').toDate())
    
    // destroy(form) // teardown
  })

  it('should throw error when setting `value` with string date that does not have valueFormat', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'DD-MM-YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(() => {
      el.value = '2020-11-20'
    }).toThrowError()

    expect(() => {
      el.value = '20-11-2020'
    }).not.toThrowError()

    // destroy() // teardown
  })
}

export const model = function (elementType, elementName, options) {
  it('should should be the Date object representation of value', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'DD-MM-YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = '20-11-2020'

    expect(el.model).toStrictEqual(moment('2020-11-20').toDate())

    // destroy() // teardown
  })
}