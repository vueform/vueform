import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change, setInstances } from 'test-helpers'

describe('Lower Than Rule', () => {
  it('should validate if the element\'s value is lower than an other field\'s if value is string', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'lt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    a.update('aa')
    b.update('aa')
    await flushPromises()

    expect(a.invalid).toBe(true)

    a.update('a')
    await flushPromises()

    expect(a.invalid).toBe(false)
  })

  it('should validate if the element\'s value is lower than an other field\'s if value is numeric', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'numeric|lt:b'
        },
        b: {
          type: 'text',
          rules: 'numeric'
        },
      }
    })

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    a.update('3')
    b.update('3')
    await flushPromises()

    expect(a.invalid).toBe(true)

    a.update('2')
    await flushPromises()

    expect(a.invalid).toBe(false)
  })

  it('should validate if the element\'s value is lower than an other field\'s if value is array', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|lt:b',
          initial: 3,
          element: {
            type: 'text'
          }
        },
        b: {
          type: 'list',
          rules: 'array',
          initial: 3,
          element: {
            type: 'text'
          }
        },
      }
    })

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    a.validate()
    await flushPromises()

    expect(a.invalid).toBe(true)

    a.remove(0)

    a.validate()
    await flushPromises()

    expect(a.invalid).toBe(false)
  })
})