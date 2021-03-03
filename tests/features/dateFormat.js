import { testPropDefault, createForm } from 'test-helpers'
import { nextTick } from 'composition-api'

const testDefinition = (elementType, input, output) => {
  it('should equal to displayFormat if defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          [input]: 'DD-MM-YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[output]).toBe('DD-MM-YYYY')
  })
}

const testDefaults = (elementType, input, output) => {
  it('should equal to displayFormat if defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          [input]: 'DD-MM-YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el[output]).toBe('DD-MM-YYYY')
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

    expect(el[output]).toBe(el.__('laraform.dateFormats.datetimeSeconds24'))
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

    expect(el[output]).toBe(el.__('laraform.dateFormats.datetimeSeconds12'))
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

    expect(el[output]).toBe(el.__('laraform.dateFormats.datetime24'))
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

    expect(el[output]).toBe(el.__('laraform.dateFormats.datetime12'))
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

    expect(el[output]).toBe(el.__('laraform.dateFormats.timeSeconds24'))
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

    expect(el[output]).toBe(el.__('laraform.dateFormats.timeSeconds12'))
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

    expect(el[output]).toBe(el.__('laraform.dateFormats.time24'))
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

    expect(el[output]).toBe(el.__('laraform.dateFormats.time12'))
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

    expect(el[output]).toBe(el.__('laraform.dateFormats.date'))
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
  })
}

export const loadDateFormat = function (elementType, elementName, options) {
  testDefinition(elementType, 'loadFormat', 'loadDateFormat')
  testDefaults(elementType, 'loadFormat', 'loadDateFormat')
}