import { createForm } from 'test-helpers'

import { elementComponent, label, loading, disabled, align, isLoading, setLoading, disable, enable } from './FormButton'

describe('FormButtonAnchor', () => {
  let buttonType = 'anchor'
  let buttonComponent = 'FormButtonAnchor'

  elementComponent(buttonType, buttonComponent)
  label(buttonType, buttonComponent)
  loading(buttonType, buttonComponent)
  disabled(buttonType, buttonComponent)
  align(buttonType, buttonComponent)
  isLoading(buttonType, buttonComponent)
  setLoading(buttonType, buttonComponent)
  disable(buttonType, buttonComponent)
  enable(buttonType, buttonComponent)

  describe('isDisabled', () => {
    it('should equal to disabled if function not defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.isDisabled).toBe(false)

      FormButton.vm.disable()

      expect(FormButton.vm.isDisabled).toBe(true)
    })

    it('should equal to disabled function or disabled', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            shouldDisable: false,
            buttonType: buttonType,
            disabled: (form$) => {
              let el$ = form$.el$('el')

              if (el$ === null) {
                return false
              }

              return el$.schema.shouldDisable
            }
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.isDisabled).toBe(false)

      FormButton.vm.disable()

      expect(FormButton.vm.isDisabled).toBe(true)

      FormButton.vm.enable()

      expect(FormButton.vm.isDisabled).toBe(false)

      form.vm.schema.el.shouldDisable = true

      expect(FormButton.vm.isDisabled).toBe(true)
    })
  })

  describe('href', () => {
    it('should be empty string by default', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.href).toBe('')
    })

    it('should be set if defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
            href: 'url'
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.href).toBe('url')
    })
  })

  describe('target', () => {
    it('should be _self by default', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.target).toBe('_self')
    })

    it('should be set if defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
            target: '_blank'
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.target).toBe('_blank')
    })
  })

  describe('handleClick', () => {
    it('should prevent default if href is empty', () => {
      let preventDefaultMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      FormButton.vm.handleClick({
        preventDefault: preventDefaultMock,
      })

      expect(preventDefaultMock).toHaveBeenCalled()
    })

    it('should return if disabled', () => {
      let preventDefaultMock = jest.fn()
      let onClickMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
            onClick: onClickMock,
            href: 'url',
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      FormButton.vm.disable()

      FormButton.vm.handleClick({
        preventDefault: preventDefaultMock,
      })

      expect(preventDefaultMock).not.toHaveBeenCalled()
      expect(onClickMock).not.toHaveBeenCalled()
    })

    it('should return if loading', () => {
      let preventDefaultMock = jest.fn()
      let onClickMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
            onClick: onClickMock,
            href: 'url',
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      FormButton.vm.setLoading(true)

      FormButton.vm.handleClick({
        preventDefault: preventDefaultMock,
      })

      expect(preventDefaultMock).not.toHaveBeenCalled()
      expect(onClickMock).not.toHaveBeenCalled()
    })

    it('should trigger onClick', () => {
      let preventDefaultMock = jest.fn()
      let onClickMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
            onClick: onClickMock,
            href: 'url',
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      FormButton.vm.handleClick({
        preventDefault: preventDefaultMock,
      })

      expect(preventDefaultMock).not.toHaveBeenCalled()
      expect(onClickMock).toHaveBeenCalledWith(form.vm)
    })

    it('should trigger onClick on click', () => {
      let onClickMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
            onClick: onClickMock,
            href: 'url',
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      FormButton.trigger('click')

      expect(onClickMock).toHaveBeenCalled()
    })
  })
})
