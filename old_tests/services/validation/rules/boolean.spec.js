import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents, change, check, uncheck } from './.test-helpers'

describe('Boolean Rule', () => {
  it('should check if value is "1" or "0"', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'boolean'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '0')
    expect(a.vm.invalid).toBe(false)

    change(a, '1')
    expect(a.vm.invalid).toBe(false)

    change(a, '2')
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'true')
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'false')
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'asdf')
    expect(a.vm.invalid).toBe(true)

    done()
  })

  it('should check if value is true or false', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'boolean',
          trueValue: true,
          falseValue: false,
        }
      }
    })

    let a = findAllComponents(form, { name: 'CheckboxElement' }).at(0)

    check(a)
    expect(a.vm.invalid).toBe(false)

    uncheck(a)
    expect(a.vm.invalid).toBe(false)

    done()
  })

  it('should check if value is 1 or 0', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'boolean',
          trueValue: 1,
          falseValue: 0,
        }
      }
    })

    let a = findAllComponents(form, { name: 'CheckboxElement' }).at(0)

    check(a)
    expect(a.vm.invalid).toBe(false)

    uncheck(a)
    expect(a.vm.invalid).toBe(false)

    done()
  })

  it('should check if value boolean', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'boolean',
          trueValue: 2,
          falseValue: -1,
        }
      }
    })

    let a = findAllComponents(form, { name: 'CheckboxElement' }).at(0)

    check(a)
    expect(a.vm.invalid).toBe(true)

    uncheck(a)
    expect(a.vm.invalid).toBe(true)

    done()
  })
})