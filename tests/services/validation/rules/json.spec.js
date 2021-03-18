import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('JSON Rule', () => {
  it('should validate JSON', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'json'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '{"a":"aaa"}')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '{a:"aaa"}')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})