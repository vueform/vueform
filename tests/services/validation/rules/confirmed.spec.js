import { createLocalVue } from '@vue/test-utils'
import { createForm, change } from './../../../../src/utils/testHelpers'
import flushPromises from 'flush-promises'

const LocalVue = createLocalVue()

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

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let a_confirmation = form.findAllComponents({ name: 'TextElement' }).at(1)

    change(a, 'aaa')
    change(a_confirmation, 'bbb')
    await flushPromises()

    expect(a.vm.invalid).toBe(true)
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

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let a_confirmation = form.findAllComponents({ name: 'TextElement' }).at(1)

    a.get('input').setValue('a')
    a.get('input').trigger('keyup')
    await flushPromises()

    expect(a.vm.invalid).toBe(true)

    // Waiting for watchOther to initalize
    await LocalVue.nextTick()

    a_confirmation.get('input').setValue('a')
    a_confirmation.get('input').trigger('keyup')
    await flushPromises()

    // Waiting for watchOther to trigger watch event
    await LocalVue.nextTick()

    expect(a.vm.invalid).toBe(false)
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

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let a_confirmation = form.findAllComponents({ name: 'TextElement' }).at(1)

    change(a, 'aaa')
    change(a_confirmation, 'bbb')
    await flushPromises()

    expect(a.vm.invalid).toBe(true)

    a.get('input').setValue('bbb')
    a.get('input').trigger('keyup')
    await flushPromises()

    expect(a.vm.invalid).toBe(false)

    // Waiting for watchOther to initalize
    await LocalVue.nextTick()

    a_confirmation.get('input').setValue('ccc')
    a_confirmation.get('input').trigger('keyup')
    await flushPromises()

    // Waiting for watchOther to trigger watch event
    await LocalVue.nextTick()

    expect(a.vm.invalid).toBe(true)
  })
})