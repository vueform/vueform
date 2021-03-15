import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'
import strtotime from 'locutus/php/datetime/strtotime'

describe('Date Rule', () => {
  it('should return true if given string is a date or datetime', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'date'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '2020.12.30')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '2020.12.30.')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '2020-12-30')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30'))
    expect(a.vm.invalid).toBe(false)

    change(a, '2020/12/30')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30 12 2020')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '30.12.2020')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30.12.2020.')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30-12-2020')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30/12/2020')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '12 30 2020')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '12.30.2020')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '12.30.2020.')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '12-30-2020')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '12/30/2020')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30'))
    expect(a.vm.invalid).toBe(false)

    change(a, '2020-12-30 23:59')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '2020/12/30 23:59')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30.12.2020 23:59')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30.12.2020. 23:59')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30-12-2020 23:59')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '12/30/2020 23:59')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59 2020-12-30')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59 2020/12/30')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59 30.12.2020')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59 30.12.2020.')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59 30-12-2020')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59 12/30/2020')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:00'))
    expect(a.vm.invalid).toBe(false)

    change(a, '2020-12-30 23:59:59')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '2020/12/30 23:59:59')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30.12.2020 23:59:59')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30.12.2020. 23:59:59')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '30-12-2020 23:59:59')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '12/30/2020 23:59:59')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59:59 2020-12-30')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59:59 2020/12/30')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59:59 30.12.2020')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59:59 30.12.2020.')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59:59 30-12-2020')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)

    change(a, '23:59:59 12/30/2020')
    await flushPromises()
    expect(strtotime(a.vm.value)).toBe(strtotime('2020-12-30 23:59:59'))
    expect(a.vm.invalid).toBe(false)
  })
})