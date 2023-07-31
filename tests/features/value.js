import { testModelCases, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const value = function (elementType, elementName, options) {
  let mocks = ['formChangeMock', 'elChangeMock', 'el2ChangeMock']

  let cases = [
    {
      initial: { el: options.nullValue, el2: options.nullValue },

      model: { el: options.default },
      initialWithModel: { el: options.default, el2: options.nullValue },
    },
    {
      initial: { el: options.default, el2: options.default2, },
      formDefault: { el: options.default, el2: options.default2, },

      model: { el: options.default2, },
      initialWithModel: { el: options.default2, el2: options.default2, },
    },
    {
      initial: { el: options.default, el2: options.default2, },
      elementDefault: { el: options.default, el2: options.default2, },

      model: { el: options.default2, },
      initialWithModel: { el: options.default2, el2: options.default2, },
    },
    {
      initial: { el: options.default2, el2: options.default2, },
      elementDefault: { el: options.default },
      formDefault: { el: options.default2, el2: options.default2, },

      model: { el: options.default, },
      initialWithModel: { el: options.default, el2: options.default2, },
    },
  ]

  testModelCases(cases, elementType, options, mocks, baseSchema, testChanges)
}

const testChanges = async (form, mocks, options, updateModel, initial, hasModel, app = null) => {
  if (!form.vm) {
    return
  }

  let {
    formChangeMock,
    elChangeMock,
    el2ChangeMock,
  } = mocks

  let el = form.vm.el$('el')
  let el2 = form.vm.el$('el2')

  // Expect nullValues
  expect(el.value).toStrictEqual(initial.el)
  expect(el2.value).toStrictEqual(initial.el2)
  expect(form.vm.data).toStrictEqual({ el: initial.el, el2: initial.el2, })

  if (hasModel && app) {
    expect(app.vm.data).toStrictEqual({ el: initial.el, el2: initial.el2, })
  }

  // No events should've been fired so far
  expect(formChangeMock).not.toHaveBeenCalled()
  expect(elChangeMock).not.toHaveBeenCalled()
  expect(el2ChangeMock).not.toHaveBeenCalled()

  // Update an element
  if (hasModel && updateModel) {
    await nextTick()

    app.vm.$set(app.vm.data, 'el', options.value)
  } else {
    el.update(options.value)
  }

  // Element and form should change instantly
  expect(el.value).toStrictEqual(options.value)
  expect(el2.value).toStrictEqual(initial.el2)
  expect(form.vm.data).toStrictEqual({ el: options.value, el2: initial.el2, })

  if (hasModel && app) {
    expect(form.vm.data).toStrictEqual({ el: options.value, el2: initial.el2, })
  }
  
  // Watchers kick in
  await nextTick()

  expect(formChangeMock).toHaveBeenCalledTimes(1)
  expect(formChangeMock).toHaveBeenNthCalledWith(1, { el: options.value, el2: initial.el2, }, { el: initial.el, el2: initial.el2, }, form.vm)
  expect(elChangeMock).toHaveBeenCalledTimes(1)
  expect(elChangeMock).toHaveBeenNthCalledWith(1, options.value, initial.el, el)
  expect(el2ChangeMock).not.toHaveBeenCalled()

  // Wait another tick to make sure everything settles down
  await nextTick()

  // Update the whole form
  if (hasModel && updateModel) {
    await nextTick()

    app.vm.$set(app.vm, 'data', {
      el: options.value2,
      el2: options.value,
    })

    await nextTick()
  } else {
    form.vm.update({
      el: options.value2,
      el2: options.value,
    })
  }

  // Element and form should change instantly
  expect(el.value).toStrictEqual(options.value2)
  expect(el2.value).toStrictEqual(options.value)
  expect(form.vm.data).toStrictEqual({ el: options.value2, el2: options.value, })

  if (hasModel && app) {
    expect(form.vm.data).toStrictEqual({ el: options.value2, el2: options.value, })
  }
  
  // Watchers kick in
  await nextTick()

  // Events should trigger accordingly
  expect(formChangeMock).toHaveBeenCalledTimes(2)
  expect(formChangeMock).toHaveBeenNthCalledWith(2, { el: options.value2, el2: options.value, }, { el: options.value, el2: initial.el2, }, form.vm)
  expect(elChangeMock).toHaveBeenCalledTimes(2)
  expect(elChangeMock).toHaveBeenNthCalledWith(2, options.value2, options.value, el)
  expect(el2ChangeMock).toHaveBeenCalledTimes(1)
  expect(el2ChangeMock).toHaveBeenNthCalledWith(1, options.value, initial.el2, el2)
}

const baseSchema = (mocks, elementType) => {
  let {
    elChangeMock,
    el2ChangeMock,
  } = mocks

  let schema = {
    el: {
      type: elementType,
      onChange: elChangeMock,
      auto: false // for files
    },
    el2: {
      type: elementType,
      onChange: el2ChangeMock,
      auto: false // for files
    },
  }

  return schema
}

export {
  testChanges,
}