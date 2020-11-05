import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'
import { FileWatcherEventKind } from 'typescript'

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
  it('should `load` data with and without "triggerChange", "shouldValidate", "shouldDirt" and "format" params', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required',
          formatLoad(val) {
            return `${val}-formatted`
          },
          onChange: onChangeMock,
        },
      }
    })

    let el = form.vm.el$('el')

    el.load('value')

    expect(el.value).toBe('value')
    expect(el.dirty).toBe(false)
    expect(el.validated).toBe(false)
    expect(onChangeMock).not.toHaveBeenCalled()

    el.load('value2', true)

    expect(el.value).toBe('value2')
    expect(el.dirty).toBe(false)
    expect(el.validated).toBe(false)
    expect(onChangeMock).toHaveBeenCalled()

    el.load('value3', false, true)

    await flushPromises()
    
    expect(el.value).toBe('value3')
    expect(el.dirty).toBe(false)
    expect(el.validated).toBe(true)
    expect(onChangeMock).toHaveBeenCalledTimes(1)

    el.state.validated = false
    el.load('value4', false, false, true)
    
    expect(el.value).toBe('value4')
    expect(el.dirty).toBe(true)
    expect(el.validated).toBe(false)
    expect(onChangeMock).toHaveBeenCalledTimes(1)

    el.state.dirty = false
    el.load('value5', false, false, false, true)
    
    expect(el.value).toBe('value5-formatted')
    expect(el.dirty).toBe(false)
    expect(el.validated).toBe(false)
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('should `load` only trigger "change" event if the value has changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
          onChange: onChangeMock,
        },
      }
    })

    let el = form.vm.el$('el')

    el.load('value', true)

    expect(onChangeMock).not.toHaveBeenCalled()

    el.load('value2', true)

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('should `load` only "dirt" if the value has changed', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
        },
      }
    })

    let el = form.vm.el$('el')

    el.load('value', false, false, true)

    expect(el.dirty).toBe(false)

    el.load('value2', false, false, true)

    expect(el.dirty).toBe(true)
  })

  it('should unload when element data is not present in the `load` object', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toBe('value')

    el.load(undefined)

    expect(el.value).toBe(el.nullValue)
  })

  it('should unload when element data is present in the `load` object, but not available', async () => {
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

    expect(el.value).toBe('value')
    
    el.load('value')

    expect(el.value).toBe(el.nullValue)
  })

  it('should pass over "triggerChange", "shouldValidate" and "shouldDirt" params to unload when triggered on `load`', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
          rules: 'required',
          formatLoad(val) {
            return `${val}-formatted`
          },
          onChange: onChangeMock,
        },
      }
    })

    let el = form.vm.el$('el')
    
    el.load(undefined, true, true, true)

    await flushPromises()

    expect(el.value).toBe(el.nullValue)
    expect(el.validated).toBe(true)
    expect(el.dirty).toBe(true)
    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should `load` ""', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        },
      }
    })

    let el = form.vm.el$('el')

    el.load('')

    expect(el.value).toBe('')
  })

  it('should `load` "0"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        },
      }
    })

    let el = form.vm.el$('el')

    el.load(0)

    expect(el.value).toBe(0)
  })

  it('should `load` "null"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value'
        },
      }
    })

    let el = form.vm.el$('el')

    el.load(null)

    expect(el.value).toBe(null)
  })
}

export const unload = function (elementType, elementName) {
  it('should `unload` with and without "triggerChange", "shouldValidate" and "shouldDirt" params', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
          rules: 'required',
          onChange: onChangeMock,
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toBe('value')
    expect(el.validated).toBe(false)
    expect(el.dirty).toBe(false)
    expect(onChangeMock).not.toHaveBeenCalled()

    el.unload(true)

    expect(el.validated).toBe(false)
    expect(el.dirty).toBe(false)
    expect(onChangeMock).toHaveBeenCalledTimes(1)

    el.unload(false, true)

    await flushPromises()

    expect(el.validated).toBe(true)
    expect(el.dirty).toBe(false)
    expect(onChangeMock).toHaveBeenCalledTimes(1)

    el.state.validated = false
    el.update('value', false, false, false)
    el.unload(false, false, true)

    expect(el.validated).toBe(false)
    expect(el.dirty).toBe(true)
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('should `unload` reset validators if "shouldValidate" is false', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        },
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()

    expect(el.validated).toBe(true)

    el.unload()

    expect(el.validated).toBe(false)
  })
}

