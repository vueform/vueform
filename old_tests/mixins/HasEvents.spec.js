import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'

describe('Has Events Mixin', () => {
  it('should unsubscribe from events', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let changeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    form.vm.on('change', changeMock)

    expect(changeMock.mock.calls.length).toBe(0)

    let a = form.findComponent({ name: 'TextElement' })

    a.get('input').setValue('aaa')
    a.get('input').trigger('keyup')
    
    LocalVue.nextTick(() => {
      expect(changeMock.mock.calls.length).toBe(1)

      form.vm.off('change')

      a.get('input').setValue('bbb')
      a.get('input').trigger('keyup')

      LocalVue.nextTick(() => {
        expect(changeMock.mock.calls.length).toBe(1)
        
        done()
      })
    })
  })
})