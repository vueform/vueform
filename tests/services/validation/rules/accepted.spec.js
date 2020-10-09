import { createLocalVue } from '@vue/test-utils'
import { createForm, change, check, uncheck } from './.test-helpers'

describe('Accepted Rule', () => {
  it('should be true for "true", "yes", "on", "1"', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'accepted',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, 'true')
    expect(a.vm.invalid).toBe(false)

    change(a, 'yes')
    expect(a.vm.invalid).toBe(false)

    change(a, 'on')
    expect(a.vm.invalid).toBe(false)

    change(a, '1')
    expect(a.vm.invalid).toBe(false)

    done()
  })

  it('should be true for true', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'accepted',
          trueValue: true,
          falseValue: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    a.vm.validate()
    expect(a.vm.invalid).toBe(true)

    check(a)
    expect(a.vm.invalid).toBe(false)

    uncheck(a)
    expect(a.vm.invalid).toBe(true)

    done()
  })

  it('should be true for 1', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'accepted',
          trueValue: 1,
          falseValue: 0,
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    a.vm.validate()
    expect(a.vm.invalid).toBe(true)

    check(a)
    expect(a.vm.invalid).toBe(false)

    uncheck(a)
    expect(a.vm.invalid).toBe(true)

    done()
  })

  it('should be false for not allowed values', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'accepted',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, '')
    expect(a.vm.invalid).toBe(true)

    change(a, '0')
    expect(a.vm.invalid).toBe(true)

    change(a, '2')
    expect(a.vm.invalid).toBe(true)

    change(a, '-1')
    expect(a.vm.invalid).toBe(true)

    change(a, 'ueicbksjdhd')
    expect(a.vm.invalid).toBe(true)

    change(a, '!"£%%^^^&')
    expect(a.vm.invalid).toBe(true)

    change(a, '0.1')
    expect(a.vm.invalid).toBe(true)

    change(a, '0,1')
    expect(a.vm.invalid).toBe(true)

    change(a, 'null')
    expect(a.vm.invalid).toBe(true)

    change(a, '""')
    expect(a.vm.invalid).toBe(true)

    change(a, ' ')
    expect(a.vm.invalid).toBe(true)

    change(a, 'NaN')
    expect(a.vm.invalid).toBe(true)

    change(a, 'undefined')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})