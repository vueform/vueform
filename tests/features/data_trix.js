import { createForm, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'
import { nextTick } from 'composition-api'
import { update as baseUpdate, clear as baseClear, reset as baseReset, } from './data'

export { submit, formatData, formatLoad, data, filtered, changed, updated, onCreated, } from './data'

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

    await nextTick()

    expect(el.input.trix$.value).toBe('<div>value</div>')
    expect(el.dirty).toBe(true)

    el.clean()

    el.load('<div>value2</div>')
    expect(el.value).toBe('<div>value2</div>')

    expect(el.dirty).toBe(false)

    el.load(null)
    expect(el.value).toBe(null)

    el.load(0)
    expect(el.value).toBe(0)

    el.load('')
    expect(el.value).toBe('')
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
  baseUpdate(elementType, elementName, options)

  it('should update trix value on `update`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('value')

    await nextTick()

    expect(el.input.trix$.value).toBe('<div>value</div>')
  })
}

export const reset = function (elementType, elementName, options) {
  baseUpdate(elementType, elementName, options)

  it('should update trix value on `reset`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('value')

    await nextTick()

    expect(el.input.trix$.value).toBe('<div>value</div>')

    el.reset()

    await nextTick()

    expect(el.input.trix$.value).toBe('')
  })
}

export const clear = function (elementType, elementName, options) {
  baseUpdate(elementType, elementName, options)

  it('should update trix value on `clear`', async () => {
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

    await nextTick()

    expect(el.input.trix$.value).toBe('')
  })
}