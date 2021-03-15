import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('Same Rule', () => {
  it('should be invalid if values do not match', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: 'same:a'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    change(a, 'aaa')
    change(b, 'bbb')

    expect(b.vm.invalid).toBe(true)
  })

  it('should be valid if values match', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: 'same:a'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    change(a, 'aaa')
    change(b, 'aaa')

    expect(b.vm.invalid).toBe(false)
  })

  it('should watch the change of the other field', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: 'same:a'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    LocalVue.nextTick(() => {
      change(a, 'aaa')
      change(b, 'bbb')

      expect(b.vm.invalid).toBe(true)

      setTimeout(() => {
        a.get('input').setValue('bbb')

        LocalVue.nextTick(() => {
          expect(b.vm.invalid).toBe(false)

          a.get('input').setValue('aaa')

          LocalVue.nextTick(() => {
            expect(b.vm.invalid).toBe(true)

            done()
          })
        })
      }, 1)
    })
  })
})