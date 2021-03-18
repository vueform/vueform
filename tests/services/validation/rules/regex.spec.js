import { createForm, findAllComponents, change } from 'test-helpers'
import flushPromises from 'flush-promises'

describe('Regex Rule', () => {
  it('should validate regex', async () => {
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
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'ASDF')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })
})