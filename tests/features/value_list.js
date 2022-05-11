import { createForm, testModelCases, destroy } from 'test-helpers'
import { nextTick } from 'vue'
import flushPromises from 'flush-promises'

export const value = function (elementType, elementName, options) {
  let mocks = ['formChangeMock', 'elChangeMock', 'el2ChangeMock']

  let elementCases = [
    {
      initial: { el: [null], el2: [null], },

      model: { el: options.default, },
      initialWithModel: { el: options.default, el2: [null], },
    },
    {
      initial: { el: options.default, el2: options.default2, },
      formDefault: { el: options.default, el2: options.default2, },

      model: { el: options.default2, },
      initialWithModel: { el: options.default2, el2: options.default2, },
    },
    {
      initial: { el: options.default, el2: options.default2, },
      elementDefault: { el: options.default, el2: options.default2 },

      model: { el: options.default2, },
      initialWithModel: { el: options.default2, el2: options.default2, },
    },
    {
      initial: { el: options.default2, el2: options.default2, },
      elementDefault: { el: options.default, el2: options.default2, },
      formDefault: { el: options.default2 },

      model: { el: options.default, },
      initialWithModel: { el: options.default, el2: options.default2, },
    },
  ]

  let objectCases = [
    {
      initial: { el: [{child:null, child2: null}], el2: [{child:null, child2: null}], },

      model: { el: options.defaultObject, },
      initialWithModel: { el: options.defaultObject, el2: [{child:null, child2: null}], },
    },
    {
      initial: { el: options.defaultObject, el2: options.defaultObject2, },
      formDefault: { el: options.defaultObject, el2: options.defaultObject2, },

      model: { el: options.defaultObject2, },
      initialWithModel: { el: options.defaultObject2, el2: options.defaultObject2, },
    },
    {
      initial: { el: options.defaultObject, el2: options.defaultObject2, },
      elementDefault: { el: options.defaultObject, el2: options.defaultObject2 },

      model: { el: options.defaultObject2, },
      initialWithModel: { el: options.defaultObject2, el2: options.defaultObject2, },
    },
    {
      initial: { el: options.defaultObject2, el2: options.defaultObject2, },
      elementDefault: { el: options.defaultObject, el2: options.defaultObject2, },
      formDefault: { el: options.defaultObject2 },

      model: { el: options.defaultObject, },
      initialWithModel: { el: options.defaultObject, el2: options.defaultObject2, },
    },
  ]

  describe('element child', () => {
    testModelCases(elementCases, elementType, options, mocks, elementSchema, testChanges)

    it('should fire the right events when child values change', async () => {
      let formChangeMock = jest.fn()
      let elChangeMock = jest.fn()
      let el2ChangeMock = jest.fn()
      let elChildChangeMock = jest.fn()
      let el2ChildChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            initial: 0,
            element: {
              type: 'text',
              onChange: elChildChangeMock,
            },
            onChange: elChangeMock,
          },
          el2: {
            type: elementType,
            initial: 0,
            element: {
              type: 'text',
              onChange: el2ChildChangeMock,
            },
            onChange: el2ChangeMock,
          },
        },
      }, {
        mounted() {
          this.on('change', formChangeMock)
        }
      })

      // No events should've been fired so far
      expect(formChangeMock).not.toHaveBeenCalled()
      expect(elChangeMock).not.toHaveBeenCalled()
      expect(el2ChangeMock).not.toHaveBeenCalled()
      expect(elChildChangeMock).not.toHaveBeenCalled()
      expect(el2ChildChangeMock).not.toHaveBeenCalled()

      let el = form.vm.el$('el')
      let el2 = form.vm.el$('el2')

      el.add('a')
      el.add('b')
      el2.add('c')
      el2.add('d')

      await nextTick()

      let elChild0ChangeMock = jest.fn()
      let elChild1ChangeMock = jest.fn()
      let el2Child0ChangeMock = jest.fn()
      let el2Child1ChangeMock = jest.fn()

      form.vm.el$('el.0').on('change', elChild0ChangeMock)
      form.vm.el$('el.1').on('change', elChild1ChangeMock)
      form.vm.el$('el2.0').on('change', el2Child0ChangeMock)
      form.vm.el$('el2.1').on('change', el2Child1ChangeMock)

      expect(formChangeMock).toHaveBeenCalledTimes(1)
      expect(formChangeMock).toHaveBeenNthCalledWith(1, { el: ['a', 'b'], el2: ['c', 'd'] }, { el: [], el2: [] }, form.vm)
      expect(elChangeMock).toHaveBeenCalledTimes(1)
      expect(elChangeMock).toHaveBeenNthCalledWith(1, ['a', 'b'], [], el)
      expect(el2ChangeMock).toHaveBeenCalledTimes(1)
      expect(el2ChangeMock).toHaveBeenNthCalledWith(1, ['c', 'd'], [], el2)
      expect(elChildChangeMock).not.toHaveBeenCalled()
      expect(el2ChildChangeMock).not.toHaveBeenCalled()
      expect(elChild0ChangeMock).not.toHaveBeenCalled()
      expect(elChild1ChangeMock).not.toHaveBeenCalled()
      expect(el2Child0ChangeMock).not.toHaveBeenCalled()
      expect(el2Child1ChangeMock).not.toHaveBeenCalled()

      await nextTick()

      form.vm.el$('el.0').update('not-a')

      await flushPromises()
      
      expect(formChangeMock).toHaveBeenCalledTimes(2)
      expect(formChangeMock).toHaveBeenNthCalledWith(2, { el: ['not-a', 'b'], el2: ['c', 'd'] }, { el: ['a', 'b'], el2: ['c', 'd'] }, form.vm)
      expect(elChangeMock).toHaveBeenCalledTimes(2)
      expect(elChangeMock).toHaveBeenNthCalledWith(2, ['not-a', 'b'], ['a', 'b'], el)
      expect(el2ChangeMock).toHaveBeenCalledTimes(1)
      expect(elChildChangeMock).toHaveBeenCalledTimes(1)

      expect(elChildChangeMock.mock.calls[0][0]).toEqual('not-a')
      expect(elChildChangeMock.mock.calls[0][1]).toEqual('a')
      expect(el2ChildChangeMock).not.toHaveBeenCalled()

      expect(elChild0ChangeMock).toHaveBeenCalledTimes(1)
      expect(elChild0ChangeMock.mock.calls[0][0]).toEqual('not-a')
      expect(elChild0ChangeMock.mock.calls[0][1]).toEqual('a')

      expect(elChild1ChangeMock).not.toHaveBeenCalled()
      expect(el2Child0ChangeMock).not.toHaveBeenCalled()
      expect(el2Child1ChangeMock).not.toHaveBeenCalled()
    })
  })
  
  describe('object child', () => {
    testModelCases(objectCases, elementType, options, mocks, objectSchema, testChangesObject)

    // @todo
    it('should fire the right events when child values change', async () => {
      let formChangeMock = jest.fn()
      let elChangeMock = jest.fn()
      let el2ChangeMock = jest.fn()
      let elChildChangeMock = jest.fn()
      let el2ChildChangeMock = jest.fn()
      let elChildTextChangeMock = jest.fn()
      let elChildText2ChangeMock = jest.fn()
      let el2ChildTextChangeMock = jest.fn()
      let el2ChildText2ChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            initial: 0,
            object: {
              schema: {
                child: {
                  type: 'text',
                  onChange: elChildTextChangeMock,
                },
                child2: {
                  type: 'text',
                  onChange: elChildText2ChangeMock,
                },
              },
              onChange: elChildChangeMock,
            },
            onChange: elChangeMock,
          },
          el2: {
            type: elementType,
            initial: 0,
            object: {
              schema: {
                child: {
                  type: 'text',
                  onChange: el2ChildTextChangeMock,
                },
                child2: {
                  type: 'text',
                  onChange: el2ChildText2ChangeMock,
                },
              },
              onChange: el2ChildChangeMock,
            },
            onChange: el2ChangeMock,
          },
        },
      }, {
        mounted() {
          this.on('change', formChangeMock)
        }
      })

      // No events should've been fired so far
      expect(formChangeMock).not.toHaveBeenCalled()
      expect(elChangeMock).not.toHaveBeenCalled()
      expect(el2ChangeMock).not.toHaveBeenCalled()
      expect(elChildChangeMock).not.toHaveBeenCalled()
      expect(el2ChildChangeMock).not.toHaveBeenCalled()
      expect(elChildTextChangeMock).not.toHaveBeenCalled()
      expect(elChildText2ChangeMock).not.toHaveBeenCalled()
      expect(el2ChildTextChangeMock).not.toHaveBeenCalled()
      expect(el2ChildText2ChangeMock).not.toHaveBeenCalled()

      let el = form.vm.el$('el')
      let el2 = form.vm.el$('el2')

      el.add({ child: 'a', child2: 'b' })
      el.add({ child: 'c', child2: 'd' })
      el2.add({ child: 'e', child2: 'f' })
      el2.add({ child: 'g', child2: 'h' })

      await nextTick()

      // Concrete children
      let elChild0ChangeMock = jest.fn()
      let elChild1ChangeMock = jest.fn()
      let el2Child0ChangeMock = jest.fn()
      let el2Child1ChangeMock = jest.fn()

      // Concrete sub-children
      let elChild0TextChangeMock = jest.fn()
      let elChild0Text2ChangeMock = jest.fn()
      let elChild1TextChangeMock = jest.fn()
      let elChild1Text2ChangeMock = jest.fn()
      let el2Child0TextChangeMock = jest.fn()
      let el2Child0Text2ChangeMock = jest.fn()
      let el2Child1TextChangeMock = jest.fn()
      let el2Child1Text2ChangeMock = jest.fn()

      form.vm.el$('el.0').on('change', elChild0ChangeMock)
      form.vm.el$('el.0.child').on('change', elChild0TextChangeMock)
      form.vm.el$('el.0.child2').on('change', elChild0Text2ChangeMock)
      form.vm.el$('el.1').on('change', elChild1ChangeMock)
      form.vm.el$('el.1.child').on('change', elChild1TextChangeMock)
      form.vm.el$('el.1.child2').on('change', elChild1Text2ChangeMock)
      form.vm.el$('el2.0').on('change', el2Child0ChangeMock)
      form.vm.el$('el2.0.child').on('change', elChild0TextChangeMock)
      form.vm.el$('el2.0.child2').on('change', elChild0Text2ChangeMock)
      form.vm.el$('el2.1').on('change', el2Child1ChangeMock)
      form.vm.el$('el2.1.child').on('change', elChild1TextChangeMock)
      form.vm.el$('el2.1.child2').on('change', elChild1Text2ChangeMock)

      expect(formChangeMock).toHaveBeenCalledTimes(1)
      expect(formChangeMock).toHaveBeenNthCalledWith(1,
        {
          el: [{ child: 'a', child2: 'b' }, { child: 'c', child2: 'd' }],
          el2: [{ child: 'e', child2: 'f' }, { child: 'g', child2: 'h' }]
        },
        { el: [], el2: [] },
        form.vm
      )
      expect(elChangeMock).toHaveBeenCalledTimes(1)
      expect(elChangeMock).toHaveBeenNthCalledWith(1, [{ child: 'a', child2: 'b' }, { child: 'c', child2: 'd' }], [], el)
      expect(el2ChangeMock).toHaveBeenCalledTimes(1)
      expect(el2ChangeMock).toHaveBeenNthCalledWith(1, [{ child: 'e', child2: 'f' }, { child: 'g', child2: 'h' }], [], el2)

      // Abstract child
      expect(elChildChangeMock).not.toHaveBeenCalled()
      expect(el2ChildChangeMock).not.toHaveBeenCalled()

      // Abstract sub-child
      expect(elChildTextChangeMock).not.toHaveBeenCalled()
      expect(elChildText2ChangeMock).not.toHaveBeenCalled()
      expect(el2ChildTextChangeMock).not.toHaveBeenCalled()
      expect(el2ChildText2ChangeMock).not.toHaveBeenCalled()

      // Concrete child
      expect(elChild0ChangeMock).not.toHaveBeenCalled()
      expect(elChild1ChangeMock).not.toHaveBeenCalled()
      expect(el2Child0ChangeMock).not.toHaveBeenCalled()
      expect(el2Child1ChangeMock).not.toHaveBeenCalled()

      // Concrete sub-child
      expect(elChild0TextChangeMock).not.toHaveBeenCalled()
      expect(elChild0Text2ChangeMock).not.toHaveBeenCalled()
      expect(elChild1TextChangeMock).not.toHaveBeenCalled()
      expect(elChild1Text2ChangeMock).not.toHaveBeenCalled()
      expect(el2Child0TextChangeMock).not.toHaveBeenCalled()
      expect(el2Child0Text2ChangeMock).not.toHaveBeenCalled()
      expect(el2Child1TextChangeMock).not.toHaveBeenCalled()
      expect(el2Child1Text2ChangeMock).not.toHaveBeenCalled()

      await nextTick()

      form.vm.el$('el.0.child').update('not-a')

      await nextTick()

      expect(formChangeMock).toHaveBeenCalledTimes(2)
      expect(formChangeMock).toHaveBeenNthCalledWith(2,
        {
          el: [{ child: 'not-a', child2: 'b' }, { child: 'c', child2: 'd' }],
          el2: [{ child: 'e', child2: 'f' }, { child: 'g', child2: 'h' }]
        },
        {
          el: [{ child: 'a', child2: 'b' }, { child: 'c', child2: 'd' }],
          el2: [{ child: 'e', child2: 'f' }, { child: 'g', child2: 'h' }]
        },
        form.vm
      )
      expect(elChangeMock).toHaveBeenCalledTimes(2)
      expect(elChangeMock).toHaveBeenNthCalledWith(2,
        [{ child: 'not-a', child2: 'b' }, { child: 'c', child2: 'd' }],
        [{ child: 'a', child2: 'b' }, { child: 'c', child2: 'd' }],
        el
      )
      expect(el2ChangeMock).toHaveBeenCalledTimes(1)

      // Abstract child
      expect(elChildChangeMock).toHaveBeenCalledTimes(1)
      expect(elChildChangeMock.mock.calls[0][0]).toEqual({ child: 'not-a', child2: 'b' })
      expect(elChildChangeMock.mock.calls[0][1]).toEqual({ child: 'a', child2: 'b' },)
      expect(el2ChildChangeMock).not.toHaveBeenCalled()

      // Abstract sub-child
      expect(elChildTextChangeMock).toHaveBeenCalledTimes(1)
      expect(elChildTextChangeMock.mock.calls[0][0]).toEqual('not-a')
      expect(elChildTextChangeMock.mock.calls[0][1]).toEqual('a')
      expect(elChildText2ChangeMock).not.toHaveBeenCalled()
      expect(el2ChildTextChangeMock).not.toHaveBeenCalled()
      expect(el2ChildText2ChangeMock).not.toHaveBeenCalled()

      // Concrete child
      expect(elChild0ChangeMock).toHaveBeenCalledTimes(1)
      expect(elChild0ChangeMock.mock.calls[0][0]).toEqual({ child: 'not-a', child2: 'b' })
      expect(elChild0ChangeMock.mock.calls[0][1]).toEqual({ child: 'a', child2: 'b' },)
      expect(elChild1ChangeMock).not.toHaveBeenCalled()
      expect(el2Child0ChangeMock).not.toHaveBeenCalled()
      expect(el2Child1ChangeMock).not.toHaveBeenCalled()

      // Concrete sub-child
      expect(elChild0TextChangeMock).toHaveBeenCalledTimes(1)
      expect(elChild0TextChangeMock.mock.calls[0][0]).toEqual('not-a')
      expect(elChild0TextChangeMock.mock.calls[0][1]).toEqual('a')
      expect(elChild0Text2ChangeMock).not.toHaveBeenCalled()
      expect(elChild1TextChangeMock).not.toHaveBeenCalled()
      expect(elChild1Text2ChangeMock).not.toHaveBeenCalled()
      expect(el2Child0TextChangeMock).not.toHaveBeenCalled()
      expect(el2Child0Text2ChangeMock).not.toHaveBeenCalled()
      expect(el2Child1TextChangeMock).not.toHaveBeenCalled()
      expect(el2Child1Text2ChangeMock).not.toHaveBeenCalled()

      await nextTick()

      form.vm.el$('el').update([
        { child: 'c', child2: 'd' },
        { child: 'not-a', child2: 'b' },
      ])

      await nextTick()

      expect(formChangeMock).toHaveBeenCalledTimes(3)
      expect(formChangeMock).toHaveBeenNthCalledWith(3,
        {
          el: [{ child: 'c', child2: 'd' }, { child: 'not-a', child2: 'b' }],
          el2: [{ child: 'e', child2: 'f' }, { child: 'g', child2: 'h' }]
        },
        {
          el: [{ child: 'not-a', child2: 'b' }, { child: 'c', child2: 'd' }],
          el2: [{ child: 'e', child2: 'f' }, { child: 'g', child2: 'h' }]
        },
        form.vm
      )
      expect(elChangeMock).toHaveBeenCalledTimes(3)
      expect(elChangeMock).toHaveBeenNthCalledWith(3,
        [{ child: 'c', child2: 'd' }, { child: 'not-a', child2: 'b' }],
        [{ child: 'not-a', child2: 'b' }, { child: 'c', child2: 'd' }],
        el
      )
      expect(el2ChangeMock).toHaveBeenCalledTimes(1)

      // Abstract child
      expect(elChildChangeMock).toHaveBeenCalledTimes(3)
      expect(elChild0ChangeMock.mock.calls[1][0]).toEqual({ child: 'c', child2: 'd' })
      expect(elChild0ChangeMock.mock.calls[1][1]).toEqual({ child: 'not-a', child2: 'b' },)
      expect(elChild1ChangeMock.mock.calls[0][0]).toEqual({ child: 'not-a', child2: 'b' })
      expect(elChild1ChangeMock.mock.calls[0][1]).toEqual({ child: 'c', child2: 'd' },)
      expect(el2ChildChangeMock).not.toHaveBeenCalled()

      // Abstract sub-child
      expect(elChildTextChangeMock).toHaveBeenCalledTimes(3)
      
      expect(elChild0TextChangeMock.mock.calls[1][0]).toEqual('c')
      expect(elChild0TextChangeMock.mock.calls[1][1]).toEqual('not-a')
      expect(elChild1TextChangeMock.mock.calls[0][0]).toEqual('not-a')
      expect(elChild1TextChangeMock.mock.calls[0][1]).toEqual('c')

      expect(elChildText2ChangeMock).toHaveBeenCalledTimes(2)

      expect(elChild0Text2ChangeMock.mock.calls[0][0]).toEqual('d')
      expect(elChild0Text2ChangeMock.mock.calls[0][1]).toEqual('b')
      expect(elChild1Text2ChangeMock.mock.calls[0][0]).toEqual('b')
      expect(elChild1Text2ChangeMock.mock.calls[0][1]).toEqual('d')

      expect(el2ChildTextChangeMock).not.toHaveBeenCalled()
      expect(el2ChildText2ChangeMock).not.toHaveBeenCalled()

      // Concrete child
      expect(elChild0ChangeMock).toHaveBeenCalledTimes(2)
      expect(elChild0ChangeMock.mock.calls[1][0]).toEqual({ child: 'c', child2: 'd' })
      expect(elChild0ChangeMock.mock.calls[1][1]).toEqual({ child: 'not-a', child2: 'b' },)
      expect(elChild1ChangeMock).toHaveBeenCalledTimes(1)
      expect(elChild1ChangeMock.mock.calls[0][0]).toEqual({ child: 'not-a', child2: 'b' })
      expect(elChild1ChangeMock.mock.calls[0][1]).toEqual({ child: 'c', child2: 'd' },)
      expect(el2Child0ChangeMock).not.toHaveBeenCalled()
      expect(el2Child1ChangeMock).not.toHaveBeenCalled()

      // Concrete sub-child
      expect(elChild0TextChangeMock).toHaveBeenCalledTimes(2)
      expect(elChild0TextChangeMock.mock.calls[1][0]).toEqual('c')
      expect(elChild0TextChangeMock.mock.calls[1][1]).toEqual('not-a')
      expect(elChild0Text2ChangeMock).toHaveBeenCalledTimes(1)
      expect(elChild0Text2ChangeMock.mock.calls[0][0]).toEqual('d')
      expect(elChild0Text2ChangeMock.mock.calls[0][1]).toEqual('b')
      expect(elChild1TextChangeMock).toHaveBeenCalledTimes(1)
      expect(elChild1TextChangeMock.mock.calls[0][0]).toEqual('not-a')
      expect(elChild1TextChangeMock.mock.calls[0][1]).toEqual('c')
      expect(elChild1Text2ChangeMock).toHaveBeenCalledTimes(1)
      expect(elChild1Text2ChangeMock.mock.calls[0][0]).toEqual('b')
      expect(elChild1Text2ChangeMock.mock.calls[0][1]).toEqual('d')
      expect(el2Child0TextChangeMock).not.toHaveBeenCalled()
      expect(el2Child0Text2ChangeMock).not.toHaveBeenCalled()
      expect(el2Child1TextChangeMock).not.toHaveBeenCalled()
      expect(el2Child1Text2ChangeMock).not.toHaveBeenCalled()
    })
  })
}

