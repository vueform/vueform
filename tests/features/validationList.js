import flushPromises from 'flush-promises'
import { createForm, findAllComponents, testComputedOption, prototypeChildType, prototypeInputType, prototypeAddOptions } from 'test-helpers'
import {
  rules, messages, displayError, dirty as baseDirty, validated as baseValidated,
} from './validation'
import asyncForEach from './../../src/utils/asyncForEach'
import { nextTick } from 'vue'

export {
  rules,
  messages,
  displayError,
}

export const dirty = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  baseDirty(elementType, elementName, options)

  it('should be `dirty` if any of the children is dirty', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child = form.vm.el$(`el.${childType == 'object' ? '0.child' : '0'}`)

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
            initial: 2,
          }, prototypeAddOptions(prototype, { rules: 'required' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? '0.child' : '0'}`)
      let child1 = form.vm.el$(`el.${childType == 'object' ? '1.child' : '1'}`)

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
            initial: 2,
          }, prototypeAddOptions(prototype, { rules: 'required' }))
        }
      })

      let childType = prototypeChildType(prototype)

      let el = form.vm.el$('el')

      await nextTick()

      let child0 = form.vm.el$(`el.${childType == 'object' ? '0.child' : '0'}`)

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
            initial: 2,
            rules: 'min:3|max:5'
          })
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
          })
        }
      })

      let el = form.vm.el$('el')

      await nextTick()

      el.validate()

      await flushPromises()

      expect(el.invalid).toBe(false)
    })
  })
}

export default function (elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName, options)
    })
  }
}