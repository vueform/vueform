import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: true }),
  post: () => Promise.resolve({ data: true }),
}))

describe('Exists Rule', () => {
  it('should be valid if endpoints return true', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'exists:check'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    form.vm.$laraform.services.axios.post = () => {
      return new Promise((resolve, reject) => {
        setTimeout(function(){
          resolve({ data: true })
        }, 1)
      })
    }

    a.vm.validate()

    expect(a.vm.invalid).toBe(false)
  })

  it('should be invalid if endpoints return false', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'exists:check'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    form.vm.$laraform.services.axios.post = () => {
      return new Promise((resolve, reject) => {
        setTimeout(function(){
          resolve({ data: false })
        }, 1)
      })
    }

    a.vm.validate()

    setTimeout(function() {
      expect(a.vm.invalid).toBe(true)

      done()
    }, 1)
  })

  it('should replace params with field values after first param', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let postMock = jest.fn((endpoint, data) => { return { data: true } })

    form.vm.$laraform.services.axios.post = postMock

    a.vm.validate()

    expect(postMock.mock.calls.length).toBe(1)
    expect(postMock.mock.calls[0][1]).toStrictEqual({
      params: {
        "0": 'a',
        "1": 'bbb',
        "2": 'c',
      },
      a: 'aaa',
      laraformFieldName: 'a'
    })
    
    done()
  })
})