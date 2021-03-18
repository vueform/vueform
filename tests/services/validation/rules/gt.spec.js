import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change, setInstances } from 'test-helpers'
import { nextTick } from 'composition-api'

describe('Greater Than Rule', () => {
  it('should validate if the element\'s value is greater than an other field\'s if value is string', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    await nextTick()

    a.update('aaa')
    b.update('aa')
    await flushPromises()

    expect(a.invalid).toBe(false)

    a.update('aa')
    await flushPromises()

    expect(a.invalid).toBe(true)
  })

  it('should validate if the element\'s value is greater than an other field\'s if value is numeric', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'numeric|gt:b'
        },
        b: {
          type: 'text',
          rules: 'numeric'
        },
      }
    })

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    a.update('5')
    b.update('3')
    await flushPromises()

    expect(a.invalid).toBe(false)

    a.update('3')
    await flushPromises()

    expect(a.invalid).toBe(true)
  })

  it('should validate if the element\'s value is greater than an other field\'s if value is array', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|gt:b',
          initial: 5,
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

    expect(a.invalid).toBe(false)

    a.remove(0)
    a.remove(0)

    a.validate()
    await flushPromises()

    expect(a.invalid).toBe(true)
  })

  it('should watch for change in other field\'s value', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gt:b'
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

    expect(a.invalid).toBe(false)

    b.update('aaaa')
    await flushPromises()

    expect(a.invalid).toBe(true)
  })

  it('should include other field\'s size in error message', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    b.update('aaaaa')
    a.update('aaa')
    await flushPromises()

    expect(a.invalid).toBe(true)
    expect(a.error).toContain(5)
  })

  it('should watch other field\'s size in error message', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    b.update('aaaaa')
    a.update('aaa')
    await flushPromises()

    expect(a.invalid).toBe(true)
    expect(a.error).toContain(5)

    b.update('aaaaaaa')
    await flushPromises()

    expect(a.error).toContain(7)
  })
})