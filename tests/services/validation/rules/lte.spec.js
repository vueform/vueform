import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change, setInstances } from 'test-helpers'

describe('Lower Than Equal Rule', () => {
  it('should validate if the element\'s value is lower than or equal an other field\'s if value is string', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'lte:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    a.update('aaa')
    b.update('aa')
    await flushPromises()

    expect(a.invalid).toBe(true)

    a.update('aa')
    await flushPromises()

    expect(a.invalid).toBe(false)
  })

  it('should validate if the element\'s value is lower than or equal an other field\'s if value is numeric', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'numeric|lte:b'
        },
        b: {
          type: 'text',
          rules: 'numeric'
        },
      }
    })

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    a.update('4')
    b.update('3')
    await flushPromises()

    expect(a.invalid).toBe(true)

    a.update('3')
    await flushPromises()

    expect(a.invalid).toBe(false)
  })

  it('should validate if the element\'s value is lower than or equal an other field\'s if value is array', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|lte:b',
          initial: 4,
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