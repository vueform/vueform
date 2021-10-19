import { createForm, destroy } from 'test-helpers'
import flushPromises from 'flush-promises'

export const data = function (elementType, elementName) {
  it('should have "data" as an object with values of children', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      el: el.value,
    })
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const requestData = function(elementType, elementName) {
  it('should have `requestData` equal to available children data values', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.requestData).toStrictEqual({
      el: {
        address: null,
        address2: null,
        city: null,
        country: null,
        zip: null,
      }
    })    
    
    // destroy(form) // teardown
  })

  it('should have empty object as `requestData` if not available', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          conditions: [
            ['el2', 'value']
          ]
        },
        el2: {
          type: 'text',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.requestData).toStrictEqual({})
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const load = function(elementType, elementName) {
  it('should load data to children on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let address = form.vm.el$('el.address')

    el.load({
      address: 'value'
    })

    expect(el.value.address).toStrictEqual('value')    
    
    // destroy(form) // teardown
  })

  it('should should format data if "formatData" is "true" on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          formatLoad(value) {
            return Object.assign({}, value, {
              address: `pre-${value.address}`
            })
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load({
      address: 'value'
    }, true)
    
    expect(el.value).toStrictEqual({
      address: 'pre-value',
      address2: null,
      city: null,
      country: null,
      state: null,
      zip: null,
    })
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const update = function(elementType, elementName) {
  it('should load data to children on `update`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let address = form.vm.el$('el.address')

    el.update({
      address: 'value'
    })

    expect(el.value).toStrictEqual({
      address: 'value',
      address2: null,
      city: null,
      country: null,
      state: null,
      zip: null,
    })
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const clear = function(elementType, elementName) {
  it('should clear children on `clear`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let address = form.vm.el$('el.address')

    el.load({
      address: 'value'
    })

    el.clear()

    expect(el.value).toStrictEqual({
      address: null,
      address2: null,
      city: null,
      country: null,
      state: null,
      zip: null,
    })
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const reset = function(elementType, elementName) {
  it('should reset children on `reset`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          required: true,
        }
      }
    })

    let el = form.vm.el$('el')
    let address = form.vm.el$('el.address')

    address.validate()

    await flushPromises()

    expect(address.invalid).toBe(true)
    expect(address.validated).toBe(true)
    expect(address.value).toBe(null)

    el.reset()

    expect(address.invalid).toBe(false)
    expect(address.validated).toBe(false)
    expect(address.value).toBe(null)
    
    // destroy(form) // teardown
  })
}