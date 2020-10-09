import { createLocalVue } from '@vue/test-utils'
import { createForm } from 'test-helpers'

let windowSpy

beforeEach(() => {
  windowSpy = jest.spyOn(global, 'window', 'get')

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
        event: {
          removeListener: () => {},
          clearInstanceListeners: () => {},
        }
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

describe('Address Element Rendering', () => {
  it('should render address element using Google', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
          provider: 'google',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    expect(a.exists()).toBe(true)

    done()
  })

  it('should render address element using Algolia', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
          provider: 'algolia',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    expect(a.exists()).toBe(true)

    done()
  })

  it('should render address fields', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    expect(address.exists()).toBe(true)
    expect(address2.exists()).toBe(true)
    expect(zip.exists()).toBe(true)
    expect(city.exists()).toBe(true)
    expect(state.exists()).toBe(true)
    expect(country.exists()).toBe(true)

    done()
  })

  it('should render address fields', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    expect(address.exists()).toBe(true)
    expect(address2.exists()).toBe(true)
    expect(zip.exists()).toBe(true)
    expect(city.exists()).toBe(true)
    expect(state.exists()).toBe(true)
    expect(country.exists()).toBe(true)

    done()
  })
})

describe('Address Element Provider', () => {
  it('should set `addressService`', (done) => {
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
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    expect(a.vm.addressService).not.toBe(null)

    done()
  })

  it('should destroy & reinit address service when `provider` changes', (done) => {
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
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

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

  it('should reinit address service when options changes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let removeListenerMock = jest.fn()

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
            removeListener: removeListenerMock,
            clearInstanceListeners: jest.fn(),
          }
        },
      },
    }))

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    expect(autocompleteMock.mock.calls.length).toBe(1)
    expect(removeListenerMock.mock.calls.length).toBe(0)

    a.vm.options = {
      description: 'a'
    }

    LocalVue.nextTick(() => {
      expect(removeListenerMock.mock.calls.length).toBe(1)
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
            type: 'address',
            provider: 'allgolia'
          }
        }
      })
    }).toThrowError()

    console.error = originalConsoleError

    done()
  })
})

describe('Address Element Props', () => {
  it('should have "false" as default `disabled` for fields', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    expect(address.vm.disabled).toBe(false)
    expect(address2.vm.disabled).toBe(false)
    expect(zip.vm.disabled).toBe(false)
    expect(city.vm.disabled).toBe(false)
    expect(state.vm.disabled).toBe(false)
    expect(country.vm.disabled).toBe(false)

    done()
  })

  it('should set "disabled" for fields if `disabled` is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
          disabled: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    expect(address.vm.disabled).toBe(true)
    expect(address2.vm.disabled).toBe(true)
    expect(zip.vm.disabled).toBe(true)
    expect(city.vm.disabled).toBe(true)
    expect(state.vm.disabled).toBe(true)
    expect(country.vm.disabled).toBe(true)

    done()
  })

  it('should set "disabled" for fields if `disabled` switches to true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    a.vm.disabled = true

    LocalVue.nextTick(() => {
      expect(address.vm.disabled).toBe(true)
      expect(address2.vm.disabled).toBe(true)
      expect(zip.vm.disabled).toBe(true)
      expect(city.vm.disabled).toBe(true)
      expect(state.vm.disabled).toBe(true)
      expect(country.vm.disabled).toBe(true)

      done()
    })
  })

  it('should have "false" as default `readonly` for fields', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    expect(address.vm.readonly).toBe(false)
    expect(address2.vm.readonly).toBe(false)
    expect(zip.vm.readonly).toBe(false)
    expect(city.vm.readonly).toBe(false)
    expect(state.vm.readonly).toBe(false)
    expect(country.vm.readonly).toBe(false)

    done()
  })

  it('should set "readonly" for fields if `readonly` is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
          readonly: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    expect(address.vm.readonly).toBe(true)
    expect(address2.vm.readonly).toBe(true)
    expect(zip.vm.readonly).toBe(true)
    expect(city.vm.readonly).toBe(true)
    expect(state.vm.readonly).toBe(true)
    expect(country.vm.readonly).toBe(true)

    done()
  })

  it('should set "readonly" for fields if `readonly` switches to true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    a.vm.readonly = true

    LocalVue.nextTick(() => {
      expect(address.vm.readonly).toBe(true)
      expect(address2.vm.readonly).toBe(true)
      expect(zip.vm.readonly).toBe(true)
      expect(city.vm.readonly).toBe(true)
      expect(state.vm.readonly).toBe(true)
      expect(country.vm.readonly).toBe(true)

      done()
    })
  })

  it('should have no rules for fields by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    expect(address.vm.rules).toBe(undefined)
    expect(address2.vm.rules).toBe(undefined)
    expect(zip.vm.rules).toBe(undefined)
    expect(city.vm.rules).toBe(undefined)
    expect(state.vm.rules).toBe(undefined)
    expect(country.vm.rules).toBe(undefined)

    done()
  })

  it('should have "required" rules for fields if `required` is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
          required: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    expect(address.vm.rules).toBe('required')
    expect(address2.vm.rules).toBe(undefined)
    expect(zip.vm.rules).toBe('required')
    expect(city.vm.rules).toBe('required')
    expect(state.vm.rules).toBe('required')
    expect(country.vm.rules).toBe('required')

    done()
  })

  it('should set "required" rules for fields if `required` switches to true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    a.vm.required = true

    LocalVue.nextTick(() => {
      expect(address.vm.rules).toBe('required')
      expect(address2.vm.rules).toBe(undefined)
      expect(zip.vm.rules).toBe('required')
      expect(city.vm.rules).toBe('required')
      expect(state.vm.rules).toBe('required')
      expect(country.vm.rules).toBe('required')

      done()
    })
  })

  it('should have `children` equal to `fields`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    expect(a.vm.children).toStrictEqual(a.vm.fields)

    done()
  })

  it('should have `google` as default `provider`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    expect(a.vm.provider).toBe('google')

    done()
  })

  it('should have `defaultOptions` as default `options`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    expect(a.vm.options).toStrictEqual(a.vm.defaultOptions)

    done()
  })

  it('should set `option` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
          options: {
            a: 1
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    expect(a.vm.options).toStrictEqual(Object.assign({}, a.vm.defaultOptions, {a: 1}))

    done()
  })

  it('should set `option` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    a.vm.options = {
      a: 1
    }

    expect(a.vm.options).toStrictEqual(Object.assign({}, a.vm.defaultOptions, {a: 1}))

    done()
  })

  it('should have `name` property for algolia default template', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
          provider: 'algolia',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    expect(a.vm.defaultOptions.templates.value({name:'aaa'})).toBe('aaa')

    done()
  })
})

