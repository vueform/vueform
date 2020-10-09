import { createForm, change } from './.test-helpers'

describe('Not Regex Rule', () => {
  it('should validate if not matches regex', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'not_regex:/^[A-Z]+$/'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, 'asdf')
    expect(a.vm.invalid).toBe(false)

    change(a, 'ASDF')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})