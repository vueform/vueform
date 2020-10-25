import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'

export default function handleChange (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    it('should fire `change` event on `handleChange`', () => {
      const onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            onChange: onChangeMock,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.handleChange()

      expect(onChangeMock).toHaveBeenCalled()
    })

    it('should validate element on `handleChange` if validateOn contains "change"', async () => {
      let form = createForm({
        validateOn: 'submit|change',
        schema: {
          el: {
            type: elementType,
            rules: 'required'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.validated).toBe(false)

      el.vm.handleChange()

      await flushPromises()

      expect(el.vm.validated).toBe(true)
    })

    it('should not validate element on `handleChange` if validateOn does not contain "change"', async () => {
      let form = createForm({
        validateOn: 'submit',
        schema: {
          el: {
            type: elementType,
            rules: 'required'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.validated).toBe(false)

      el.vm.handleChange()

      await flushPromises()

      expect(el.vm.validated).toBe(false)
    })
  }
}