import flushPromises from 'flush-promises'
import { createForm, prototypeChildType, prototypeAddChildOptions, prototypeChildName, prototypeWithInitial } from 'test-helpers'

import {
  dirty as baseDirty, validated as baseValidated, pending as basePending, debouncing as baseDebouncing,
  busy as baseBusy, errors as baseErrors, error as baseError
} from './validation'

import asyncForEach from './../../src/utils/asyncForEach'
import { nextTick } from 'vue'

export { dirt, messageBag, Validators } from './validation'

export const dirty = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseDirty(elementType, elementName, options)

  it('should be `dirty` if any of the children is dirty', async () => {
    await asyncForEach([prototypes[0]], async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
          }, prototypeWithInitial(1, options, i))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child = form.vm.el$(`el.${childType == 'object' ? `0.${options.childName || 'child'}` : '0'}`)

      expect(el.dirty).toBe(false)

      child.dirt()

      expect(el.dirty).toBe(true)
    })
  })
}

export const validated = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseValidated(elementType, elementName, options)

  it('should be `validated` if all the children are validated', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
          }, prototypeAddChildOptions(prototypeWithInitial(2, options, i), { rules: 'required' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)
      let child1 = form.vm.el$(`el.${childType == 'object' ? `1.${prototypeChildName(prototype)}` : '1'}`)

      expect(el.validated).toBe(false)

      child0.validate()
      child1.validate()

      await flushPromises()

      expect(el.validated).toBe(true)
    })
  })

  it('should not be `validated` if any of the children are validated', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
          }, prototypeAddChildOptions(prototypeWithInitial(2, options, i), { rules: 'required' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)

      expect(el.validated).toBe(false)

      child0.validate()

      await flushPromises()

      expect(el.validated).toBe(false)
    })
  })
}

export const invalid = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should be `invalid` if any of the validators is invalid', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            rules: 'min:3|max:5'
          }, prototypeWithInitial(2, options, i))
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.validate()

      await flushPromises()

      expect(el.invalid).toBe(true)
    })
  })

  it('should not be `invalid` if none of the validators is invalid', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 4,
            rules: 'min:3|max:5'
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.validate()

      await flushPromises()

      expect(el.invalid).toBe(false)

    })
  })

  it('should be `invalid` if any the children is invalid', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
          }, prototypeAddChildOptions(prototype, { rules: 'required' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)

      child0.update('value')

      el.validate()

      await flushPromises()

      expect(el.invalid).toBe(true)
    })
  })

  it('should not be `invalid` if none of children is invalid', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
          }, prototypeAddChildOptions(prototype, { rules: 'required' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)
      let child1 = form.vm.el$(`el.${childType == 'object' ? `1.${prototypeChildName(prototype)}` : '1'}`)

      child0.update('value')
      child1.update('value2')

      el.validate()

      await flushPromises()

      expect(el.invalid).toBe(false)
    })
  })
}

export const pending = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  basePending(elementType, elementName, options)

  it('should be `pending` if any of the children is pending', async () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
          }, prototypeAddChildOptions(prototype, { rules: 'unique:param1,param2' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)
      let child1 = form.vm.el$(`el.${childType == 'object' ? `1.${prototypeChildName(prototype)}` : '1'}`)

      child0.$laraform.services.axios.post = axiosPostMock
      child1.$laraform.services.axios.post = axiosPostMock

      el.validate()

      expect(el.pending).toBe(true)

      await flushPromises()
      
      expect(el.pending).toBe(false)
    })
  })
}

export const debouncing = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseDebouncing(elementType, elementName, options)

  it('should be `debouncing` if any of the children is debouncing', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
          }, prototypeAddChildOptions(prototype, { rules: 'required', debounce: 1 }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)

      child0.validate()

      expect(el.debouncing).toBe(true)
      
      setTimeout(() => {
        expect(el.pending).toBe(false)
      }, 1)
    })
  })
}

