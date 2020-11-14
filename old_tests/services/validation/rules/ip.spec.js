import { createForm, findAllComponents, change } from './.test-helpers'

describe('IP Rule', () => {
  it('should validate IP', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'ip'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '127.0.0.1')
    expect(a.vm.invalid).toBe(false)

    change(a, '255.255.255.255')
    expect(a.vm.invalid).toBe(false)

    change(a, '2001:db8:85a3:8d3:1319:8a2e:370:7348')
    expect(a.vm.invalid).toBe(false)

    change(a, 'asdf')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})