import { createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'
import flushPromises from 'flush-promises'

export { data, requestData, } from './data'

export const load = function (elementType, elementName, options) {
  it('should set value on `load`', async () => {
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

    expect(el.input.editor$.value).toBe('<div>value</div>')
    
    // destroy(form) // teardown
  })

  it('should should format data if "formatLoad" is set on `load`', async () => {
    let formatLoadMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
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

    // destroy() // teardown
  })
}

export const update = function (elementType, elementName, options) {
  it('should update value on update', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(options.value)
    expect(el.value).toBe(options.value)

    await nextTick()

    expect(el.input.editor$.value).toBe(options.value)

    // destroy() // teardown
  })
}

export const clear = function (elementType, elementName, options) {
  it('should set value to null on `clear`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default,
        }
      }
    })

    let el = form.vm.el$('el')

    el.clear()

    expect(el.value).toStrictEqual(el.nullValue)

    await nextTick()

    expect(el.input.editor$.value).toBe('')

    // destroy() // teardown
  })
}

export const reset = function (elementType, elementName, options) {
  it('should set value to default on `reset`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(options.value)

    el.reset()

    expect(el.value).toStrictEqual(options.default)

    await nextTick()

    expect(el.input.editor$.value).toBe(options.default)
    
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

    expect(el.validated).toBe(false)
    expect(el.invalid).toBe(false)

    // destroy() // teardown
  })
}