import { testModelCases, createInlineForm } from 'test-helpers'
import { nextTick } from 'vue'

export const value = function (elementType, elementName, options) {
  let mocks = [
    'formChangeMock',
    'elChangeMock',
    'el2ChangeMock',
    'el2GroupChangeMock',
    'elChildChangeMock',
    'elChild2ChangeMock',
    'el2Child3ChangeMock',
    'el2Child4ChangeMock'
  ]

  let cases = [
    {
      initial: _.cloneDeep(options.nullValue),

      model: _.cloneDeep(options.default),
      initialWithModel: _.cloneDeep(options.default),
    },
    {
      initial: { child: options.default.child, child2: options.default.child2, child3: null, child4: null, },
      formDefault: { child: options.default.child, child2: options.default.child2 },

      model: { child: options.default2.child, child3: options.default2.child3 },
      initialWithModel: { child: options.default2.child, child2: options.default.child2, child3: options.default2.child3, child4: null, },
    },
    {
      initial: { child: options.default.child, child2: options.default.child2, child3: null, child4: null, },
      elementDefault: { child: options.default.child, child2: options.default.child2 },

      model: { child: options.default2.child, child3: options.default2.child3 },
      initialWithModel: { child: options.default2.child, child2: options.default.child2, child3: options.default2.child3, child4: null, },
    },
    {
      initial: { child: options.default.child, child2: options.default.child2, child3: null, child4: options.default2.child4, },
      formDefault: { child: options.default.child, child2: options.default.child2 },
      elementDefault: { child: options.default.child, child2: options.default2.child2, child4: options.default2.child4 },

      model: { child: options.default2.child, child3: options.default2.child3 },
      initialWithModel: { child: options.default2.child, child2: options.default.child2, child3: options.default2.child3, child4: options.default2.child4, },
    },
  ]

  testModelCases(cases, elementType, options, mocks, baseSchema, testChanges)

  it('should have set defaults when not inline', () => {
    let form = createForm({
      default: {
        subchild: 'form-a this',
        subchild5: 'form-e this',
      },
      schema: {
        el: {
          type: 'group',
          default: {
            subchild: 'el-a',
            subchild2: 'el-b this',
          },
          schema: {
            child: {
              type: 'group',
              default: {
                subchild: 'child-a',
                subchild2: 'child-b',
              },
              schema: {
                subchild: {
                  type: 'text',
                  default: 'subchild-a',
                },
                subchild2: {
                  type: 'text',
                  default: 'subchild2-b',
                },
              },
            },
            child2: {
              type: 'group',
              default: {
                subchild3: 'child2-c this',
              },
              schema: {
                subchild3: {
                  type: 'text',
                  default: 'subchild3-c',
                },
                subchild4: {
                  type: 'text',
                  default: 'subchild4-d this',
                },
              },
            },
          }
        },
        el2: {
          type: 'group',
          default: {
            subchild6: 'el2-f this',
          },
          schema: {
            child3: {
              type: 'group',
              default: {
                subchild5: 'child3-e',
                subchild6: 'child3-f',
              },
              schema: {
                subchild5: {
                  type: 'text',
                  default: 'subchild5-e',
                },
                subchild6: {
                  type: 'text',
                  default: 'subchild6-f',
                },
              },
            },
            child4: {
              type: 'group',
              default: {
                subchild7: 'child4-g this',
              },
              schema: {
                subchild7: {
                  type: 'text',
                  default: 'subchild7-g',
                },
                subchild8: {
                  type: 'text',
                  default: 'subchild8-h this',
                },
              },
            },
          }
        },
      },
    })

    expect(form.vm.plainData).toStrictEqual({
      subchild: 'form-a this',
      subchild2: 'el-b this',
      subchild3: 'child2-c this',
      subchild4: 'subchild4-d this',
      subchild5: 'form-e this',
      subchild6: 'el2-f this',
      subchild7: 'child4-g this',
      subchild8: 'subchild8-h this',
    })
  })

  it('should have set defaults when inline', () => {
    let { form } = createInlineForm({
      model: {
        subchild5: 'v-model-e this',
      },
      props: {
        default: {
          subchild: 'form-a this',
          subchild5: 'form-e this',
        },
        schema: {
          el: {
            type: 'group',
            default: {
              subchild: 'el-a',
              subchild2: 'el-b this',
            },
            schema: {
              child: {
                type: 'group',
                default: {
                  subchild: 'child-a',
                  subchild2: 'child-b',
                },
                schema: {
                  subchild: {
                    type: 'text',
                    default: 'subchild-a',
                  },
                  subchild2: {
                    type: 'text',
                    default: 'subchild2-b',
                  },
                },
              },
              child2: {
                type: 'group',
                default: {
                  subchild3: 'child2-c this',
                },
                schema: {
                  subchild3: {
                    type: 'text',
                    default: 'subchild3-c',
                  },
                  subchild4: {
                    type: 'text',
                    default: 'subchild4-d this',
                  },
                },
              },
            }
          },
          el2: {
            type: 'group',
            default: {
              subchild6: 'el2-f this',
            },
            schema: {
              child3: {
                type: 'group',
                default: {
                  subchild5: 'child3-e',
                  subchild6: 'child3-f',
                },
                schema: {
                  subchild5: {
                    type: 'text',
                    default: 'subchild5-e',
                  },
                  subchild6: {
                    type: 'text',
                    default: 'subchild6-f',
                  },
                },
              },
              child4: {
                type: 'group',
                default: {
                  subchild7: 'child4-g this',
                },
                schema: {
                  subchild7: {
                    type: 'text',
                    default: 'subchild7-g',
                  },
                  subchild8: {
                    type: 'text',
                    default: 'subchild8-h this',
                  },
                },
              },
            }
          },
        },
      }
    })

    expect(form.vm.plainData).toStrictEqual({
      subchild: 'form-a this',
      subchild2: 'el-b this',
      subchild3: 'child2-c this',
      subchild4: 'subchild4-d this',
      subchild5: 'v-model-e this',
      subchild6: 'el2-f this',
      subchild7: 'child4-g this',
      subchild8: 'subchild8-h this',
    })
  })
}

