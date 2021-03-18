import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('In Rule', () => {
  it('should check if value is among a provided list of strings', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'in:asdf,jkl'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, 'aaa')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'asdf')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'jkl')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, ',')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})