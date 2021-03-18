import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('UUID Rule', () => {
  it('should validate UUID', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'uuid',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '123e4567-e89b-12d3-a456-426614174000')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '123e4567-e89b-12d3-a456-42661417400')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})