import { createLocalVue } from '@vue/test-utils'
import { createForm } from 'test-helpers'

let windowSpy

beforeEach(() => {
  windowSpy = jest.spyOn(global, 'window', 'get')
})

afterEach(() => {
  windowSpy.mockRestore()
})

describe('Location Element Rendering', () => {
  it('should render location element using Google', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    windowSpy.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: class{
              addListener() {}
            }
          }
        }
      }
    }))

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.exists()).toBe(true)

    done()
  })

  it('should throw error using Google if google.maps.places.Autocomplete does not exist', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    windowSpy.mockImplementation(() => ({
      google: {
        maps: {}
      }
    }))

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      let form = createForm({
        schema: {
          a: {
            type: 'location',
            provider: 'google',
          }
        }
      })
    }).toThrowError()

    console.error = originalConsoleError

    done()
  })

  it('should render location element using Algolia', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    windowSpy.mockImplementation(() => ({
      places: () => {
        return {
          on: () => {}
        }
      }
    }))

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'algolia',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.exists()).toBe(true)

    done()
  })

  it('should throw error using Algolia if window.Places does not exist', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      let form = createForm({
        schema: {
          a: {
            type: 'location',
            provider: 'algolia',
          }
        }
      })
    }).toThrowError()

    console.error = originalConsoleError

    done()
  })

  it('should render component attributes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    windowSpy.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: class{
              addListener() {}
            }
          }
        }
      }
    }))

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          id: 'txt',
          placeholder: 'Location',
          disabled: true,
          readonly: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.get('input').attributes().id).toBe('txt')
    expect(a.get('input').attributes().placeholder).toBe('Location')
    expect(a.get('input').attributes().disabled).toBe('disabled')
    expect(a.get('input').attributes().readonly).toBe('readonly')

    done()
  })

  it('should render floating label', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    windowSpy.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: class{
              addListener() {}
            }
          }
        }
      }
    }))

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          floating: 'Location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)
    let elf = form.findAllComponents({ name: 'ElementLabelFloating' }).at(0)

    expect(elf.exists()).toBe(true)
    expect(elf.html()).toContain('Location')

    done()
  })

  it('should render `addon`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    windowSpy.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: class{
              addListener() {}
            }
          }
        }
      }
    }))

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          addon: {
            before: 'aaa',
            after: 'bbb',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)
    let ia0 = form.findAllComponents({ name: 'InputAddon' }).at(0)
    let ia1 = form.findAllComponents({ name: 'InputAddon' }).at(1)

    expect(ia0.exists()).toBe(true)
    expect(ia1.exists()).toBe(true)

    expect(a.get('.input-group-addon + input').exists()).toBe(true)
    expect(a.get('input + .input-group-addon').exists()).toBe(true)

    expect(ia0.html()).toContain('aaa')
    expect(ia1.html()).toContain('bbb')

    done()
  })
})

describe('Location Element Provider', () => {
  it('should set `locationService`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    windowSpy.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: class {
              addListener() {}
            }
          }
        }
      }
    }))

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.locationService).not.toBe(null)

    done()
  })

  it('should destroy & reinit location service when `provider` changes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    windowSpy.mockImplementation(() => ({
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
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(autocompleteMock.mock.calls.length).toBe(1)
    expect(googleRemoveListenerMock.mock.calls.length).toBe(0)
    expect(placesMock.mock.calls.length).toBe(0)

    a.vm.provider = 'algolia'

    LocalVue.nextTick(() => {
      expect(autocompleteMock.mock.calls.length).toBe(1)
      expect(googleRemoveListenerMock.mock.calls.length).toBe(1)
      expect(placesMock.mock.calls.length).toBe(1)

      done()
    })
  })

  it('should reinit location service when options changes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autocompleteMock = jest.fn(() => {
      return {
        addListener: () => {},
      }
    })

    windowSpy.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: autocompleteMock
          },
        }
      },
    }))

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(autocompleteMock.mock.calls.length).toBe(1)

    a.vm.options = {
      description: 'a'
    }

    LocalVue.nextTick(() => {
      expect(autocompleteMock.mock.calls.length).toBe(2)

      done()
    })
  })

  it('should throw error if `provider` is other than "google" or "algolia"', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autocompleteMock = jest.fn(() => {
      return {
        addListener: () => {},
      }
    })

    windowSpy.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: autocompleteMock
          },
        }
      },
    }))

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      let form = createForm({
        schema: {
          a: {
            type: 'location',
            provider: 'allgolia'
          }
        }
      })
    }).toThrowError()

    console.error = originalConsoleError

    done()
  })
})

