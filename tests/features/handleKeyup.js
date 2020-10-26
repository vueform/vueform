import { createForm, findAllComponents, triggerEvent } from 'test-helpers'

export default function handleKeyup (elementType, options) {
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
    
    it('should trigger `handleKeyup` on input\'s "keyup" event', async () => {
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

      triggerEvent(el, options.fieldType, 'keyup')

      expect(onChangeMock).not.toHaveBeenCalled()

      el.vm.readonly = false

      triggerEvent(el, options.fieldType, 'keyup')

      expect(onChangeMock).toHaveBeenCalled()
    })

    it('should trigger `handleKeyup` on input\'s "select" event', async () => {
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

      triggerEvent(el, options.fieldType, 'select')

      expect(onChangeMock).not.toHaveBeenCalled()

      el.vm.readonly = false

      triggerEvent(el, options.fieldType, 'select')

      expect(onChangeMock).toHaveBeenCalled()
    })
  }
}