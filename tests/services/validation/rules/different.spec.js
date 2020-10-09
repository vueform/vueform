import { createLocalVue } from '@vue/test-utils'
import { createForm, change } from './.test-helpers'

describe('Different Rule', () => {
  it('should be valid if values do not match', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: 'different:a'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    change(a, 'aaa')
    change(b, 'bbb')

    expect(b.vm.invalid).toBe(false)

    done()
  })

  it('should be invalid if values match', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: 'different:a'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    change(a, 'aaa')
    change(b, 'aaa')

    expect(b.vm.invalid).toBe(true)

    done()
  })

  it('should watch the change of the other field', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: 'different:a'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    setTimeout(() => {
      change(a, 'aaa')
      change(b, 'bbb')

      expect(b.vm.invalid).toBe(false)

      setTimeout(() => {
        a.get('input').setValue('bbb')

        setTimeout(() => {
          expect(b.vm.invalid).toBe(true)

          a.get('input').setValue('aaa')

          setTimeout(() => {
            expect(b.vm.invalid).toBe(false)

            done()
          }, 1)
        }, 1)
      }, 1)
    }, 1)
  })
})