describe('Location Element Props', () => {
  beforeEach(() => {
    windowSpy.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: jest.fn(() => {
              return {
                addListener: () => {},
              }
            })
          },
        }
      },
    }))
  })

  afterEach(() => {
    windowSpy.mockRestore()
  })

  it('should have `formatted_address` as default `displayKey`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.displayKey).toBe('formatted_address')

    done()
  })

  it('should set `displayKey` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          displayKey: 'aaa',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.displayKey).toBe('aaa')

    done()
  })

  it('should set `displayKey` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.displayKey = 'aaa'

    expect(a.vm.displayKey).toBe('aaa')

    done()
  })

  it('should have `path` as default `id`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'object',
          schema: {
            b: {
              type: 'location'
            }
          }
        }
      }
    })

    let b = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(b.vm.id).toBe(b.vm.path)

    done()
  })

  it('should set `id` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          id: 'loc',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.id).toBe('loc')

    done()
  })

  it('should set `id` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.id = 'loc'

    expect(a.vm.id).toBe('loc')

    done()
  })

  it('should have `google` as default `provider`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.provider).toBe('google')

    done()
  })

  it('should have `null` as default `placeholder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.placeholder).toBe(null)

    done()
  })

  it('should set `placeholder` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          placeholder: 'aaa',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.placeholder).toBe('aaa')

    done()
  })

  it('should set `placeholder` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.placeholder = 'aaa'

    expect(a.vm.placeholder).toBe('aaa')

    done()
  })

  it('should have `null` as default `floating`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.floating).toBe(null)

    done()
  })

  it('should set `floating` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          floating: 'aaa',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.floating).toBe('aaa')

    done()
  })

  it('should set `floating` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.floating = 'aaa'

    expect(a.vm.floating).toBe('aaa')

    done()
  })

  it('should have `false` as default `readonly`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.readonly).toBe(false)

    done()
  })

  it('should set `readonly` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          readonly: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.readonly).toBe(true)

    done()
  })

  it('should set `readonly` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.readonly = true

    expect(a.vm.readonly).toBe(true)

    done()
  })

  it('should have `defaultOptions` as default `options`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.options).toStrictEqual(a.vm.defaultOptions)

    done()
  })

  it('should set `option` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          options: {
            a: 1
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.options).toStrictEqual(Object.assign({}, a.vm.defaultOptions, {a: 1}))

    done()
  })

  it('should set `option` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.options = {
      a: 1
    }

    expect(a.vm.options).toStrictEqual(Object.assign({}, a.vm.defaultOptions, {a: 1}))

    done()
  })

  it('should set `formatValue` to schema', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'location',
        },
      },
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.formatValue = () => { return 'aaa' }

    expect(a.vm.formatValue()).toBe('aaa')
  })
})

describe('Location Element Events', () => {
  beforeEach(() => {
    windowSpy.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: jest.fn(() => {
              return {
                addListener: () => {},
              }
            })
          },
        }
      },
      places: () => {
        return {
          on: () => {}
        }
      }
    }))
  })

  afterEach(() => {
    windowSpy.mockRestore()
  })

  it('should trigger `change` event on address change', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
          onChange: onChangeMock,
        }
      }
    }, {
      attach: true
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    a.vm.handleAddressChange({
      zip: 'aaa'
    }, {})

    LocalVue.nextTick(() => {
      expect(onChangeMock.mock.calls.length).toBe(1)
      expect(onChangeMock.mock.calls[0][0].zip).toBe('aaa')
      expect(onChangeMock.mock.calls[0][1]).toStrictEqual({})

      done()
    })
  })
})

