import _ from 'lodash'
import { createLocalVue } from '@vue/test-utils'
import { createForm } from 'test-helpers'
import flushPromises from 'flush-promises'

const Vue = createLocalVue()

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

  it('should return disabled true if `disabled` is not defined but form is disabled', async () => {
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

    await Vue.nextTick()

    expect(form.vm.disabled).toBe(true)

    expect(form.findComponent({ name: 'FormButtonSubmit' }).vm.disabled).toBe(true)
  })

  it('should have `disabled` attribute && class when disabled returns `true`', async () => {
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

    await Vue.nextTick()

    expect(form.findComponent({ name: 'FormButtonSubmit' }).attributes('disabled')).toBe('disabled')

    let disabledClass = form.vm.selectedTheme.components.FormButtonSubmit.data().defaultClasses.disabled

    expect(form.findComponent({ name: 'FormButtonSubmit' }).classes()).toContain(disabledClass)
  })

  it('should return loading true if `loading` is not defined but form is submitting', async () => {
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
    
    form.vm.submitting = true

    expect(form.findComponent({ name: 'FormButtonSubmit' }).vm.loading).toBe(true)
  })

  it('should have loading class when loading returns `true`', async () => {
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

    await Vue.nextTick()

    let loadingClass = form.vm.selectedTheme.components.FormButtonSubmit.data().defaultClasses.loading

    expect(form.findComponent({ name: 'FormButtonSubmit' }).classes()).toContain(loadingClass)
  })

  it('should call `onClick` callback on click', async () => {
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

    await Vue.nextTick()

    expect(form.vm.submitting).toBe(false)
  })

  it('should submit form on click if `onClick` is not defined', async () => {
    let onSubmitMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'submit',
            label: 'Submit',
          }]
        }
      }
    })

    form.vm.on('submit', onSubmitMock)

    expect(onSubmitMock.mock.calls.length).toBe(0)

    form.findComponent({ name: 'FormButtonSubmit' }).get('button').trigger('click')

    expect(onSubmitMock.mock.calls.length).toBe(1)
  })

  it('should not call `onClick` callback on click if disabled', async () => {
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
  })

  it('should not call `onClick` callback on click if loading', async () => {
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
  })
})