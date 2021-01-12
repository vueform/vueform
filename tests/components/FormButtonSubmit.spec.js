import flushPromises from 'flush-promises'
import { createForm, createElement } from 'test-helpers'
import { markRaw, nextTick } from 'composition-api'

import { elementComponent, label, loading, disabled, align, setLoading, disable, enable, } from './FormButton'

describe('FormButtonSubmit', () => {
  let buttonType = 'submit'
  let buttonComponent = 'FormButtonSubmit'

  elementComponent(buttonType, buttonComponent)
  label(buttonType, buttonComponent)
  loading(buttonType, buttonComponent)
  disabled(buttonType, buttonComponent)
  align(buttonType, buttonComponent)
  setLoading(buttonType, buttonComponent)
  disable(buttonType, buttonComponent)
  enable(buttonType, buttonComponent)

  describe('isDisabled', () => {
    it('should be disabled if submitting, invalid & should validate on change or disabled when function not defined', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          },
          el2: {
            type: 'text',
            rules: 'required'
          }
        }
      })

      let el2 = form.vm.el$('el2')
      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.isDisabled).toBe(false)

      FormButton.vm.disable()

      expect(FormButton.vm.isDisabled).toBe(true)

      FormButton.vm.enable()
      form.vm.submitting = true

      expect(FormButton.vm.isDisabled).toBe(true)

      form.vm.submitting = false
      form.vm.validate()

      await flushPromises()

      expect(FormButton.vm.isDisabled).toBe(true)

      form.vm.validateOn = 'submit'

      expect(FormButton.vm.isDisabled).toBe(false)

      form.vm.validateOn = 'submit|change'
      el2.update('value')

      await flushPromises()

      expect(FormButton.vm.isDisabled).toBe(false)
    })

    it('should equal to disabled function or disabled if function is defined', () => {
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

    it('should add disabled property to button when label is not component', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.attributes('disabled') === undefined).toBe(true)

      FormButton.vm.disable()

      await nextTick()

      expect(FormButton.attributes('disabled') !== undefined).toBe(true)
    })

    it('should add disabled property to button when label is component', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
            buttonLabel: markRaw({
              props: ['el$'],
              render(h) {
                return createElement(h, 'div', 'Label')
              }
            })
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.attributes('disabled') === undefined).toBe(true)

      FormButton.vm.disable()

      await nextTick()

      expect(FormButton.attributes('disabled') !== undefined).toBe(true)
    })
  })

  describe('isLoading', () => {
    it('should be true if form is submitting or set manually when function not defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.isLoading).toBe(false)

      FormButton.vm.setLoading(true)

      expect(FormButton.vm.isLoading).toBe(true)

      FormButton.vm.setLoading(false)
      form.vm.submitting = true
      
      expect(FormButton.vm.isLoading).toBe(true)

      form.vm.submitting = false
      
      expect(FormButton.vm.isLoading).toBe(false)
    })

    it('should equal to loading function or loading', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            shouldBeLoading: false,
            buttonType: buttonType,
            loading: (form$) => {
              let el$ = form$.el$('el')

              if (el$ === null) {
                return false
              }

              return el$.schema.shouldBeLoading
            }
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.isLoading).toBe(false)

      FormButton.vm.setLoading(true)

      expect(FormButton.vm.isLoading).toBe(true)

      FormButton.vm.setLoading(false)

      expect(FormButton.vm.isLoading).toBe(false)

      form.vm.schema.el.shouldBeLoading = true

      expect(FormButton.vm.isLoading).toBe(true)
    })
  })

  describe('handleClick', () => {
    it('should not trigger onClick if disabled or loading', () => {
      let onClickMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
            onClick: onClickMock,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      FormButton.vm.disable()
      FormButton.vm.handleClick({preventDefault:()=>{}})

      expect(onClickMock).not.toHaveBeenCalled()

      FormButton.vm.enable()
      FormButton.vm.setLoading(true)
      FormButton.vm.handleClick({preventDefault:()=>{}})

      expect(onClickMock).not.toHaveBeenCalled()
    })

    it('should trigger onClick if not disabled and not loading when onClick is defined', () => {
      let onClickMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
            onClick: onClickMock,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      FormButton.vm.handleClick({preventDefault:()=>{}})

      expect(onClickMock).toHaveBeenCalledWith(form.vm)
    })

    it('should trigger submit if not disabled and not loading when onClick is not defined', async () => {
      let postMock = jest.fn(() => { return { data: {} } })

      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      form.vm.$laraform.services.axios.post = postMock

      let FormButton = form.findComponent({ name: buttonComponent })

      FormButton.vm.handleClick({preventDefault:()=>{}})

      await flushPromises()

      expect(postMock).toHaveBeenCalled()
    })

    it('should trigger onClick on click', () => {
      let onClickMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
            onClick: onClickMock,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      FormButton.trigger('click')

      expect(onClickMock).toHaveBeenCalled()
    })
  })
})
