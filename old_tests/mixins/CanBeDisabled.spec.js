import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'

describe('Can Be Disabled Mixin', () => {
  it('should disable element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text'
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.attributes('disabled')).toBe(undefined)

    a.vm.disable()

    LocalVue.nextTick(() => {
      expect(a.get('input').attributes('disabled')).toBe('disabled')
      done()
    })
  })

  it('should enable element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text'
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.attributes('disabled')).toBe(undefined)

    a.vm.disable()

    LocalVue.nextTick(() => {
      expect(a.get('input').attributes('disabled')).toBe('disabled')

      a.vm.enable()

      LocalVue.nextTick(() => {
        expect(a.get('input').attributes('disabled')).toBe(undefined)
        done()
      })
    })
  })
})