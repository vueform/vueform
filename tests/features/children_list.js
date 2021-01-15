import { createForm, prototypeChildType } from 'test-helpers'
import asyncForEach from './../../src/utils/asyncForEach'

export const children$Array = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `children$Array` be an empty array by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 0,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children$Array.length).toBe(0)
  })

  it('should `children$Array` contain instances of child components', async () => {
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

      expect(el.children$Array.length).toBe(1)
      expect(el.children$Array[0].schema.type).toStrictEqual(prototypeChildType(prototype))
    })
  })
}

export const children$ = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `children$` be an empty object by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 0,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(_.keys(el.children$).length).toBe(0)
  })

  it('should `children$` contain instances of child components', async () => {
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

      expect(_.keys(el.children$).length).toBe(1)
      expect(el.children$[0].schema.type).toStrictEqual(prototypeChildType(prototype))
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