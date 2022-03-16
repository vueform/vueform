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

describe('Active URL Rule', () => {
  it('should be valid if endpoints return true', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'active_url',
          value: 'a',
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
          rules: 'active_url',
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
    let activeUrlMock = jest.fn(() => ({data: false}))

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          default: 'value',
          rules: 'active_url'
        },
      }
    }, {
      config: {
        endpoints: {
          activeUrl: activeUrlMock,
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()

    await flushPromises()

    expect(activeUrlMock).toHaveBeenCalledWith('value', a.vm, form.vm)
    expect(a.vm.invalid).toBe(true)
  })

  it('should submit right data', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'active_url',
          default: 'url',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    let postMock = jest.fn(() => ({data:true}))

    form.vm.$vueform.services.axios.request = postMock

    a.vm.validate()

    await flushPromises()

    expect(postMock).toHaveBeenCalledTimes(1)
    expect(postMock).toHaveBeenCalledWith({
      url: a.vm.$vueform.config.endpoints.activeUrl.url,
      method: a.vm.$vueform.config.endpoints.activeUrl.method,
      data: {
        url: 'url',
      }
    })
  })
})