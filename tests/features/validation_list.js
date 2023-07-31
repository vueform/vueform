import flushPromises from 'flush-promises'
import { createForm, listSchema, listChild, listChildValue, destroy } from 'test-helpers'

import {
  dirty as baseDirty, validated as baseValidated, pending as basePending,
  errors as baseErrors, error as baseError
} from './validation'

import {
  busy as baseBusy
} from './validation_checkbox'

import asyncForEach from './../../src/utils/asyncForEach'
import { nextTick } from 'vue'

jest.useFakeTimers()

export { dirt, messageBag, Validators, watchers } from './validation'

export const dirty = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseDirty(elementType, elementName, options)

  it('should be `dirty` if any of the children is dirty', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 1,
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child = listChild(el, options, 0)

      expect(el.dirty).toBe(false)

      child.dirt()

      expect(el.dirty).toBe(true)
    })

    // destroy() // teardown
  })
}

export const validated = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseValidated(elementType, elementName, options)

  it('should be `validated` if all the children are validated', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)
      let child1 = listChild(el, options, 1)

      expect(el.validated).toBe(false)

      child0.validate()
      child1.validate()

      await flushPromises()

      expect(el.validated).toBe(true)
    })
    
    // destroy(form) // teardown
  })

  it('should not be `validated` if any of the children are validated', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)

      expect(el.validated).toBe(false)

      child0.validate()

      await flushPromises()

      expect(el.validated).toBe(false)
    })

    // destroy() // teardown
  })
}

export const invalid = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should be `invalid` if any of the validators is invalid', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        parent: { rules: 'min:3|max:5' },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      el.validate()

      await flushPromises()

      expect(el.invalid).toBe(true)
    })
    
    // destroy(form) // teardown
  })

  it('should not be `invalid` if none of the validators is invalid', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 4,
        parent: { rules: 'min:3|max:5' },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      el.validate()

      await flushPromises()

      expect(el.invalid).toBe(false)

    })
    
    // destroy(form) // teardown
  })

  it('should be `invalid` if any the children is invalid', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)

      child0.update(options.childValues[i])

      el.validate()

      await flushPromises()

      expect(el.invalid).toBe(true)
    })
    
    // destroy(form) // teardown
  })

  it('should not be `invalid` if none of children is invalid', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)
      let child1 = listChild(el, options, 1)

      child0.update(listChildValue(options, i, 0))
      child1.update(listChildValue(options, i, 1))

      el.validate()

      await flushPromises()

      expect(el.invalid).toBe(false)
    })

    // destroy() // teardown
  })
}

export const pending = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  basePending(elementType, elementName, options)

  it('should be `pending` if any of the children is pending', async () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'unique:param1,param2' },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)
      let child1 = listChild(el, options, 1)

      child0.$vueform.services.axios.request = axiosPostMock
      child1.$vueform.services.axios.request = axiosPostMock

      child0.validate()

      await nextTick()

      expect(el.pending).toBe(true)

      await flushPromises()
      
      expect(el.pending).toBe(false)
    })

    // destroy() // teardown
  })
}

export const debouncing = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should be `debouncing` if any of the children is debouncing', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required', debounce: 1, default: options.childValues[0] },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)

      child0.validate()

      await nextTick()
      await nextTick()

      expect(el.debouncing).toBe(true)

      jest.advanceTimersByTime(1)
      await flushPromises()
      
      expect(el.pending).toBe(false)
    })

    // destroy() // teardown
  })
}

export const busy = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseBusy(elementType, elementName, options)

  it('should have `busy` "true" if any of the children is pending and "false" when async validation finished', async () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'unique:param1,param2' },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)
      let child1 = listChild(el, options, 1)

      child0.$vueform.services.axios.request = axiosPostMock
      child1.$vueform.services.axios.request = axiosPostMock

      child0.validate()

      await nextTick()

      expect(el.busy).toBe(true)

      await flushPromises()
      
      expect(el.busy).toBe(false)
    })
    
    // destroy(form) // teardown
  })

  it('should have `busy` "true" if any of the children is debouncing and "false" when async validation finished', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required', debounce: 1, default: options.childValues[0] },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)

      child0.validate()

      await nextTick()
      await nextTick()

      expect(el.busy).toBe(true)
      
      jest.advanceTimersByTime(1)
      await flushPromises()

      expect(el.busy).toBe(false)
    })

    // destroy() // teardown
  })
}

export const errors = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseErrors(elementType, elementName, options)

  it('should collect `errors` from validators & children', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
        parent: { rules: 'min:3|max:5' },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      el.validate()

      await flushPromises()

      expect(el.errors.length).toBe(3)
    })

    // destroy() // teardown
  })
}

export const error = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseError(elementType, elementName, options)

  it('should have `error` as the first message from validator & children errors', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
        parent: { rules: 'min:3|max:5', }
      }))

      let el = form.vm.el$('el')

      await nextTick()

      el.validate()

      await flushPromises()

      expect(el.error).toBe(el.errors[0])
    })

    // destroy() // teardown
  })
}

