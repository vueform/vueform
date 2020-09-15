import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../../src/utils/testHelpers'

describe('Password Element Rendering', () => {
  it('should render password element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password'
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    expect(a.exists()).toBe(true)
    expect(a.get('input').attributes().type).toBe('password')

    done()
  })

  it('should render component attributes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
          id: 'pwd',
          placeholder: 'Password',
          disabled: true,
          readonly: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    expect(a.get('input').attributes().id).toBe('pwd')
    expect(a.get('input').attributes().placeholder).toBe('Password')
    expect(a.get('input').attributes().disabled).toBe('disabled')
    expect(a.get('input').attributes().readonly).toBe('readonly')

    done()
  })

  it('should render floating label', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
          floating: 'Password',
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)
    let elf = form.findAllComponents({ name: 'ElementLabelFloating' }).at(0)

    expect(elf.exists()).toBe(true)
    expect(elf.html()).toContain('Password')

    done()
  })

  it('should render `addon`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
          addon: {
            before: 'aaa',
            after: 'bbb',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)
    let ia0 = form.findAllComponents({ name: 'InputAddon' }).at(0)
    let ia1 = form.findAllComponents({ name: 'InputAddon' }).at(1)

    expect(ia0.exists()).toBe(true)
    expect(ia1.exists()).toBe(true)

    expect(a.get('.input-group-addon + input').exists()).toBe(true)
    expect(a.get('input + .input-group-addon').exists()).toBe(true)

    expect(ia0.html()).toContain('aaa')
    expect(ia1.html()).toContain('bbb')

    done()
  })
})

describe('Password Element Props', () => {
  it('should render `placeholder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
          placeholder: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    expect(a.get('input').attributes().placeholder).toBe('aaa')

    done()
  })

  it('should set `placeholder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    expect(a.get('input').attributes().placeholder).toBe(undefined)

    a.vm.placeholder = 'aaa'

    LocalVue.nextTick(() => {
      expect(a.get('input').attributes().placeholder).toBe('aaa')

      done()
    })
  })

  it('should render `floating`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
          floating: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(true)

    done()
  })

  it('should set `floating`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(false)

    a.vm.floating = 'aaa'

    LocalVue.nextTick(() => {
      expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(true)

      done()
    })
  })

  it('should be `readonly` false by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    expect(a.vm.readonly).toBe(false)

    done()
  })

  it('should render `readonly`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
          readonly: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    expect(a.vm.readonly).toBe(true)

    done()
  })

  it('should set `readonly`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    a.vm.readonly = true
    
    expect(a.vm.readonly).toBe(true)

    done()
  })
})

describe('Password Element Model', () => {
  it('should load `default` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
          default: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    expect(a.vm.value).toBe('aaa')

    done()
  })

  it('should set `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    a.vm.value = 'aaa'

    expect(a.vm.value).toBe('aaa')

    done()
  })

  it('should `update` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    a.vm.update('aaa')

    expect(a.vm.value).toBe('aaa')

    done()
  })

  it('should `load` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'password',
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    form.vm.load({
      a: 'aaa'
    })

    expect(a.vm.value).toBe('aaa')

    done()
  })
})

describe('Password Element Events', () => {
  it('should trigger `change` event on keyup', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'password',
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    a.get('input').setValue('aaa')
    a.get('input').trigger('keyup')

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe(null)
    expect(onChangeMock.mock.calls[0][1]).toBe('aaa')

    done()
  })

  it('should trigger `change` event on select', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'password',
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'PasswordElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    a.get('input').setValue('aaa')
    a.get('input').trigger('select')

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe(null)
    expect(onChangeMock.mock.calls[0][1]).toBe('aaa')

    done()
  })
})