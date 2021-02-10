import { createForm, testPropDefault } from 'test-helpers'

export { displayFormat, valueFormat, loadFormat, disables, min, max } from './options_date'

export const mode = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'mode', 'multiple', 'range')
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
      mode: el.mode,
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
      mode: el.mode,
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