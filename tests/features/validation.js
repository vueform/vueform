import flushPromises from 'flush-promises'
import { createForm, testPropDefault, destroy } from 'test-helpers'
import { nextTick } from 'vue'
import Validator from './../../src/services/validation/validator'

jest.useFakeTimers()

const value = function(options) {
  return options.value !== undefined ? options.value : 'value'
}

const value2 = function(options) {
  return options.value2 !== undefined ? options.value2 : 'value2'
}

export const dirty = function (elementType, elementName, options) {
  it('should not be `dirty` by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    await nextTick()
    await nextTick()

    expect(el.dirty).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should have `dirty` "true" if state.dirty is true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.state.dirty = true

    expect(el.dirty).toBe(true)
  })
  
  it('should have `dirty` "false" if state.dirty is false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.state.dirty = false

    expect(el.dirty).toBe(false)

    // destroy() // teardown
  })
}

export const validated = function (elementType, elementName, options) {
  it('should be `validated` "true" if has no rules by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.validated).toBe(true)
    
    // destroy(form) // teardown
  })

  it('should be `validated` "false" if has rules by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.validated).toBe(false)
  })
  
  it('should be `validated` true only if validation ran once at least', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.validated).toBe(false)

    el.validate()

    await flushPromises()

    expect(el.validated).toBe(true)

    // destroy() // teardown
  })
}

export const invalid = function (elementType, elementName, options) {
  it('should have `invalid` "true" if any of the validators is invalid', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false, // for files
          rules: 'required|email'
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(value(options))

    el.validate()

    await flushPromises()

    expect(el.invalid).toBe(true)
  })
  
  it('should have `invalid` "false" if none of the validators is invalid', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required',
          auto: false, // for files
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(value(options))

    el.validate()

    await flushPromises()

    expect(el.invalid).toBe(false)

    // destroy() // teardown
  })
}

export const pending = function (elementType, elementName, options) {
  it('should have `pending` "true" if any of the validators is pending and "false" when async validation finished', async () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'unique:param'
        }
      }
    })

    let el = form.vm.el$('el')

    el.$laraform.services.axios.post = axiosPostMock

    el.validate()

    expect(el.pending).toBe(true)

    await flushPromises()
    
    expect(el.pending).toBe(false)

    // destroy() // teardown
  })
}

export const debouncing = function (elementType, elementName, options) {
  it('should have `debouncing` "true" if any of the validators is debouncing and "false" when async it finishes', async () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required',
          default: options.default,
          debounce: 1,
        }
      }
    })

    let el = form.vm.el$('el')

    el.$laraform.services.axios.post = axiosPostMock

    el.validate()

    expect(el.debouncing).toBe(true)

    jest.advanceTimersByTime(1)
    await flushPromises()

    expect(el.debouncing).toBe(false)

    // destroy() // teardown
  })
}

export const busy = function (elementType, elementName, options) {
  it('should have `busy` "true" if any of the validators is pending and "false" when async validation finished', async () => {
    let axiosRequestMock = jest.fn(() => Promise.resolve({ data: {} }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'unique:param'
        }
      }
    })

    let el = form.vm.el$('el')

    el.$laraform.services.axios.request = axiosRequestMock

    el.validate()

    expect(el.busy).toBe(true)

    await flushPromises()

    expect(el.busy).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should have `busy` "true" if any of the validators is debouncing and "false" when async it finishes', async () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required',
          default: options.default,
          debounce: 1,
        }
      }
    })

    let el = form.vm.el$('el')

    el.$laraform.services.axios.post = axiosPostMock

    el.validate()

    expect(el.busy).toBe(true)

    jest.advanceTimersByTime(1)
    await flushPromises()

    expect(el.busy).toBe(false)

    // destroy() // teardown
  })
}

export const errors = function (elementType, elementName, options) {
  it('should collect `errors` from failed validation rules', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'url|email',
        }
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()

    expect(el.errors.length).toBe(2)

    // destroy() // teardown
  })
}

export const error = function (elementType, elementName, options) {
  it('should `error` as the first message from errors', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'url|email',
        }
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()

    expect(el.error).toBe(el.errors[0])

    // destroy() // teardown
  })
}

export const validate = function (elementType, elementName, options) {
  it('should not `validate` if form validation is "false"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required'
        }
      }
    })

    form.vm.disableValidation()

    let el = form.vm.el$('el')

    expect(el.validated).toBe(false)

    el.validate()

    expect(el.validated).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should not `validate` if element has no rules', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.validated).toBe(true)

    el.validate()

    expect(el.validated).toBe(true)
    
    // destroy(form) // teardown
  })

  it('should `validate` & set `validated` "true"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'url',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.invalid).toBe(false)
    expect(el.validated).toBe(false)

    el.validate()

    await flushPromises()

    expect(el.invalid).toBe(true)
    expect(el.validated).toBe(true)

    // destroy() // teardown
  })
}

export const resetValidators = function (elementType, elementName, options) {
  it('should `resetValidators`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'url'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.errors.length).toBe(0)

    el.validate()

    expect(el.errors.length).toBe(1)

    el.resetValidators()

    expect(el.errors.length).toBe(0)
    
    // destroy(form) // teardown
  })

  it('should set `validated` "true" on `resetValidators` if has no rules', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.validated).toBe(true)

    el.validate()

    expect(el.validated).toBe(true)

    el.resetValidators()

    expect(el.validated).toBe(true)
    
    // destroy(form) // teardown
  })

  it('should set `validated` false on `resetValidators` if has rules', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.validated).toBe(false)

    el.validate()

    await flushPromises()

    expect(el.validated).toBe(true)

    el.resetValidators()

    expect(el.validated).toBe(false)

    // destroy() // teardown
  })
}

export const dirt = function (elementType, elementName, options) {
  it('should `dirt`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.dirt()
    
    expect(el.dirty).toBe(true)

    // destroy() // teardown
  })
}

export const clean = function (elementType, elementName, options) {
  it('should `clean`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.dirt()
    
    expect(el.dirty).toBe(true)

    el.clean()

    expect(el.dirty).toBe(false)

    // destroy() // teardown
  })
}

export const messageBag = function (elementType, elementName, options) {
  it('should init `messageBag`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.messageBag instanceof el.$laraform.services.messageBag).toBe(true)

    // destroy() // teardown
  })
}

export const Validators = function (elementType, elementName, options) {
  it('should init `Validators`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required|email'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.Validators.length).toBe(2)
    expect(el.Validators[0] instanceof Validator).toBe(true)
    expect(el.Validators[1] instanceof Validator).toBe(true)
    expect(el.Validators[0].name).toBe('required')
    expect(el.Validators[1].name).toBe('email')

    // destroy() // teardown
  })
}

export const watchers = function (elementType, elementName, options) {
  it('should update Validators when rules change', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required'
        }
      }
    })

    let el = form.vm.el$('el')


    expect(el.Validators.length).toBe(1)
    expect(el.Validators[0] instanceof Validator).toBe(true)
    expect(el.Validators[0].name).toBe('required')

    form.vm.laraform.schema.el.rules = 'email|required'

    await nextTick()

    expect(el.Validators.length).toBe(2)
    expect(el.Validators[0] instanceof Validator).toBe(true)
    expect(el.Validators[1] instanceof Validator).toBe(true)
    expect(el.Validators[0].name).toBe('email')
    expect(el.Validators[1].name).toBe('required')

    // destroy() // teardown
  })
}