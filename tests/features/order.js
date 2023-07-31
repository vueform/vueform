import { nextTick } from 'vue'
import { createForm, listSchema, listChildValue, listChild, destroy } from 'test-helpers'

export const orderByName = function (elementType, elementName, options) {
  it('should be equal to orderBy if defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          orderBy: 'orderBy',
          storeOrder: 'storeOrder',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.orderByName).toBe('orderBy')
    
    // destroy(form) // teardown
  })

  it('should be equal to storeOrder if orderBy is not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          storeOrder: 'storeOrder',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.orderByName).toBe('storeOrder')

    // destroy() // teardown
  })
}

export const refreshOrderStore = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `refreshOrderStore` if object', async () => {
    
    const schema = listSchema(options, 1, {
      initial: 0,
      parent: {
        storeOrder: 'order',
      },
      orderField: true
    })
    
    let form = createForm(schema)

    let el = form.vm.el$('el')

    el.add(listChildValue(options, 1, 0))
    el.add(listChildValue(options, 1, 1))
    el.add(listChildValue(options, 1, 2))

    await nextTick()

    let child0 = listChild(el, options, 0)
    let child1 = listChild(el, options, 1)
    let child2 = listChild(el, options, 2)
    let order0 = form.vm.el$('el.0.order')
    let order1 = form.vm.el$('el.1.order')
    let order2 = form.vm.el$('el.2.order')

    expect(order0.value).toBe(1)
    expect(order1.value).toBe(2)
    expect(order2.value).toBe(3)
    expect(child0.value).toStrictEqual(listChildValue(options, 1, 0)[options.childName])
    expect(child1.value).toStrictEqual(listChildValue(options, 1, 1)[options.childName])
    expect(child2.value).toStrictEqual(listChildValue(options, 1, 2)[options.childName])

    el.remove(1)

    await nextTick()

    child0 = listChild(el, options, 0)
    child1 = listChild(el, options, 1)
    order0 = form.vm.el$('el.0.order')
    order1 = form.vm.el$('el.1.order')

    expect(order0.value).toBe(1)
    expect(order1.value).toBe(2)
    expect(child0.value).toStrictEqual(listChildValue(options, 1, 0)[options.childName])
    expect(child1.value).toStrictEqual(listChildValue(options, 1, 2)[options.childName])

    // destroy() // teardown
  })

  it('should `refreshOrderStore` with zero based index if orderFrom = 0', async () => {

    const schema = listSchema(options, 1, {
      initial: 0,
      parent: {
        storeOrder: 'order',
        order: 'DESC',
      },
      orderField: true
    })

    const configOptions = {
      config: {
        orderFrom: 0
      }
    }

    let form = createForm(schema, configOptions)

    let el = form.vm.el$('el')

    el.add(listChildValue(options, 1, 0))
    el.add(listChildValue(options, 1, 1))
    el.add(listChildValue(options, 1, 2))

    await nextTick()

    let child0 = listChild(el, options, 0)
    let child1 = listChild(el, options, 1)
    let child2 = listChild(el, options, 2)
    let order0 = form.vm.el$('el.0.order')
    let order1 = form.vm.el$('el.1.order')
    let order2 = form.vm.el$('el.2.order')

    expect(order0.value).toBe(2)
    expect(order1.value).toBe(1)
    expect(order2.value).toBe(0)
    expect(child0.value).toStrictEqual(listChildValue(options, 1, 0)[options.childName])
    expect(child1.value).toStrictEqual(listChildValue(options, 1, 1)[options.childName])
    expect(child2.value).toStrictEqual(listChildValue(options, 1, 2)[options.childName])

    el.remove(1)

    await nextTick()

    child0 = listChild(el, options, 0)
    child1 = listChild(el, options, 1)
    order0 = form.vm.el$('el.0.order')
    order1 = form.vm.el$('el.1.order')

    expect(order0.value).toBe(1)
    expect(order1.value).toBe(0)
    expect(child0.value).toStrictEqual(listChildValue(options, 1, 0)[options.childName])
    expect(child1.value).toStrictEqual(listChildValue(options, 1, 2)[options.childName])

    // destroy() // teardown
  })
}
//@todo:adam imports are not in correct order for this to work
// export const watchers = function (elementType, elementName, options) {
//
//   it('should invoke refreshOrderStore if storeOrder changes but not removed', async () => {
//
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           storeOrder: 'order',
//           initial: 3,
//           sort: true,
//           object: {
//             schema: {
//               name: { type: 'text' },
//               order: { type: 'hidden', meta: true },
//             }
//           }
//         }
//       }
//     })
//
//     let el = form.vm.el$('el')
//
//     let child1 = form.vm.el$('el.0')
//     let child2 = form.vm.el$('el.1')
//     let child3 = form.vm.el$('el.2')
//
//     expect(child1.value).toStrictEqual({ name: null, order: 1 })
//     expect(child2.value).toStrictEqual({ name: null, order: 2 })
//     expect(child3.value).toStrictEqual({ name: null, order: 3 })
//
//     el.$set(form.vm.vueform.schema.el, 'storeOrder', 'elseOrder')
//
//     expect(child1.value).toStrictEqual({ name: null, order: 1 })
//     expect(child2.value).toStrictEqual({ name: null, order: 2 })
//     expect(child3.value).toStrictEqual({ name: null, order: 3 })
//   })
//
//   it('should remove storeOrder property from elements if set to undefined', () => {
//
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           storeOrder: 'order',
//           initial: 3,
//           sort: true,
//           object: {
//             schema: {
//               name: { type: 'text' },
//               order: { type: 'hidden', meta: true },
//             }
//           }
//         }
//       }
//     })
//
//     let el = form.vm.el$('el')
//
//     let child1 = form.vm.el$('el.0')
//     let child2 = form.vm.el$('el.1')
//     let child3 = form.vm.el$('el.2')
//
//     expect(child1.value).toStrictEqual({ name: null, order: 1 })
//     expect(child2.value).toStrictEqual({ name: null, order: 2 })
//     expect(child3.value).toStrictEqual({ name: null, order: 3 })
//
//     el.$set(form.vm.vueform.schema.el, 'storeOrder', undefined)
//
//     expect(child1.value).toStrictEqual({ name: null, order: null })
//     expect(child2.value).toStrictEqual({ name: null, order: null })
//     expect(child3.value).toStrictEqual({ name: null, order: null })
//   })
// }