// ============= HELPERS =============

const testChanges = async (form, mocks, options, updateModel, initial, app = null) => {
  let {
    formChangeMock,
    elChangeMock,
    el2ChangeMock,
    elChildChangeMock,
    elChild2ChangeMock,
    el2Child3ChangeMock,
    el2Child4ChangeMock,
  } = mocks

  let el = form.vm.el$('el')
  let el2 = form.vm.el$('el2')
  let el_child = form.vm.el$('el.child')

  // Expect initial
  expect(el.value).toStrictEqual({ child: initial.child, child2: initial.child2 })
  expect(el2.value).toStrictEqual({ child3: initial.child3, child4: initial.child4 })
  expect(form.vm.plainData).toStrictEqual({
    child: initial.child,
    child2: initial.child2,
    child3: initial.child3,
    child4: initial.child4,
  })

  if (app) {
    expect(app.vm.data).toStrictEqual({
      child: initial.child,
      child2: initial.child2,
      child3: initial.child3,
      child4: initial.child4,
    })
  }

  // No events should've been fired so far
  expect(formChangeMock).not.toHaveBeenCalled()
  expect(elChangeMock).not.toHaveBeenCalled()
  expect(el2ChangeMock).not.toHaveBeenCalled()
  expect(elChildChangeMock).not.toHaveBeenCalled()
  expect(elChild2ChangeMock).not.toHaveBeenCalled()
  expect(el2Child3ChangeMock).not.toHaveBeenCalled()
  expect(el2Child4ChangeMock).not.toHaveBeenCalled()

  // Update a sub-child
  if (updateModel) {
    await nextTick()

    app.vm.$set(app.vm.data, 'child', 'el_child_value')
  } else {
    el_child.update('el_child_value')
  }

  // Element and form should change instantly
  expect(el.value).toStrictEqual({ child: 'el_child_value', child2: initial.child2 })
  expect(el2.value).toStrictEqual({ child3: initial.child3, child4: initial.child4 })
  expect(form.vm.plainData).toStrictEqual({
    child: 'el_child_value',
    child2: initial.child2,
    child3: initial.child3,
    child4: initial.child4,
  })

  if (app) {
    expect(app.vm.data).toStrictEqual({
      child: 'el_child_value',
      child2: initial.child2,
      child3: initial.child3,
      child4: initial.child4,
    })
  }
  
  // Watchers kick in
  await nextTick()

  expect(formChangeMock).toHaveBeenCalledTimes(1)
  expect(formChangeMock).toHaveBeenNthCalledWith(1, {
    child: 'el_child_value',
    child2: initial.child2,
    child3: initial.child3,
    child4: initial.child4
  }, {
    child: initial.child,
    child2: initial.child2,
    child3: initial.child3,
    child4: initial.child4
  })
  expect(elChangeMock).toHaveBeenCalledTimes(1)
  expect(elChangeMock).toHaveBeenNthCalledWith(1, {
    child: 'el_child_value',
    child2: initial.child2
  }, {
    child: initial.child,
    child2: initial.child2
  })
  expect(el2ChangeMock).not.toHaveBeenCalled()
  expect(elChildChangeMock).toHaveBeenNthCalledWith(1, 'el_child_value', initial.child)
  expect(elChild2ChangeMock).not.toHaveBeenCalled()
  expect(el2Child3ChangeMock).not.toHaveBeenCalled()
  expect(el2Child4ChangeMock).not.toHaveBeenCalled()

  // // Wait an other tick to make sure everything settles down
  await nextTick()

  // Update a child
  if (updateModel) {
    await nextTick()

    app.vm.$set(app.vm.data, 'child', 'el_child_value2')
    app.vm.$set(app.vm.data, 'child4', 'el2_child2_value')
  } else {
    el.update({
      child: 'el_child_value2'
    })

    el2.update({
      child4: 'el2_child2_value'
    })
  }

  // Element and form should change instantly
  expect(el.value).toStrictEqual({ child: 'el_child_value2', child2: initial.child2 })
  expect(el2.value).toStrictEqual({ child3: initial.child3, child4: 'el2_child2_value' })
  expect(form.vm.plainData).toStrictEqual({
    child: 'el_child_value2',
    child2: initial.child2,
    child3: initial.child3,
    child4: 'el2_child2_value'
  })

  if (app) {
    expect(app.vm.data).toStrictEqual({
      child: 'el_child_value2',
      child2: initial.child2,
      child3: initial.child3,
      child4: 'el2_child2_value'
    })
  }

  // Watchers kick in
  await nextTick()

  expect(formChangeMock).toHaveBeenCalledTimes(2)
  expect(formChangeMock).toHaveBeenNthCalledWith(2, {
    child: 'el_child_value2',
    child2: initial.child2,
    child3: initial.child3,
    child4: 'el2_child2_value',
  }, {
    child: 'el_child_value',
    child2: initial.child2,
    child3: initial.child3,
    child4: initial.child4,
  })
  expect(elChangeMock).toHaveBeenCalledTimes(2)
  expect(elChangeMock).toHaveBeenNthCalledWith(2, {
    child: 'el_child_value2', child2: initial.child2
  }, {
    child: 'el_child_value', child2: initial.child2
  })
  expect(el2ChangeMock).toHaveBeenCalledTimes(1)
  expect(el2ChangeMock).toHaveBeenNthCalledWith(1, {
    child3: initial.child3, child4: 'el2_child2_value'
  }, {
    child3: initial.child3, child4: initial.child4
  })
  expect(elChildChangeMock).toHaveBeenCalledTimes(2)
  expect(elChildChangeMock).toHaveBeenNthCalledWith(2, 'el_child_value2', 'el_child_value')
  expect(elChild2ChangeMock).not.toHaveBeenCalled()
  expect(el2Child3ChangeMock).not.toHaveBeenCalled()
  expect(el2Child4ChangeMock).toHaveBeenCalledTimes(1)
  expect(el2Child4ChangeMock).toHaveBeenNthCalledWith(1, 'el2_child2_value', initial.child4)

  // Wait an other tick to make sure everything settles down
  await nextTick()

  // Update the whole form
  if (updateModel) {
    await nextTick()

    app.vm.$set(app.vm, 'data', {
      child: 'el_child_value2',
      child2: 'el_child2_value', // change
      child3: 'el2_child_value', // change
      child4: 'el2_child2_value',
    })

    await nextTick()
  } else {
    form.vm.update({
      child: 'el_child_value2',
      child2: 'el_child2_value', // change
      child3: 'el2_child_value', // change
      child4: 'el2_child2_value',
    })
  }

  // Element and form should change instantly
  expect(el.value).toStrictEqual({ child: 'el_child_value2', child2: 'el_child2_value' })
  expect(el2.value).toStrictEqual({ child3: 'el2_child_value', child4: 'el2_child2_value' })
  expect(form.vm.plainData).toStrictEqual({
    child: 'el_child_value2',
    child2: 'el_child2_value',
    child3: 'el2_child_value',
    child4: 'el2_child2_value',
  })

  if (app) {
    expect(app.vm.data).toStrictEqual({
      child: 'el_child_value2',
      child2: 'el_child2_value',
      child3: 'el2_child_value',
      child4: 'el2_child2_value',
    })
  }

  // Watchers kick in
  await nextTick()

  expect(formChangeMock).toHaveBeenCalledTimes(3)
  expect(formChangeMock).toHaveBeenNthCalledWith(3, {
    child: 'el_child_value2',
    child2: 'el_child2_value',
    child3: 'el2_child_value',
    child4: 'el2_child2_value',
  }, {
    child: 'el_child_value2',
    child2: initial.child2,
    child3: initial.child3,
    child4: 'el2_child2_value',
  })
  expect(elChangeMock).toHaveBeenCalledTimes(3)
  expect(elChangeMock).toHaveBeenNthCalledWith(3, {
    child: 'el_child_value2', child2: 'el_child2_value',
  }, {
    child: 'el_child_value2', child2: initial.child2
  })
  expect(el2ChangeMock).toHaveBeenCalledTimes(2)
  expect(el2ChangeMock).toHaveBeenNthCalledWith(2, {
    child3: 'el2_child_value', child4: 'el2_child2_value',
  }, {
    child3: initial.child3, child4: 'el2_child2_value'
  })

  expect(elChildChangeMock).toHaveBeenCalledTimes(2)

  expect(elChild2ChangeMock).toHaveBeenCalledTimes(1)
  expect(elChild2ChangeMock).toHaveBeenNthCalledWith(1, 'el_child2_value', initial.child2)

  expect(el2Child3ChangeMock).toHaveBeenCalledTimes(1)
  expect(el2Child3ChangeMock).toHaveBeenNthCalledWith(1, 'el2_child_value', initial.child3)

  expect(el2Child4ChangeMock).toHaveBeenCalledTimes(1)
}

const baseSchema = (mocks, elementType) => {
  let {
    elChangeMock,
    el2ChangeMock,
    elChildChangeMock,
    elChild2ChangeMock,
    el2Child3ChangeMock,
    el2Child4ChangeMock,
  } = mocks

  let schema = {
    el: {
      type: elementType,
      schema: {
        child: {
          type: 'text',
          onChange: elChildChangeMock,
        },
        child2: {
          type: 'text',
          onChange: elChild2ChangeMock,
        },
      },
      onChange: elChangeMock,
    },
    el2: {
      type: elementType,
      schema: {
        child3: {
          type: 'text',
          onChange: el2Child3ChangeMock,
        },
        child4: {
          type: 'text',
          onChange: el2Child4ChangeMock,
        },
      },
      onChange: el2ChangeMock,
    },
  }

  return schema
}