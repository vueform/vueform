import { createLocalVue } from '@vue/test-utils'
import { createForm, check, uncheck } from 'test-helpers'

describe('Checkbox Element Rendering', () => {
  it('should render a checkbox element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox'
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.get('input').attributes().type).toBe('checkbox')

    done()
  })

  it('should render a checkbox element with text', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          text: 'Check me'
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.html()).toContain('Check me')

    done()
  })
})

describe('Checkbox Element Props', () => {
  it('should have empty string as default `text`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.text).toBe('')

    done()
  })

  it('should set `text` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          text: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.text).toBe('aaa')

    done()
  })

  it('should set `text` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.text).toBe('')

    a.vm.text = 'aaa'

    expect(a.vm.text).toBe('aaa')

    done()
  })

  it('should have `true` as default `trueValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.trueValue).toBe(true)

    done()
  })

  it('should set `trueValue` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          trueValue: 'yes'
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.trueValue).toBe('yes')

    done()
  })

  it('should set `trueValue` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.trueValue).toBe(true)

    a.vm.trueValue = 'yes'

    expect(a.vm.trueValue).toBe('yes')

    done()
  })

  it('should have `false` as default `falseValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.falseValue).toBe(false)

    done()
  })

  it('should set `falseValue` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          falseValue: 'no'
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.falseValue).toBe('no')

    done()
  })

  it('should set `falseValue` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.falseValue).toBe(false)

    a.vm.falseValue = 'no'

    expect(a.vm.falseValue).toBe('no')

    done()
  })

  it('should `null` equal to `falseValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          falseValue: 'no'
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.null).toBe('no')

    done()
  })
})

describe('Checkbox Element Methods', () => {
  it('should `check` set value to `trueValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.value).toBe(a.vm.falseValue)

    a.vm.check()

    expect(a.vm.value).toBe(a.vm.trueValue)

    done()
  })

  it('should `uncheck` set value to `falseValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.value).toBe(a.vm.falseValue)

    a.vm.check()

    expect(a.vm.value).toBe(a.vm.trueValue)

    a.vm.uncheck()

    expect(a.vm.value).toBe(a.vm.falseValue)

    done()
  })
})

describe('Checkbox Element Events', () => {
  it('should trigger `change` event on change', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    check(a)

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe(true)
    expect(onChangeMock.mock.calls[0][1]).toBe(false)

    done()
  })
})

describe('Checkbox Element Model', () => {
  it('should be unchecked if other than `trueValue` is set as value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          falseValue: 'no',
          trueValue: 'yes',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    a.vm.value = 'yes'

    LocalVue.nextTick(() => {
      expect(a.get('input').element.checked).toBe(true)

      a.vm.value = 'aaa'
      LocalVue.nextTick(() => {
        expect(a.get('input').element.checked).toBe(false)

        done()
      })
    })
  })

  it('should be able to have `null` as `falseValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          falseValue: null,
          trueValue: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    expect(a.vm.value).toBe(null)

    check(a)

    expect(a.vm.value).toBe(true)

    uncheck(a)

    expect(a.vm.value).toBe(null)

    done()
  })

  it('should not be checked if loaded data is not a strict match', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          falseValue: false,
          trueValue: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    form.vm.load({
      a: 1
    })

    LocalVue.nextTick(() => {
      expect(a.get('input').element.checked).toBe(false)

      done()
    })
  })

  it('should be checked if loaded data is a strict match', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          falseValue: 0,
          trueValue: 1,
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxElement' }).at(0)

    form.vm.load({
      a: 1
    })

    LocalVue.nextTick(() => {
      expect(a.get('input').element.checked).toBe(true)

      done()
    })
  })
})