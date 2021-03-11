import { createForm } from 'test-helpers'
import flushPromises from 'flush-promises'

export const data = function (elementType, elementName, options) {
  it('should have "data" as an object with element name as property and element value as value by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      el: el.value
    })
  })
}

export const filtered = function (elementType, elementName, options) {
  it('should have `filtered` equal to `data` if there are no conditions', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default
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
          default: options.default,
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
          default: options.default,
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
  it('should set value on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false, // for files
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(options.value)
    expect(el.value).toStrictEqual(options.value)
  })

  it('should should format data if "formatLoad" is set on `load`', async () => {
    let formatLoadMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false, // for files
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
  it('should update value on update', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false, // for files
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(options.value)
    expect(el.value).toStrictEqual(options.value)
  })
}

export const clear = function (elementType, elementName, options) {
  it('should set value to null on `clear`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default,
          auto: false, // for files
        }
      }
    })

    let el = form.vm.el$('el')

    el.clear()

    expect(el.value).toStrictEqual(el.nullValue)
  })
}

export const reset = function (elementType, elementName, options) {
  it('should set value to default on `reset`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default,
          auto: false, // for files
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(options.value)

    el.reset()

    expect(el.value).toStrictEqual(options.default)
  })

  it('should reset validators on `reset`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required',
          auto: false, // for files
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
}