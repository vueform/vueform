import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'
import { nextTick } from 'vue'

const setRule = async function (form, rule) {
  form.vm.elements$.a.Validators.splice(0)
  form.vm.$set(form.vm.vueform.schema.a, 'rules', rule)
  await nextTick()
  form.vm.elements$.a.initValidation()
}

describe('Date Format Rule', () => {
  it('should validate date format', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'date_format:YYYY-MM-DD'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '2020-12-30')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '30/12/2020')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '30/12/20200')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '30/12/00')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'Not a date')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    await setRule(form, 'date_format:YYYY-MM')

    change(a, '2020-12')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    await setRule(form, 'date_format:YYYY-MM-DDTHH:mm:ss+HH:mm')

    change(a, '2020-12-30T00:00:00+00:00')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    await setRule(form, 'date_format:YYYY-MM-DDTHH:mm:ss+HHmm')

    change(a, '2020-12-30T00:00:00+0000')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    await setRule(form, 'date_format:YYYY-MM-DD HH:mm:ss')

    change(a, '2020-12-30 23:59:59')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    await setRule(form, 'date_format:HH:mm:ss')

    change(a, '2020-12-30 22:59:59')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '23:59:59')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    await setRule(form, 'date_format:HH:mm')

    change(a, '22:59:59')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '23:59')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    await setRule(form, 'date_format:DD/MM/YYYY HH:mm:ss')

    change(a, '30/12/2020 23:59:59')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '12/30/2020 23:59:59')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    await setRule(form, 'date_format:MM/DD/YYYY HH:mm:ss')

    change(a, '12/30/2020 23:59:59')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '30/12/2020 23:59:59')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})