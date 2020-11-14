import { createForm, findAllComponents, change } from './.test-helpers'

describe('Regex Rule', () => {
  it('should validate regex', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'regex:/^[A-Z]+$/'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, 'asdf')
    expect(a.vm.invalid).toBe(true)

    change(a, 'ASDF')
    expect(a.vm.invalid).toBe(false)

    done()
  })
})