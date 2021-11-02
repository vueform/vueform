import { createForm, findAllComponents } from 'test-helpers'

let windowSpy

beforeEach(() => {
  windowSpy = jest.spyOn(global, 'window', 'get')
})

afterEach(() => {
  windowSpy.mockRestore()
})

describe('Location Algolia Service', () => {
  let raw
  let formatted
  let display

  beforeEach(() => {
    raw = {"name":"22 Boulevard Napoleon","administrative":"Kentucky","county":"Jefferson County","city":"Louisville","country":"United States of America","countryCode":"us","type":"address","latlng":{"lat":38.2218,"lng":-85.6947},"postcode":"40205","postcodes":["40205"],"highlight":{"name":"<em>22</em> <em>Boulevard</em> <em>Napoleon</em>","city":"<em>Louisville</em>","administrative":"<em>Kentucky</em>","country":"<em>United</em> <em>States</em> <em>of</em> <em>America</em>","county":"Jefferson County","postcode":"40205"},"hit":{"country":"United States of America","is_country":false,"city":["Louisville"],"is_highway":true,"importance":26,"_tags":["highway","highway/residential","country/us","address","source/osm"],"postcode":["40205"],"county":["Jefferson County"],"population":612780,"country_code":"us","is_city":false,"is_popular":false,"administrative":["Kentucky"],"admin_level":15,"is_suburb":false,"locale_names":["22 Boulevard Napoleon"],"_geoloc":{"lat":38.2218,"lng":-85.6947},"objectID":"157851623_331770377","_highlightResult":{"country":{"value":"<em>United</em> <em>States</em> <em>of</em> <em>America</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["united","states","of","america"]},"city":[{"value":"<em>Louisville</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["louisville"]}],"postcode":[{"value":"40205","matchLevel":"none","matchedWords":[]}],"county":[{"value":"Jefferson County","matchLevel":"none","matchedWords":[]}],"administrative":[{"value":"<em>Kentucky</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["kentucky"]}],"locale_names":[{"value":"<em>22</em> <em>Boulevard</em> <em>Napoleon</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["boulevard","napoleon","22"]}]}},"hitIndex":0,"query":"Boulevard Napoleon 22, Louisville, Kentucky, United States of America","rawAnswer":{"hits":[{"country":"United States of America","is_country":false,"city":["Louisville"],"is_highway":true,"importance":26,"_tags":["highway","highway/residential","country/us","address","source/osm"],"postcode":["40205"],"county":["Jefferson County"],"population":612780,"country_code":"us","is_city":false,"is_popular":false,"administrative":["Kentucky"],"admin_level":15,"is_suburb":false,"locale_names":["22 Boulevard Napoleon"],"_geoloc":{"lat":38.2218,"lng":-85.6947},"objectID":"157851623_331770377","_highlightResult":{"country":{"value":"<em>United</em> <em>States</em> <em>of</em> <em>America</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["united","states","of","america"]},"city":[{"value":"<em>Louisville</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["louisville"]}],"postcode":[{"value":"40205","matchLevel":"none","matchedWords":[]}],"county":[{"value":"Jefferson County","matchLevel":"none","matchedWords":[]}],"administrative":[{"value":"<em>Kentucky</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["kentucky"]}],"locale_names":[{"value":"<em>22</em> <em>Boulevard</em> <em>Napoleon</em>","matchLevel":"partial","fullyHighlighted":true,"matchedWords":["boulevard","napoleon","22"]}]}}],"nbHits":1,"processingTimeMS":97,"query":"Boulevard Napoleon 22, Louisville, Kentucky, United States of America","params":"hitsPerPage=5&language=en&type=address&query=Boulevard%20Napoleon%2022%2C%20Louisville%2C%20Kentucky%2C%20United%20States%20of%20America","degradedQuery":false},"value":"22 Boulevard Napoleon, Louisville, Kentucky, United States of America"}
    formatted = {"country":"United States of America","country_code":"US","state":"Kentucky","state_code":"KY","city":"Louisville","zip":"40205","address":"22 Boulevard Napoleon","formatted_address":"22 Boulevard Napoleon, Louisville, Kentucky, United States of America","lat":38.2218,"lng":-85.6947}
    display = "22 Boulevard Napoleon, Louisville, Kentucky, United States of America"

    let ShadowRoot = window.ShadowRoot

    windowSpy.mockImplementation(() => ({
      ShadowRoot,
      places: () => {
        return {
          on: (evt, callback) => {  },
        }
      }
    }))
  })

afterEach(() => {
  windowSpy.mockRestore()
})  

  it('should return plain value in `formatValue` if the provided data is not a plain object',async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'algolia',
        }
      }
    })

    let a = findAllComponents(form, { name: 'LocationElement' }).at(0)

    let value = a.vm.locationService.formatValue([])

    expect(value).toStrictEqual([])
  })

  it('should trigger `handleChange` on `place_changed`',async () => {
    let ShadowRoot = window.ShadowRoot

    windowSpy.mockImplementation(() => ({
      ShadowRoot,
      places: () => {
        return {
          on: (evt, callback) => { if(typeof callback == 'function') { callback(raw) } },
        }
      }
    }))

    let handleChangeMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'algolia',
        }
      }
    })

    let a = findAllComponents(form, { name: 'LocationElement' }).at(0)

    a.vm.$vueform.services.location.algolia.handleChange = handleChangeMock

    expect(handleChangeMock.mock.calls.length).toBe(0)

    a.vm.locationService.places.on('change', a.vm.$vueform.services.location.algolia.handleChange)

    expect(handleChangeMock.mock.calls.length).toBe(1)
  })

  it('should not set state if country_code is not US',async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'algolia',
        },
      }
    }, {
      attach: true
    })

    let a = findAllComponents(form, { name: 'LocationElement' }).at(0)

    raw.countryCode = 'de'

    formatted.state = null
    formatted.state_code = null
    formatted.country_code = 'DE'

    let value = a.vm.locationService.formatValue(raw)

    expect(value).toStrictEqual(formatted)
  })

  it('should return null if state is not found',async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'algolia',
        },
      }
    }, {
      attach: true
    })

    let a = findAllComponents(form, { name: 'LocationElement' }).at(0)

    raw.administrative = 'aaa'

    formatted.state = 'aaa'
    formatted.state_code = null

    let value = a.vm.locationService.formatValue(raw)

    expect(value).toStrictEqual(formatted)
  })

  it('should Places.destroy on `destroy`',async () => {
    let destroyMock = jest.fn()

    let ShadowRoot = window.ShadowRoot

    windowSpy.mockImplementation(() => ({
      ShadowRoot,
      places: () => {
        return {
          on: (evt, callback) => {  },
          destroy: destroyMock
        }
      }
    }))

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'algolia',
        },
      }
    })

    let a = findAllComponents(form, { name: 'LocationElement' }).at(0)

    expect(destroyMock.mock.calls.length).toBe(0)

    a.vm.locationService.destroy()

    expect(destroyMock.mock.calls.length).toBe(1)
  })

  it('should return `stateCode` based on state name',async () => {
    let destroyMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'location',
          provider: 'algolia',
        },
      }
    })

    let a = findAllComponents(form, { name: 'LocationElement' }).at(0)

    expect(a.vm.locationService.stateCode('alabama')).toBe('AL')
    expect(a.vm.locationService.stateCode('alabamaaaa')).toBe(null)
  })
})