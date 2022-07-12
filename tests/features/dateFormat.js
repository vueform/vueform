import { testPropDefault, createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

const testDefinition = (elementType, inputFormat, requestDataFormat) => {
  it('should equal to displayFormat if defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          [inputFormat]: 'DD-MM-YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[requestDataFormat]).toBe('DD-MM-YYYY')
  })
}

const testDefaults = (elementType, inputFormat, requestDataFormat) => {
  it('should equal to displayFormat if defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          [inputFormat]: 'DD-MM-YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[requestDataFormat]).toBe('DD-MM-YYYY')
    
    // destroy(form) // teardown
  })

  it('should be equal to `datetimeSeconds24` when displayFormat=null, date=true, time=true, seconds=true, hour24=true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          date: true,
          time: true,
          seconds: true,
          hour24: true
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[requestDataFormat]).toBe(el.__('vueform.dateFormats.datetimeSeconds24'))
    
    // destroy(form) // teardown
  })

  it('should be equal to `datetimeSeconds12` when displayFormat=null, date=true, time=true, seconds=true, hour24=false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          date: true,
          time: true,
          seconds: true,
          hour24: false
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[requestDataFormat]).toBe(el.__('vueform.dateFormats.datetimeSeconds12'))
    
    // destroy(form) // teardown
  })

  it('should be equal to `datetime24` when displayFormat=null, date=true, time=true, seconds=false, hour24=true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          date: true,
          time: true,
          seconds: false,
          hour24: true
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[requestDataFormat]).toBe(el.__('vueform.dateFormats.datetime24'))
    
    // destroy(form) // teardown
  })

  it('should be equal to `datetime12` when displayFormat=null, date=true, time=true, seconds=false, hour24=false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          date: true,
          time: true,
          seconds: false,
          hour24: false
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[requestDataFormat]).toBe(el.__('vueform.dateFormats.datetime12'))
    
    // destroy(form) // teardown
  })

  it('should be equal to `timeSeconds24` when displayFormat=null, date=false, time=true, seconds=true, hour24=true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          date: false,
          time: true,
          seconds: true,
          hour24: true
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[requestDataFormat]).toBe(el.__('vueform.dateFormats.timeSeconds24'))
    
    // destroy(form) // teardown
  })

  it('should be equal to `timeSeconds12` when displayFormat=null, date=false, time=true, seconds=true, hour24=false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          date: false,
          time: true,
          seconds: true,
          hour24: false
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[requestDataFormat]).toBe(el.__('vueform.dateFormats.timeSeconds12'))
    
    // destroy(form) // teardown
  })

  it('should be equal to `time24` when displayFormat=null, date=false, time=true, seconds=false, hour24=true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          date: false,
          time: true,
          seconds: false,
          hour24: true
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[requestDataFormat]).toBe(el.__('vueform.dateFormats.time24'))
    
    // destroy(form) // teardown
  })

  it('should be equal to `time12` when displayFormat=null, date=false, time=true, seconds=false, hour24=false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          date: false,
          time: true,
          seconds: false,
          hour24: false
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[requestDataFormat]).toBe(el.__('vueform.dateFormats.time12'))
    
    // destroy(form) // teardown
  })

  it('should be equal to `date` when displayFormat=null, date=true, time=false, seconds=false, hour24=false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          date: true,
          time: false,
          seconds: false,
          hour24: false
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[requestDataFormat]).toBe(el.__('vueform.dateFormats.date'))

    // destroy() // teardown
  })
}

export const displayDateFormat = function (elementType, elementName, options) {
  testDefinition(elementType, 'displayFormat', 'displayDateFormat')
  testDefaults(elementType, 'displayFormat', 'displayDateFormat')
}

export const valueDateFormat = function (elementType, elementName, options) {
  testDefinition(elementType, 'valueFormat', 'valueDateFormat')
  testDefaults(elementType, 'valueFormat', 'valueDateFormat')

  it('should be false if displayFormat is false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: false
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.valueFormat).toBe(false)

    // destroy() // teardown
  })
}

export const loadDateFormat = function (elementType, elementName, options) {
  testDefinition(elementType, 'loadFormat', 'loadDateFormat')
  testDefaults(elementType, 'loadFormat', 'loadDateFormat')
}