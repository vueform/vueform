import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'
import { nextTick } from 'vue'

describe('Confirmed Rule', () => {
  it('should be invalid if values do not match', async () => {
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

    let a = form.vm.el$('a')
    let a_confirmation = form.vm.el$('a_confirmation')

    a.update('aaa')
    a_confirmation.update('bbb')
    await flushPromises()

    expect(a.invalid).toBe(true)
  })

  it('should be valid if values match', async () => {
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

    let a = form.vm.el$('a')
    let a_confirmation = form.vm.el$('a_confirmation')

    a.update('a')
    await flushPromises()

    expect(a.invalid).toBe(false)

    // Waiting for watchOther to initalize
    await nextTick()

    a_confirmation.update('aaa')
    await flushPromises()

    // Waiting for watchOther to trigger watch event
    await nextTick()

    expect(a.invalid).toBe(true)

    a_confirmation.update('a')
    await flushPromises()

    // Waiting for watchOther to trigger watch event
    await nextTick()

    expect(a.invalid).toBe(false)
  })

  it('should watch the change of the other field', async () => {
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

    let a = form.vm.el$('a')
    let a_confirmation = form.vm.el$('a_confirmation')

    a.update('aaa')
    a_confirmation.update('bbb')
    await flushPromises()

    expect(a.invalid).toBe(true)

    a.update('bbb')
    await flushPromises()

    expect(a.invalid).toBe(false)

    // Waiting for watchOther to initalize
    await nextTick()

    a_confirmation.update('ccc')
    await flushPromises()

    // Waiting for watchOther to trigger watch event
    await nextTick()

    expect(a.invalid).toBe(true)
  })
})