export const update = function (elementType, elementName) {
  it('should `update` with and without "triggerChange", "shouldValidate" and "shouldDirt" params', async () => {
    const onChangeMock = jest.fn()

    let form = createForm({
      validateOn: 'change|submit',
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          rules: 'required',
        },
      }
    })

    let el = form.vm.el$('el')

    el.update('value')

    await flushPromises()

    expect(el.value).toBe('value')
    expect(el.dirty).toBe(true)
    expect(el.validated).toBe(true)
    expect(onChangeMock).toHaveBeenCalled()

    el.state.dirty = false
    el.state.validated = false
    el.update('value2', false)

    await flushPromises()

    expect(el.value).toBe('value2')
    expect(el.dirty).toBe(true)
    expect(el.validated).toBe(true)
    expect(onChangeMock).toHaveBeenCalledTimes(1)

    el.state.dirty = false
    el.state.validated = false
    el.update('value3', false, false)

    await flushPromises()

    expect(el.value).toBe('value3')
    expect(el.dirty).toBe(true)
    expect(el.validated).toBe(false)
    expect(onChangeMock).toHaveBeenCalledTimes(1)

    el.state.dirty = false
    el.state.validated = false
    el.update('value4', false, false, false)

    await flushPromises()

    expect(el.value).toBe('value4')
    expect(el.dirty).toBe(false)
    expect(el.validated).toBe(false)
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('should `update` only trigger "change" event if the value has changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
          onChange: onChangeMock,
        },
      }
    })

    let el = form.vm.el$('el')

    el.update('value', true)

    expect(onChangeMock).not.toHaveBeenCalled()

    el.update('value2', true)

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('should `update` only "dirt" if the value has changed', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
        },
      }
    })

    let el = form.vm.el$('el')

    el.update('value', false, false, true)

    expect(el.dirty).toBe(false)

    el.update('value2', false, false, true)

    expect(el.dirty).toBe(true)
  })

  it('should `update` only validate if validateOn has "change" by default', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          default: 'value',
          rules: 'required',
        },
      }
    })

    let el = form.vm.el$('el')

    el.update('value2')

    await flushPromises()

    expect(el.validated).toBe(false)

    el.form$.validateOn = 'submit|change'

    el.update('value3')

    await flushPromises()

    expect(el.validated).toBe(true)
  })
}

export const reset = function (elementType, elementName) {
  it('should `reset` set value to default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required',
          default: 'value',
        },
      }
    })

    let el = form.vm.el$('el')

    el.update('value2')
    el.reset()

    expect(el.value).toBe('value')
  })

  it('should `reset` trigger change by default only if value changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
          onChange: onChangeMock,
        },
      }
    })

    let el = form.vm.el$('el')

    el.reset()

    expect(onChangeMock).not.toHaveBeenCalled()

    el.update('value2', false)
    el.reset()

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('should `reset` not trigger change if triggerChange is "false"', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
          onChange: onChangeMock,
        },
      }
    })

    let el = form.vm.el$('el')

    el.update('value2', false)
    el.reset(false)

    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should `reset` reset validators', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        },
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()
    
    expect(el.validated).toBe(true)

    el.reset()

    expect(el.validated).toBe(false)
  })
}

export const clear = function (elementType, elementName) {
  it('should `clear` with and without "triggerChange", "shouldValidate" and "shouldDirt" params', async () => {
    const onChangeMock = jest.fn()

    let form = createForm({
      validateOn: 'change|submit',
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          rules: 'required',
          default: 'value'
        },
      }
    })

    let el = form.vm.el$('el')

    el.clear()

    await flushPromises()

    expect(el.value).toBe(el.nullValue)
    expect(el.dirty).toBe(true)
    expect(el.validated).toBe(true)
    expect(onChangeMock).toHaveBeenCalled()

    el.update('value', false, false, false)
    el.state.dirty = false
    el.state.validated = false
    el.clear(false)

    await flushPromises()

    expect(el.value).toBe(el.nullValue)
    expect(el.dirty).toBe(true)
    expect(el.validated).toBe(true)
    expect(onChangeMock).toHaveBeenCalledTimes(1)

    el.update('value', false, false, false)
    el.state.dirty = false
    el.state.validated = false
    el.clear(false, false)

    await flushPromises()

    expect(el.value).toBe(el.nullValue)
    expect(el.dirty).toBe(true)
    expect(el.validated).toBe(false)
    expect(onChangeMock).toHaveBeenCalledTimes(1)

    el.update('value', false, false, false)
    el.state.dirty = false
    el.state.validated = false
    el.clear(false, false, false)

    await flushPromises()

    expect(el.value).toBe(el.nullValue)
    expect(el.dirty).toBe(false)
    expect(el.validated).toBe(false)
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('should `clear` only trigger "change" event if the value has changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
        },
      }
    })

    let el = form.vm.el$('el')

    el.clear(true)

    expect(onChangeMock).not.toHaveBeenCalled()

    el.update('value', false)
    el.clear(true)

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('should `update` only "dirt" if the value has changed', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        },
      }
    })

    let el = form.vm.el$('el')

    el.clear(false, false, true)

    expect(el.dirty).toBe(false)

    el.update('value', false, false, false)
    el.clear(false, false, true)

    expect(el.dirty).toBe(true)
  })

  it('should `clear` only validate if validateOn has "change" by default', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          default: 'value',
          rules: 'required',
        },
      }
    })

    let el = form.vm.el$('el')

    el.clear()

    await flushPromises()

    expect(el.validated).toBe(false)

    el.form$.validateOn = 'submit|change'

    el.clear()

    await flushPromises()

    expect(el.validated).toBe(true)
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