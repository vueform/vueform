import { createForm } from 'test-helpers'
import flushPromises from 'flush-promises'

export { data, filtered, clear, changed, updated, onCreated, } from './data'

const value = function(options) {
  return options.value !== undefined ? options.value : 'value'
}

const value2 = function(options) {
  return options.value2 !== undefined ? options.value2 : 'value2'
}

export const load = function (elementType, elementName, options) {
  it('should set string value on `load` according to loadFormat', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          loadFormat: 'DD-MM-YYYY',
          valueFormat: 'YYYY-MM-DD',
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(['30-12-2020'])
    expect(el.value).toStrictEqual(['2020-12-30'])
  })

  it('should set Date instance on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
        }
      }
    })

    let el = form.vm.el$('el')

    el.load([moment('2020-12-30').toDate()])
    expect(el.value).toStrictEqual(['2020-12-30'])
  })

  it('should throw an error on `load` when value not being provided according to loadFormat', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          loadFormat: 'DD-MM-YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(() => {
      el.load(['2020-12-30'])
    }).toThrowError()

    expect(() => {
      el.load(['30-12-2020'])
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
    expect(el.value).toStrictEqual(el.nullValue)

    el.load(0)
    expect(el.value).toStrictEqual(el.nullValue)

    el.load('')
    expect(el.value).toStrictEqual(el.nullValue)

    el.load(undefined)
    expect(el.value).toStrictEqual(el.nullValue)

    el.load([])
    expect(el.value).toStrictEqual(el.nullValue)
  })

  it('should should format data if "formatLoad" is set on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
          formatLoad(value) {
            return [`${value[0]}-01`]
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(['2020-12'], true)

    expect(el.value).toStrictEqual(['2020-12-01'])
  })
}

export const update = function (elementType, elementName, options) {
  it('should set string value on `update` according to valueFormat', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD'
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(['2020-12-30'])
    expect(el.value).toStrictEqual(['2020-12-30'])
  })

  it('should set Date instance value on `update`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD'
        }
      }
    })

    let el = form.vm.el$('el')

    el.update([moment('2020-12-30').toDate()])
    expect(el.value).toStrictEqual(['2020-12-30'])
  })

  it('should throw an error on `update` when value not being provided according to valueFormat', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'DD-MM-YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(() => {
      el.update(['2020-12-30'])
    }).toThrowError()

    expect(() => {
      el.update(['30-12-2020'])
    }).not.toThrowError()
  })

  it('should set nullValue on `update` if value is empty', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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

    el.update([])
    expect(el.value).toStrictEqual(el.nullValue)
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

    el.update(['2020-12-30'])

    expect(el.dirty).toStrictEqual(true)
  })
}

export const reset = function (elementType, elementName, options) {
  it('should set value to default on `reset`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: ['2020-12-30'],
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(null)

    el.reset()

    expect(el.value).toStrictEqual(['2020-12-30'])
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

    expect(el.validated).toStrictEqual(false)
    expect(el.invalid).toStrictEqual(false)
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