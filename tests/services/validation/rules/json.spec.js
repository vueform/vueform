import { createLocalVue } from '@vue/test-utils'
import { createForm, change } from './../../../../src/utils/testHelpers'

describe('JSON Rule', () => {
  it('should validate JSON', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'json'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, '{"a":"aaa"}')
    expect(a.vm.invalid).toBe(false)

    change(a, '{a:"aaa"}')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})