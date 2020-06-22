import _ from 'lodash'
import { mount, createLocalVue } from '@vue/test-utils'
import { createForm, installLaraform } from './../../src/utils/testHelpers'
import { Laraform } from './../../src/index'

describe('Form Button', () => {
  it('should', () => {
    
  })
  // it('should display label', () => {
  //   let form = createForm({
  //     buttons: [{
  //       label: 'Submit'
  //     }]
  //   })

  //   expect(form.findComponent({ name: 'FormButton' }).vm.label).toBe('Submit')
  // })

  // it('should add class to container', () => {
  //   let form = createForm({
  //     schema: {
  //       name: {
  //         type: 'text'
  //       }
  //     },
  //     buttons: [{
  //       label: 'Submit',
  //       class: 'btn-primary'
  //     }]
  //   })

  //   expect(form.findComponent({ name: 'FormButton' }).vm.classes.button).toContain('btn-primary')
  // })

  // it('should set disabled', () => {
  //   let form = createForm({
  //     schema: {
  //       name: {
  //         type: 'text'
  //       }
  //     },
  //     buttons: [{
  //       label: 'Submit',
  //       disabled() {
  //         return true
  //       }
  //     }]
  //   })

  //   expect(form.findComponent({ name: 'FormButton' }).vm.disabled).toBe(true)
  // })

  // it('should trigger form submit on clicking', () => {
  //   let submitMock = jest.fn(() => {})

  //   let { LocalVue, config } = installLaraform({})

  //   let formComponent = LocalVue.extend({
  //     mixins: [Laraform],
  //     data() {
  //       return {
  //         buttons: [{
  //           label: 'Submit'
  //         }]
  //       }
  //     },
  //     methods: {
  //       handleSubmit: submitMock
  //     }
  //   })

  //   let form = mount(formComponent, {
  //     LocalVue,
  //     mocks: {
  //       $laraform: {
  //         config: config
  //       }
  //     },
  //     attachTo: document.querySelector('body')
  //   })

  //   form.findComponent({ name: 'FormButton' }).trigger('click')

  //   expect(submitMock.mock.calls.length).toBe(1)

  //   form.destroy()
  // })

  // it('should trigger onClick', () => {
  //   let onClickMock = jest.fn(() => {})

  //   let form = createForm({
  //     buttons: [{
  //       label: 'Submit',
  //       onClick: onClickMock
  //     }]
  //   })

  //   form.findComponent({ name: 'FormButton' }).trigger('click')

  //   expect(onClickMock.mock.calls.length).toBe(1)

  //   form.destroy()
  // })

  // it('should prevent submission', () => {
  //   let submitMock = jest.fn(() => {})

  //   let { LocalVue, config } = installLaraform({})

  //   let formComponent = LocalVue.extend({
  //     mixins: [Laraform],
  //     data() {
  //       return {
  //         buttons: [{
  //           label: 'Submit',
  //           prevent: true
  //         }]
  //       }
  //     },
  //     methods: {
  //       handleSubmit: submitMock
  //     }
  //   })

  //   let form = mount(formComponent, {
  //     LocalVue,
  //     mocks: {
  //       $laraform: {
  //         config: config
  //       }
  //     },
  //     attachTo: document.querySelector('body')
  //   })

  //   form.findComponent({ name: 'FormButton' }).trigger('click')

  //   expect(submitMock.mock.calls.length).toBe(0)

  //   form.destroy()
  // })

  // it('should call button hooks', (done) => {
  //   const LocalVue = createLocalVue()

  //   LocalVue.config.errorHandler = done

  //   let hooks = [
  //     'created', 'beforeMount', 'mounted',
  //     'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed'
  //   ]

  //   let mocks = {}

  //   let button = {
  //     label: 'Submit',
  //   }

  //   _.each(hooks, (hook) => {
  //     mocks[hook] = jest.fn(() => {})
  //     button[hook] = mocks[hook]
  //   })

  //   let form = createForm({
  //     buttons: [button]
  //   })

  //   LocalVue.nextTick(() => {
  //     form.vm.buttons[0].label = 'Reset'
      
      
  //     LocalVue.nextTick(() => {
  //       form.vm.buttons = []

  //       LocalVue.nextTick(() => {
  //         _.each(hooks, (hook) => {
  //           expect(mocks[hook].mock.calls.length).toBe(1)
  //         })
  //         done()
  //       })
  //     })
  //   })
  // })
})