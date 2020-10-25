import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'

export default function handleKeyup (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    it('should call `handleChange` event on `handleKeyup`', async () => {
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

      el.vm.handleKeyup()

      expect(onChangeMock).toHaveBeenCalled()
    })

    it('should call not `handleChange` event on `handleKeyup` when readonly', () => {
      const onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            readonly: true,
            onChange: onChangeMock,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.handleKeyup()

      expect(onChangeMock).not.toHaveBeenCalled()
    })
  }
}