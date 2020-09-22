import { createLocalVue } from '@vue/test-utils'
import { createForm, check, uncheck } from './../../../src/utils/testHelpers'

describe('Radio Element Rendering', () => {
  it('should render a radio element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radio'
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)

    expect(a.get('input').attributes().type).toBe('radio')

    done()
  })

  it('should render a radio element with text', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radio',
          text: 'Check me'
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)

    expect(a.html()).toContain('Check me')

    done()
  })
})

describe('Radio Element Props', () => {
  it('should have empty string as default `text`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radio',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)

    expect(a.vm.text).toBe('')

    done()
  })

  it('should set `text` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radio',
          text: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)

    expect(a.vm.text).toBe('aaa')

    done()
  })

  it('should set `text` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radio',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)

    expect(a.vm.text).toBe('')

    a.vm.text = 'aaa'

    expect(a.vm.text).toBe('aaa')

    done()
  })

  it('should have `1` as default `radioValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radio',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)

    expect(a.vm.radioValue).toBe(1)

    done()
  })

  it('should set `radioValue` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radio',
          radioValue: 'yes'
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)

    expect(a.vm.radioValue).toBe('yes')

    done()
  })

  it('should set `radioValue` to schema as `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radio',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)

    expect(a.vm.radioValue).toBe(1)

    a.vm.radioValue = 'yes'

    expect(a.vm.radioValue).toBe('yes')
    expect(a.vm.schema.radioValue).toBe('yes')

    done()
  })
})

describe('Radio Element Methods', () => {
  it('should `check` set value to `radioValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radio',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)

    expect(a.vm.value).toBe(a.vm.null)

    a.vm.check()

    expect(a.vm.value).toBe(a.vm.radioValue)

    done()
  })

  it('should `check` set value to `null` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radio',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)

    expect(a.vm.value).toBe(a.vm.null)

    a.vm.check()

    expect(a.vm.value).toBe(a.vm.radioValue)

    a.vm.uncheck()

    expect(a.vm.value).toBe(a.vm.null)

    done()
  })
})

describe('Radio Element Events', () => {
  it('should trigger `change` event on change', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'radio',
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    check(a)

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe(1)
    expect(onChangeMock.mock.calls[0][1]).toBe(null)

    done()
  })
})

describe('Radio Element Model', () => {
  it('should be unchecked if other than `trueValue` is set as value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radio',
          radioValue: 'a',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)

    a.vm.value = 'a'

    LocalVue.nextTick(() => {
      expect(a.get('input').element.checked).toBe(true)

      a.vm.value = 'aaa'
      LocalVue.nextTick(() => {
        expect(a.get('input').element.checked).toBe(false)

        done()
      })
    })
  })

  it('should have two different elements with mutual exclisivity if `fieldName` is the same', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radio',
          fieldName: 'aaa',
        },
        b: {
          type: 'radio',
          fieldName: 'aaa',
        },
      }
    }, {
      attach: true
    })

    let a = form.findAllComponents({ name: 'RadioElement' }).at(0)
    let b = form.findAllComponents({ name: 'RadioElement' }).at(1)

    check(a)

    expect(form.vm.data).toStrictEqual({
      a: 1,
      b: null,
    })

    check(b)

    expect(form.vm.data).toStrictEqual({
      a: null,
      b: 1,
    })

    done()
  })
})