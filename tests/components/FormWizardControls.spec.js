import { createForm, findAll } from 'test-helpers'
import { nextTick } from 'composition-api'
import flushPromises from 'flush-promises'
import useFormComponent from './../composables/useFormComponent'

describe('FormWizardControls', () => {
  useFormComponent({steps:{a:{label:'a',elements:['el']}},schema:{el:{type:'text'}}}, 'FormWizardControls')

  describe('misc', () => {
    it('should disable previous button on first step', async () => {
      let form = createForm({
        steps: {
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

      let previous = findAllComponents(form, { name: 'FormStepsControl' }).at(0)

      await nextTick()
      expect(previous.vm.disabled).toBe(true)
    })

    it('should display finish button on last step instead of next', async () => {
      let form = createForm({
        steps: {
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

      let steps = form.findComponent({ name: 'FormSteps' })
      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)
      let finish = findAllComponents(form, { name: 'FormStepsControl' }).at(2)

      await nextTick()
      steps.vm.goTo('second')

      await nextTick()
      expect(next.html()).toBeFalsy()
      expect(finish.html()).toBeTruthy()
    })

    it('should enable and move to next step on clicking next button', async () => {
      let form = createForm({
        steps: {
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

      let steps = form.findComponent({ name: 'FormSteps' })
      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      await nextTick()
      expect(steps.vm.current$.name).toBe('first')
      expect(steps.vm.next$.disabled).toBe(true)

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      expect(steps.vm.current$.name).toBe('second')
      expect(steps.vm.current$.disabled).toBe(false)
    })

    it('should not move to next step when next button is clicked if has invalid fields', async () => {
      let form = createForm({
        steps: {
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

      let steps = form.findComponent({ name: 'FormSteps' })
      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      await nextTick()
      expect(steps.vm.current$.name).toBe('first')

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      await nextTick()
      expect(steps.vm.current$.name).toBe('first')
      expect(steps.vm.invalid).toBe(true)
    })

    it('should move to next step only if async validation has finished successfully', async () => {
      let form = createForm({
        steps: {
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

      let steps = form.findComponent({ name: 'FormSteps' })
      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      await nextTick()

      expect(steps.vm.current$.name).toBe('first')

      findAll(next, 'button').last().trigger('click')
      await nextTick()

      expect(steps.vm.current$.name).toBe('first')
      expect(steps.vm.pending).toBe(true)

      await flushPromises()

      expect(steps.vm.pending).toBe(false)
      expect(steps.vm.invalid).toBe(false)

      await nextTick()

      expect(steps.vm.current$.name).toBe('second')
    })

    it('should move to previous step on clicking previous button', async () => {
      let form = createForm({
        steps: {
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

      let steps = form.findComponent({ name: 'FormSteps' })
      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)
      let previous = findAllComponents(form, { name: 'FormStepsControl' }).at(0)

      await nextTick()
      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      expect(steps.vm.current$.name).toBe('second')

      previous.get('button').trigger('click')

      expect(steps.vm.current$.name).toBe('first')
    })

    it('should call steps submit on finish', async () => {
      let form = createForm({
        steps: {
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

      let steps = form.findComponent({ name: 'FormSteps' })

      await nextTick()

      steps.vm.goTo('second')

      await nextTick()

      let finish = findAllComponents(form, { name: 'FormStepsControl' }).at(2)
      
      findAll(finish, 'button').last().trigger('click')

      expect(steps.emitted('submit')).toBeTruthy()

      await flushPromises()
    })

    it('should go to first invalid step when submission fails', async () => {
      let form = createForm({
        steps: {
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

      let steps = form.findComponent({ name: 'FormSteps' })

      await nextTick()

      steps.vm.goTo('second')

      await nextTick()

      let finish = findAllComponents(form, { name: 'FormStepsControl' }).at(2)
      
      findAll(finish, 'button').last().trigger('click')

      await flushPromises()
      
      expect(steps.vm.invalid).toBe(true)
      expect(steps.vm.current$.name).toBe('first')
    })

    it('should go to first invalid step when submission fails with async validation', async () => {
      let form = createForm({
        steps: {
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

      let steps = form.findComponent({ name: 'FormSteps' })

      await nextTick()

      steps.vm.goTo('second')

      await nextTick()

      let finish = findAllComponents(form, { name: 'FormStepsControl' }).at(2)
      
      findAll(finish, 'button').last().trigger('click')

      await flushPromises()
      
      expect(steps.vm.invalid).toBe(true)
      expect(steps.vm.current$.name).toBe('first')
    })
  })
})