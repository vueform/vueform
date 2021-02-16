import { nextTick } from 'vue'
import {
  createForm, findAllComponents, testPropDefault, listSchema, listChildValue, listChild
} from 'test-helpers'
import flushPromises from 'flush-promises'
import asyncForEach from './../../src/utils/asyncForEach'

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

    form.vm.schema.el.sort = false

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

    form.vm.schema.el.sort = false

    await nextTick()

    expect(el.sortableInstance.el).toBe(null)

    form.vm.schema.el.sort = true

    await nextTick()

    expect(el.sortableInstance.el).toBeTruthy()
  })
}

export const handleSort = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should reorder children$Array and children$ on `handleSort`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 0
      }))

      let el = form.vm.el$('el')
      
      el.add(listChildValue(options, i, 0))
      el.add(listChildValue(options, i, 1))
      el.add(listChildValue(options, i, 2))

      await nextTick()

      el.handleSort({
        oldIndex: 1,
        newIndex: 0,
      })

      await nextTick()
      await nextTick()

      expect(el.value).toStrictEqual([
        listChildValue(options, i, 1),
        listChildValue(options, i, 0),
        listChildValue(options, i, 2)
      ])

      expect(el.children$Array[0].value).toStrictEqual(listChildValue(options, i, 1),)
      expect(el.children$Array[1].value).toStrictEqual(listChildValue(options, i, 0),)
      expect(el.children$Array[2].value).toStrictEqual(listChildValue(options, i, 2))

      expect(el.children$[0].value).toStrictEqual(listChildValue(options, i, 1),)
      expect(el.children$[1].value).toStrictEqual(listChildValue(options, i, 0),)
      expect(el.children$[2].value).toStrictEqual(listChildValue(options, i, 2))
    })
  })

  it('should refresh order store on `handleSort` if object', async () => {
    let form = createForm(listSchema(options, 1, {
      initial: 0,
      parent: {
        storeOrder: 'order',
      },
      orderField: true
    }))

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

    el.handleSort({
      oldIndex: 1,
      newIndex: 0,
    })

    await nextTick()

    child0 = listChild(el, options, 0)
    child1 = listChild(el, options, 1)
    child2 = listChild(el, options, 2)
    order0 = form.vm.el$('el.0.order')
    order1 = form.vm.el$('el.1.order')
    order2 = form.vm.el$('el.2.order')

    expect(order0.value).toBe(1)
    expect(order1.value).toBe(2)
    expect(order2.value).toBe(3)
    expect(child0.value).toStrictEqual(listChildValue(options, 1, 1)[options.childName])
    expect(child1.value).toStrictEqual(listChildValue(options, 1, 0)[options.childName])
    expect(child2.value).toStrictEqual(listChildValue(options, 1, 2)[options.childName])
  })

  it('should fire "sort" event with "value" on `handleSort`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onSortMock = jest.fn()

      let form = createForm(listSchema(options, i, {
        initial: 0,
        parent: { onSort: onSortMock, }
      }))

      let el = form.vm.el$('el')
      
      el.add(listChildValue(options, i, 0))
      el.add(listChildValue(options, i, 1))
      el.add(listChildValue(options, i, 2))

      await nextTick()

      el.handleSort({
        oldIndex: 1,
        newIndex: 0,
      })

      await nextTick()
      await nextTick()

      expect(onSortMock).toHaveBeenCalledWith([
        listChildValue(options, i, 1),
        listChildValue(options, i, 0),
        listChildValue(options, i, 2),
      ])
    })
  })

  it('should trigger "change" event `handleSort`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let onChangeMock = jest.fn()

      let form = createForm(listSchema(options, i, {
        initial: 0,
        parent: { onChange: onChangeMock, }
      }))

      let el = form.vm.el$('el')
      
      el.insert(listChildValue(options, i, 0))
      el.insert(listChildValue(options, i, 1))
      el.insert(listChildValue(options, i, 2))

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
        listChildValue(options, i, 1),
        listChildValue(options, i, 0),
        listChildValue(options, i, 2),
      ], [
        listChildValue(options, i, 0),
        listChildValue(options, i, 1),
        listChildValue(options, i, 2),
      ])
    })
  })

  it('should dirt  on `handleSort`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm(listSchema(options, i, {
        initial: 0
      }))

      let el = form.vm.el$('el')
      
      el.insert(listChildValue(options, i, 0))
      el.insert(listChildValue(options, i, 1))
      el.insert(listChildValue(options, i, 2))

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

      let form = createForm(listSchema(options, i, {
        initial: 1,
        parent: {
          onChange: onChangeMock,
          rules: 'required',
        },
        form: { validateOn: 'submit', }
      }))

      let el = form.vm.el$('el')
      
      el.insert(listChildValue(options, i, 0))
      el.insert(listChildValue(options, i, 1))
      el.insert(listChildValue(options, i, 2))

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