describe('Address Element Events', () => {
  it('should trigger `change` event on address change', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'address',
          provider: 'google',
          onChange: onChangeMock,
        }
      }
    }, {
      attach: true
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

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

describe('Address Element Model', () => {
  let raw
  let formatted
  let display

  beforeEach(() => {
    raw = {"address_components":[{"long_name":"Boulevard Napoleon","short_name":"Boulevard Napoleon","types":["route"]},{"long_name":"Louisville","short_name":"Louisville","types":["locality","political"]},{"long_name":"Jefferson County","short_name":"Jefferson County","types":["administrative_area_level_2","political"]},{"long_name":"Kentucky","short_name":"KY","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"40205","short_name":"40205","types":["postal_code"]}],"formatted_address":"Boulevard Napoleon, Louisville, KY 40205, USA","geometry":{"address":{"lat":()=>{return 38.2232165},"lng":()=>{return -85.69585219999999}}}}
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

  it('should set `value` from google raw object', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
          provider: 'google',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    a.vm.handleAddressChange(formatted, raw)

    expect(address.vm.value).toBe('Boulevard Napoleon')
    expect(address2.vm.value).toBe(null)
    expect(zip.vm.value).toBe('40205')
    expect(city.vm.value).toBe('Louisville')
    expect(state.vm.value).toBe('KY')
    expect(country.vm.value).toBe('US')

    done()
  })

  it('should set `value` from algolia raw object', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    raw = {"name":"22 Boulevard Napoleon","administrative":"Kentucky","county":"Jefferson County","city":"Louisville","country":"United States of America","countryCode":"us","type":"address","latlng":{"lat":38.2218,"lng":-85.6947},"postcode":"40205","postcodes":["40205"],"highlight":{"name":"<em>22</em> <em>Boulevard</em> <em>Napoleon</em>","city":"<em>Louisville</em>","administrative":"<em>Kentucky</em>","country":"<em>United</em> <em>States</em> <em>of</em> <em>America</em>","county":"Jefferson County","postcode":"40205"},"hit":{"country":"United States of America","is_country":false,"city":["Louisville"],"is_highway":true,"importance":26,"_tags":["highway","highway/residential","country/us","address","source/osm"],"postcode":["40205"],"county":["Jefferson County"],"population":612780,"country_code":"us","is_city":false,"is_popular":false,"administrative":["Kentucky"],"admin_level":15,"is_suburb":false,"locale_names":["22 Boulevard Napoleon"],"_geoloc":{"lat":38.2218,"lng":-85.6947},"objectID":"157851623_331770377","_highlightResult":{"country":{"value":"<em>United</em> <em>States</em> <em>of</em> <em>America</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["united","states","of","america"]},"city":[{"value":"<em>Louisville</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["louisville"]}],"postcode":[{"value":"40205","matchLevel":"none","matchedWords":[]}],"county":[{"value":"Jefferson County","matchLevel":"none","matchedWords":[]}],"administrative":[{"value":"<em>Kentucky</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["kentucky"]}],"locale_names":[{"value":"<em>22</em> <em>Boulevard</em> <em>Napoleon</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["boulevard","napoleon","22"]}]}},"hitIndex":0,"query":"Boulevard Napoleon 22, Louisville, Kentucky, United States of America","rawAnswer":{"hits":[{"country":"United States of America","is_country":false,"city":["Louisville"],"is_highway":true,"importance":26,"_tags":["highway","highway/residential","country/us","address","source/osm"],"postcode":["40205"],"county":["Jefferson County"],"population":612780,"country_code":"us","is_city":false,"is_popular":false,"administrative":["Kentucky"],"admin_level":15,"is_suburb":false,"locale_names":["22 Boulevard Napoleon"],"_geoloc":{"lat":38.2218,"lng":-85.6947},"objectID":"157851623_331770377","_highlightResult":{"country":{"value":"<em>United</em> <em>States</em> <em>of</em> <em>America</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["united","states","of","america"]},"city":[{"value":"<em>Louisville</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["louisville"]}],"postcode":[{"value":"40205","matchLevel":"none","matchedWords":[]}],"county":[{"value":"Jefferson County","matchLevel":"none","matchedWords":[]}],"administrative":[{"value":"<em>Kentucky</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["kentucky"]}],"locale_names":[{"value":"<em>22</em> <em>Boulevard</em> <em>Napoleon</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["boulevard","napoleon","22"]}]}}],"nbHits":1,"processingTimeMS":97,"query":"Boulevard Napoleon 22, Louisville, Kentucky, United States of America","params":"hitsPerPage=5&language=en&type=address&query=Boulevard%20Napoleon%2022%2C%20Louisville%2C%20Kentucky%2C%20United%20States%20of%20America","degradedQuery":false},"value":"22 Boulevard Napoleon, Louisville, Kentucky, United States of America"}
    formatted = {"country":"United States of America","country_code":"US","state":"Kentucky","state_code":"KY","city":"Louisville","zip":"40205","address":"22 Boulevard Napoleon","formatted_address":"22 Boulevard Napoleon, Louisville, Kentucky, United States of America","lat":38.2218,"lng":-85.6947}
    display = "22 Boulevard Napoleon, Louisville, Kentucky, United States of America"

    let form = createForm({
      schema: {
        a: {
          type: 'address',
          provider: 'algolia',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    a.vm.handleAddressChange(formatted, raw)

    expect(address.vm.value).toBe('22 Boulevard Napoleon')
    expect(address2.vm.value).toBe(null)
    expect(zip.vm.value).toBe('40205')
    expect(city.vm.value).toBe('Louisville')
    expect(state.vm.value).toBe('KY')
    expect(country.vm.value).toBe('US')

    done()
  })

  it('should `load` data', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'address',
        }
      }
    })

    let a = form.findAllComponents({ name: 'AddressElement' }).at(0)

    a.vm.load({
      a: {
        address: 'a',
        address2: 'b',
        zip: 'c',
        city: 'd',
        country: 'US',
        state: 'NY',
      }
    })

    let address = a.findAllComponents({ name: 'TextElement' }).at(0)
    let address2 = a.findAllComponents({ name: 'TextElement' }).at(1)
    let zip = a.findAllComponents({ name: 'TextElement' }).at(2)
    let city = a.findAllComponents({ name: 'TextElement' }).at(3)
    let state = a.findAllComponents({ name: 'SelectElement' }).at(0)
    let country = a.findAllComponents({ name: 'SelectElement' }).at(1)

    LocalVue.nextTick(() => {
      expect(address.vm.value).toBe('a')
      expect(address2.vm.value).toBe('b')
      expect(zip.vm.value).toBe('c')
      expect(city.vm.value).toBe('d')
      expect(state.vm.value).toBe('NY')
      expect(country.vm.value).toBe('US')

      done()
    })
  })
})