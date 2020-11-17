import { createForm } from 'test-helpers'
import { submit, formatData, formatLoad, data, filtered, update, reset, clear, changed, updated, onCreated } from './data'

const value = function(options) {
  return options.value || 'value'
}

export { 
  submit,
  formatData,
  formatLoad,
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

    expect(el.value).toStrictEqual(value(options))

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

    expect(el.value).toStrictEqual(el.nullValue)
  })

  it('should should format data if "formatLoad" is set on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          formatLoad(value) {
            return _.map(value, (one) => {
              return one + '-formatted'
            })
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(['1','2'], true)

    expect(el.value).toStrictEqual(['1-formatted','2-formatted'])
  })
}