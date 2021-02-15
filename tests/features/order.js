import { nextTick } from 'vue'
import { createForm, prototypeAddOptions, replacePrototypeValue } from 'test-helpers'

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
  })
}

export const refreshOrderStore = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `refreshOrderStore` if object', async () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
          initial: 0,
          storeOrder: 'order',
        }, prototypes[1], prototypeAddOptions(prototypes[1], {
          order: {
            type: 'text'
          }
        }))
      }
    })

    let el = form.vm.el$('el')

    el.add(replacePrototypeValue(options.childValues[1], 0))
    el.add(replacePrototypeValue(options.childValues[1], 1))
    el.add(replacePrototypeValue(options.childValues[1], 2))

    await nextTick()

    let child0 = form.vm.el$('el.0.' + (options.childName || 'child'))
    let child1 = form.vm.el$('el.1.' + (options.childName || 'child'))
    let child2 = form.vm.el$('el.2.' + (options.childName || 'child'))
    let order0 = form.vm.el$('el.0.order')
    let order1 = form.vm.el$('el.1.order')
    let order2 = form.vm.el$('el.2.order')

    expect(order0.value).toBe(1)
    expect(order1.value).toBe(2)
    expect(order2.value).toBe(3)
    expect(child0.value).toStrictEqual(replacePrototypeValue(options.childValues[1], 0)[(options.childName || 'child')])
    expect(child1.value).toStrictEqual(replacePrototypeValue(options.childValues[1], 1)[(options.childName || 'child')])
    expect(child2.value).toStrictEqual(replacePrototypeValue(options.childValues[1], 2)[(options.childName || 'child')])

    el.remove(1)

    await nextTick()

    child0 = form.vm.el$('el.0.' + (options.childName || 'child'))
    child1 = form.vm.el$('el.1.' + (options.childName || 'child'))
    order0 = form.vm.el$('el.0.order')
    order1 = form.vm.el$('el.1.order')

    expect(order0.value).toBe(1)
    expect(order1.value).toBe(2)
    expect(child0.value).toStrictEqual(replacePrototypeValue(options.childValues[1], 0)[(options.childName || 'child')])
    expect(child1.value).toStrictEqual(replacePrototypeValue(options.childValues[1], 2)[(options.childName || 'child')])
  })
}