import { createForm, createInlineForm } from 'test-helpers'
import { nextTick } from 'vue'

export const value = function (elementType, elementName, options) {
  describe('no v-model', () => {
    it('should be nullValue if no form default, no element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
        elChildChangeMock: jest.fn(),
        elChild2ChangeMock: jest.fn(),
        el2ChildChangeMock: jest.fn(),
        el2Child2ChangeMock: jest.fn(),
      }

      let form = createForm({
        schema: baseSchema(mocks, elementType)
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })

      await testChanges(form, mocks, {
        el: {
          child: null,
          child2: null,
        },
        el2: {
          child: null,
          child2: null,
        }
      })
    })

    it('should be form default if form default, no element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
        elChildChangeMock: jest.fn(),
        elChild2ChangeMock: jest.fn(),
        el2ChildChangeMock: jest.fn(),
        el2Child2ChangeMock: jest.fn(),
      }

      let form = createForm({
        schema: baseSchema(mocks, elementType),
        default: {
          el: {
            child: 'el_child'
          }
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })

      await testChanges(form, mocks, {
        el: {
          child: 'el_child',
          child2: null,
        },
        el2: {
          child: null,
          child2: null,
        }
      })
    })

    it('should be element default if no form default, element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
        elChildChangeMock: jest.fn(),
        elChild2ChangeMock: jest.fn(),
        el2ChildChangeMock: jest.fn(),
        el2Child2ChangeMock: jest.fn(),
      }

      let schema = baseSchema(mocks, elementType)

      schema.el.schema.child.default = 'el_child'

      let form = createForm({
        schema,
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })

      await testChanges(form, mocks, {
        el: {
          child: 'el_child',
          child2: null,
        },
        el2: {
          child: null,
          child2: null,
        }
      })
    })

    it('should be form default + element default if form default, element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
        elChildChangeMock: jest.fn(),
        elChild2ChangeMock: jest.fn(),
        el2ChildChangeMock: jest.fn(),
        el2Child2ChangeMock: jest.fn(),
      }

      let schema = baseSchema(mocks, elementType)

      schema.el.schema.child.default = 'el_child'
      schema.el.schema.child2.default = 'el_child2'
      schema.el2.schema.child.default = 'el_child'

      let form = createForm({
        schema,
        default: {
          el: {
            child: 'not_el_child',
          },
          el2: {
            child: null,
            child2: 'el2_child2',
          },
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })

      await testChanges(form, mocks, {
        el: {
          child: 'not_el_child',
          child2: 'el_child2',
        },
        el2: {
          child: null,
          child2: 'el2_child2',
        }
      })
    })
  })

  describe('empty v-model', () => {
    it('should be nullValue if no form default, no element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
        elChildChangeMock: jest.fn(),
        elChild2ChangeMock: jest.fn(),
        el2ChildChangeMock: jest.fn(),
        el2Child2ChangeMock: jest.fn(),
      }

      let { app, form } = createInlineForm({
        model: {},
        props: {
          schema: baseSchema(mocks, elementType)
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })

      await testChanges(form, mocks, {
        el: {
          child: null,
          child2: null,
        },
        el2: {
          child: null,
          child2: null,
        }
      }, app)
    })

    it('should be form default if form default, no element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
        elChildChangeMock: jest.fn(),
        elChild2ChangeMock: jest.fn(),
        el2ChildChangeMock: jest.fn(),
        el2Child2ChangeMock: jest.fn(),
      }

      let { app, form } = createInlineForm({
        model: {},
        props: {
          schema: baseSchema(mocks, elementType),
          default: {
            el: {
              child: 'el_child'
            }
          }
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })

      await testChanges(form, mocks, {
        el: {
          child: 'el_child',
          child2: null,
        },
        el2: {
          child: null,
          child2: null,
        }
      }, app)
    })

    it('should be element default if no form default, element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
        elChildChangeMock: jest.fn(),
        elChild2ChangeMock: jest.fn(),
        el2ChildChangeMock: jest.fn(),
        el2Child2ChangeMock: jest.fn(),
      }

      let schema = baseSchema(mocks, elementType)

      schema.el.schema.child.default = 'el_child'

      let { app, form } = createInlineForm({
        model: {},
        props: {
          schema,
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })

      await testChanges(form, mocks, {
        el: {
          child: 'el_child',
          child2: null,
        },
        el2: {
          child: null,
          child2: null,
        }
      }, app)
    })

    it('should be element default + form default if form default, element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
        elChildChangeMock: jest.fn(),
        elChild2ChangeMock: jest.fn(),
        el2ChildChangeMock: jest.fn(),
        el2Child2ChangeMock: jest.fn(),
      }

      let schema = baseSchema(mocks, elementType)

      schema.el.schema.child.default = 'el_child'
      schema.el.schema.child2.default = 'el_child2'
      schema.el2.schema.child.default = 'el_child'

      let { app, form } = createInlineForm({
        model: {},
        props: {
          schema,
          default: {
            el: {
              child: 'not_el_child',
            },
            el2: {
              child: null,
              child2: 'el2_child2',
            },
          }
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })

      await testChanges(form, mocks, {
        el: {
          child: 'not_el_child',
          child2: 'el_child2',
        },
        el2: {
          child: null,
          child2: 'el2_child2',
        }
      }, app)
    })
  })

  describe('v-model with value', () => {
    it('should be v-model value if no form default, no element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
        elChildChangeMock: jest.fn(),
        elChild2ChangeMock: jest.fn(),
        el2ChildChangeMock: jest.fn(),
        el2Child2ChangeMock: jest.fn(),
      }

      let { app, form } = createInlineForm({
        model: {
          el: {
            child: 'el_child',
            child2: 'el_child2',
          },
          el2: {
            child2: 'el2_child2',
          },
        },
        props: {
          schema: baseSchema(mocks, elementType)
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })

      await testChanges(form, mocks, {
        el: {
          child: 'el_child',
          child2: 'el_child2',
        },
        el2: {
          child: null,
          child2: 'el2_child2',
        },
      }, app)
    })

    it('should be v-model + form default value if form default, no element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
        elChildChangeMock: jest.fn(),
        elChild2ChangeMock: jest.fn(),
        el2ChildChangeMock: jest.fn(),
        el2Child2ChangeMock: jest.fn(),
      }

      let { app, form } = createInlineForm({
        model: {
          el: {
            child: 'el_child',
            child2: 'el_child2',
          },
          el2: {
            child2: 'el2_child2',
          },
        },
        props: {
          schema: baseSchema(mocks, elementType),
          default: {
            el: {
              child: null,
              child2: null,
            },
            el2: {
              child: 'not_el2_child',
              child2: 'not_el2_child2',
            }
          }
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })

      await testChanges(form, mocks, {
        el: {
            child: 'el_child',
            child2: 'el_child2',
        },
        el2: {
          child: 'not_el2_child',
          child2: 'el2_child2',
        }
      }, app)
    })

    it('should be v-model value + element default if no form default, element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
        elChildChangeMock: jest.fn(),
        elChild2ChangeMock: jest.fn(),
        el2ChildChangeMock: jest.fn(),
        el2Child2ChangeMock: jest.fn(),
      }

      let schema = baseSchema(mocks, elementType)

      schema.el.schema.child2.default = 'el_child2'
      schema.el2.schema.child.default = 'el2_child'

      let { app, form } = createInlineForm({
        model: {
          el: {
            child: 'el_child',
          },
          el2: {
            child: null,
            child2: 'el2_child2',
          },
        },
        props: {
          schema,
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })

      await testChanges(form, mocks, {
        el: {
            child: 'el_child',
            child2: 'el_child2',
        },
        el2: {
          child: null,
          child2: 'el2_child2',
        }
      }, app)
    })

    it('should be v-model value + element default + form default if form default, element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
        elChildChangeMock: jest.fn(),
        elChild2ChangeMock: jest.fn(),
        el2ChildChangeMock: jest.fn(),
        el2Child2ChangeMock: jest.fn(),
      }

      let schema = baseSchema(mocks, elementType)

      // 3
      schema.el.schema.child.default = 'el_child'
      schema.el.schema.child2.default = 'el_child2'
      schema.el2.schema.child.default = 'el2_child' // this
      schema.el2.schema.child2.default = 'el2_child2'

      let { app, form } = createInlineForm({
        // 1
        model: {
          el: {
            child: 'not_el_child', // this
          },
          el2: {
            child2: null, // this
          },
        },
        // 2
        props: {
          schema,
          default: {
            el: {
              child: 'not_not_el_child',
              child2: 'not_not_el_child2', // this
            },
            el2: {
              child2: 'not_not_el2_child2',
            },
          }
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })

      await testChanges(form, mocks, {
        el: {
          child: 'not_el_child',
          child2: 'not_not_el_child2',
        },
        el2: {
          child: 'el2_child',
          child2: null,
        }
      }, app)
    })
  })
}

