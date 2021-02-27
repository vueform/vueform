import { createForm, findAllComponents, testValue, createInlineForm } from 'test-helpers'
import { nextTick } from 'vue'

export const value = function (elementType, elementName, options) {
  describe('no v-model', () => {
    it('should be nullValue if no form default, no element default', async () => {
      let formChangeMock = jest.fn()
      let elChangeMock = jest.fn()
      let el2ChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            element: {
              type: 'text'
            },
            onChange: elChangeMock,
          },
          el2: {
            type: elementType,
            element: {
              type: 'text'
            },
            onChange: el2ChangeMock,
          },
        }
      }, {
        mounted() {
          this.on('change', formChangeMock)
        }
      })

      let el = form.vm.el$('el')
      let el2 = form.vm.el$('el2')

      // Expect nullValues
      expect(el.value).toStrictEqual(el.nullValue)
      expect(el2.value).toStrictEqual(el2.nullValue)
      expect(form.vm.data).toStrictEqual({ el: el.nullValue, el2: el2.nullValue, })

      // No events should've been fired so far
      expect(formChangeMock).not.toHaveBeenCalled()
      expect(elChangeMock).not.toHaveBeenCalled()
      expect(el2ChangeMock).not.toHaveBeenCalled()

      // Update an element
      el.update(options.value)

      // Element and form should change instantly
      expect(el.value).toStrictEqual(options.value)
      expect(el2.value).toStrictEqual(el2.nullValue)
      expect(form.vm.data).toStrictEqual({ el: options.value, el2: el2.nullValue, })
      
      // Watchers kick in
      await nextTick()

      expect(formChangeMock).toHaveBeenCalledTimes(1)
      expect(formChangeMock).toHaveBeenNthCalledWith(1, { el: options.value, el2: el2.nullValue, }, { el: el.nullValue, el2: el2.nullValue, })
      expect(elChangeMock).toHaveBeenCalledTimes(1)
      expect(elChangeMock).toHaveBeenNthCalledWith(1, options.value, el.nullValue)
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
      
      // Watchers kick in
      await nextTick()

      // Events should trigger accordingly
      expect(formChangeMock).toHaveBeenCalledTimes(2)
      expect(formChangeMock).toHaveBeenNthCalledWith(2, { el: options.value2, el2: options.value, }, { el: options.value, el2: el2.nullValue, })
      expect(elChangeMock).toHaveBeenCalledTimes(2)
      expect(elChangeMock).toHaveBeenNthCalledWith(2, options.value2, options.value)
      expect(el2ChangeMock).toHaveBeenCalledTimes(1)
      expect(el2ChangeMock).toHaveBeenNthCalledWith(1, options.value, el2.nullValue)
    })
  })

  describe('empty v-model', () => {
    it('should be nullValue if no form default, no element default', async () => {
      let formChangeMock = jest.fn()
      let elChangeMock = jest.fn()
      let el2ChangeMock = jest.fn()

      let { app, form } = createInlineForm({
        model: {},
        props: {
          schema: {
            el: {
              type: elementType,
              onChange: elChangeMock,
            },
            el2: {
              type: elementType,
              onChange: el2ChangeMock,
            },
          }
        }
      }, {
        mounted() {
          this.on('change', formChangeMock)
        }
      })

      let el = form.vm.el$('el')
      let el2 = form.vm.el$('el2')

      // Expect nullValues
      expect(el.value).toStrictEqual(el.nullValue)
      expect(el2.value).toStrictEqual(el2.nullValue)
      expect(form.vm.data).toStrictEqual({ el: el.nullValue, el2: el2.nullValue, })
      expect(app.vm.data).toStrictEqual({ el: el.nullValue, el2: el2.nullValue, })

      // No events should've been fired so far
      expect(formChangeMock).not.toHaveBeenCalled()
      expect(elChangeMock).not.toHaveBeenCalled()
      expect(el2ChangeMock).not.toHaveBeenCalled()

      // Update an element
      el.update(options.value)

      // Element and form should change instantly
      expect(el.value).toStrictEqual(options.value)
      expect(el2.value).toStrictEqual(el2.nullValue)
      expect(form.vm.data).toStrictEqual({ el: options.value, el2: el2.nullValue, })
      expect(app.vm.data).toStrictEqual({ el: options.value, el2: el2.nullValue, })
      
      // Watchers kick in
      await nextTick()

      expect(formChangeMock).toHaveBeenCalledTimes(1)
      expect(formChangeMock).toHaveBeenNthCalledWith(1, { el: options.value, el2: el2.nullValue, }, { el: el.nullValue, el2: el2.nullValue, })
      expect(elChangeMock).toHaveBeenCalledTimes(1)
      expect(elChangeMock).toHaveBeenNthCalledWith(1, options.value, el.nullValue)
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
      expect(app.vm.data).toStrictEqual({ el: options.value2, el2: options.value, })
      
      // Watchers kick in
      await nextTick()

      // Events should trigger accordingly
      expect(formChangeMock).toHaveBeenCalledTimes(2)
      expect(formChangeMock).toHaveBeenNthCalledWith(2, { el: options.value2, el2: options.value, }, { el: options.value, el2: el2.nullValue, })
      expect(elChangeMock).toHaveBeenCalledTimes(2)
      expect(elChangeMock).toHaveBeenNthCalledWith(2, options.value2, options.value)
      expect(el2ChangeMock).toHaveBeenCalledTimes(1)
      expect(el2ChangeMock).toHaveBeenNthCalledWith(1, options.value, el2.nullValue)
    })
  })
}