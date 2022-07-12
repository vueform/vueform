import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'
import { nextTick } from 'vue'

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

describe('Exists Rule', () => {
  it('should be valid if endpoints return true', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'exists:check'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    form.vm.$vueform.services.axios.request = (() => ({data: true}))

    a.vm.validate()

    await flushPromises()

    expect(a.vm.invalid).toBe(false)
  })

  it('should be invalid if endpoints return false', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'exists:check'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    form.vm.$vueform.services.axios.request = (() => ({data: false}))

    a.vm.validate()

    await flushPromises()
    await nextTick()

    expect(a.vm.invalid).toBe(true)
  })

  it('should work with function endpoint', async () => {
    let existsMock = jest.fn(() => ({data: false}))

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          default: 'value',
          rules: 'exists:check'
        },
      }
    }, {
      config: {
        endpoints: {
          exists: existsMock,
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()

    await flushPromises()

    expect(existsMock).toHaveBeenCalledWith('value', 'a', {'0': 'check'}, a.vm, form.vm)
    expect(a.vm.invalid).toBe(true)
  })

  it('should replace params with field values after first param', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'exists:a,b,c',
          default: 'aaa'
        },
        b: {
          type: 'text',
          default: 'bbb'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    let postMock = jest.fn(() => ({data: true}))

    form.vm.$vueform.services.axios.request = postMock

    a.vm.validate()

    await flushPromises()

    expect(postMock).toHaveBeenCalledTimes(1)
    expect(postMock).toHaveBeenLastCalledWith({
      url: a.vm.$vueform.config.endpoints.exists.url,
      method: a.vm.$vueform.config.endpoints.exists.method,
      data: {
        params: {
          "0": 'a',
          "1": 'bbb',
          "2": 'c',
        },
        a: 'aaa',
        vueformFieldName: 'a',
        value: 'aaa',
        name: 'a',
      }
    })
  })
})