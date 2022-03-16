import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: true }),
  post: () => Promise.resolve({ data: true }),
  request: () => Promise.resolve({ data: true }),
  interceptors: {
    response: {
      use: () => {},
    }
  }
}))

describe('Unique Rule', () => {
  it('should be valid if endpoints return true', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'unique:check'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    form.vm.$vueform.services.axios.request = jest.fn(() => ({data:true}))

    a.vm.validate()

    await flushPromises()

    expect(a.vm.invalid).toBe(false)
  })

  it('should be invalid if endpoints return false', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'unique:check'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    form.vm.$vueform.services.axios.request = jest.fn(() => ({data:false}))

    a.vm.validate()

    await flushPromises()

    expect(a.vm.invalid).toBe(true)
  })

  it('should work with function endpoint', async () => {
    let uniqueMock = jest.fn(() => ({data: false}))

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          default: 'value',
          rules: 'unique:check'
        },
      }
    }, {
      config: {
        endpoints: {
          unique: uniqueMock,
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()

    await flushPromises()

    expect(uniqueMock).toHaveBeenCalledWith('value', 'a', {'0': 'check'}, a.vm, form.vm)
    expect(a.vm.invalid).toBe(true)
  })

  it('should replace params with field values after first param', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'unique:a,b,c',
          default: 'aaa'
        },
        b: {
          type: 'text',
          default: 'bbb'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    let postMock = jest.fn(() => ({data:true}))

    form.vm.$vueform.services.axios.request = postMock

    a.vm.validate()

    await flushPromises()

    expect(postMock).toHaveBeenCalledTimes(1)
    expect(postMock).toHaveBeenCalledWith({
      url: a.vm.$vueform.config.endpoints.unique.url,
      method: a.vm.$vueform.config.endpoints.unique.method,
      data: {
        params: {
          "0": 'a',
          "1": 'bbb',
          "2": 'c',
        },
        name: 'a',
        value: 'aaa'
      }
    })
  })
})