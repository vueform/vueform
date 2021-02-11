import { createForm, testPropDefault } from 'test-helpers'
import flushPromises from 'flush-promises'

const value = function(options) {
  return options.value !== undefined ? options.value : 'value'
}

const value2 = function(options) {
  return options.value2 !== undefined ? options.value2 : 'value2'
}

export const data = function (elementType, elementName, options) {
  it('should have "data" as an object with element name as property and element value as value by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: value(options)
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      el: el.value
    })
  })

  it('should have "data" according to `formatData` if it is set', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: value(options),
          formatData(name, val) {
            return {
              custom: {
                [name]: val
              }
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      custom: {
        el: el.value
      }
    })
  })
}

export const filtered = function (elementType, elementName, options) {
  it('should have `filtered` equal to `data` if there are no conditions', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: value(options)
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.filtered).toStrictEqual(el.data)
  })

  it('should have `filtered` equal to `data` if there are met conditions', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: value(options),
          conditions: [
            ['el2', 'value2']
          ]
        },
        el2: {
          type: 'text',
          default: 'value2',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.filtered).toStrictEqual(el.data)
  })

  it('should have empty object for `filtered` if there are unmet conditions', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: value(options),
          conditions: [
            ['el2', 'value2']
          ]
        },
        el2: {
          type: 'text',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.filtered).toStrictEqual({})
  })
}

export const load = function (elementType, elementName, options) {
  it('should set value if provided value is not "undefined" on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.load('value')
    expect(el.value).toBe('value')

    el.load(null)
    expect(el.value).toBe(null)

    el.load(0)
    expect(el.value).toBe(0)

    el.load('')
    expect(el.value).toBe('')

    expect(el.dirty).toBe(false)
  })

  it('should should format data if "formatLoad" is set on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          formatLoad(value) {
            return `${value}-formatted`
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load('value', true)

    expect(el.value).toBe('value-formatted')
  })

  it('should set value to null if value is "undefined" on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(undefined)

    expect(el.value).toStrictEqual(el.nullValue)
  })
}

export const update = function (elementType, elementName, options) {
  it('should set value to provided value on `update`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(value(options))
    expect(el.value).toStrictEqual(value(options))
  })

  it('should trigger "updated" on `update`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(value(options))

    expect(el.dirty).toBe(true)
  })
}

export const clear = function (elementType, elementName, options) {
  it('should set value to null on `clear`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: value(options),
        }
      }
    })

    let el = form.vm.el$('el')

    el.clear()

    expect(el.value).toStrictEqual(el.nullValue)
  })

  it('should trigger "updated" on `clear`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: value(options),
        }
      }
    })

    let el = form.vm.el$('el')

    el.clear()

    expect(el.dirty).toBe(true)
  })
}

export const reset = function (elementType, elementName, options) {
  it('should set value to default on `reset`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: value(options),
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(value2(options))

    el.reset()

    expect(el.value).toStrictEqual(el.default)
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
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(value(options))
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

    el.currentValue = value(options)
    el.previousValue = value2(options)

    expect(el.changed).toBe(true)

    el.currentValue = value(options)
    el.previousValue = value(options)

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

    el.currentValue = value(options)
    el.previousValue = value2(options)

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

    el.currentValue = value(options)
    el.previousValue = value(options)

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

    el.currentValue = value(options)
    el.previousValue = value2(options)

    el.updated()

    expect(onChangeMock).toHaveBeenCalledWith(value(options), value2(options))
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

    el.currentValue = value(options)
    el.previousValue = value(options)

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

export const onCreated = function (elementType, elementName, options) {
  it('should set `previousValue` to "nullValue" on mounted', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.previousValue).toStrictEqual(el.nullValue)
  })

  it('should set `currentValue` to "default" on mounted', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: value(options)
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.currentValue).toStrictEqual(el.default)
  })
}