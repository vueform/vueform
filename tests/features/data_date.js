import { createForm } from 'test-helpers'
import { submit, formatData, formatLoad, data, filtered, update, reset, clear, changed, updated, onCreated } from './data'
import { nextTick } from 'composition-api'

const value = function(options) {
  return options.value !== undefined ? options.value : 'value'
}

export { 
  submit,
  formatData,
  formatLoad,
  data,
  filtered,
  update,
  reset,
  // clear,
  changed,
  updated,
  onCreated,
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

    el.load(value(options))
    expect(el.value).toBe(value(options))

    expect(el.dirty).toBe(false)
  })

  it('should should format data if "formatLoad" is set on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          formatLoad(value) {
            return `${value[0]}-${value[1]}-${value[2]}`
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(['2020','12','30'], true)

    expect(el.value).toBe('2020-12-30')
  })

  it('should set value to null if value is "undefined" on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: value(options),
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(undefined)

    await nextTick()

    expect(el.value).toBe(el.nullValue)
  })
}