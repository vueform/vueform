import { createForm, findAll } from 'test-helpers'
import { nextTick } from 'composition-api'
import flushPromises from 'flush-promises'
import useFormComponent from './../composables/useFormComponent'

describe('FormWizardControls', () => {
  useFormComponent({wizard:{a:{label:'a',elements:['el']}},schema:{el:{type:'text'}}}, 'FormWizardControls')

  describe('misc', () => {
    it('should disable previous button on first step', async () => {
      let form = createForm({
        wizard: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
          },
          third: {
            label: 'Third',
            elements: ['b'],
          },
        },
        schema: {
          a: {
            type: 'text',
          },
          b: {
            type: 'text',
          },
          c: {
            type: 'text',
          },
        }
      })

      let previous = form.findComponent({ name: 'FormWizardPrevious' })

      await nextTick()
      expect(previous.vm.disabled).toBe(true)
    })

    it('should display finish button on last step instead of next', async () => {
      let form = createForm({
        wizard: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
          },
        },
        schema: {
          a: {
            type: 'text',
          },
          b: {
            type: 'text',
          },
        }
      })

      let wizard = form.findComponent({ name: 'FormWizard' })
      let next = form.findComponent({ name: 'FormWizardNext' })
      let finish = form.findComponent({ name: 'FormWizardFinish' })

      await nextTick()
      wizard.vm.goTo('second')

      await nextTick()
      expect(next.html()).toBeFalsy()
      expect(finish.html()).toBeTruthy()
    })

    it('should enable and move to next step on clicking next button', async () => {
      let form = createForm({
        wizard: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
          },
        },
        schema: {
          a: {
            type: 'text',
          },
          b: {
            type: 'text',
          },
        }
      })

      let wizard = form.findComponent({ name: 'FormWizard' })
      let next = form.findComponent({ name: 'FormWizardNext' })

      await nextTick()
      expect(wizard.vm.current$.name).toBe('first')
      expect(wizard.vm.next$.disabled).toBe(true)

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      expect(wizard.vm.current$.name).toBe('second')
      expect(wizard.vm.current$.disabled).toBe(false)
    })

    it('should not move to next step when next button is clicked if has invalid fields', async () => {
      let form = createForm({
        wizard: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
          },
        },
        schema: {
          a: {
            type: 'text',
            rules: 'required'
          },
          b: {
            type: 'text'
          },
        }
      })

      let wizard = form.findComponent({ name: 'FormWizard' })
      let next = form.findComponent({ name: 'FormWizardNext' })

      await nextTick()
      expect(wizard.vm.current$.name).toBe('first')

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      await nextTick()
      expect(wizard.vm.current$.name).toBe('first')
      expect(wizard.vm.invalid).toBe(true)
    })

    it('should move to next step only if async validation has finished successfully', async () => {
      let form = createForm({
        wizard: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
          },
        },
        schema: {
          a: {
            type: 'text',
            rules: 'unique'
          },
          b: {
            type: 'text'
          },
        }
      })

      form.vm.$laraform.services.axios.post = () => { return { data: {} } }

      let wizard = form.findComponent({ name: 'FormWizard' })
      let next = form.findComponent({ name: 'FormWizardNext' })

      await nextTick()

      expect(wizard.vm.current$.name).toBe('first')

      findAll(next, 'button').last().trigger('click')
      await nextTick()

      expect(wizard.vm.current$.name).toBe('first')
      expect(wizard.vm.pending).toBe(true)

      await flushPromises()

      expect(wizard.vm.pending).toBe(false)
      expect(wizard.vm.invalid).toBe(false)

      await nextTick()

      expect(wizard.vm.current$.name).toBe('second')
    })

    it('should move to previous step on clicking previous button', async () => {
      let form = createForm({
        wizard: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
          },
        },
        schema: {
          a: {
            type: 'text',
          },
          b: {
            type: 'text',
          },
        }
      })

      let wizard = form.findComponent({ name: 'FormWizard' })
      let next = form.findComponent({ name: 'FormWizardNext' })
      let previous = form.findComponent({ name: 'FormWizardPrevious' })

      await nextTick()
      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      expect(wizard.vm.current$.name).toBe('second')

      previous.get('button').trigger('click')

      expect(wizard.vm.current$.name).toBe('first')
    })

    it('should call wizard submit on finish', async () => {
      let form = createForm({
        wizard: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
          },
        },
        schema: {
          a: {
            type: 'text'
          },
          b: {
            type: 'text'
          },
        }
      })

      form.vm.$laraform.services.axios.post = () => { return { data: {} } }

      let wizard = form.findComponent({ name: 'FormWizard' })

      await nextTick()

      wizard.vm.goTo('second')

      await nextTick()

      let finish = form.findComponent({ name: 'FormWizardFinish' })
      
      findAll(finish, 'button').last().trigger('click')

      expect(wizard.emitted('submit')).toBeTruthy()

      await flushPromises()
    })

    it('should go to first invalid step when submission fails', async () => {
      let form = createForm({
        wizard: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
          },
        },
        schema: {
          a: {
            type: 'text',
            rules: 'required',
          },
          b: {
            type: 'text'
          },
        }
      })

      form.vm.$laraform.services.axios.post = () => { return { data: {} } }

      let wizard = form.findComponent({ name: 'FormWizard' })

      await nextTick()

      wizard.vm.goTo('second')

      await nextTick()

      let finish = form.findComponent({ name: 'FormWizardFinish' })
      
      findAll(finish, 'button').last().trigger('click')

      await flushPromises()
      
      expect(wizard.vm.invalid).toBe(true)
      expect(wizard.vm.current$.name).toBe('first')
    })

    it('should go to first invalid step when submission fails with async validation', async () => {
      let form = createForm({
        wizard: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
          },
        },
        schema: {
          a: {
            type: 'text',
            rules: 'unique',
          },
          b: {
            type: 'text'
          },
        }
      })

      form.vm.$laraform.services.axios.post = () => { return { data: false } }

      let wizard = form.findComponent({ name: 'FormWizard' })

      await nextTick()

      wizard.vm.goTo('second')

      await nextTick()

      let finish = form.findComponent({ name: 'FormWizardFinish' })
      
      findAll(finish, 'button').last().trigger('click')

      await flushPromises()
      
      expect(wizard.vm.invalid).toBe(true)
      expect(wizard.vm.current$.name).toBe('first')
    })
  })
})