import { createForm, createElement } from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'
import { markRaw, nextTick } from 'composition-api'

export const elementComponent = (buttonType, buttonComponent) => {
  let form = createForm({
    schema: {
      el: {
        type: 'button',
        buttonType: buttonType
      }
    }
  })

  let Button = findAllComponents(form, { name: buttonComponent }).at(0)

  useElementComponent('button', buttonComponent, { buttonType: buttonType, buttonClass: 'btn-class' }, {
    mergeWith: {
      [Button.vm.mainClass]: {
        'btn-class': true,
        [Button.vm.classes[Button.vm.align]]: true,
        [Button.vm.classes.loading]: Button.vm.isLoading,
        [Button.vm.classes.disabled]: Button.vm.isDisabled,
      }
    }
  })
}

export const label = (buttonType, buttonComponent) => {
  describe('label', () => {
    it('should render as a string', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonLabel: 'Label',
            buttonType: buttonType,
          }
        }
      })

      let Component = findAllComponents(form, { name: buttonComponent }).at(0)

      expect(Component.html()).toContain('Label')
    })

    it('should render the value of a function', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            labelVar: 'Label',
            buttonType: buttonType,
            buttonLabel: (el$) => {
              return el$.schema.labelVar
            }
          }
        }
      })

      let Component = findAllComponents(form, { name: buttonComponent }).at(0)

      expect(Component.html()).toContain('Label')
    })

    it('should render the value of a function when it\'s updated', async () => {
      let form = createForm({
        labelVar: 'Label',
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
            buttonLabel: (el$) => {
              return el$.form$.labelVar
            }
          }
        }
      })

      let Component = findAllComponents(form, { name: buttonComponent }).at(0)

      form.vm.labelVar = 'Label2'

      await nextTick()

      expect(Component.html()).toContain('Label2')
    })

    it('should render as a component', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            labelVar: 'Label',
            buttonType: buttonType,
            buttonLabel: markRaw({
              props: ['el$'],
              render(h) {
                return createElement(h, 'div', this.el$.schema.labelVar)
              }
            })
          }
        }
      })

      let Component = findAllComponents(form, { name: buttonComponent }).at(0)

      expect(Component.html()).toContain('Label')
    })
  })
}

export const loading = (buttonType, buttonComponent) => {
  describe('loading', () => {
    it('should be false by default', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.loading).toBe(false)
    })
  })
}

export const disabled = (buttonType, buttonComponent) => {
  describe('disabled', () => {
    it('should be false by default', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.disabled).toBe(false)
    })
  })
}

export const align = (buttonType, buttonComponent) => {
  describe('align', () => {
    it('should be left by default', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.align).toBe('left')
    })

    it('should be right when set right', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            align: 'right',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      expect(FormButton.vm.align).toBe('right')
    })
  })
}

export const isDisabled = (buttonType, buttonComponent) => {
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
}

export const isLoading = (buttonType, buttonComponent) => {
  describe('isLoading', () => {
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

      expect(FormButton.vm.isLoading).toBe(false)

      FormButton.vm.setLoading(true)

      expect(FormButton.vm.isLoading).toBe(true)
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
}

export const setLoading = (buttonType, buttonComponent) => {
  describe('setLoading', () => {
    it('should set loading state', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      FormButton.vm.setLoading(true)

      expect(FormButton.vm.isLoading).toBe(true)
    })
  })
}

export const disable = (buttonType, buttonComponent) => {
  describe('disable', () => {
    it('should set disabled true', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      FormButton.vm.disable()

      expect(FormButton.vm.disabled).toBe(true)
    })
  })
}

export const enable = (buttonType, buttonComponent) => {
  describe('enable', () => {
    it('should set disabled false', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'button',
            buttonType: buttonType,
          }
        }
      })

      let FormButton = form.findComponent({ name: buttonComponent })

      FormButton.vm.disable()
      FormButton.vm.enable()
      expect(FormButton.vm.disabled).toBe(false)
    })
  })
}

export const handleClick = (buttonType, buttonComponent) => {
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

    it('should trigger onClick if not disabled and not loading', () => {
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
}