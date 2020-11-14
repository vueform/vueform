import { nextTick } from 'vue'
import {
  createForm, findAllComponents, testComputedOption, prototypeAddOptions,
  replacePrototypeValue
} from 'test-helpers'
import flushPromises from 'flush-promises'
import asyncForEach from './../../src/utils/asyncForEach'

export const sort = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'sort', false, true)
}

export const sortable = function (elementType, elementName, options) {
  it('should return `sortable` object if "sort" is "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.sortable.sort).toBe(true)
    expect(typeof el.sortable.onUpdate).toBe('function')
  })

  it('should return `sortable` object if "sort" is "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: false,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.sortable.sort).toBe(false)
    expect(typeof el.sortable.onUpdate).toBe('function')
  })

  it('should return `sortable` object if "disabled"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: true,
          disabled: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.sortable.sort).toBe(false)
    expect(typeof el.sortable.onUpdate).toBe('function')
  })

  it('should init `sortable` directive on list', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: true,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(el.sortableInstance.el).toStrictEqual(elWrapper.find(`.${el.defaultClasses.element}`).element)
  })

  it('should destroy `sortableInstance` when sort becomes "false"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.sortableInstance.el).toBeTruthy()

    el.sort = false

    await nextTick()

    expect(el.sortableInstance.el).toBe(null)
  })

  it('should reinit `sortableInstance` when "sort" becomes "true" again after destroy', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          sort: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.sortableInstance.el).toBeTruthy()

    el.sort = false

    await nextTick()

    expect(el.sortableInstance.el).toBe(null)

    el.sort = true

    await nextTick()

    expect(el.sortableInstance.el).toBeTruthy()
  })
}

export const handleSort = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should reorder child$ and children$ on `handleSort`', async () => {
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
      
      el.add(replacePrototypeValue(options.childValues[i], 0))
      el.add(replacePrototypeValue(options.childValues[i], 1))
      el.add(replacePrototypeValue(options.childValues[i], 2))

      await nextTick()

      el.handleSort({
        oldIndex: 1,
        newIndex: 0,
      })

      await nextTick()
      await nextTick()

      expect(el.value).toStrictEqual([
        replacePrototypeValue(options.childValues[i], 1),
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 2),
      ])

      expect(el.child$[0].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 1))
      expect(el.child$[1].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 0))
      expect(el.child$[2].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 2))

      expect(el.children$[0].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 1))
      expect(el.children$[1].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 0))
      expect(el.children$[2].value).toStrictEqual(replacePrototypeValue(options.childValues[i], 2))
    })
  })

  it('should refresh order store on `handleSort` if object', async () => {
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

    el.handleSort({
      oldIndex: 1,
      newIndex: 0,
    })

    await nextTick()

    child0 = form.vm.el$('el.0')
    child1 = form.vm.el$('el.1')
    child2 = form.vm.el$('el.2')
    order0 = form.vm.el$('el.0.order')
    order1 = form.vm.el$('el.1.order')
    order2 = form.vm.el$('el.2.order')

    expect(order0.value).toBe(1)
    expect(order1.value).toBe(2)
    expect(order2.value).toBe(3)
    expect(child0.schema.key).toBe(1)
    expect(child1.schema.key).toBe(0)
    expect(child2.schema.key).toBe(2)
  })

  it('should fire "sort" event with "value" on `handleSort`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onSortMock = jest.fn()

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
            onSort: onSortMock,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')
      
      el.add(replacePrototypeValue(options.childValues[i], 0))
      el.add(replacePrototypeValue(options.childValues[i], 1))
      el.add(replacePrototypeValue(options.childValues[i], 2))

      await nextTick()

      el.handleSort({
        oldIndex: 1,
        newIndex: 0,
      })

      await nextTick()
      await nextTick()

      expect(onSortMock).toHaveBeenCalledWith([
        replacePrototypeValue(options.childValues[i], 1),
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 2),
      ])
    })
  })

  it('should trigger "change" event `handleSort`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
            onChange: onChangeMock,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')
      
      el.insert(replacePrototypeValue(options.childValues[i], 0))
      el.insert(replacePrototypeValue(options.childValues[i], 1))
      el.insert(replacePrototypeValue(options.childValues[i], 2))

      await nextTick()
      await nextTick()

      el.handleSort({
        oldIndex: 1,
        newIndex: 0,
      })

      await nextTick()
      await nextTick()
      await nextTick()
      await nextTick()

      expect(onChangeMock).toHaveBeenCalledWith([
        replacePrototypeValue(options.childValues[i], 1),
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 2),
      ], [
        replacePrototypeValue(options.childValues[i], 0),
        replacePrototypeValue(options.childValues[i], 1),
        replacePrototypeValue(options.childValues[i], 2),
      ])
    })
  })

  it('should dirt  on `handleSort`', async () => {
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
      
      el.insert(replacePrototypeValue(options.childValues[i], 0))
      el.insert(replacePrototypeValue(options.childValues[i], 1))
      el.insert(replacePrototypeValue(options.childValues[i], 2))

      await nextTick()

      expect(el.dirty).toBe(false)

      el.handleSort({
        oldIndex: 1,
        newIndex: 0,
      })

      await nextTick()
      await nextTick()
      await nextTick()

      expect(el.dirty).toBe(true)
    })
  })

  it('should validate on `handleSort` if validateOn contains "change"', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onChangeMock = jest.fn()

      let form = createForm({
        validateOn: 'submit',
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
            rules: 'required',
            onChange: onChangeMock,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')
      
      el.insert(replacePrototypeValue(options.childValues[i], 0))
      el.insert(replacePrototypeValue(options.childValues[i], 1))
      el.insert(replacePrototypeValue(options.childValues[i], 2))

      await nextTick()

      expect(el.validated).toBe(false)

      el.handleSort({
        oldIndex: 1,
        newIndex: 0,
      })

      await nextTick()
      await nextTick()
      await flushPromises()

      expect(el.validated).toBe(false)

      form.vm.validateOn = 'submit|change'

      el.handleSort({
        oldIndex: 1,
        newIndex: 0,
      })

      await nextTick()
      await nextTick()
      await flushPromises()

      expect(el.validated).toBe(true)
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