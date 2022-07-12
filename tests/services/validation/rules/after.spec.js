import flushPromises from 'flush-promises'
import { nextTick } from 'vue'
import { createForm, findAllComponents, change, setDate } from 'test-helpers'
import moment from 'moment'

describe('After Rule', () => {
  it('should work with `yesterday`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'after:yesterday',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
    let today = moment().format('YYYY-MM-DD')
    let tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')

    change(a, yesterday)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, today)
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, tomorrow)
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })
  
  it('should work with `today`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'after:today',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
    let today = moment().format('YYYY-MM-DD')
    let tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')

    change(a, yesterday)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, today)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, tomorrow)
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })

  it('should work with `tomorrow`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'after:tomorrow',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
    let today = moment().format('YYYY-MM-DD')
    let tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')
    let after_tomorrow = moment().add(2, 'days').format('YYYY-MM-DD')

    change(a, yesterday)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, today)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, tomorrow)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, after_tomorrow)
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })

  it('should work with different formats', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'date',
          rules: 'after:today',
          valueFormat: 'DD YYYY MM',
        }
      }
    })

    let a = findAllComponents(form, { name: 'DateElement' }).at(0)

    let yesterday = moment().subtract(1, 'days').format('DD YYYY MM')
    let today = moment().format('DD YYYY MM')
    let tomorrow = moment().add(1, 'days').format('DD YYYY MM')
    
    a.vm.update(yesterday)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    a.vm.update(today)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    a.vm.update(tomorrow)
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })

  it('should work with `absolute` dates', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'date',
          rules: 'after:25/12/2020',
          valueFormat: 'DD/MM/YYYY',
          loadFormat: 'DD/MM/YYYY',
        }
      }
    })

    let a = findAllComponents(form, { name: 'DateElement' }).at(0)

    setDate(a, '24/12/2020')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    setDate(a, '25/12/2020')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    setDate(a, '26/12/2020')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })

  it('should work with other `element` date', async () => {
    let form = createForm({
      schema: {
        from: {
          type: 'date',
        },
        to: {
          type: 'date',
          rules: 'after:from',
        },
      }
    })

    let from = findAllComponents(form, { name: 'DateElement' }).at(0)
    let to = findAllComponents(form, { name: 'DateElement' }).at(1)

    setDate(from, '2020-12-25')
    await flushPromises()
    setDate(to, '2020-12-24')
    await flushPromises()
    expect(to.vm.invalid).toBe(true)

    setDate(from, '2020-12-25')
    await flushPromises()
    setDate(to, '2020-12-25')
    await flushPromises()
    expect(to.vm.invalid).toBe(true)

    setDate(from, '2020-12-25')
    await flushPromises()
    setDate(to, '2020-12-26')
    await flushPromises()
    expect(to.vm.invalid).toBe(false)
  })

  it('should watch other element date change', async () => {
    let form = createForm({
      schema: {
        from: {
          type: 'date',
        },
        to: {
          type: 'date',
          rules: 'after:from',
        },
      }
    })

    let from = findAllComponents(form, { name: 'DateElement' }).at(0)
    let to = findAllComponents(form, { name: 'DateElement' }).at(1)

    setDate(to, '2020-12-24')
    from.vm.value = '2020-12-25'

    await flushPromises()
    expect(to.vm.invalid).toBe(true)

    from.vm.value = '2020-12-23'

    await flushPromises()
    expect(to.vm.invalid).toBe(false)

    from.vm.value = '2020-12-25'

    await flushPromises()
    expect(to.vm.invalid).toBe(true)

  })

  it('should have actual date in error message when using `relative` date', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'date',
          rules: 'after:yesterday'
        },
      }
    })

    let a = findAllComponents(form, { name: 'DateElement' }).at(0)

    let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')

    setDate(a, yesterday)
    await flushPromises()
    expect(a.vm.error).toContain(yesterday)
  })

  it('should have actual date in error message when using `absolute` date', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'date',
          rules: 'after:2020-12-25'
        },
      }
    })

    let a = findAllComponents(form, { name: 'DateElement' }).at(0)

    setDate(a, '2020-12-24')
    await flushPromises()
    expect(a.vm.error).toContain('2020-12-25')
  })

  it('should watch other element date change', async () => {
    let form = createForm({
      schema: {
        from: {
          type: 'date',
        },
        to: {
          type: 'date',
          rules: 'after:from',
        },
      }
    })

    let from = findAllComponents(form, { name: 'DateElement' }).at(0)
    let to = findAllComponents(form, { name: 'DateElement' }).at(1)

    await nextTick()
    setDate(to, '2020-12-24')
    await flushPromises()
    from.vm.value = '2020-12-25'

    await nextTick()
    expect(to.vm.error).toContain('2020-12-25')
  })

  it('should work with multiple dates', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'dates',
          mode: 'multiple',
          rules: 'after:2020-12-26'
        }
      }
    })

    let a = findAllComponents(form, { name: 'DatesElement' }).at(0)

    setDate(a, ['2020-12-24', '2020-12-26'])
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    setDate(a, ['2020-12-28', '2020-12-30'])
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })
})