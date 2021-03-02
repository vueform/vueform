import { loadOptions } from '@babel/core'
import { createForm, findAllComponents, testValue, createInlineForm } from 'test-helpers'
import { nextTick } from 'vue'

export const value = function (elementType, elementName, options) {
  describe('no v-model', () => {
    it('should be nullValue if no form default, no element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
      }

      let form = createForm({
        schema: baseSchema(mocks, elementType)
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })
      
      await testChanges(form, mocks, options, {
        el: null,
        el2: null
      })
    })

    it('should be form default if form default, no element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
      }

      let form = createForm({
        schema: baseSchema(mocks, elementType),
        default: {
          el: options.default
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })
      
      await testChanges(form, mocks, options, {
        el: options.default,
        el2: null
      })
    })

    it('should be element default if no form default, element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
      }

      let schema = baseSchema(mocks, elementType)

      schema.el.default = options.default

      let form = createForm({
        schema,
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })
      
      await testChanges(form, mocks, options, {
        el: options.default,
        el2: null
      })
    })

    it('should be element + form default if form default, element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
      }

      let schema = baseSchema(mocks, elementType)

      schema.el.default = options.default

      let form = createForm({
        schema,
        default: {
          el: options.default2,
          el2: options.default2,
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })
      
      await testChanges(form, mocks, options, {
        el: options.default2,
        el2: options.default2
      })
    })
  })

  describe('empty v-model', () => {
    it('should be nullValue if no form default, no element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
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
      
      await testChanges(form, mocks, options, {
        el: null,
        el2: null
      }, app)
    })

    it('should be form default if form default, no element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
      }

      let { app, form } = createInlineForm({
        model: {},
        props: {
          schema: baseSchema(mocks, elementType),
          default: {
            el: options.default,
          }
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })
      
      await testChanges(form, mocks, options, {
        el: options.default,
        el2: null
      }, app)
    })

    it('should be element default if no form default, element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
      }

      let schema = baseSchema(mocks, elementType)

      schema.el.default = options.default

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
      
      await testChanges(form, mocks, options, {
        el: options.default,
        el2: null
      }, app)
    })

    it('should be element default if no form default, element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
      }

      let schema = baseSchema(mocks, elementType)

      schema.el.default = options.default

      let { app, form } = createInlineForm({
        model: {},
        props: {
          schema,
          default: {
            el: options.default2,
            el2: options.default2,
          }
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })
      
      await testChanges(form, mocks, options, {
        el: options.default2,
        el2: options.default2,
      }, app)
    })
  })

  describe('v-model with value', () => {
    it('should be v-model value if no form default, no element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
      }

      let { app, form } = createInlineForm({
        model: {
          el: options.default,
          el2: options.default2,
        },
        props: {
          schema: baseSchema(mocks, elementType)
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })
      
      await testChanges(form, mocks, options, {
        el: options.default,
        el2: options.default2,
      }, app)
    })

    it('should be v-model value + form default if form default, no element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
      }

      let { app, form } = createInlineForm({
        model: {
          el: options.default,
        },
        props: {
          schema: baseSchema(mocks, elementType),
          default: {
            el: options.default2,
            el2: options.default2,
          }
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })
      
      await testChanges(form, mocks, options, {
        el: options.default,
        el2: options.default2,
      }, app)
    })

    it('should be v-model value + element default if no form default, element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
      }

      let schema = baseSchema(mocks, elementType)

      schema.el.default = options.default2
      schema.el2.default = options.default2

      let { app, form } = createInlineForm({
        model: {
          el: options.default,
        },
        props: {
          schema,
          default: {
            el: options.default,
            el2: options.default2,
          }
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })
      
      await testChanges(form, mocks, options, {
        el: options.default,
        el2: options.default2,
      }, app)
    })

    it('should be v-model value + form + element default if form default, element default', async () => {
      let mocks = {
        formChangeMock: jest.fn(),
        elChangeMock: jest.fn(),
        el2ChangeMock: jest.fn(),
      }

      let schema = baseSchema(mocks, elementType)

      // 3
      schema.el.default = options.default
      schema.el2.default = options.default2

      let { app, form } = createInlineForm({
        // 1
        model: {
          el: options.default,
        },
        props: {
          schema,
          // 2
          default: {
            el: options.default2,
            el2: options.default2,
          }
        }
      }, {
        mounted() {
          this.on('change', mocks.formChangeMock)
        }
      })
      
      await testChanges(form, mocks, options, {
        el: options.default,
        el2: options.default2,
      }, app)
    })
  })
}

const testChanges = async (form, mocks, options, initial, app = null) => {
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

  if (app) {
    expect(app.vm.data).toStrictEqual({ el: initial.el, el2: initial.el2, })
  }

  // No events should've been fired so far
  expect(formChangeMock).not.toHaveBeenCalled()
  expect(elChangeMock).not.toHaveBeenCalled()
  expect(el2ChangeMock).not.toHaveBeenCalled()

  // Update an element
  el.update(options.value)

  // Element and form should change instantly
  expect(el.value).toStrictEqual(options.value)
  expect(el2.value).toStrictEqual(initial.el2)
  expect(form.vm.data).toStrictEqual({ el: options.value, el2: initial.el2, })

  if (app) {
    expect(form.vm.data).toStrictEqual({ el: options.value, el2: initial.el2, })
  }
  
  // Watchers kick in
  await nextTick()

  expect(formChangeMock).toHaveBeenCalledTimes(1)
  expect(formChangeMock).toHaveBeenNthCalledWith(1, { el: options.value, el2: initial.el2, }, { el: initial.el, el2: initial.el2, })
  expect(elChangeMock).toHaveBeenCalledTimes(1)
  expect(elChangeMock).toHaveBeenNthCalledWith(1, options.value, initial.el)
  expect(el2ChangeMock).not.toHaveBeenCalled()

  // Wait an other tick to make sure everything settles down
  await nextTick()

  // Update the whole form
  form.vm.update({
    el: options.value2,
    el2: options.value,
  })

  // Element and form should change instantly
  expect(el.value).toStrictEqual(options.value2)
  expect(el2.value).toStrictEqual(options.value)
  expect(form.vm.data).toStrictEqual({ el: options.value2, el2: options.value, })

  if (app) {
    expect(form.vm.data).toStrictEqual({ el: options.value2, el2: options.value, })
  }
  
  // Watchers kick in
  await nextTick()

  // Events should trigger accordingly
  expect(formChangeMock).toHaveBeenCalledTimes(2)
  expect(formChangeMock).toHaveBeenNthCalledWith(2, { el: options.value2, el2: options.value, }, { el: options.value, el2: initial.el2, })
  expect(elChangeMock).toHaveBeenCalledTimes(2)
  expect(elChangeMock).toHaveBeenNthCalledWith(2, options.value2, options.value)
  expect(el2ChangeMock).toHaveBeenCalledTimes(1)
  expect(el2ChangeMock).toHaveBeenNthCalledWith(1, options.value, initial.el2)
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
    },
    el2: {
      type: elementType,
      onChange: el2ChangeMock,
    },
  }

  return schema
}