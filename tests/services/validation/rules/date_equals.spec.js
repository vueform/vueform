import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('Date Equals Rule', () => {
  it('should be only valid if dates are equal', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'date_equals:2020-11-20'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '2020-11-20')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '2020-11-21')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})