import _ from 'lodash'
import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../src/utils/testHelpers'

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: 'value' }),
  post: () => Promise.resolve({ data: 'value' }),
}))

describe('Form Button Submit', () => {
  it('should display label', () => {
    let form = createForm({
      schema: {
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'submit',
            label: 'Reset'
          }]
        }
      }
    })

    expect(form.findComponent({ name: 'FormButtonSubmit' }).html()).toContain('Reset')
  })

  it('should return disabled true if `disabled` is not defined but form is disabled', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required:debounce=300'
        },
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'submit',
            label: 'Reset',
          }]
        }
      }
    })

    form.findComponent({ name: 'TextElement' }).vm.validate()

    LocalVue.nextTick(() => {
      expect(form.vm.disabled).toBe(true)

      expect(form.findComponent({ name: 'FormButtonSubmit' }).vm.disabled).toBe(true)
      done()
    })
  })

  it('should have `disabled` attribute && class when disabled returns `true`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      canReset: true,
      schema: {
        a: {
          type: 'text',
        },
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'submit',
            label: 'Reset',
            disabled(form$) {
              return form$.canReset == false
            }
          }]
        }
      }
    })

    form.vm.$set(form.vm, 'canReset', false)

    LocalVue.nextTick(() => {
      expect(form.findComponent({ name: 'FormButtonSubmit' }).attributes('disabled')).toBe('disabled')

      let disabledClass = form.vm.selectedTheme.components.FormButtonSubmit.data().defaultClasses.disabled

      expect(form.findComponent({ name: 'FormButtonSubmit' }).classes()).toContain(disabledClass)
      done()
    })
  })

  it('should return loading true if `loading` is not defined but form is submitting', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'submit',
            label: 'Reset',
          }]
        }
      }
    })

    form.vm.submit()

    LocalVue.nextTick(() => {
      expect(form.vm.submitting).toBe(true)

      expect(form.findComponent({ name: 'FormButtonSubmit' }).vm.loading).toBe(true)
      done()
    })
  })

  it('should have loading class when loading returns `true`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      isLoading: false,
      schema: {
        a: {
          type: 'text',
        },
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'submit',
            label: 'Reset',
            loading(form$) {
              return form$.isLoading
            }
          }]
        }
      }
    })

    form.vm.$set(form.vm, 'isLoading', true)

    LocalVue.nextTick(() => {
      let loadingClass = form.vm.selectedTheme.components.FormButtonSubmit.data().defaultClasses.loading

      expect(form.findComponent({ name: 'FormButtonSubmit' }).classes()).toContain(loadingClass)
      done()
    })
  })

  it('should call `onClick` callback on click', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onClickMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'submit',
            label: 'Reset',
            onClick: onClickMock,
          }]
        }
      }
    })

    expect(onClickMock.mock.calls.length).toBe(0)

    form.findComponent({ name: 'FormButtonSubmit' }).get('button').trigger('click')

    expect(onClickMock.mock.calls.length).toBe(1)

    expect(onClickMock.mock.calls[0][0].$options.name).toBe('Laraform')

    LocalVue.nextTick(() => {
      expect(form.vm.submitting).toBe(false)
      done()
    })
  })

  it('should submit form on click if `onClick` is not defined', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'submit',
            label: 'Reset',
          }]
        }
      }
    })

    form.findComponent({ name: 'FormButtonSubmit' }).get('button').trigger('click')

    LocalVue.nextTick(() => {
      expect(form.vm.submitting).toBe(true)
      done()
    })
  })

  it('should not call `onClick` callback on click if disabled', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onClickMock = jest.fn(() => {})

    let form = createForm({
      isDisabled: true,
      schema: {
        a: {
          type: 'text',
        },
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'submit',
            label: 'Reset',
            onClick: onClickMock,
            disabled(form$) {
              return form$.isDisabled
            }
          }]
        }
      }
    })

    expect(onClickMock.mock.calls.length).toBe(0)

    form.findComponent({ name: 'FormButtonSubmit' }).get('button').trigger('click')

    expect(onClickMock.mock.calls.length).toBe(0)

    done()
  })

  it('should not call `onClick` callback on click if loading', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onClickMock = jest.fn(() => {})

    let form = createForm({
      isLoading: true,
      schema: {
        a: {
          type: 'text',
        },
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'submit',
            label: 'Reset',
            onClick: onClickMock,
            loading(form$) {
              return form$.isLoading
            }
          }]
        }
      }
    })

    expect(onClickMock.mock.calls.length).toBe(0)

    form.findComponent({ name: 'FormButtonSubmit' }).get('button').trigger('click')

    expect(onClickMock.mock.calls.length).toBe(0)

    done()
  })
})