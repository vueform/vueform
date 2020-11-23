import { createForm, prototypeChildType } from 'test-helpers'
import asyncForEach from './../../src/utils/asyncForEach'

export const child$ = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `child$` be an empty array by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 1,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.child$).toStrictEqual([])
  })

  it('should `child$` contain instances of child components', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      expect(el.child$.length).toBe(1)
      expect(el.child$[0].schema.type).toStrictEqual(prototypeChildType(prototype))
    })
  })
}

export const instances = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `instances` be an empty array by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.instances).toStrictEqual([])
  })
}