import { createForm, findAllComponents, change } from 'test-helpers'
import flushPromises from 'flush-promises'

describe('IPv6 Rule', () => {
  it('should validate IPv6', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'ipv6'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '2001:db8:85a3:8d3:1319:8a2e:370:7348')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'asdf')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})