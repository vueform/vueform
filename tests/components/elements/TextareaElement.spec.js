import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../../src/utils/testHelpers'

describe('Textarea Element Rendering', () => {
  it('should render textarea element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.exists()).toBe(true)

    done()
  })

  it('should render component attributes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          id: 'pwd',
          placeholder: 'Textarea',
          disabled: true,
          readonly: true,
          rows: "5",
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.get('textarea').attributes().id).toBe('pwd')
    expect(a.get('textarea').attributes().placeholder).toBe('Textarea')
    expect(a.get('textarea').attributes().disabled).toBe('disabled')
    expect(a.get('textarea').attributes().readonly).toBe('readonly')
    expect(a.get('textarea').attributes().rows).toBe("5")

    done()
  })

  it('should render floating label', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          floating: 'Textarea',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)
    let elf = form.findAllComponents({ name: 'ElementLabelFloating' }).at(0)

    expect(elf.exists()).toBe(true)
    expect(elf.html()).toContain('Textarea')

    done()
  })
})

describe('Textarea Element Props', () => {
  it('should have `true` as default for `autogrow`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.vm.autogrow).toBe(true)

    done()
  })

  it('should set `autogrow` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.vm.autogrow).toBe(false)

    done()
  })

  it('should set `autogrow` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.vm.autogrow).toBe(true)

    a.vm.autogrow = false

    expect(a.vm.autogrow).toBe(false)

    done()
  })

  it('should have `3` as default for `rows`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.vm.rows).toBe(3)

    done()
  })

  it('should set `rows` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          rows: 5
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.vm.rows).toBe(5)

    done()
  })

  it('should set `rows` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.vm.rows).toBe(3)

    a.vm.rows = 5

    expect(a.vm.rows).toBe(5)

    done()
  })

  it('should render `placeholder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          placeholder: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.get('textarea').attributes().placeholder).toBe('aaa')

    done()
  })

  it('should set `placeholder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.get('textarea').attributes().placeholder).toBe(undefined)

    a.vm.placeholder = 'aaa'

    LocalVue.nextTick(() => {
      expect(a.get('textarea').attributes().placeholder).toBe('aaa')

      done()
    })
  })

  it('should render `floating`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          floating: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(true)

    done()
  })

  it('should set `floating`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

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
          type: 'textarea',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.vm.readonly).toBe(false)

    done()
  })

  it('should render `readonly`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          readonly: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.vm.readonly).toBe(true)

    done()
  })

  it('should set `readonly`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.readonly = true
    
    expect(a.vm.readonly).toBe(true)

    done()
  })
})

describe('Textarea Element Model', () => {
  it('should load `default` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          default: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(a.vm.value).toBe('aaa')

    done()
  })

  it('should set `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

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
          type: 'textarea',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

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
          type: 'textarea',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    form.vm.load({
      a: 'aaa'
    })

    expect(a.vm.value).toBe('aaa')

    done()
  })
})

describe('Textarea Element Events', () => {
  it('should trigger `change` event on keyup', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    a.get('textarea').setValue('aaa')
    a.get('textarea').trigger('keyup')

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe('aaa')
    expect(onChangeMock.mock.calls[0][1]).toBe(null)

    done()
  })
})

