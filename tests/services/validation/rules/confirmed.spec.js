import { createLocalVue } from '@vue/test-utils'
import { createForm, change } from './../../../../src/utils/testHelpers'

describe('Confirmed Rule', () => {
  it('should be invalid if values do not match', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'confirmed'
        },
        a_confirmation: {
          type: 'text',
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let a_confirmation = form.findAllComponents({ name: 'TextElement' }).at(1)

    change(a, 'aaa')
    change(a_confirmation, 'bbb')

    expect(a.vm.invalid).toBe(true)

    done()
  })

  it('should be valid if values match', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'confirmed'
        },
        a_confirmation: {
          type: 'text',
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let a_confirmation = form.findAllComponents({ name: 'TextElement' }).at(1)

    LocalVue.nextTick(() => {
      change(a, 'aaa')
      change(a_confirmation, 'aaa')

      LocalVue.nextTick(() => {
        expect(a.vm.invalid).toBe(false)

        done()
      })
    })
  })

  it('should watch the change of the other field', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'confirmed'
        },
        a_confirmation: {
          type: 'text',
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let a_confirmation = form.findAllComponents({ name: 'TextElement' }).at(1)

    LocalVue.nextTick(() => {
      change(a, 'aaa')
      change(a_confirmation, 'bbb')

      expect(a.vm.invalid).toBe(true)

      a.get('input').setValue('bbb')

      LocalVue.nextTick(() => {
        expect(a.vm.invalid).toBe(false)

        a.get('input').setValue('ccc')
        a.get('input').trigger('keyup')

        LocalVue.nextTick(() => {
          expect(a.vm.invalid).toBe(true)
          
          done()
        })
      })
    })
  })
})