import { createForm, destroy } from 'test-helpers'
import flushPromises from 'flush-promises'
import moment from 'moment'

export { data, requestData, clear } from './data'

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
    
    // destroy(form) // teardown
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
    
    // destroy(form) // teardown
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
    
    // destroy(form) // teardown

    // destroy() // teardown
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
    
    // destroy(form) // teardown
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
    
    // destroy(form) // teardown
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
    
    // destroy(form) // teardown
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
    
    // destroy(form) // teardown
  })
}