describe('Location Element Model', () => {
  let raw
  let formatted
  let display

  beforeEach(() => {
    raw = {"address_components":[{"long_name":"Boulevard Napoleon","short_name":"Boulevard Napoleon","types":["route"]},{"long_name":"Louisville","short_name":"Louisville","types":["locality","political"]},{"long_name":"Jefferson County","short_name":"Jefferson County","types":["administrative_area_level_2","political"]},{"long_name":"Kentucky","short_name":"KY","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"40205","short_name":"40205","types":["postal_code"]}],"formatted_address":"Boulevard Napoleon, Louisville, KY 40205, USA","geometry":{"location":{"lat":()=>{return 38.2232165},"lng":()=>{return -85.69585219999999}}}}
    formatted = {"country":"United States","country_code":"US","state":"Kentucky","state_code":"KY","city":"Louisville","zip":"40205","address":"Boulevard Napoleon","formatted_address":"Boulevard Napoleon, Louisville, KY 40205, USA","lat":38.2232165,"lng":-85.69585219999999}
    display = "Boulevard Napoleon, Louisville, KY 40205, USA"

    windowSpy.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: jest.fn(() => {
              return {
                addListener: () => {},
              }
            })
          },
        }
      },
      places: () => {
        return {
          on: () => {}
        }
      }
    }))
  })

  afterEach(() => {
    windowSpy.mockRestore()
  })

  it('should set `value` when address changes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.handleAddressChange(formatted, raw)

    expect(a.vm.value).toStrictEqual(formatted)
    expect(a.vm.$refs.input.value).toStrictEqual(display)

    done()
  })

  it('should set `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.value = formatted

    expect(a.vm.value).toStrictEqual(formatted)
    expect(a.vm.$refs.input.value).toStrictEqual(display)

    done()
  })

  it('should `update` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.update(formatted)

    expect(a.vm.value).toStrictEqual(formatted)
    expect(a.vm.$refs.input.value).toStrictEqual(display)

    done()
  })

  it('should `load` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    form.vm.load({
      a: formatted
    })

    expect(a.vm.value).toStrictEqual(formatted)
    expect(a.vm.$refs.input.value).toStrictEqual(display)

    done()
  })

  it('should have default as `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
          default: formatted
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.value).toStrictEqual(formatted)

    LocalVue.nextTick(() => {
      expect(a.vm.$refs.input.value).toStrictEqual(display)

      done()
    })
  })

  it('should format `value` upon updating `value` when `formatValue` is set', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
          formatValue(value) {
            return {
              formatted_address: value.formatted_address
            }
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.value = formatted

    expect(a.vm.value).toStrictEqual({formatted_address:formatted.formatted_address})

    LocalVue.nextTick(() => {
      expect(a.vm.$refs.input.value).toStrictEqual(formatted.formatted_address)

      done()
    })
  })

  it('should format `value` upon `update` when `formatValue` is set', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
          formatValue(value) {
            return {
              formatted_address: value.formatted_address
            }
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.update(formatted)

    expect(a.vm.value).toStrictEqual({formatted_address:formatted.formatted_address})

    LocalVue.nextTick(() => {
      expect(a.vm.$refs.input.value).toStrictEqual(formatted.formatted_address)

      done()
    })
  })

  it('should format `value` upon `load` when `formatValue` is set', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
          formatValue(value) {
            return {
              formatted_address: value.formatted_address
            }
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.load({
      a: formatted
    })

    expect(a.vm.value).toStrictEqual({formatted_address:formatted.formatted_address})

    LocalVue.nextTick(() => {
      expect(a.vm.$refs.input.value).toStrictEqual(formatted.formatted_address)

      done()
    })
  })

  it('should format `value` using `default` when `formatValue` is set', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
          default: formatted,
          formatValue(value) {
            return {
              formatted_address: value.formatted_address
            }
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(a.vm.value).toStrictEqual({formatted_address:formatted.formatted_address})

    LocalVue.nextTick(() => {
      expect(a.vm.$refs.input.value).toStrictEqual(formatted.formatted_address)

      done()
    })
  })

  it('should format `value` upon `load` when `formatValue` & `formatLoad` is set', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
          formatValue(value) {
            return {
              formatted_address: value.formatted_address
            }
          },
          formatLoad(data) {
            return {
              formatted_address: data.formatted_address
            }
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    a.vm.load({
      a: formatted
    })

    expect(a.vm.value).toStrictEqual({formatted_address:formatted.formatted_address})

    LocalVue.nextTick(() => {
      expect(a.vm.$refs.input.value).toStrictEqual(formatted.formatted_address)

      done()
    })
  })
})