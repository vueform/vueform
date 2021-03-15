import { createForm, findAllComponents, change } from 'test-helpers'

describe('Timezone Rule', () => {
  it('should validate timezone', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'timezone',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, 'Europe/Budapest')
    expect(a.vm.invalid).toBe(false)

    change(a, 'Budapest')
    expect(a.vm.invalid).toBe(true)
  })
})