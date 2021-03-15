import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('Alpha Dash Rule', () => {
  it('should be valid only for alpha-numeric characters and dash', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'alpha_dash',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, 'foo')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'FOO')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'fooBAR')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'Fóóűúőáéí')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '富吧')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'Русский')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '1234')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'fooBAR123')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'foo ')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'foo-')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'foo_')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'Foo%/')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})