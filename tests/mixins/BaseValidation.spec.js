import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../src/utils/testHelpers'

describe('Element Validation Computed', () => {
  it('should not be `dirty` by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(a.vm.dirty).toBe(false)
      expect(a.vm.previousValue).toBe(null)
      expect(a.vm.currentValue).toBe(null)

      done()
    })
    })
  })

  it('should not be `dirty` when element has default value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          default: 'aaa'
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(a.vm.value).toBe('aaa')
      expect(a.vm.dirty).toBe(false)
      expect(a.vm.previousValue).toBe(null)
      expect(a.vm.currentValue).toBe('aaa')

      done()
    })
    })
  })

  it('should not be `dirty` when data is loaded', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    }, {
      propsData: {
        form: {
          data: {
            a: 'aaa'
          }
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(a.vm.value).toBe('aaa')
      expect(a.vm.dirty).toBe(false)
      expect(a.vm.previousValue).toBe(null)
      expect(a.vm.currentValue).toBe('aaa')

      done()
    })
    })
  })

  it('should be `dirty` if the element value is changed by user input', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe(null)

    LocalVue.nextTick(() => {
      a.get('input').setValue('aaa')
      a.get('input').trigger('keyup')

      LocalVue.nextTick(() => {
        expect(a.vm.dirty).toBe(true)
        expect(a.vm.previousValue).toBe(null)
        expect(a.vm.currentValue).toBe('aaa')

        done()
      })
    })
  })

  it('should not be `dirty` if the element keyup occurs without value change', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe(null)

    LocalVue.nextTick(() => {
      a.get('input').trigger('keyup')

      LocalVue.nextTick(() => {
        expect(a.vm.dirty).toBe(false)
        expect(a.vm.previousValue).toBe(null)
        expect(a.vm.currentValue).toBe(null)

        done()
      })
    })
  })

  it('should be `dirty` if the element value is changed by update method', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe(null)

    LocalVue.nextTick(() => {
      a.vm.update('aaa')

      LocalVue.nextTick(() => {
        expect(a.vm.dirty).toBe(true)
        expect(a.vm.previousValue).toBe(null)
        expect(a.vm.currentValue).toBe('aaa')

        done()
      })
    })
  })

  it('should not be `dirty` if the element had no value and resetted', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe(null)

    LocalVue.nextTick(() => {
      a.vm.reset()

      LocalVue.nextTick(() => {
        expect(a.vm.dirty).toBe(false)
        expect(a.vm.previousValue).toBe(null)
        expect(a.vm.currentValue).toBe(null)

        done()
      })
    })
  })

  it('should not be `dirty` if the element had default value and resetted', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          default: 'aaa'
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.value).toBe('aaa')
    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe('aaa')

    LocalVue.nextTick(() => {
      a.vm.reset()

      LocalVue.nextTick(() => {
        expect(a.vm.value).toBe('aaa')
        expect(a.vm.dirty).toBe(false)
        expect(a.vm.previousValue).toBe('aaa')
        expect(a.vm.currentValue).toBe('aaa')

        done()
      })
    })
  })

  it('should be `dirty` if the element had default value, changed then resetted', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          default: 'aaa'
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.value).toBe('aaa')
    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe('aaa')

    a.vm.update('bbb')

    expect(a.vm.value).toBe('bbb')
    expect(a.vm.dirty).toBe(true)
    expect(a.vm.previousValue).toBe('aaa')
    expect(a.vm.currentValue).toBe('bbb')

    LocalVue.nextTick(() => {
      a.vm.reset()

      LocalVue.nextTick(() => {
        expect(a.vm.value).toBe('aaa')
        expect(a.vm.dirty).toBe(true)
        expect(a.vm.previousValue).toBe('bbb')
        expect(a.vm.currentValue).toBe('aaa')

        done()
      })
    })
  })

  it('should be `dirty` if the element had value and resetted', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe(null)

    a.vm.value = 'aaa'

    LocalVue.nextTick(() => {
      a.vm.reset()

      LocalVue.nextTick(() => {
        expect(a.vm.value).toBe(a.vm.null)
        expect(a.vm.dirty).toBe(true)
        expect(a.vm.previousValue).toBe('aaa')
        expect(a.vm.currentValue).toBe(null)

        done()
      })
    })
  })


  it('should not be `dirty` if the element had no value and cleared', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe(null)

    LocalVue.nextTick(() => {
      a.vm.clear()

      LocalVue.nextTick(() => {
        expect(a.vm.dirty).toBe(false)
        expect(a.vm.previousValue).toBe(null)
        expect(a.vm.currentValue).toBe(null)

        done()
      })
    })
  })

  it('should be `dirty` if the element had default value and cleared', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          default: 'aaa'
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.value).toBe('aaa')
    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe('aaa')

    LocalVue.nextTick(() => {
      a.vm.clear()

      LocalVue.nextTick(() => {
        expect(a.vm.value).toBe(a.vm.null)
        expect(a.vm.dirty).toBe(true)
        expect(a.vm.previousValue).toBe('aaa')
        expect(a.vm.currentValue).toBe(null)

        done()
      })
    })
  })

  it('should be `dirty` if the element had value and cleared', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe(null)

    a.vm.value = 'aaa'

    LocalVue.nextTick(() => {
      a.vm.clear()

      LocalVue.nextTick(() => {
        expect(a.vm.value).toBe(a.vm.null)
        expect(a.vm.dirty).toBe(true)
        expect(a.vm.previousValue).toBe('aaa')
        expect(a.vm.currentValue).toBe(null)

        done()
      })
    })
  })

  it('should be `pending` and `busy` if an async validation is in progress', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'unique'
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.pending).toBe(false)
    expect(a.vm.busy).toBe(false)

    a.vm.update(1, true)

    expect(a.vm.pending).toBe(true)
    expect(a.vm.busy).toBe(true)
  })

  it('should be `debouncing` and `busy` if has a debouncing validation in progress', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required:debounce=300'
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.debouncing).toBe(false)
    expect(a.vm.busy).toBe(false)

    a.vm.update(1, true)

    expect(a.vm.debouncing).toBe(true)
    expect(a.vm.busy).toBe(true)
  })

  it('should collect `errors` form validators', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.errors.length).toBe(0)

    a.vm.validate()

    expect(a.vm.errors.length).toBe(1)

    done()
  })
})