export const busy = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseBusy(elementType, elementName, options)

  it('should have `busy` "true" if any of the children is pending and "false" when async validation finished', async () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
          }, prototypeAddChildOptions(prototype, { rules: 'unique:param1,param2' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)
      let child1 = form.vm.el$(`el.${childType == 'object' ? `1.${prototypeChildName(prototype)}` : '1'}`)

      child0.$laraform.services.axios.post = axiosPostMock
      child1.$laraform.services.axios.post = axiosPostMock

      el.validate()

      expect(el.busy).toBe(true)

      await flushPromises()
      
      expect(el.busy).toBe(false)
    })
  })

  it('should have `busy` "true" if any of the children is debouncing and "false" when async validation finished', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
          }, prototypeAddChildOptions(prototype, { rules: 'required', debounce: 1 }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)

      child0.validate()

      expect(el.busy).toBe(true)
      
      setTimeout(() => {
        expect(el.busy).toBe(false)
      }, 1)
    })
  })
}

export const errors = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseErrors(elementType, elementName, options)

  it('should collect `errors` from validators & children', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
            rules: 'min:3|max:5',
          }, prototypeAddChildOptions(prototype, { rules: 'required' }))
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.validate()

      await flushPromises()

      expect(el.errors.length).toBe(3)
    })
  })
}

export const error = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseError(elementType, elementName, options)

  it('should have `error` as the first message from validator & children errors', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
            rules: 'min:3|max:5',
          }, prototypeAddChildOptions(prototype, { rules: 'required' }))
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.validate()

      await flushPromises()

      expect(el.error).toBe(el.errors[0])
    })
  })
}

export const validate = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should validate both validators & children on `validate`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
            rules: 'min:3|max:5',
          }, prototypeAddChildOptions(prototype, { rules: 'required' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)
      let child1 = form.vm.el$(`el.${childType == 'object' ? `1.${prototypeChildName(prototype)}` : '1'}`)

      expect(el.validated).toBe(false)
      expect(child0.validated).toBe(false)
      expect(child1.validated).toBe(false)

      el.validate()

      await flushPromises()

      expect(el.validated).toBe(true)
      expect(child0.validated).toBe(true)
      expect(child1.validated).toBe(true)
    })
  })
}

export const validateValidators = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should validate only validators on `validateValidators`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
            rules: 'min:3|max:5',
          }, prototypeAddChildOptions(prototype, { rules: 'required' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)
      let child1 = form.vm.el$(`el.${childType == 'object' ? `1.${prototypeChildName(prototype)}` : '1'}`)

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
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
            rules: 'min:3|max:5',
          }, prototypeAddChildOptions(prototype, { rules: 'required' }))
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      expect(el.state.validated).toBe(false)

      form.vm.disableValidation()

      el.validateValidators()

      await flushPromises()

      expect(el.state.validated).toBe(false)
    })
  })
}

export const validateChildren = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should validate only children on `validateChildren`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
            rules: 'min:3|max:5',
          }, prototypeAddChildOptions(prototype, { rules: 'required' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)
      let child1 = form.vm.el$(`el.${childType == 'object' ? `1.${prototypeChildName(prototype)}` : '1'}`)

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
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
            rules: 'min:3|max:5',
          }, prototypeAddChildOptions(prototype, { rules: 'required' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)
      let child1 = form.vm.el$(`el.${childType == 'object' ? `1.${prototypeChildName(prototype)}` : '1'}`)

      expect(child0.validated).toBe(false)
      expect(child1.validated).toBe(false)

      form.vm.disableValidation()

      el.validateChildren()

      await flushPromises()

      expect(child0.validated).toBe(false)
      expect(child1.validated).toBe(false)
    })
  })
}

export const clean = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should clean element and children on `clean`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
          }, prototypeAddChildOptions(prototype))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)
      let child1 = form.vm.el$(`el.${childType == 'object' ? `1.${prototypeChildName(prototype)}` : '1'}`)

      el.dirt()
      child0.dirt()
      child1.dirt()

      el.clean()

      expect(el.state.dirty).toBe(false)
      expect(child0.dirty).toBe(false)
      expect(child1.dirty).toBe(false)
    })
  })
}

export const resetValidators = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should reset element and children validators and set "validated" false on `resetValidators`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 2,
            rules: 'min:3',
          }, prototypeAddChildOptions(prototype, { rules: 'required' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? `0.${prototypeChildName(prototype)}` : '0'}`)
      let child1 = form.vm.el$(`el.${childType == 'object' ? `1.${prototypeChildName(prototype)}` : '1'}`)

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
  })
}