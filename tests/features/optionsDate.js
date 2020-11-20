import { createForm, testComputedOption } from 'test-helpers'

export const displayFormat = function (elementType, elementName, options) {
  let form = createForm({
    schema: {
      el: {
        type: elementType
      }
    }
  })

  testComputedOption(it, elementType, 'displayFormat', form.vm.__('laraform.elements.date.displayFormat'), 'DD-MM-YYYY')
}

export const valueFormat = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'valueFormat', 'YYYY-MM-DD', 'DD-MM-YYYY')
}

export const loadFormat = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'loadFormat', 'YYYY-MM-DD', 'DD-MM-YYYY')
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
          valueFormat: 'YYYY-MM-DD',
          disables: ['2020-12-30', moment('2020-12-15').toDate()],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.disables).toStrictEqual([
      moment('2020-12-30').toDate(),
      moment('2020-12-15').toDate(),
    ])
  })

  it('should set `disables` to schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
        }
      }
    })

    let el = form.vm.el$('el')

    el.disables = ['2020-12-30', moment('2020-12-15').toDate()]

    expect(el.schema.disables).toStrictEqual([
      '2020-12-30',
      '2020-12-15',
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
    let dateObj = moment('2020-12-30').toDate()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
          min: dateObj,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.min).toStrictEqual(dateObj)
  })

  it('should set `min` as a string from schema', () => {
    let date = '2020-12-30'

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
          min: date,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.min).toStrictEqual(moment(date).toDate())
  })

  it('should set `min` to schema', () => {
    let date = '2020-12-30'

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
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
    let dateObj = moment('2020-12-30').toDate()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
          max: dateObj,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.max).toStrictEqual(dateObj)
  })

  it('should set `max` as a string from schema', () => {
    let date = '2020-12-30'

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
          max: date,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.max).toStrictEqual(moment(date).toDate())
  })

  it('should set `max` to schema', () => {
    let date = '2020-12-30'

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
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