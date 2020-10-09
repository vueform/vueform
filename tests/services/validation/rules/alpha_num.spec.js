import { createLocalVue } from '@vue/test-utils'
import { createForm, change } from './.test-helpers'

describe('Alpha Num Rule', () => {
  it('should be valid only for alpha-numeric characters', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'alpha_num',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, 'foo')
    expect(a.vm.invalid).toBe(false)

    change(a, 'FOO')
    expect(a.vm.invalid).toBe(false)

    change(a, 'fooBAR')
    expect(a.vm.invalid).toBe(false)

    change(a, 'Fóóűúőáéí')
    expect(a.vm.invalid).toBe(false)

    change(a, '富吧')
    expect(a.vm.invalid).toBe(false)

    change(a, 'Русский')
    expect(a.vm.invalid).toBe(false)

    change(a, '1234')
    expect(a.vm.invalid).toBe(false)

    change(a, 'fooBAR123')
    expect(a.vm.invalid).toBe(false)

    change(a, 'foo ')
    expect(a.vm.invalid).toBe(true)

    change(a, 'foo-')
    expect(a.vm.invalid).toBe(true)

    change(a, 'foo_')
    expect(a.vm.invalid).toBe(true)

    change(a, 'Foo%/')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})