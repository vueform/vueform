import { createForm } from 'test-helpers'
import flushPromises from 'flush-promises'

export { data, filtered, clear, onCreated, } from './data'

export const load = function (elementType, elementName, options) {
  it('should set string value on `load` according to loadFormat', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          loadFormat: options.loadFormat2,
          valueFormat: options.valueFormat,
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(options.value2)
    expect(el.value).toBe(options.value)
  })

  it('should set Date instance on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(moment(options.value, options.loadFormat).toDate())
    expect(el.value).toStrictEqual(options.value)
  })

  it('should throw an error on `load` when value not being provided according to loadFormat', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          loadFormat: options.loadFormat2
        }
      }
    })

    let el = form.vm.el$('el')

    expect(() => {
      el.load(options.value)
    }).toThrowError()

    expect(() => {
      el.load(options.value2)
    }).not.toThrowError()
  })

  it('should set "null" on `load` if value is empty or undefined', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(null)
    expect(el.value).toBe(el.nullValue)

    el.load(0)
    expect(el.value).toBe(el.nullValue)

    el.load('')
    expect(el.value).toBe(el.nullValue)

    el.load(undefined)
    expect(el.value).toBe(el.nullValue)
  })

  it('should should format data if "formatLoad" is set on `load`', async () => {
    let formatLoadMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
          loadFormat: options.loadFormat,
          formatLoad(value) {
            formatLoadMock()

            return value
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(options.value, true)

    expect(formatLoadMock).toHaveBeenCalled()
  })
}

export const update = function (elementType, elementName, options) {
  it('should set string value on `update` according to valueFormat', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(options.value)
    expect(el.value).toBe(options.value)
  })

  it('should set Date instance value on `update`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(moment(options.value, options.valueFormat).toDate())
    expect(el.value).toBe(options.value)
  })

  it('should throw an error on `update` when value not being provided according to valueFormat', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat2
        }
      }
    })

    let el = form.vm.el$('el')

    expect(() => {
      el.update(options.value)
    }).toThrowError()

    expect(() => {
      el.update(options.value2)
    }).not.toThrowError()
  })

  it('should set nullValue on `update` if value is empty', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(0)
    expect(el.value).toStrictEqual(el.nullValue)

    el.update('')
    expect(el.value).toStrictEqual(el.nullValue)

    el.update(null)
    expect(el.value).toStrictEqual(el.nullValue)

    el.update(undefined)
    expect(el.value).toStrictEqual(el.nullValue)
  })

  it('should trigger "updated" on `update`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(options.value)

    expect(el.dirty).toBe(true)
  })
}

export const reset = function (elementType, elementName, options) {
  it('should set value to default on `reset`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
          default: options.value,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(null)

    el.reset()

    expect(el.value).toStrictEqual(options.value)
  })

  it('should reset validators on `reset`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required'
        }
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()

    el.reset()

    expect(el.validated).toBe(false)
    expect(el.invalid).toBe(false)
  })

  it('should trigger "change" on `reset` if value changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          valueFormat: options.valueFormat,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(options.value)
    el.reset()

    expect(onChangeMock).toHaveBeenCalledWith(el.default, el.previousValue)
  })

  it('should not trigger "change" on `reset` if value has not changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
        }
      }
    })

    let el = form.vm.el$('el')

    el.reset()

    expect(onChangeMock).not.toHaveBeenCalled()
  })
}

export const changed = function (elementType, elementName, options) {
  it('should `changed` be true if current and previous values do not match', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = moment(options.value, options.valueFormat).toDate()
    el.previousValue = null

    expect(el.changed).toBe(true)

    el.currentValue = moment(options.value, options.valueFormat).toDate()
    el.previousValue = moment(options.value, options.valueFormat).toDate()

    expect(el.changed).toBe(false)
  })
}

export const updated = function (elementType, elementName, options) {
  it('should dirt element on `updated` if value changed', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = moment(options.value, options.valueFormat).toDate()
    el.previousValue = null

    el.updated()

    expect(el.dirty).toBe(true)
  })

  it('should not dirt element on `updated` if value has not changed', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = moment(options.value, options.valueFormat).toDate()
    el.previousValue = moment(options.value, options.valueFormat).toDate()

    el.updated()

    expect(el.dirty).toBe(false)
  })

  it('should trigger "change" event on `updated` if value changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = moment(options.value, options.valueFormat).toDate()
    el.previousValue = null

    el.updated()

    expect(onChangeMock).toHaveBeenCalledWith(moment(options.value, options.valueFormat).toDate(), null)
  })

  it('should not trigger "change" event on `updated` if value has not changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = moment(options.value, options.valueFormat).toDate()
    el.previousValue = moment(options.value, options.valueFormat).toDate()

    el.updated()

    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should validate element on `updated` if "validateOn" contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit|change',
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    el.updated()

    await flushPromises()

    expect(el.validated).toBe(true)
  })

  it('should not validate element on `updated` if "validateOn" does not contain "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    el.updated()

    await flushPromises()

    expect(el.validated).toBe(false)
  })
}