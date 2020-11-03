import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'

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
      el: 'value'
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
        el: 'value'
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
  it('should `load` data when element data is present in the load object & remove dirty state afterwards', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        },
      }
    })

    let el = form.vm.el$('el')

    el.load({
      el: 'value'
    })

    expect(el.value).toBe('value')

    await nextTick()
    await nextTick()

    expect(el.dirty).toBe(false)
  })

  it('should clear and reset validators on `load`& remove dirty state afterwards when element data is not present in the load object', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 'value',
          rules: 'required',
        },
      }
    })

    let el = form.vm.el$('el')

    el.dirt()
    el.validate()

    await flushPromises()

    expect(el.validated).toBe(true)
    expect(el.dirty).toBe(true)
    expect(el.value).toBe('value')

    el.load({
      el2: 'value'
    })

    expect(el.value).toBe(el.nullValue)
    expect(el.validated).toBe(false)

    await nextTick()
    await nextTick()

    expect(el.dirty).toBe(false)
  })

  it('should clear and reset validators on `load` & remove dirty state afterwards when element data is present in the load object, but not available', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required',
          default: 'value',
          conditions: [
            ['el2', 'value2']
          ]
        },
        el2: {
          type: 'text',
          default: 'value2'
        }
      }
    })

    let el = form.vm.el$('el')
    let el2 = findAllComponents(form, { name: elementName }).at(1)

    el.dirt()
    el.validate()

    await flushPromises()

    expect(el.validated).toBe(true)
    expect(el.dirty).toBe(true)
    expect(el.value).toBe('value')

    el2.vm.value = null

    el.load({
      el: 'value'
    })

    expect(el.value).toBe(el.nullValue)
    expect(el.validated).toBe(false)

    await nextTick()
    await nextTick()

    expect(el.dirty).toBe(false)
  })
}

export const update = function (elementType, elementName) {
  it('should `update` data without triggering change & validating', async () => {
    const onChangeMock = jest.fn()

    let form = createForm({
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
    expect(el.validated).toBe(false)
    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should `update` data with not triggering change, validating', async () => {
    const onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          rules: 'required',
        },
      }
    })

    let el = form.vm.el$('el')

    el.update('value', true)

    await flushPromises()

    expect(el.value).toBe('value')
    expect(el.validated).toBe(false)
    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should `update` data with triggering change, & not validating', async () => {
    const onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          rules: 'required',
        },
      }
    })

    let el = form.vm.el$('el')

    el.update('value', false, true)

    await flushPromises()

    expect(el.value).toBe('value')
    expect(el.validated).toBe(true)
    expect(onChangeMock).not.toHaveBeenCalled()
  })
}

export const reset = function (elementType, elementName) {
  it('should set value to default and reset validators on `reset`', async () => {
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
    el.validate()

    await flushPromises()

    expect(el.validated).toBe(true)
    expect(el.value).toBe('value2')

    el.reset()

    expect(el.validated).toBe(false)
    expect(el.value).toBe('value')
  })
}

export const clear = function (elementType, elementName) {
  it('should set value to "nullValue" on `clear`', async () => {
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

    expect(el.value).toBe('value')

    el.clear()

    expect(el.value).toStrictEqual(el.nullValue)
  })
}

export const onMounted = function (elementType, elementName) {
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