import { nextTick } from 'vue'
import { createForm, testComputedOption, prototypeAddOptions } from 'test-helpers'

export const storeOrder = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'storeOrder', null, 'order')
}

export const order = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'order', null, 'DESC')
}

export const orderBy = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'orderBy', null, 'order')

  it('should have `orderBy` equal to storeOrder if defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          storeOrder: 'order',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.orderBy).toBe(el.storeOrder)
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
        }, prototypeAddOptions(prototypes[1], {
          order: {
            type: 'text'
          }
        }))
      }
    })

    let el = form.vm.el$('el')

    el.add()
    el.add()
    el.add()

    await nextTick()

    let child0 = form.vm.el$('el.0')
    let child1 = form.vm.el$('el.1')
    let child2 = form.vm.el$('el.2')
    let order0 = form.vm.el$('el.0.order')
    let order1 = form.vm.el$('el.1.order')
    let order2 = form.vm.el$('el.2.order')

    expect(order0.value).toBe(1)
    expect(order1.value).toBe(2)
    expect(order2.value).toBe(3)
    expect(child0.schema.key).toBe(0)
    expect(child1.schema.key).toBe(1)
    expect(child2.schema.key).toBe(2)

    el.remove(1)

    await nextTick()

    child0 = form.vm.el$('el.0')
    child1 = form.vm.el$('el.1')
    order0 = form.vm.el$('el.0.order')
    order1 = form.vm.el$('el.1.order')

    expect(order0.value).toBe(1)
    expect(order1.value).toBe(2)
    expect(child0.schema.key).toBe(0)
    expect(child1.schema.key).toBe(2)
  })
}