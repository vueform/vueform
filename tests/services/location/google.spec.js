import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../../src/utils/testHelpers'

let windowSpy

beforeEach(() => {
  windowSpy = jest.spyOn(global, 'window', 'get')
})

afterEach(() => {
  windowSpy.mockRestore()
})

describe('Location Google Service', () => {
  let raw
  let formatted
  let display

  beforeEach(() => {
    raw = {"address_components":[{"long_name":"2211","short_name":"2211","types":["street_number"]},{"long_name":"Boulevard Napoleon","short_name":"Boulevard Napoleon","types":["route"]},{"long_name":"Belknap","short_name":"Belknap","types":["neighborhood","political"]},{"long_name":"Louisville","short_name":"Louisville","types":["locality","political"]},{"long_name":"Jefferson County","short_name":"Jefferson County","types":["administrative_area_level_2","political"]},{"long_name":"Kentucky","short_name":"KY","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"40205","short_name":"40205","types":["postal_code"]},{"long_name":"1835","short_name":"1835","types":["postal_code_suffix"]}],"formatted_address":"2211 Boulevard Napoleon, Louisville, KY 40205, USA","geometry":{"location":{"lat":()=>{return 38.22325339999999},"lng":()=>{return -85.6955977}}}}
    formatted = {"country":"United States","country_code":"US","state":"Kentucky","state_code":"KY","city":"Louisville","zip":"40205","address":"Boulevard Napoleon Boulevard Napoleon","formatted_address":"2211 Boulevard Napoleon, Louisville, KY 40205, USA","lat":38.22325339999999,"lng":-85.6955977}
    display = "2211 Boulevard Napoleon, Louisville, KY 40205, USA"

    windowSpy.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: jest.fn(() => {
              return {
                addListener: (evt, callback) => {  },
                getPlace: () => { return raw }
              }
            })
          },
          event: {
            removeListener: () => {},
            clearInstanceListeners: () => {},
          }
        }
      },
    }))
  })

  it('should set `value` from raw object with all data', (done) => {
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

    a.vm.locationService.handleChange(raw)

    expect(a.vm.value).toStrictEqual(formatted)
    expect(a.vm.$refs.input.value).toStrictEqual(display)

    done()
  })

  it('should return plain value in `formatValue` if the provided data is not a plain object', (done) => {
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

    a.vm.locationService.handleChange([])

    expect(a.vm.value).toStrictEqual([])
    expect(a.vm.$refs.input.value).toStrictEqual('')

    done()
  })

  it('should trigger `handleChange` on `place_changed`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let handleChangeMock = jest.fn()

    windowSpy.mockImplementation(() => ({
      google: {
        maps: {
          places: {
            Autocomplete: jest.fn(() => {
              return {
                addListener: (evt, callback) => { if (typeof callback === 'function') { callback() } },
                getPlace: () => { return raw }
              }
            })
          },
          event: {
            removeListener: () => {},
            clearInstanceListeners: () => {},
          }
        }
      },
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

    a.vm.$laraform.services.location.google.handleChange = handleChangeMock

    expect(handleChangeMock.mock.calls.length).toBe(0)

    a.vm.locationService.autocomplete.addListener('change_place', a.vm.$laraform.services.location.google.handleChange)

    expect(handleChangeMock.mock.calls.length).toBe(1)

    done()
  })

  it('should remove `pac-container` on destroy', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
        },
        b: {
          type: 'static',
          content: '<span class="pac-container"></span>'
        }
      }
    }, {
      attach: true
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    expect(form.find('.pac-container').exists()).toBe(true)

    a.vm.locationService.destroy()

    expect(form.find('.pac-container').exists()).toBe(false)

    done()
  })

  it('should not set state if country_code is not US', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'google',
        },
      }
    }, {
      attach: true
    })

    let a = form.findAllComponents({ name: 'LocationElement' }).at(0)

    raw.address_components[6].short_name = 'DE'

    formatted.state = null
    formatted.state_code = null
    formatted.country_code = 'DE'

    a.vm.locationService.handleChange(raw)

    expect(a.vm.value).toStrictEqual(formatted)

    done()
  })
})