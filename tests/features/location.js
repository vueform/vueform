import { createForm, findAllComponents, testPropDefault } from 'test-helpers'
import { nextTick } from 'composition-api'

export const locationService = function (elementType, elementName, options) { 
  it('should init `locationService` with google', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.locationService).not.toStrictEqual(new el.$laraform.services.location.google)
    expect(el.locationService.options).toStrictEqual(el.providerOptions)
  })

  it('should init `locationService` with algolia', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          provider: 'algolia'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.locationService).not.toStrictEqual(new el.$laraform.services.location.algolia)
    expect(el.locationService.options).toStrictEqual(el.providerOptions)
  })
}

export const location = function (elementType, elementName, options) { 
  it('should `location` be equal to "{}" by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.location).toStrictEqual({})
  })
}

export const provider = function (elementType, elementName, options, spies) {
  testPropDefault(it, elementType, 'provider', 'google', 'algolia')

  it('should destroy & reinit location service when `provider` changes', async () => {
    let placesMock = jest.fn(() => {
      return {
        on: () => {}
      }
    })

    let googleRemoveListenerMock = jest.fn()

    let autocompleteMock = jest.fn(() => {
      return {
        addListener: () => {},
      }
    })

    spies.window.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: autocompleteMock
          },
          event: {
            removeListener: googleRemoveListenerMock,
            clearInstanceListeners: () => {},
          }
        }
      },
      places: placesMock
    }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(autocompleteMock.mock.calls.length).toBe(1)
    expect(googleRemoveListenerMock.mock.calls.length).toBe(0)
    expect(placesMock.mock.calls.length).toBe(0)

    el.$set(form.vm.laraform.schema.el, 'provider', 'algolia')

    await nextTick()

    expect(autocompleteMock.mock.calls.length).toBe(1)
    expect(googleRemoveListenerMock.mock.calls.length).toBe(1)
    expect(placesMock.mock.calls.length).toBe(1)
  })
}

export const providerOptions = function (elementType, elementName, options, spies) {
  it('should have default `providerOptions` when google', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          provider: 'google',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.providerOptions).toStrictEqual(el.defaultOptions)
  })

  it('should have default `providerOptions` when algolia', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          provider: 'algolia',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.providerOptions).toStrictEqual(el.defaultOptions)
  })
  
  it('should extend `providerOptions` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          options: {
            custom: 'option'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.providerOptions).toStrictEqual(Object.assign({}, el.defaultOptions, { 
      custom: 'option'
    }))
  })
  

  it('should destroy & reinit location service when options changes', async () => {
    let autocompleteMock = jest.fn(() => {
      return {
        addListener: () => {},
      }
    })

    let googleRemoveListenerMock = jest.fn()

    spies.window.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: autocompleteMock
          },
          event: {
            removeListener: googleRemoveListenerMock,
            clearInstanceListeners: () => {},
          }
        }
      },
    }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          options: {
            description: 'a'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(autocompleteMock.mock.calls.length).toBe(1)
    expect(googleRemoveListenerMock.mock.calls.length).toBe(0)

    el.options.description = 'b'

    await nextTick()

    expect(autocompleteMock.mock.calls.length).toBe(2)
    expect(googleRemoveListenerMock.mock.calls.length).toBe(1)
    expect(el.locationService.options).toStrictEqual(el.providerOptions)
  })
}

export const handleAddressChange = function (elementType, elementName, options) { 
  it('should set value, location and trigger updated on `handleAddressChange`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.handleAddressChange('value', 'location')

    expect(el.value).toBe('value')
    expect(el.location).toBe('location')
  })
}