const testChangesObject = async (form, mocks, options, updateModel, initial, hasModel, app = null) => {
  await testChanges(form, mocks, options, updateModel, initial, hasModel, app, 'object')
}

const testChanges = async (form, mocks, options, updateModel, initial, hasModel, app = null, type = 'element') => {
  if (!form.vm) {
    return
  }

  let {
    formChangeMock,
    elChangeMock,
    el2ChangeMock,
  } = mocks

  let value = () => {
    return type === 'element' ? options.value : options.valueObject
  }

  let value2 = (t) => {
    return type === 'element' ? options.value2 : options.valueObject2
  }

  let el = form.vm.el$('el')
  let el2 = form.vm.el$('el2')

  // Expect nullValues
  expect(el.value).toStrictEqual(initial.el)
  expect(el2.value).toStrictEqual(initial.el2)
  expect(form.vm.data).toStrictEqual({ el: initial.el, el2: initial.el2, })

  if (hasModel && app) {
    await nextTick()
    expect(app.vm.data).toStrictEqual({ el: initial.el, el2: initial.el2, })
  }

  // No events should've been fired so far
  expect(formChangeMock).not.toHaveBeenCalled()
  expect(elChangeMock).not.toHaveBeenCalled()
  expect(el2ChangeMock).not.toHaveBeenCalled()

  if (hasModel && updateModel) {
    await nextTick()

    app.vm.$set(app.vm.data, 'el', value())
  } else {
    // Update an element
    el.update(value())
  }

  // Element and form should change instantly
  expect(el.value).toStrictEqual(value())
  expect(el2.value).toStrictEqual(initial.el2)
  expect(form.vm.data).toStrictEqual({ el: value(), el2: initial.el2, })

  if (hasModel && app) {
    await nextTick()
    expect(app.vm.data).toStrictEqual({ el: value(), el2: initial.el2, })
  }
  
  // Watchers kick in
  await nextTick()

  expect(formChangeMock).toHaveBeenCalledTimes(1)
  expect(formChangeMock).toHaveBeenNthCalledWith(1, { el: value(), el2: initial.el2, }, { el: initial.el, el2: initial.el2, }, form.vm)
  expect(elChangeMock).toHaveBeenCalledTimes(1)
  expect(elChangeMock).toHaveBeenNthCalledWith(1, value(), initial.el, el)
  expect(el2ChangeMock).not.toHaveBeenCalled()

  // Wait an other tick to make sure everything settles down
  await nextTick()

  // Update the whole form
  if (hasModel && updateModel) {
    await nextTick()
    
    app.vm.$set(app.vm, 'data', {
      el: value2(),
      el2: value(),
    })

    await nextTick()
  } else {
    form.vm.update({
      el: value2(),
      el2: value(),
    })
  }

  // Element and form should change instantly
  expect(el.value).toStrictEqual(value2())
  expect(el2.value).toStrictEqual(value())
  expect(form.vm.data).toStrictEqual({ el: value2(), el2: value(), })

  if (hasModel && app) {
    await nextTick()
    expect(app.vm.data).toStrictEqual({ el: value2(), el2: value(), })
  }
  
  // Watchers kick in
  await nextTick()

  // Events should trigger accordingly
  expect(formChangeMock).toHaveBeenCalledTimes(2)
  expect(formChangeMock).toHaveBeenNthCalledWith(2, { el: value2(), el2: value(), }, { el: value(), el2: initial.el2, }, form.vm)
  expect(elChangeMock).toHaveBeenCalledTimes(2)
  expect(elChangeMock).toHaveBeenNthCalledWith(2, value2(), value(), el)
  expect(el2ChangeMock).toHaveBeenCalledTimes(1)
  expect(el2ChangeMock).toHaveBeenNthCalledWith(1, value(), initial.el2, el2)
}

const objectSchema = (mocks, elementType) => {
  let {
    elChangeMock,
    el2ChangeMock,
  } = mocks

  let schema = {
    el: {
      type: elementType,
      object: {
        schema: {
          child: {
            type: 'text'
          },
          child2: {
            type: 'text'
          },
        }
      },
      onChange: elChangeMock,
    },
    el2: {
      type: elementType,
      object: {
        schema: {
          child: {
            type: 'text'
          },
          child2: {
            type: 'text'
          },
        }
      },
      onChange: el2ChangeMock,
    },
  }

  return schema
}

const elementSchema = (mocks, elementType) => {
  let {
    elChangeMock,
    el2ChangeMock,
  } = mocks

  let schema = {
    el: {
      type: elementType,
      auto: false, // for files
      element: {
        type: 'text',
      },
      onChange: elChangeMock,
    },
    el2: {
      type: elementType,
      auto: false, // for files
      element: {
        type: 'text',
      },
      onChange: el2ChangeMock,
    },
  }

  return schema
}

export {
  testChanges,
  testChangesObject,
}