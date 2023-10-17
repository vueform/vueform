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
  
  it('should return default if value is undefined', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: '2012-06-22'
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.value).toEqual('2012-06-22')
  })
  
  it('should return value on index in list', () => {
    
    let form = createForm({
      schema: {
        parent: {
          type: 'list',
          initial: 2,
          element: { type: elementType }
        }
      }
    })
    
    let date = form.vm.el$('parent.0')
    expect(date.value).toEqual(null)
    
    date.value = '2012-06-22'
    
    expect(date.value).toEqual('2012-06-22')
    
    date.value = '2012-06-23'
    
    expect(date.value).toEqual('2012-06-23')
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