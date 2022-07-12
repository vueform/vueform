import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'
import { nextTick } from 'vue'

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

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    a.update('aaa')
    b.update('bbb')

    await flushPromises()

    expect(b.invalid).toBe(true)
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

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    a.update('aaa')
    b.update('aaa')

    await flushPromises()

    expect(b.invalid).toBe(false)
  })

  it('should watch the change of the other field', async () => {
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

    let a = form.vm.el$('a')
    let b = form.vm.el$('b')

    a.update('aaa')
    b.update('bbb')

    await flushPromises()

    expect(b.invalid).toBe(true)

    a.$el.querySelector('input').value = 'bbb'
    a.$el.querySelector('input').dispatchEvent(new Event('input'))

    await nextTick()

    expect(b.invalid).toBe(false)

    a.$el.querySelector('input').value = 'aaa'
    a.$el.querySelector('input').dispatchEvent(new Event('input'))

    await nextTick()

    expect(b.invalid).toBe(true)
  })
})