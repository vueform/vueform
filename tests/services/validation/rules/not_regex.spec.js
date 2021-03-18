import { createForm, findAllComponents, change } from 'test-helpers'
import flushPromises from 'flush-promises'

describe('Not Regex Rule', () => {
  it('should validate if not matches regex', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'not_regex:/^[A-Z]+$/'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, 'asdf')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'ASDF')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})