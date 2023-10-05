import { createForm, destroy } from 'test-helpers'

export { hasDate, hasTime } from './options_date'

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
      mode: el.mode,
      dateFormat: el.displayDateFormat,
      minDate: el.minDate,
      maxDate: el.maxDate,
      disable: el.disabledDates,
      clickOpens: !el.disabled && !el.readonly,
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
      mode: el.mode,
      dateFormat: el.displayDateFormat,
      minDate: el.minDate,
      maxDate: el.maxDate,
      disable: el.disabledDates,
      clickOpens: !el.disabled && !el.readonly,
      custom: 'option'
    })
  })
  
  it('should bind `fieldOptions` to Datepicker', () => {
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