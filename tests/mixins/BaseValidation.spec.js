import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../src/utils/testHelpers'
import flushPromises from 'flush-promises'

const Vue = createLocalVue()

describe('Element Validation Computed', () => {
  it('should not be `dirty` by default', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    await Vue.nextTick()
    await Vue.nextTick()

    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe(null)
  })

  it('should not be `dirty` when element has default value', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          default: 'aaa'
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    await Vue.nextTick()
    await Vue.nextTick()

    expect(a.vm.value).toBe('aaa')
    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe('aaa')
  })

  it('should not be `dirty` when data is loaded', async () => {
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

    await Vue.nextTick()
    await Vue.nextTick()

    expect(a.vm.value).toBe('aaa')
    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe('aaa')
  })

  it('should be `dirty` if the element value is changed by user input', async () => {
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

    await Vue.nextTick()

    a.get('input').setValue('aaa')
    a.get('input').trigger('keyup')

    await Vue.nextTick()

    expect(a.vm.dirty).toBe(true)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe('aaa')
  })

  it('should not be `dirty` if the element keyup occurs without value change', async () => {
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

    await Vue.nextTick()

    a.get('input').trigger('keyup')

    await Vue.nextTick()

    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe(null)
  })

  it('should be `dirty` if the element value is changed by update method', async () => {
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

    await Vue.nextTick()
    a.vm.update('aaa')

    await Vue.nextTick()
    expect(a.vm.dirty).toBe(true)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe('aaa')
  })

  it('should not be `dirty` if the element had no value and resetted', async () => {
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

    await Vue.nextTick()
    a.vm.reset()

    await Vue.nextTick()
    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe(null)
  })

  it('should not be `dirty` if the element had default value and resetted', async () => {
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

    await Vue.nextTick()
    a.vm.reset()

    await Vue.nextTick()
    expect(a.vm.value).toBe('aaa')
    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe('aaa')
    expect(a.vm.currentValue).toBe('aaa')
  })

  it('should be `dirty` if the element had default value, changed then resetted', async () => {
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

    a.get('input').setValue('bbb')

    await Vue.nextTick()

    expect(a.vm.value).toBe('bbb')
    expect(a.vm.dirty).toBe(true)
    expect(a.vm.previousValue).toBe('aaa')
    expect(a.vm.currentValue).toBe('bbb')

    a.vm.reset()

    expect(a.vm.value).toBe('aaa')
    expect(a.vm.dirty).toBe(true)
    expect(a.vm.previousValue).toBe('bbb')
    expect(a.vm.currentValue).toBe('aaa')
  })

  it('should be `dirty` if the element had value and resetted', async () => {
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

    await Vue.nextTick()
    a.vm.reset()

    await Vue.nextTick()
    expect(a.vm.value).toBe(a.vm.null)
    expect(a.vm.dirty).toBe(true)
    expect(a.vm.previousValue).toBe('aaa')
    expect(a.vm.currentValue).toBe(null)
  })

  it('should not be `dirty` if the element had no value and cleared', async () => {
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

    await Vue.nextTick()
    a.vm.clear()

    await Vue.nextTick()
    expect(a.vm.dirty).toBe(false)
    expect(a.vm.previousValue).toBe(null)
    expect(a.vm.currentValue).toBe(null)
  })

  it('should be `dirty` if the element had default value and cleared', async () => {
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

    await Vue.nextTick()
    a.vm.clear()

    await Vue.nextTick()
    expect(a.vm.value).toBe(a.vm.null)
    expect(a.vm.dirty).toBe(true)
    expect(a.vm.previousValue).toBe('aaa')
    expect(a.vm.currentValue).toBe(null)
  })

  it('should be `dirty` if the element had value and cleared', async () => {
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

    await Vue.nextTick()
    a.vm.clear()

    await Vue.nextTick()
    expect(a.vm.value).toBe(a.vm.null)
    expect(a.vm.dirty).toBe(true)
    expect(a.vm.previousValue).toBe('aaa')
    expect(a.vm.currentValue).toBe(null)
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

  it('should collect `errors` form validators', async () => {
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
  })
})

describe('Element Validation Methods', () => {
  it('should not `validate` if form validation is `false`', async () => {
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
  })

  it('should not `validate` if element has no rules', async () => {
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
  })

  it('should be `validated` true if has no rules', async () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.validated).toBe(true)
  })

  it('should be `validated` true only if validation ran once at least', async () => {
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

    await flushPromises()

    expect(name.vm.validated).toBe(true)
  })

  it('should `resetValidators`', async () => {
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
  })

  it('should set `validated` true on `resetValidators` if has no rules', async () => {
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
  })

  it('should set `validated` false on `resetValidators` if has rules', async () => {
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

    await flushPromises()

    expect(name.vm.validated).toBe(true)

    name.vm.resetValidators()

    expect(name.vm.validated).toBe(false)
  })
})