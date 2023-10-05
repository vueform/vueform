import { createForm, destroy } from 'test-helpers'
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

    // destroy() // teardown
  })
}

export const requestData = function (elementType, elementName, options) {
  
  it('should have formatted `requestData` if formatData exists', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.value,
          formatData(name, value) {
            return {
              someKey: {
                [name]: options.formattedValue
              }
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.requestData.someKey).toStrictEqual({ el: options.formattedValue })
    
    // destroy(form) // teardown
  })
  
  it('should have `requestData` equal to `data` if there are no conditions', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.requestData).toStrictEqual(el.data)
    
    // destroy(form) // teardown
  })

  it('should have `requestData` equal to `data` if there are met conditions', () => {
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

    expect(el.requestData).toStrictEqual(el.data)
    
    // destroy(form) // teardown
  })

  it('should have empty object for `requestData` if there are unmet conditions', () => {
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

    expect(el.requestData).toStrictEqual({})

    // destroy() // teardown
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
    
    // destroy(form) // teardown
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

    // destroy() // teardown
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
          auto: false, // for files
        }
      }
    })

    let el = form.vm.el$('el')

    el.clear()

    expect(el.value).toStrictEqual(el.nullValue)

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
          auto: false, // for files
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(options.value)

    el.reset()

    expect(el.value).toStrictEqual(el.defaultValue)
    
    // destroy(form) // teardown
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

    // destroy() // teardown
  })
}