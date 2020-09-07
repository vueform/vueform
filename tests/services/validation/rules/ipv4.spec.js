import { createForm, change } from './../../../../src/utils/testHelpers'

describe('IPv4 Rule', () => {
  it('should validate IPv4', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'ipv4'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, '127')
    expect(a.vm.invalid).toBe(true)

    change(a, '127.0')
    expect(a.vm.invalid).toBe(true)

    change(a, '127.0.0')
    expect(a.vm.invalid).toBe(true)

    change(a, '127.0.0.1')
    expect(a.vm.invalid).toBe(false)

    change(a, '255.255.255.255')
    expect(a.vm.invalid).toBe(false)

    change(a, '256.255.255.255')
    expect(a.vm.invalid).toBe(true)

    change(a, '255.256.255.255')
    expect(a.vm.invalid).toBe(true)

    change(a, '255.255.256.255')
    expect(a.vm.invalid).toBe(true)

    change(a, '255.255.255.256')
    expect(a.vm.invalid).toBe(true)

    change(a, 'asdf')
    expect(a.vm.invalid).toBe(true)

    change(a, '1234')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})