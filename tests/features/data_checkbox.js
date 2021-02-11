import { createForm } from 'test-helpers'
import { data, filtered, update, reset, clear, changed, updated, onCreated } from './data'

const value = function(options) {
  return options.value !== undefined ? options.value : 'value'
}

export { 
  data,
  filtered,
  update,
  reset,
  clear,
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

    expect(el.value).toBe(el.nullValue)
  })

  it('should should format data if "formatLoad" is set on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          formatLoad(value) {
            return value == 'on' ? true : false
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load('on', true)

    expect(el.value).toBe(true)
  })
}