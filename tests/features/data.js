import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'
import { FileWatcherEventKind, isExportDeclaration } from 'typescript'

export const nullValue = function (elementType, elementName) {
  it('should have "null" as `nullValue`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.nullValue).toBe(null)
  })
}

export const submit = function (elementType, elementName) {
  testComputedOption(it, elementType, 'submit', true, false)
}

export const default_ = function (elementType, elementName) {
  testComputedOption(it, elementType, 'default', null, 'value')
}

export const formatData = function (elementType, elementName) {
  testComputedOption(it, elementType, 'formatData', null, 'formatDataFunction', false)
}

export const formatLoad = function (elementType, elementName) {
  testComputedOption(it, elementType, 'formatLoad', null, 'formatLoadFunction', false)
}

export const data = function (elementType, elementName) {
  it('should have "data" as an object with element name as property and element value as value by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value'
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
          default: 'value',
          formatData(name, value) {
            return {
              custom: {
                [name]: value
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

export const filtered = function (elementType, elementName) {
  it('should have `filtered` equal to `data` if there are no conditions', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value'
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
          default: 'value',
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
          default: 'value',
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

export const load = function (elementType, elementName) {
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

  it('should should format data if "formatData" is "true" on `load`', async () => {
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

    expect(el.value).toBe(el.nullValue)
  })
}

export const update = function (elementType, elementName) {
  it('should set value to provided value `update`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('value')
    expect(el.value).toBe('value')
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

    el.update('value')

    expect(el.dirty).toBe(true)
  })
}

export const clear = function (elementType, elementName) {
  it('should set value to null on `clear`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
        }
      }
    })

    let el = form.vm.el$('el')

    el.clear()

    expect(el.value).toBe(el.nullValue)
  })

  it('should trigger "updated" on `clear`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
        }
      }
    })

    let el = form.vm.el$('el')

    el.clear()

    expect(el.dirty).toBe(true)
  })
}

export const reset = function (elementType, elementName) {
  it('should set value to default on `reset`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('value2')

    el.reset()

    expect(el.value).toBe(el.default)
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

    el.update('value')
    el.reset()

    expect(onChangeMock).toHaveBeenCalledWith(el.default, 'value')
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

export const updated = function (elementType, elementName) {
  it('should dirt element on `updated` if value changed', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = 'value'
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

    el.currentValue = 'value'
    el.previousValue = 'value'

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

    el.currentValue = 'value'
    el.previousValue = null

    el.updated()

    expect(onChangeMock).toHaveBeenCalledWith('value', null)
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

    el.currentValue = 'value'
    el.previousValue = 'value'

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

export const onCreated = function (elementType, elementName) {
  it('should set `previousValue` to "nullValue" on mounted', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.previousValue).toBe(el.nullValue)
  })

  it('should set `currentValue` to "default" on mounted', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value'
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.currentValue).toBe('value')
  })
}

export default function (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName)
    })
  }
}