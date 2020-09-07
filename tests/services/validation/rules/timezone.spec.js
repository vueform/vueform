import { createForm, change } from './../../../../src/utils/testHelpers'

describe('Timezone Rule', () => {
  it('should validate timezone', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'timezone',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, 'Europe/Budapest')
    expect(a.vm.invalid).toBe(false)

    change(a, 'Budapest')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})