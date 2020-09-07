import { createLocalVue } from '@vue/test-utils'
import { createForm, change } from './../../../../src/utils/testHelpers'

describe('Not In Rule', () => {
  it('should check if value is not among a provided list of strings', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'not_in:asdf,jkl'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, 'aaa')
    expect(a.vm.invalid).toBe(false)

    change(a, 'asdf')
    expect(a.vm.invalid).toBe(true)

    change(a, 'jkl')
    expect(a.vm.invalid).toBe(true)

    change(a, ',')
    expect(a.vm.invalid).toBe(false)

    done()
  })
})