import { createForm, prototypeChildType, destroy } from 'test-helpers'
import asyncForEach from './../../src/utils/asyncForEach'
import { nextTick } from 'vue'

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
    
    // destroy(form) // teardown
  })

  it('should `children$Array` contain instances of child components', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add()

      await nextTick()

      expect(el.children$Array.length).toBe(1)
      expect(el.children$Array[0].type).toStrictEqual(el.isObject ? 'object' : (options.prototypes[i].element ? options.prototypes[i].element.type : 'file'))
    
      // destroy(form) // teardown
    })

    // destroy() // teardown
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
    
    // destroy(form) // teardown
  })

  it('should `children$` contain instances of child components', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add()

      await nextTick()

      expect(_.keys(el.children$).length).toBe(1)
      expect(el.children$[0].type).toStrictEqual(el.isObject ? 'object' : (options.prototypes[i].element ? options.prototypes[i].element.type : 'file'))
    
      // destroy(form) // teardown
    })
  })
}