describe('Element Validation Methods', () => {
  it('should not `validate` if form validation is `false`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'text',
          rules: 'required'
        }
      }
    })

    form.vm.disableValidation()

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.validated).toBe(false)

    name.get('input').setValue('aaa')
    name.vm.validate()

    expect(name.vm.validated).toBe(false)

    done()
  })

  it('should not `validate` if element has no rules', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.validated).toBe(true)

    name.vm.validate()

    expect(name.vm.validated).toBe(true)

    done()
  })

  it('should be `validated` true if has no rules', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.validated).toBe(true)

    done()
  })

  it('should be `validated` true only if validation ran once at least', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'text',
          rules: 'required'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.validated).toBe(false)

    name.vm.validate()

    expect(name.vm.validated).toBe(true)

    done()
  })

  it('should `resetValidators`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'text',
          rules: 'required'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.errors.length).toBe(0)

    name.vm.validate()

    expect(name.vm.errors.length).toBe(1)

    name.vm.resetValidators()

    expect(name.vm.errors.length).toBe(0)

    done()
  })

  it('should set `validated` true on `resetValidators` if has no rules', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.validated).toBe(true)

    name.vm.validate()

    expect(name.vm.validated).toBe(true)

    name.vm.resetValidators()

    expect(name.vm.validated).toBe(true)

    done()
  })

  it('should set `validated` false on `resetValidators` if has rules', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'text',
          rules: 'required'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.validated).toBe(false)

    name.vm.validate()

    expect(name.vm.validated).toBe(true)

    name.vm.resetValidators()

    expect(name.vm.validated).toBe(false)

    done()
  })
})