describe('Textarea Element Autosize', () => {
  it('should invoke `autosize` service if autogrow is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = autosizeMock

    LocalVue.nextTick(() => {
      expect(autosizeMock.mock.calls.length).toBe(1)
      expect(autosizeMock.mock.calls[0][0]).toStrictEqual(a.get('textarea').element)

      done()
    })
  })

  it('should not invoke `autosize` service if autogrow is false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = autosizeMock

    LocalVue.nextTick(() => {
      expect(autosizeMock.mock.calls.length).toBe(0)

      done()
    })
  })
  
  it('should invoke `autosize` on `update` if autogrow is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeUpdateMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = jest.fn(() => {})
    a.vm.$laraform.services.autosize.update = autosizeUpdateMock

    a.vm.update('aaa')

    LocalVue.nextTick(() => {
      expect(autosizeUpdateMock.mock.calls.length).toBe(1)
      expect(autosizeUpdateMock.mock.calls[0][0]).toStrictEqual(a.get('textarea').element)

      done()
    })
  })
  
  it('should not invoke `autosize` on `update` if autogrow is false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeUpdateMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = jest.fn(() => {})
    a.vm.$laraform.services.autosize.update = autosizeUpdateMock

    a.vm.update('aaa')

    LocalVue.nextTick(() => {
      expect(autosizeUpdateMock.mock.calls.length).toBe(0)

      done()
    })
  })
  
  it('should invoke `autosize` on `load` if autogrow is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeUpdateMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = jest.fn(() => {})
    a.vm.$laraform.services.autosize.update = autosizeUpdateMock

    form.vm.load({
      a: 'aaa'
    })

    LocalVue.nextTick(() => {
      expect(autosizeUpdateMock.mock.calls.length).toBe(1)
      expect(autosizeUpdateMock.mock.calls[0][0]).toStrictEqual(a.get('textarea').element)

      done()
    })
  })
  
  it('should not invoke `autosize` on `load` if autogrow is false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeUpdateMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = jest.fn(() => {})
    a.vm.$laraform.services.autosize.update = autosizeUpdateMock

    form.vm.load({
      a: 'aaa'
    })

    LocalVue.nextTick(() => {
      expect(autosizeUpdateMock.mock.calls.length).toBe(0)

      done()
    })
  })
  
  it('should invoke `autosize` on `reset` if autogrow is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeUpdateMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = jest.fn(() => {})
    a.vm.$laraform.services.autosize.update = autosizeUpdateMock

    a.vm.reset()

    LocalVue.nextTick(() => {
      expect(autosizeUpdateMock.mock.calls.length).toBe(1)
      expect(autosizeUpdateMock.mock.calls[0][0]).toStrictEqual(a.get('textarea').element)

      done()
    })
  })
  
  it('should not invoke `autosize` on `reset` if autogrow is false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeUpdateMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = jest.fn(() => {})
    a.vm.$laraform.services.autosize.update = autosizeUpdateMock

    a.vm.reset()

    LocalVue.nextTick(() => {
      expect(autosizeUpdateMock.mock.calls.length).toBe(0)

      done()
    })
  })
  
  it('should invoke `autosize` on `clear` if autogrow is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeUpdateMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = jest.fn(() => {})
    a.vm.$laraform.services.autosize.update = autosizeUpdateMock

    a.vm.clear()

    LocalVue.nextTick(() => {
      expect(autosizeUpdateMock.mock.calls.length).toBe(1)
      expect(autosizeUpdateMock.mock.calls[0][0]).toStrictEqual(a.get('textarea').element)

      done()
    })
  })
  
  it('should not invoke `autosize` on `clear` if autogrow is false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeUpdateMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = jest.fn(() => {})
    a.vm.$laraform.services.autosize.update = autosizeUpdateMock

    a.vm.clear()

    LocalVue.nextTick(() => {
      expect(autosizeUpdateMock.mock.calls.length).toBe(0)

      done()
    })
  })
  
  it('should destroy autosize if `autogrow` changes to false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeDestroyMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = jest.fn(() => {})
    a.vm.$laraform.services.autosize.destroy = autosizeDestroyMock

    expect(autosizeDestroyMock.mock.calls.length).toBe(0)

    a.vm.autogrow = false

    LocalVue.nextTick(() => {
      expect(autosizeDestroyMock.mock.calls.length).toBe(1)

      done()
    })
  })
  
  it('should init autosize if `autogrow` changes to true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'textarea',
          autogrow: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = autosizeMock

    expect(autosizeMock.mock.calls.length).toBe(0)

    a.vm.autogrow = true

    LocalVue.nextTick(() => {
      expect(autosizeMock.mock.calls.length).toBe(1)

      done()
    })
  })
})