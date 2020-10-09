import { createLocalVue } from '@vue/test-utils'
import { createForm, change, setInstances, check, uncheck } from './.test-helpers'

describe('Filled Rule', () => {
  it('should be validate if value is filled for string', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'filled'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, '')
    expect(a.vm.invalid).toBe(true)

    change(a, ' ')
    expect(a.vm.invalid).toBe(true)
    
    change(a, '    ')
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'null')
    expect(a.vm.invalid).toBe(false)
    
    change(a, '.')
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asdf')
    expect(a.vm.invalid).toBe(false)
    
    change(a, '1')
    expect(a.vm.invalid).toBe(false)

    done()
  })

  it('should be validate if value is filled for array', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'filled',
          initial: 0,
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'ListElement' }).at(0)

    setInstances(a, 0)

    LocalVue.nextTick(() => {
      a.vm.validate()
      expect(a.vm.invalid).toBe(true)

      setInstances(a, 1)
      LocalVue.nextTick(() => {
        a.vm.validate()
        expect(a.vm.invalid).toBe(false)

        done()
      })
    })
  })

  it('should be validate if value is filled for checkbox', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'filled',
          trueValue: null,
          falseValue: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    check(a)
    expect(a.vm.invalid).toBe(true)

    uncheck(a)
    expect(a.vm.invalid).toBe(false)
    
    done()
  })
})