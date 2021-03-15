import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('Nullable Rule', () => {
  it('should have a rule ignored if nullable is present and the value is unfilled', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'nullable|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()

    expect(a.vm.invalid).toBe(false)

    a.get('input').setValue('hello')
    a.get('input').trigger('keyup')

    setTimeout(() => {
      expect(a.vm.invalid).toBe(true)

      a.get('input').setValue('')
      a.get('input').trigger('keyup')

      setTimeout(() => {
        expect(a.vm.invalid).toBe(false)
        
        done()
      }, 1)
    }, 1)
  })
})