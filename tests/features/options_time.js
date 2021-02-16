import { createForm, testPropDefault } from 'test-helpers'

export { disables, min, max } from './options_date'

export const displayFormat = function (elementType, elementName, options) {
  let form = createForm({
    schema: {
      el: {
        type: elementType
      }
    }
  })

  testPropDefault(it, elementType, 'displayFormat', form.vm.__('laraform.elements.time.displayFormat'), 'mm:HH')

  it('should have `displayFormat` with seconds by default if seconds is "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          seconds: true,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.displayFormat).toBe(form.vm.__('laraform.elements.time.secondsDisplayFormat'))
  })
}

export const valueFormat = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'valueFormat', 'HH:mm', 'mm:HH')

  it('should have `valueFormat` with seconds by default if seconds is "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          seconds: true,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.valueFormat).toBe('HH:mm:ss')
  })
}

export const loadFormat = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'loadFormat', 'HH:mm', 'HH:mm')

  it('should have `loadFormat` with seconds by default if seconds is "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          seconds: true,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.loadFormat).toBe('HH:mm:ss')
  })
}

export const seconds = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'seconds', false, true)
}

export const hour24 = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'hour24', true, false)
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
      time_24hr: el.hour24,
      enableTime: true,
      enableSeconds: el.seconds,
      noCalendar: true,
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
      time_24hr: el.hour24,
      enableTime: true,
      enableSeconds: el.seconds,
      noCalendar: true,
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
    let Flatpickr = findAllComponents(elWrapper, { name: 'FlatpickrWrapper' }).at(0)
    
    expect(Flatpickr.props('options')).toStrictEqual(el.options)
  })
}