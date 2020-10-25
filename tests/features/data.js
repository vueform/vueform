import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'

export default function data (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    testComputedOption(it, elementType, 'submit', true, false)
    testComputedOption(it, elementType, 'default', null, 'value')
    testComputedOption(it, elementType, 'formatData', null, 'formatDataFunction', false)
    testComputedOption(it, elementType, 'formatLoad', null, 'formatLoadFunction', false)
    
    // Computed Props
    it('should have "null" as `nullValue`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.nullValue).toBe(null)
    })

    it('should have "data" as an object with element name as property and element value as value by default', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            default: 'value'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.data).toStrictEqual({
        el: 'value'
      })
    })

    it('should have "data" according to `formatData` if it is set', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            default: 'value',
            formatData(name, value) {
              return {
                custom: {
                  [name]: value
                }
              }
            }
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.data).toStrictEqual({
        custom: {
          el: 'value'
        }
      })
    })

    it('should have `filtered` equal to `data` if there are no conditions', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            default: 'value'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.filtered).toStrictEqual(el.vm.data)
    })

    it('should have `filtered` equal to `data` if there are met conditions', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            default: 'value',
            conditions: [
              ['el2', 'value2']
            ]
          },
          el2: {
            type: 'text',
            default: 'value2',
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.filtered).toStrictEqual(el.vm.data)
    })

    it('should have empty object for `filtered` if there are unmet conditions', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            default: 'value',
            conditions: [
              ['el2', 'value2']
            ]
          },
          el2: {
            type: 'text',
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.filtered).toStrictEqual({})
    })
    
    // Methods
    it('should `load` data when element data is present in the load object & remove dirty state afterwards', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          },
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.load({
        el: 'value'
      })

      expect(el.vm.value).toBe('value')

      await nextTick()
      await nextTick()

      expect(el.vm.dirty).toBe(false)
    })

    it('should clear and reset validators on `load`& remove dirty state afterwards when element data is not present in the load object', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            default: 'value',
            rules: 'required',
          },
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.dirt()
      el.vm.validate()

      await flushPromises()

      expect(el.vm.validated).toBe(true)
      expect(el.vm.dirty).toBe(true)
      expect(el.vm.value).toBe('value')

      el.vm.load({
        el2: 'value'
      })

      expect(el.vm.value).toBe(el.vm.nullValue)
      expect(el.vm.validated).toBe(false)

      await nextTick()
      await nextTick()

      expect(el.vm.dirty).toBe(false)
    })

    it('should clear and reset validators on `load` & remove dirty state afterwards when element data is present in the load object, but not available', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required',
            default: 'value',
            conditions: [
              ['el2', 'value2']
            ]
          },
          el2: {
            type: 'text',
            default: 'value2'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)
      let el2 = findAllComponents(form, { name: elementName }).at(1)

      el.vm.dirt()
      el.vm.validate()

      await flushPromises()

      expect(el.vm.validated).toBe(true)
      expect(el.vm.dirty).toBe(true)
      expect(el.vm.value).toBe('value')

      el2.vm.value = null

      el.vm.load({
        el: 'value'
      })

      expect(el.vm.value).toBe(el.vm.nullValue)
      expect(el.vm.validated).toBe(false)

      await nextTick()
      await nextTick()

      expect(el.vm.dirty).toBe(false)
    })

    it('should `update` data without triggering change & validating', async () => {
      const onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            onChange: onChangeMock,
            rules: 'required',
          },
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.update('value')

      await flushPromises()

      expect(el.vm.value).toBe('value')
      expect(el.vm.validated).toBe(false)
      expect(onChangeMock).not.toHaveBeenCalled()
    })

    it('should `update` data with not triggering change, validating', async () => {
      const onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            onChange: onChangeMock,
            rules: 'required',
          },
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.update('value', true)

      await flushPromises()

      expect(el.vm.value).toBe('value')
      expect(el.vm.validated).toBe(false)
      expect(onChangeMock).toHaveBeenCalled()
    })

    it('should `update` data with triggering change, & not validating', async () => {
      const onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            onChange: onChangeMock,
            rules: 'required',
          },
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.update('value', false, true)

      await flushPromises()

      expect(el.vm.value).toBe('value')
      expect(el.vm.validated).toBe(true)
      expect(onChangeMock).not.toHaveBeenCalled()
    })

    it('should set value to default and reset validators on `reset`', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required',
            default: 'value',
          },
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.update('value2')
      el.vm.validate()

      await flushPromises()

      expect(el.vm.validated).toBe(true)
      expect(el.vm.value).toBe('value2')

      el.vm.reset()

      expect(el.vm.validated).toBe(false)
      expect(el.vm.value).toBe('value')
    })

    it('should set value to "nullValue" on `clear`', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required',
            default: 'value',
          },
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.value).toBe('value')

      el.vm.clear()

      expect(el.vm.value).toStrictEqual(el.vm.nullValue)
    })

    it('should set `previousValue` to "nullValue" on mounted', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          },
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.previousValue).toBe(el.vm.nullValue)
    })

    it('should set `currentValue` to "default" on mounted', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            default: 'value'
          },
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.currentValue).toBe('value')
    })
  }
}