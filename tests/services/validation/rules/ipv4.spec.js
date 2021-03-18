import { createForm, findAllComponents, change } from 'test-helpers'
import flushPromises from 'flush-promises'

describe('IPv4 Rule', () => {
  it('should validate IPv4', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'ipv4'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '127')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '127.0')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '127.0.0')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '127.0.0.1')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '255.255.255.255')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '256.255.255.255')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '255.256.255.255')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '255.255.256.255')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '255.255.255.256')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'asdf')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '1234')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})