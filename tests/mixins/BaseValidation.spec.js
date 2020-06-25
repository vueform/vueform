import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../src/utils/testHelpers'

describe('Element Validation Computed', () => {
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

  it('should call `dirt` when value changes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.dirty).toBe(false)

    LocalVue.nextTick(() => {
      name.get('input').setValue('aaa')

      LocalVue.nextTick(() => {
        expect(name.vm.dirty).toBe(true)

        done()
      })
    })
  })
})