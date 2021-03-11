import { createForm } from 'test-helpers'

export const currentValue = function (elementType, elementName) {
  it('should `currentValue` we equal to children value on load', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.currentValue).toStrictEqual({
      address: null,
      address2: null,
      city: null,
      country: null,
      state: null,
      zip: null,
    })
  })

  it('should update `currentValue` when data changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.load({
      address: 'address',
    })

    expect(el.currentValue).toStrictEqual({
      address: 'address',
      address2: null,
      city: null,
      country: null,
      state: null,
      zip: null,
    })
  })
}

export const previousValue = function (elementType, elementName) {
  it('should update `previousValue`when data changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let address = form.vm.el$('el.address')

    address.load('address')

    expect(el.previousValue).toStrictEqual({
      address: null,
      address2: null,
      city: null,
      country: null,
      state: null,
      zip: null,
    })

    address.load('address2')

    expect(el.previousValue).toStrictEqual({
      address: 'address',
      address2: null,
      city: null,
      country: null,
      state: null,
      zip: null,
    })
  })
}

export const value = function (elementType, elementName) {
  it('should have `value` equal to an object of children values', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual({
      address: null,
      address2: null,
      city: null,
      country: null,
      state: null,
      zip: null,
    })
  })

  it('should throw an error on setting value', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(() => {
      el.value = {}
    }).toThrowError()
  })
}