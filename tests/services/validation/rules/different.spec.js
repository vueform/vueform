import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('Different Rule', () => {
  it('should be valid if values do not match', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: 'different:a'
        },
      }
    })

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    a.update('aaa')
    b.update('bbb')

    await flushPromises()

    expect(b.invalid).toBe(false)
  })

  it('should be invalid if values match', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: 'different:a'
        },
      }
    })

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    a.update('aaa')
    b.update('aaa')

    await flushPromises()

    expect(b.invalid).toBe(true)
  })

  it('should watch the change of the other field', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: 'different:a'
        },
      }
    })

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    a.update('aaa')
    b.update('bbb')

    await flushPromises()

    expect(b.invalid).toBe(false)

    a.update('bbb')

    await flushPromises()

    expect(b.invalid).toBe(true)

    a.update('aaa')

    await flushPromises()

    expect(b.invalid).toBe(false)
  })
})