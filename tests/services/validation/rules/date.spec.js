import { createLocalVue } from '@vue/test-utils'
import { createForm, change } from './../../../../src/utils/testHelpers'
import strtotime from 'locutus/php/datetime/strtotime'

describe('Date Rule', () => {
  it('should return true if given string is a date or datetime', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'date'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, '2020.12.30')
    expect(a.vm.invalid).toBe(true)

    change(a, '2020.12.30.')
    expect(a.vm.invalid).toBe(true)

    change(a, '2020-12-30')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30'))
    expect(a.vm.invalid).toBe(false)

    change(a, '2020/12/30')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30 12 2020')
    expect(a.vm.invalid).toBe(true)

    change(a, '30.12.2020')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30.12.2020.')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30-12-2020')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30/12/2020')
    expect(a.vm.invalid).toBe(true)

    change(a, '12 30 2020')
    expect(a.vm.invalid).toBe(true)

    change(a, '12.30.2020')
    expect(a.vm.invalid).toBe(true)

    change(a, '12.30.2020.')
    expect(a.vm.invalid).toBe(true)

    change(a, '12-30-2020')
    expect(a.vm.invalid).toBe(true)

    change(a, '12/30/2020')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30'))
    expect(a.vm.invalid).toBe(false)

    change(a, '2020-12-30 23:59')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '2020/12/30 23:59')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30.12.2020 23:59')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30.12.2020. 23:59')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30-12-2020 23:59')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '12/30/2020 23:59')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59 2020-12-30')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59 2020/12/30')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59 30.12.2020')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59 30.12.2020.')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59 30-12-2020')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59 12/30/2020')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '2020-12-30 23:59:59')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '2020/12/30 23:59:59')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30.12.2020 23:59:59')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30.12.2020. 23:59:59')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30-12-2020 23:59:59')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '12/30/2020 23:59:59')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59:59 2020-12-30')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59:59 2020/12/30')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59:59 30.12.2020')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59:59 30.12.2020.')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59:59 30-12-2020')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59:59 12/30/2020')
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    done()
  })
})