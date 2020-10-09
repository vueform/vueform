import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents, change } from './.test-helpers'

const setRule = function (el, rule) {
  el.vm.Validators.splice(0)
  el.vm.rules = rule
  el.vm.$_initValidation()
}

describe('Date Format Rule', () => {
  it('should validate date format', (done) => {
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
    expect(a.vm.invalid).toBe(false)

    change(a, '30/12/2020')
    expect(a.vm.invalid).toBe(true)

    change(a, '30/12/20200')
    expect(a.vm.invalid).toBe(true)

    change(a, '30/12/00')
    expect(a.vm.invalid).toBe(true)

    change(a, 'Not a date')
    expect(a.vm.invalid).toBe(true)

    setRule(a, 'date_format:YYYY-MM')

    change(a, '2020-12')
    expect(a.vm.invalid).toBe(false)

    setRule(a, 'date_format:YYYY-MM-DDTHH:mm:ss+HH:mm')

    change(a, '2020-12-30T00:00:00+00:00')
    expect(a.vm.invalid).toBe(false)

    setRule(a, 'date_format:YYYY-MM-DDTHH:mm:ss+HHmm')

    change(a, '2020-12-30T00:00:00+0000')
    expect(a.vm.invalid).toBe(false)

    setRule(a, 'date_format:YYYY-MM-DD HH:mm:ss')

    change(a, '2020-12-30 23:59:59')
    expect(a.vm.invalid).toBe(false)

    setRule(a, 'date_format:HH:mm:ss')

    change(a, '2020-12-30 23:59:59')
    expect(a.vm.invalid).toBe(true)

    change(a, '23:59:59')
    expect(a.vm.invalid).toBe(false)

    setRule(a, 'date_format:HH:mm')

    change(a, '23:59:59')
    expect(a.vm.invalid).toBe(true)

    change(a, '23:59')
    expect(a.vm.invalid).toBe(false)

    setRule(a, 'date_format:DD/MM/YYYY HH:mm:ss')

    change(a, '30/12/2020 23:59:59')
    expect(a.vm.invalid).toBe(false)

    change(a, '12/30/2020 23:59:59')
    expect(a.vm.invalid).toBe(true)

    setRule(a, 'date_format:MM/DD/YYYY HH:mm:ss')

    change(a, '12/30/2020 23:59:59')
    expect(a.vm.invalid).toBe(false)

    change(a, '30/12/2020 23:59:59')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})