// ============= HELPERS =============

const testChanges = async (form, mocks, initial, app = null) => {
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

  if (app) {
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
  el_child.update('el_child_value')

  // Element and form should change instantly
  expect(el.value).toStrictEqual({ child: 'el_child_value', child2: initial.el.child2 })
  expect(el2.value).toStrictEqual({ child: initial.el2.child, child2: initial.el2.child2 })
  expect(form.vm.data).toStrictEqual({
    el: { child: 'el_child_value', child2: initial.el.child2 },
    el2: { child: initial.el2.child, child2: initial.el2.child2 }
  })

  if (app) {
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
    el2: { child: initial.el2.child, child2: initial.el2.child2 }
  }, {
    el: { child: initial.el.child, child2: initial.el.child2 },
    el2: { child: initial.el2.child, child2: initial.el2.child2 }
  })
  expect(elChangeMock).toHaveBeenCalledTimes(1)
  expect(elChangeMock).toHaveBeenNthCalledWith(1, {
    child: 'el_child_value', child2: initial.el.child2
  }, {
    child: initial.el.child, child2: initial.el.child2
  })
  expect(el2ChangeMock).not.toHaveBeenCalled()
  expect(elChildChangeMock).toHaveBeenNthCalledWith(1, 'el_child_value', initial.el.child)
  expect(elChild2ChangeMock).not.toHaveBeenCalled()
  expect(el2ChildChangeMock).not.toHaveBeenCalled()
  expect(el2Child2ChangeMock).not.toHaveBeenCalled()

  // // Wait an other tick to make sure everything settles down
  await nextTick()

  // Update a child
  el.update({
    child: 'el_child_value2'
  })

  el2.update({
    child2: 'el2_child2_value'
  })

  // Element and form should change instantly
  expect(el.value).toStrictEqual({ child: 'el_child_value2', child2: initial.el.child2 })
  expect(el2.value).toStrictEqual({ child: initial.el2.child, child2: 'el2_child2_value' })
  expect(form.vm.data).toStrictEqual({
    el: { child: 'el_child_value2', child2: initial.el.child2 },
    el2: { child: initial.el2.child, child2: 'el2_child2_value' }
  })

  if (app) {
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
  })
  expect(elChangeMock).toHaveBeenCalledTimes(2)
  expect(elChangeMock).toHaveBeenNthCalledWith(2, {
    child: 'el_child_value2', child2: initial.el.child2
  }, {
    child: 'el_child_value', child2: initial.el.child2
  })
  expect(el2ChangeMock).toHaveBeenCalledTimes(1)
  expect(el2ChangeMock).toHaveBeenNthCalledWith(1, {
    child: initial.el2.child, child2: 'el2_child2_value'
  }, {
    child: initial.el2.child, child2: initial.el2.child2
  })
  expect(elChildChangeMock).toHaveBeenCalledTimes(2)
  expect(elChildChangeMock).toHaveBeenNthCalledWith(2, 'el_child_value2', 'el_child_value')
  expect(elChild2ChangeMock).not.toHaveBeenCalled()
  expect(el2ChildChangeMock).not.toHaveBeenCalled()
  expect(el2Child2ChangeMock).toHaveBeenCalledTimes(1)
  expect(el2Child2ChangeMock).toHaveBeenNthCalledWith(1, 'el2_child2_value', initial.el2.child2)

  // Wait an other tick to make sure everything settles down
  await nextTick()

  // Update the whole form
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

  // Element and form should change instantly
  expect(el.value).toStrictEqual({ child: 'el_child_value2', child2: 'el_child2_value' })
  expect(el2.value).toStrictEqual({ child: 'el2_child_value', child2: 'el2_child2_value' })
  expect(form.vm.data).toStrictEqual({
    el: { child: 'el_child_value2', child2: 'el_child2_value', },
    el2: { child: 'el2_child_value', child2: 'el2_child2_value', },
  })

  if (app) {
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
  })
  expect(elChangeMock).toHaveBeenCalledTimes(3)
  expect(elChangeMock).toHaveBeenNthCalledWith(3, {
    child: 'el_child_value2', child2: 'el_child2_value',
  }, {
    child: 'el_child_value2', child2: initial.el.child2
  })
  expect(el2ChangeMock).toHaveBeenCalledTimes(2)
  expect(el2ChangeMock).toHaveBeenNthCalledWith(2, {
    child: 'el2_child_value', child2: 'el2_child2_value',
  }, {
    child: initial.el2.child, child2: 'el2_child2_value'
  })

  expect(elChildChangeMock).toHaveBeenCalledTimes(2)

  expect(elChild2ChangeMock).toHaveBeenCalledTimes(1)
  expect(elChild2ChangeMock).toHaveBeenNthCalledWith(1, 'el_child2_value', initial.el.child2)

  expect(el2ChildChangeMock).toHaveBeenCalledTimes(1)
  expect(el2ChildChangeMock).toHaveBeenNthCalledWith(1, 'el2_child_value', initial.el2.child)

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