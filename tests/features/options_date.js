import { createForm, testPropDefault } from 'test-helpers'

const value = (options) => {
  return _.isArray(options.value) ? options.value[0] : options.value
}

const value2 = (options) => {
  return _.isArray(options.value2) ? options.value2[0] : options.value2
}

export const displayFormat = function (elementType, elementName, options) {
  let form = createForm({
    schema: {
      el: {
        type: elementType
      }
    }
  })

  testPropDefault(it, elementType, 'displayFormat', form.vm.__('laraform.elements.date.displayFormat'), 'DD-MM-YYYY')
}

export const valueFormat = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'valueFormat', 'YYYY-MM-DD', 'DD-MM-YYYY')
}

export const loadFormat = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'loadFormat', 'YYYY-MM-DD', 'DD-MM-YYYY')
}

export const disables = function (elementType, elementName, options) {
  it('should have "[]" as `disables` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.disables).toStrictEqual([])
  })

  it('should set `disables` from schema', () => {
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

    expect(el.disables).toStrictEqual([
      moment(value(options), options.valueFormat).toDate(),
      moment(value2(options), options.valueFormat2).toDate(),
    ])
  })

  it('should set `disables` to schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
        }
      }
    })

    let el = form.vm.el$('el')

    el.disables = [value(options), moment(value2(options), options.valueFormat2).toDate()]

    expect(el.schema.disables).toStrictEqual([
      value(options),
      moment(value2(options), options.valueFormat2).format(options.valueFormat),
    ])
  })
}

export const min = function (elementType, elementName, options) {
  it('should have "null" as `min` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.min).toBe(null)
  })

  it('should set `min` from schema', () => {
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

    expect(el.min).toStrictEqual(dateObj)
  })

  it('should set `min` as a string from schema', () => {
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

    expect(el.min).toStrictEqual(moment(date, options.valueFormat).toDate())
  })

  it('should set `min` to schema', () => {
    let date = value(options)

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
        }
      }
    })

    let el = form.vm.el$('el')

    el.min = date

    expect(el.schema.min).toBe(date)
  })
}

export const max = function (elementType, elementName, options) {
  it('should have "null" as `max` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.max).toBe(null)
  })

  it('should set `max` from schema', () => {
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

    expect(el.max).toStrictEqual(dateObj)
  })

  it('should set `max` as a string from schema', () => {
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

    expect(el.max).toStrictEqual(moment(date, options.valueFormat).toDate())
  })

  it('should set `max` to schema', () => {
    let date = value(options)

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
        }
      }
    })

    let el = form.vm.el$('el')

    el.max = date

    expect(el.schema.max).toBe(date)
  })
}

export const options = function (elementType, elementName, options) {
  it('should have default `options`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.options).toStrictEqual({ 
      dateFormat: el.displayFormat,
      minDate: el.min,
      maxDate: el.max,
      disable: el.disables,
      clickOpens: !el.disabled && !el.readonly,
    })
  })
  
  it('should extend `options` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          options: {
            custom: 'option'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.options).toStrictEqual({ 
      dateFormat: el.displayFormat,
      minDate: el.min,
      maxDate: el.max,
      disable: el.disables,
      clickOpens: !el.disabled && !el.readonly,
      custom: 'option'
    })
  })
  
  it('should set `options` to schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.options = {
      custom: 'option'
    }

    expect(el.schema.options).toStrictEqual({
      custom: 'option'
    })
  })
  
  it('should bind `options` to Flatpickr', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Flatpickr = findAllComponents(elWrapper, { name: 'Flatpickr' }).at(0)
    
    expect(Flatpickr.props('options')).toStrictEqual(el.options)
  })
}