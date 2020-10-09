import _ from 'lodash'
import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'

describe('Form Button', () => {
  it('should display label', () => {
    let form = createForm({
      schema: {
        buttons: {
          type: 'buttons',
          buttons: [{
            label: 'Reset'
          }]
        }
      }
    })

    expect(form.findComponent({ name: 'FormButton' }).html()).toContain('Reset')
  })

  it('should add class to container', () => {
    let form = createForm({
      schema: {
        buttons: {
          type: 'buttons',
          buttons: [{
            label: 'Reset',
            class: 'btn-primary'
          }]
        }
      }
    })

    expect(form.findComponent({ name: 'FormButton' }).classes()).toContain('btn-primary')
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
      expect(form.findComponent({ name: 'FormButton' }).attributes('disabled')).toBe('disabled')

      let disabledClass = form.vm.selectedTheme.components.FormButton.data().defaultClasses.disabled

      expect(form.findComponent({ name: 'FormButton' }).classes()).toContain(disabledClass)
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
      let loadingClass = form.vm.selectedTheme.components.FormButton.data().defaultClasses.loading

      expect(form.findComponent({ name: 'FormButton' }).classes()).toContain(loadingClass)
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
            label: 'Reset',
            onClick: onClickMock,
          }]
        }
      }
    })

    expect(onClickMock.mock.calls.length).toBe(0)

    form.findComponent({ name: 'FormButton' }).get('button').trigger('click')

    expect(onClickMock.mock.calls.length).toBe(1)

    expect(onClickMock.mock.calls[0][0].$options.name).toBe('Laraform')

    done()
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

    form.findComponent({ name: 'FormButton' }).get('button').trigger('click')

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

    form.findComponent({ name: 'FormButton' }).get('button').trigger('click')

    expect(onClickMock.mock.calls.length).toBe(0)

    done()
  })

  it('should call all lifecycle hooks', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let beforeCreateMock = jest.fn(() => {})
    let createdMock = jest.fn(() => {})
    let beforeMountMock = jest.fn(() => {})
    let mountedMock = jest.fn(() => {})
    let beforeUpdateMock = jest.fn(() => {})
    let updatedMock = jest.fn(() => {})
    let beforeDestroyMock = jest.fn(() => {})
    let destroyedMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        buttons: {
          type: 'buttons',
          buttons: [{
            label: 'Reset',
            beforeCreate: beforeCreateMock,
            created: createdMock,
            beforeMount: beforeMountMock,
            mounted: mountedMock,
            beforeUpdate: beforeUpdateMock,
            updated: updatedMock,
            beforeDestroy: beforeDestroyMock,
            destroyed: destroyedMock,
          }]
        }
      }
    })

    expect(beforeCreateMock.mock.calls.length).toBe(1)
    expect(createdMock.mock.calls.length).toBe(1)
    expect(beforeMountMock.mock.calls.length).toBe(1)
    expect(mountedMock.mock.calls.length).toBe(1)

    expect(beforeUpdateMock.mock.calls.length).toBe(0)
    expect(updatedMock.mock.calls.length).toBe(0)
    expect(beforeDestroyMock.mock.calls.length).toBe(0)
    expect(destroyedMock.mock.calls.length).toBe(0)

    let button = form.findComponent({ name: 'FormButton' })

    button.vm.button.label = 'Reset2'

    LocalVue.nextTick(() => {
      expect(beforeUpdateMock.mock.calls.length).toBe(1)
      expect(updatedMock.mock.calls.length).toBe(1)

      button.vm.$destroy()

      LocalVue.nextTick(() => {
        expect(beforeDestroyMock.mock.calls.length).toBe(1)
        expect(destroyedMock.mock.calls.length).toBe(1)

        done()
      })
    })
  })
})