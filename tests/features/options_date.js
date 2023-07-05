import { createForm, testPropDefault, destroy } from 'test-helpers'
import { nextTick } from 'vue'
import moment from 'moment'

const value = (options) => {
  return _.isArray(options.value) ? options.value[0] : options.value
}

const value2 = (options) => {
  return _.isArray(options.value2) ? options.value2[0] : options.value2
}

export const disabledDates = function (elementType, elementName, options) {
  it('should have "[]" as `disables` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.disabledDates).toStrictEqual([])
    
    // destroy(form) // teardown
  })

  it('should set `disabledDates` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
          disables: [value(options), moment(value2(options), options.valueFormat2).toDate()],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.disabledDates).toStrictEqual([
      moment(value(options), options.valueFormat).toDate(),
      moment(value2(options), options.valueFormat2).toDate(),
    ])

    // destroy() // teardown
  })
}

export const minDate = function (elementType, elementName, options) {
  it('should have "null" as `minDate` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.minDate).toBe(null)
    
    // destroy(form) // teardown
  })

  it('should set `minDate` from schema', () => {
    let dateObj = moment(value(options), options.valueFormat).toDate()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
          min: dateObj,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.minDate).toStrictEqual(dateObj)
    
    // destroy(form) // teardown
  })

  it('should set `minDate` as a string from schema', () => {
    let date = value(options)

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
          min: date,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.minDate).toStrictEqual(moment(date, options.valueFormat).toDate())

    // destroy() // teardown
  })
}

export const maxDate = function (elementType, elementName, options) {
  it('should have "null" as `max` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.maxDate).toBe(null)
    
    // destroy(form) // teardown
  })

  it('should set `maxDate` from schema', () => {
    let dateObj = moment(value(options), options.valueFormat).toDate()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
          max: dateObj,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.maxDate).toStrictEqual(dateObj)
    
    // destroy(form) // teardown
  })

  it('should set `maxDate` as a string from schema', () => {
    let date = value(options)

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
          max: date,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.maxDate).toStrictEqual(moment(date, options.valueFormat).toDate())

    // destroy() // teardown
  })
}

export const fieldOptions = function (elementType, elementName, options) {
  it('should have default `fieldOptions`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.fieldOptions).toStrictEqual({
      dateFormat: el.displayDateFormat,
      minDate: el.minDate,
      maxDate: el.maxDate,
      disable: el.disables,
      clickOpens: !el.isDisabled && !el.readonly,
      time_24hr: el.hour24,
      enableTime: el.time,
      enableSeconds: el.seconds,
      noCalendar: !el.date,
    })
  })
  
  it('should extend `fieldOptions` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          extendOptions: {
            custom: 'option'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.fieldOptions).toStrictEqual({
      dateFormat: el.displayDateFormat,
      minDate: el.minDate,
      maxDate: el.maxDate,
      disable: el.disables,
      clickOpens: !el.isDisabled && !el.readonly,
      time_24hr: el.hour24,
      enableTime: el.time,
      enableSeconds: el.seconds,
      noCalendar: !el.date,
      custom: 'option'
    })
  })
  
  it('should bind `options` to Datepicker', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Datepicker = findAllComponents(elWrapper, { name: 'DatepickerWrapper' }).at(0)
    
    expect(Datepicker.props('options')).toStrictEqual(el.fieldOptions)

    // destroy() // teardown
  })
}

export const hasDate = function (elementType, elementName, options) {
  
  it('should have return true by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.hasDate).toBe(true)
    
    // destroy(form) // teardown
  })
}

export const hasTime = function (elementType, elementName, options) {
  
  it('should have return false by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.hasTime).toBe(false)
    
    // destroy(form) // teardown
  })
}