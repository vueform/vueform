import { createForm, findAllComponents, change } from './.test-helpers'

describe('IPv6 Rule', () => {
  it('should validate IPv6', (done) => {
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
    expect(a.vm.invalid).toBe(false)

    change(a, 'asdf')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})