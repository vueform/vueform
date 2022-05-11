import { testModelCases, createInlineForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const value = function (elementType, elementName, options) {
  let mocks = [ 'formChangeMock', 'elChangeMock', 'el2ChangeMock', 'elChildChangeMock', 'elChild2ChangeMock', 'el2ChildChangeMock', 'el2Child2ChangeMock' ]

  let cases = [
    {
      initial: { el: _.cloneDeep(options.nullValue), el2: _.cloneDeep(options.nullValue) },

      model: { el: _.cloneDeep(options.default) },
      initialWithModel: { el: _.cloneDeep(options.default), el2: _.cloneDeep(options.nullValue) },
    },
    {
      initial: { el: _.cloneDeep(options.default), el2: _.cloneDeep(options.default2), },
      formDefault: { el: _.cloneDeep(options.default), el2: _.cloneDeep(options.default2), },

      model: { el: _.cloneDeep(options.default2), },
      initialWithModel: { el: _.cloneDeep(options.default2), el2: _.cloneDeep(options.default2), },
    },
    {
      initial: { el: _.cloneDeep(options.default), el2: _.cloneDeep(options.default2), },
      elementDefault: { el: _.cloneDeep(options.default), el2: _.cloneDeep(options.default2), },

      model: { el: _.cloneDeep(options.default2), },
      initialWithModel: { el: _.cloneDeep(options.default2), el2: _.cloneDeep(options.default2), },
    },
    {
      initial: { el: _.cloneDeep(options.default2), el2: _.cloneDeep(options.default2), },
      elementDefault: { el: _.cloneDeep(options.default) },
      formDefault: { el: _.cloneDeep(options.default2), el2: _.cloneDeep(options.default2), },

      model: { el: _.cloneDeep(options.default), },
      initialWithModel: { el: _.cloneDeep(options.default), el2: _.cloneDeep(options.default2), },
    },
  ]

  testModelCases(cases, elementType, options, mocks, baseSchema, testChanges)

  it('should have set defaults when not inline', () => {
    let form = createForm({
      default: {
        el: {
          child: {
            subchild: 'form-a this',
          },
          child2: {
          },
        },
        el2: {
          child3: {
            subchild5: 'form-e this',
          },
          child4: {
          }
        }
      },
      schema: {
        el: {
          type: 'object',
          default: {
            child: {
              subchild: 'el-a',
              subchild2: 'el-b this',
            },
            child2: {
            }
          },
          schema: {
            child: {
              type: 'object',
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
              type: 'object',
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
          type: 'object',
          default: {
            child3: {
              subchild6: 'el2-f this',
            },
            child4: {
            }
          },
          schema: {
            child3: {
              type: 'object',
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
              type: 'object',
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

    expect(form.vm.data).toStrictEqual({
      el: {
        child: {
          subchild: 'form-a this',
          subchild2: 'el-b this',
        },
        child2: {
          subchild3: 'child2-c this',
          subchild4: 'subchild4-d this',
        },
      },
      el2: {
        child3: {
          subchild5: 'form-e this',
          subchild6: 'el2-f this',
        },
        child4: {
          subchild7: 'child4-g this',
          subchild8: 'subchild8-h this',
        },
      },
    })
    
    // destroy(form) // teardown
  })

  it('should have set defaults when inline', () => {
    let { form } = createInlineForm({
      model: {
        el: {},
        el2: {
          child3: {
            subchild5: 'v-model-e this',
          },
          child4: {
          },
        }
      },
      props: {
        sync: true,
        default: {
          el: {
            child: {
              subchild: 'form-a this',
            },
            child2: {
            },
          },
          el2: {
            child3: {
              subchild5: 'form-e this',
            },
            child4: {
            }
          }
        },
        schema: {
          el: {
            type: 'object',
            default: {
              child: {
                subchild: 'el-a',
                subchild2: 'el-b this',
              },
              child2: {
              }
            },
            schema: {
              child: {
                type: 'object',
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
                type: 'object',
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
            type: 'object',
            default: {
              child3: {
                subchild6: 'el2-f this',
              },
              child4: {
              }
            },
            schema: {
              child3: {
                type: 'object',
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
                type: 'object',
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

    expect(form.vm.data).toStrictEqual({
      el: {
        child: {
          subchild: 'form-a this',
          subchild2: 'el-b this',
        },
        child2: {
          subchild3: 'child2-c this',
          subchild4: 'subchild4-d this',
        },
      },
      el2: {
        child3: {
          subchild5: 'v-model-e this',
          subchild6: 'el2-f this',
        },
        child4: {
          subchild7: 'child4-g this',
          subchild8: 'subchild8-h this',
        },
      },
    })
  })
}

// ============= HELPERS =============

const testChanges = async (form, mocks, options, updateModel, initial, hasModel, app = null) => {
  let {
    formChangeMock,
    elChangeMock,
    el2ChangeMock,
    elChildChangeMock,
    elChild2ChangeMock,
    el2ChildChangeMock,
    el2Child2ChangeMock,
  } = mocks

  let el = form.vm.el$('el')
  let el2 = form.vm.el$('el2')
  let el_child = form.vm.el$('el.child')
  let el_child2 = form.vm.el$('el.child2')
  let el2_child = form.vm.el$('el2.child')
  let el2_child2 = form.vm.el$('el2.child2')

  // Expect initial
  expect(el.value).toStrictEqual({ child: initial.el.child, child2: initial.el.child2 })
  expect(el2.value).toStrictEqual({ child: initial.el2.child, child2: initial.el2.child2 })
  expect(form.vm.data).toStrictEqual({
    el: { child: initial.el.child, child2: initial.el.child2 },
    el2: { child: initial.el2.child, child2: initial.el2.child2 }
  })

  if (hasModel && app) {
    expect(app.vm.data).toStrictEqual({
      el: { child: initial.el.child, child2: initial.el.child2 },
      el2: { child: initial.el2.child, child2: initial.el2.child2 }
    })
  }

  // No events should've been fired so far
  expect(formChangeMock).not.toHaveBeenCalled()
  expect(elChangeMock).not.toHaveBeenCalled()
  expect(el2ChangeMock).not.toHaveBeenCalled()
  expect(elChildChangeMock).not.toHaveBeenCalled()
  expect(elChild2ChangeMock).not.toHaveBeenCalled()
  expect(el2ChildChangeMock).not.toHaveBeenCalled()
  expect(el2Child2ChangeMock).not.toHaveBeenCalled()

  // Update a sub-child
  if (hasModel && updateModel) {
    await nextTick()

    app.vm.$set(app.vm.data.el, 'child', 'el_child_value')
  } else {
    el_child.update('el_child_value')
  }

  // Element and form should change instantly
  expect(el.value).toStrictEqual({ child: 'el_child_value', child2: initial.el.child2 })
  expect(el2.value).toStrictEqual({ child: initial.el2.child, child2: initial.el2.child2 })
  expect(form.vm.data).toStrictEqual({
    el: { child: 'el_child_value', child2: initial.el.child2 },
    el2: { child: initial.el2.child, child2: initial.el2.child2 }
  })

  if (hasModel && app) {
    await nextTick()
    expect(app.vm.data).toStrictEqual({
      el: { child: 'el_child_value', child2: initial.el.child2 },
      el2: { child: initial.el2.child, child2: initial.el2.child2 }
    })
  }
  
  // Watchers kick in
  await nextTick()

  expect(formChangeMock).toHaveBeenCalledTimes(1)
  expect(formChangeMock).toHaveBeenNthCalledWith(1, {
    el: { child: 'el_child_value', child2: initial.el.child2 },
    el2: { child: initial.el2.child, child2: initial.el2.child2 },
  }, {
    el: { child: initial.el.child, child2: initial.el.child2 },
    el2: { child: initial.el2.child, child2: initial.el2.child2 }
  }, form.vm)
  expect(elChangeMock).toHaveBeenCalledTimes(1)
  expect(elChangeMock).toHaveBeenNthCalledWith(1, {
    child: 'el_child_value', child2: initial.el.child2
  }, {
    child: initial.el.child, child2: initial.el.child2
  }, el)
  expect(el2ChangeMock).not.toHaveBeenCalled()
  expect(elChildChangeMock).toHaveBeenNthCalledWith(1, 'el_child_value', initial.el.child, el_child)
  expect(elChild2ChangeMock).not.toHaveBeenCalled()
  expect(el2ChildChangeMock).not.toHaveBeenCalled()
  expect(el2Child2ChangeMock).not.toHaveBeenCalled()

  // // Wait an other tick to make sure everything settles down
  await nextTick()

  // Update a child
  if (hasModel && updateModel) {
    await nextTick()

    app.vm.$set(app.vm.data.el, 'child', 'el_child_value2')
    app.vm.$set(app.vm.data.el2, 'child2', 'el2_child2_value')
  } else {
    el.update({
      child: 'el_child_value2'
    })

    el2.update({
      child2: 'el2_child2_value'
    })
  }

  // Element and form should change instantly
  expect(el.value).toStrictEqual({ child: 'el_child_value2', child2: initial.el.child2 })
  expect(el2.value).toStrictEqual({ child: initial.el2.child, child2: 'el2_child2_value' })
  expect(form.vm.data).toStrictEqual({
    el: { child: 'el_child_value2', child2: initial.el.child2 },
    el2: { child: initial.el2.child, child2: 'el2_child2_value' }
  })

  if (hasModel && app) {
    await nextTick()

    expect(app.vm.data).toStrictEqual({
      el: { child: 'el_child_value2', child2: initial.el.child2 },
      el2: { child: initial.el2.child, child2: 'el2_child2_value' }
    })
  }

  // Watchers kick in
  await nextTick()

  expect(formChangeMock).toHaveBeenCalledTimes(2)
  expect(formChangeMock).toHaveBeenNthCalledWith(2, {
    el: { child: 'el_child_value2', child2: initial.el.child2 },
    el2: { child: initial.el2.child, child2: 'el2_child2_value' }
  }, {
    el: { child: 'el_child_value', child2: initial.el.child2 },
    el2: { child: initial.el2.child, child2: initial.el2.child2 }
  }, form.vm)
  expect(elChangeMock).toHaveBeenCalledTimes(2)
  expect(elChangeMock).toHaveBeenNthCalledWith(2, {
    child: 'el_child_value2', child2: initial.el.child2
  }, {
    child: 'el_child_value', child2: initial.el.child2
  }, el)
  expect(el2ChangeMock).toHaveBeenCalledTimes(1)
  expect(el2ChangeMock).toHaveBeenNthCalledWith(1, {
    child: initial.el2.child, child2: 'el2_child2_value'
  }, {
    child: initial.el2.child, child2: initial.el2.child2
  }, el2)
  expect(elChildChangeMock).toHaveBeenCalledTimes(2)
  expect(elChildChangeMock).toHaveBeenNthCalledWith(2, 'el_child_value2', 'el_child_value', el_child)
  expect(elChild2ChangeMock).not.toHaveBeenCalled()
  expect(el2ChildChangeMock).not.toHaveBeenCalled()
  expect(el2Child2ChangeMock).toHaveBeenCalledTimes(1)
  expect(el2Child2ChangeMock).toHaveBeenNthCalledWith(1, 'el2_child2_value', initial.el2.child2, el2_child2)

  // Wait an other tick to make sure everything settles down
  await nextTick()

  // Update the whole form
  if (hasModel && updateModel) {
    await nextTick()

    app.vm.$set(app.vm, 'data', {
      el: {
        child: 'el_child_value2',
        child2: 'el_child2_value', // change
      },
      el2: {
        child: 'el2_child_value', // change
        child2: 'el2_child2_value',
      },
    })

    await nextTick()
  } else {
    form.vm.update({
      el: {
        child: 'el_child_value2',
        child2: 'el_child2_value', // change
      },
      el2: {
        child: 'el2_child_value', // change
        child2: 'el2_child2_value',
      },
    })
  }

  // Element and form should change instantly
  expect(el.value).toStrictEqual({ child: 'el_child_value2', child2: 'el_child2_value' })
  expect(el2.value).toStrictEqual({ child: 'el2_child_value', child2: 'el2_child2_value' })
  expect(form.vm.data).toStrictEqual({
    el: { child: 'el_child_value2', child2: 'el_child2_value', },
    el2: { child: 'el2_child_value', child2: 'el2_child2_value', },
  })

  if (hasModel && app) {
    await nextTick()

    expect(app.vm.data).toStrictEqual({
      el: { child: 'el_child_value2', child2: 'el_child2_value', },
      el2: { child: 'el2_child_value', child2: 'el2_child2_value', },
    })
  }

  // Watchers kick in
  await nextTick()

  expect(formChangeMock).toHaveBeenCalledTimes(3)
  expect(formChangeMock).toHaveBeenNthCalledWith(3, {
    el: { child: 'el_child_value2', child2: 'el_child2_value' },
    el2: { child: 'el2_child_value', child2: 'el2_child2_value' }
  }, {
    el: { child: 'el_child_value2', child2: initial.el.child2 },
    el2: { child: initial.el2.child, child2: 'el2_child2_value' }
  }, form.vm)
  expect(elChangeMock).toHaveBeenCalledTimes(3)
  expect(elChangeMock).toHaveBeenNthCalledWith(3, {
    child: 'el_child_value2', child2: 'el_child2_value',
  }, {
    child: 'el_child_value2', child2: initial.el.child2
  }, el)
  expect(el2ChangeMock).toHaveBeenCalledTimes(2)
  expect(el2ChangeMock).toHaveBeenNthCalledWith(2, {
    child: 'el2_child_value', child2: 'el2_child2_value',
  }, {
    child: initial.el2.child, child2: 'el2_child2_value'
  }, el2)

  expect(elChildChangeMock).toHaveBeenCalledTimes(2)

  expect(elChild2ChangeMock).toHaveBeenCalledTimes(1)
  expect(elChild2ChangeMock).toHaveBeenNthCalledWith(1, 'el_child2_value', initial.el.child2, el_child2)

  expect(el2ChildChangeMock).toHaveBeenCalledTimes(1)
  expect(el2ChildChangeMock).toHaveBeenNthCalledWith(1, 'el2_child_value', initial.el2.child, el2_child)

  expect(el2Child2ChangeMock).toHaveBeenCalledTimes(1)
}

const baseSchema = (mocks, elementType) => {
  let {
    elChangeMock,
    el2ChangeMock,
    elChildChangeMock,
    elChild2ChangeMock,
    el2ChildChangeMock,
    el2Child2ChangeMock,
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
        child: {
          type: 'text',
          onChange: el2ChildChangeMock,
        },
        child2: {
          type: 'text',
          onChange: el2Child2ChangeMock,
        },
      },
      onChange: el2ChangeMock,
    },
  }

  return schema
}