export const validate = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should validate both validators & children on `validate`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
        parent: { rules: 'min:3|max:5', }
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)
      let child1 = listChild(el, options, 1)

      expect(el.validated).toBe(false)
      expect(child0.validated).toBe(false)
      expect(child1.validated).toBe(false)

      el.validate()

      await flushPromises()

      expect(el.validated).toBe(true)
      expect(child0.validated).toBe(true)
      expect(child1.validated).toBe(true)
    })

    // destroy() // teardown
  })
}

export const validateValidators = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should validate only validators on `validateValidators`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
        parent: { rules: 'min:3|max:5', }
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)
      let child1 = listChild(el, options, 1)

      expect(el.state.validated).toBe(false)
      expect(child0.validated).toBe(false)
      expect(child1.validated).toBe(false)

      el.validateValidators()

      await flushPromises()

      expect(el.state.validated).toBe(true)
      expect(child0.validated).toBe(false)
      expect(child1.validated).toBe(false)
    })
  })
  
  it('should not validate validators on `validateValidators` when form validation disabled', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
        parent: { rules: 'min:3|max:5', }
      }))

      let el = form.vm.el$('el')

      await nextTick()

      expect(el.state.validated).toBe(false)

      form.vm.disableValidation()

      el.validateValidators()

      await flushPromises()

      expect(el.state.validated).toBe(false)
    })

    // destroy() // teardown
  })
}

export const validateChildren = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should validate only children on `validateChildren`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
        parent: { rules: 'min:3|max:5', }
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)
      let child1 = listChild(el, options, 1)

      expect(el.state.validated).toBe(false)
      expect(child0.validated).toBe(false)
      expect(child1.validated).toBe(false)

      el.validateChildren()

      await flushPromises()

      expect(el.state.validated).toBe(false)
      expect(child0.validated).toBe(true)
      expect(child1.validated).toBe(true)
    })
  })
  
  it('should not validate children on `validateChildren` when form validation disabled', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
        parent: { rules: 'min:3|max:5', }
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)
      let child1 = listChild(el, options, 1)

      expect(child0.validated).toBe(false)
      expect(child1.validated).toBe(false)

      form.vm.disableValidation()

      el.validateChildren()

      await flushPromises()

      expect(child0.validated).toBe(false)
      expect(child1.validated).toBe(false)
    })

    // destroy() // teardown
  })
}

export const clean = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should clean element and children on `clean`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)
      let child1 = listChild(el, options, 1)

      el.dirt()
      child0.dirt()
      child1.dirt()

      el.clean()

      expect(el.state.dirty).toBe(false)
      expect(child0.dirty).toBe(false)
      expect(child1.dirty).toBe(false)
    })

    // destroy() // teardown
  })
  
  it('should not throw console error on clean when child element is static', async () => {
    
    let errorMock = jest.spyOn(console, 'error').mockImplementation()
    
    const form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 2,
          element: { type: 'text' },
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    el.clean()
    
    expect(errorMock).not.toHaveBeenCalled()
    // destroy() // teardown
  })
}

export const reinitValidation = function (elementType, elementName, options) {
  
  it('should set `Validators` on reinit for itself and its children', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: '',
          initial: 2,
          element: { type: 'text' },
        }
      }
    })
    
    const el = form.vm.el$('el')
    const child = form.vm.el$('el.0')
    
    expect(el.Validators).toStrictEqual([])
    expect(child.Validators).toStrictEqual([])

    await nextTick()
    
    el.$set(form.vm.vueform.schema.el, 'rules', 'required')
    el.$set(form.vm.vueform.schema.el.element, 'rules', 'required|min:3')
    
    await nextTick()
   
    el.reinitValidation()
    
    await nextTick()
    
    expect(el.Validators.length).toBe(1)
    expect(child.Validators.length).toBe(2)
  })
}

export const resetValidators = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should reset element and children validators and set "validated" false on `resetValidators`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 2,
        child: { rules: 'required' },
        parent: { rules: 'min:3', }
      }))

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = listChild(el, options, 0)
      let child1 = listChild(el, options, 1)

      el.validate()

      await flushPromises()

      expect(el.invalid).toBe(true)
      expect(child0.invalid).toBe(true)
      expect(child1.invalid).toBe(true)
      expect(el.state.validated).toBe(true)
      expect(child0.validated).toBe(true)
      expect(child1.validated).toBe(true)

      el.resetValidators()

      expect(el.invalid).toBe(false)
      expect(child0.invalid).toBe(false)
      expect(child1.invalid).toBe(false)
      expect(el.state.validated).toBe(false)
      expect(child0.validated).toBe(false)
      expect(child1.validated).toBe(false)
    })

    // destroy() // teardown
  })
}