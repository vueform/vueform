import { createLocalVue } from '@vue/test-utils'
import { createForm, change } from './../../../../src/utils/testHelpers'

describe('UUID Rule', () => {
  it('should validate UUID', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'uuid',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, '123e4567-e89b-12d3-a456-426614174000')
    expect(a.vm.invalid).toBe(false)

    change(a, '123e4567-e89b-12d3-a456-42661417400')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})