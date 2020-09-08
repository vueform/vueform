import { createLocalVue } from '@vue/test-utils'
import { createForm, change } from './../../../../src/utils/testHelpers'

describe('Before Rule', () => {
  it('should work with `yesterday`', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'before:yesterday',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
    let today = moment().format('YYYY-MM-DD')
    let tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')

    change(a, yesterday)
    expect(a.vm.invalid).toBe(true)

    change(a, today)
    expect(a.vm.invalid).toBe(true)

    change(a, tomorrow)
    expect(a.vm.invalid).toBe(true)

    done()
  })
  
  it('should work with `today`', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'before:today',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
    let today = moment().format('YYYY-MM-DD')
    let tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')

    change(a, yesterday)
    expect(a.vm.invalid).toBe(false)

    change(a, today)
    expect(a.vm.invalid).toBe(true)

    change(a, tomorrow)
    expect(a.vm.invalid).toBe(true)

    done()
  })

  it('should work with `tomorrow`', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'before:tomorrow',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
    let today = moment().format('YYYY-MM-DD')
    let tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')
    let after_tomorrow = moment().add(2, 'days').format('YYYY-MM-DD')

    change(a, yesterday)
    expect(a.vm.invalid).toBe(false)

    change(a, today)
    expect(a.vm.invalid).toBe(false)

    change(a, tomorrow)
    expect(a.vm.invalid).toBe(true)

    change(a, after_tomorrow)
    expect(a.vm.invalid).toBe(true)

    done()
  })

  it('should work with `absolute` dates', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'date',
          rules: 'before:25/12/2020',
          dataFormat: 'DD/MM/YYYY'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    change(a, '24/12/2020')
    expect(a.vm.invalid).toBe(false)

    change(a, '25/12/2020')
    expect(a.vm.invalid).toBe(true)

    change(a, '26/12/2020')
    expect(a.vm.invalid).toBe(true)

    done()
  })

  it('should work with other `element` date', (done) => {
    let form = createForm({
      schema: {
        from: {
          type: 'date',
        },
        to: {
          type: 'date',
          rules: 'before:from',
        },
      }
    })

    let from = form.findAllComponents({ name: 'DateElement' }).at(0)
    let to = form.findAllComponents({ name: 'DateElement' }).at(1)

    change(from, '2020-12-25')
    change(to, '2020-12-24')
    expect(to.vm.invalid).toBe(false)

    change(from, '2020-12-25')
    change(to, '2020-12-25')
    expect(to.vm.invalid).toBe(true)

    change(from, '2020-12-25')
    change(to, '2020-12-26')
    expect(to.vm.invalid).toBe(true)

    done()
  })
})