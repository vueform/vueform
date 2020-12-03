import { createForm, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'
import { nextTick } from 'composition-api'

export { submit, formatData, formatLoad, data, filtered, update, clear, reset, changed, updated, onCreated, } from './data'

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