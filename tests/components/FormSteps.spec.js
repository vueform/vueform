import { createForm, findAllComponents, findAll } from 'test-helpers'
import { nextTick } from 'composition-api'
import { dynamicsTesting } from './FormBlocks.spec' 
import flushPromises from 'flush-promises'
import useFormComponent from './../composables/useFormComponent'

describe('FormSteps', () => {
  useFormComponent({steps:{a:{label:'a',elements:['el']}},schema:{el:{type:'text'}}}, 'FormSteps')

  describe('rendering', () => {
    it('should render steps', () => {
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

      expect(form.html()).toContain('First')
      expect(form.html()).toContain('Second')
      expect(findAllComponents(form, { name: 'FormStep' }).length).toBe(2)
    })
  })

  describe('computed', () => {
    it('should be pending if has any pending elements', async () => {
      let form = createForm({
        validateOn: 'change|submit',
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

      let a = form.vm.el$('a')
      let steps = form.findComponent({ name: 'FormSteps' })

      a.$laraform.services.axios.post = jest.fn(() => { return {  } })

      await nextTick()
      steps.vm.goTo('second')

      await nextTick()
      let finish = findAllComponents(form, { name: 'FormStepsControl' }).at(2)

      expect(steps.vm.pending).toBe(false)
      
      findAll(finish, 'button').last().trigger('click')

      await nextTick()

      expect(steps.vm.pending).toBe(true)

      await flushPromises()
    })

    it('should be invalid if has any invalid elements', async () => {
      let form = createForm({
        validateOn: 'change|step|submit',
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

      await nextTick()
      steps.vm.goTo('second')

      await nextTick()
      let finish = findAllComponents(form, { name: 'FormStepsControl' }).at(2)

      expect(steps.vm.invalid).toBe(false)
      
      findAll(finish, 'button').last().trigger('click')

      await nextTick()
      expect(steps.vm.invalid).toBe(true)
    })

    it('should be debouncing if has any debouncing elements', async () => {
      let form = createForm({
        validateOn: 'change|step|submit',
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
            rules: 'required:debounce=10'
          },
          b: {
            type: 'text'
          },
        }
      })

      let steps = form.findComponent({ name: 'FormSteps' })

      let a = findAllComponents(form, { name: 'TextElement' }).at(0)
      expect(a.vm.name).toBe('a')

      await nextTick()
      findAll(a, 'input').at(0).trigger('input')
      await nextTick()

      expect(a.vm.debouncing).toBe(true)
      expect(steps.vm.debouncing).toBe(true)
    })

    it('should not be done if has any steps which are not done', () => {
      let form = createForm({
        validateOn: 'change|step|submit',
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
            type: 'text'
          },
        }
      })

      let steps = form.findComponent({ name: 'FormSteps' })

      expect(steps.vm.done).toBe(false)
    })

    it('should be done if all steps are done', () => {
      let form = createForm({
        validateOn: 'change|step|submit',
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
            type: 'text'
          },
        }
      })

      let steps = form.findComponent({ name: 'FormSteps' })

      let first = findAllComponents(form, { name: 'FormStep' }).at(0)
      let second = findAllComponents(form, { name: 'FormStep' }).at(1)

      first.vm.complete()
      second.vm.complete()

      expect(steps.vm.done).toBe(true)
    })

    it('should return current step for current$', async () => {
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

      let steps = form.findComponent({ name: 'FormSteps' })
      let second = findAllComponents(form, { name: 'FormStep' }).at(1)
      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      expect(second.vm.name).toBe('second')

      await nextTick()
      expect(steps.vm.current$.name).toBe('first')

      findAll(next, 'button').last().trigger('click')

      await flushPromises()

      expect(steps.vm.current$.name).toBe('second')
    })

    it('should return first step for first$', async () => {
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

      let steps = form.findComponent({ name: 'FormSteps' })

      await nextTick()
      expect(steps.vm.first$.name).toBe('first')
    })

    it('should return next step for next$', async () => {
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

      let steps = form.findComponent({ name: 'FormSteps' })

      await nextTick()
      expect(steps.vm.next$.name).toBe('second')
    })

    it('should return previous step for previous$', async () => {
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

      let steps = form.findComponent({ name: 'FormSteps' })
      let second = findAllComponents(form, { name: 'FormStep' }).at(1)
      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      expect(second.vm.name).toBe('second')

      await nextTick()
      expect(steps.vm.previous$).toBe(undefined)

      findAll(next, 'button').last().trigger('click')

      await flushPromises()

      expect(steps.vm.previous$.name).toBe('first')
    })

    it('should return first invalid step for firstInvalid$', async () => {
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
            rules: 'required'
          },
          b: {
            type: 'text',
            rules: 'required'
          },
          c: {
            type: 'text',
            rules: 'required'
          },
        }
      })

      let steps = form.findComponent({ name: 'FormSteps' })

      let a = findAllComponents(form, { name: 'TextElement' }).at(0)
      let b = findAllComponents(form, { name: 'TextElement' }).at(1)
      let c = findAllComponents(form, { name: 'TextElement' }).at(2)

      expect(a.vm.name).toBe('a')
      expect(b.vm.name).toBe('b')
      expect(c.vm.name).toBe('c')

      a.vm.update(1, true)
      b.vm.update('', true)
      c.vm.update('', true)

      await nextTick()
      expect(steps.vm.firstInvalid$.name).toBe('second')
    })

    it('should return first non done step for firstNonDone$', async () => {
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

      let steps = form.findComponent({ name: 'FormSteps' })
      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      let a = findAllComponents(form, { name: 'TextElement' }).at(0)
      let b = findAllComponents(form, { name: 'TextElement' }).at(1)
      let c = findAllComponents(form, { name: 'TextElement' }).at(2)

      expect(a.vm.name).toBe('a')
      expect(b.vm.name).toBe('b')
      expect(c.vm.name).toBe('c')

      await nextTick()
      findAll(next, 'button').last().trigger('click')

      await flushPromises()

      await nextTick()
      expect(steps.vm.firstNonDone$.name).toBe('second')
    })

    it('should return last enabled step for lastEnabled$', async () => {
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

      let steps = form.findComponent({ name: 'FormSteps' })
      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      let a = findAllComponents(form, { name: 'TextElement' }).at(0)
      let b = findAllComponents(form, { name: 'TextElement' }).at(1)
      let c = findAllComponents(form, { name: 'TextElement' }).at(2)

      expect(a.vm.name).toBe('a')
      expect(b.vm.name).toBe('b')
      expect(c.vm.name).toBe('c')

      await nextTick()
      findAll(next, 'button').last().trigger('click')
      
      await flushPromises()
      await nextTick()

      expect(steps.vm.lastEnabled$.name).toBe('second')
    })

    it('should enable step when becomes available but already passed', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
            conditions: [
              ['a', 1]
            ]
          },
          third: {
            label: 'Third',
            elements: ['c'],
          },
        },
        schema: {
          a: {
            type: 'text'
          },
          b: {
            type: 'text',
          },
          c: {
            type: 'text'
          },
        }
      })

      let steps = form.findComponent({ name: 'FormSteps' })

      let second = findAllComponents(form, { name: 'FormStep' }).at(1)
      expect(second.vm.name).toBe('second')

      let a = findAllComponents(form, { name: 'TextElement' }).at(0)
      expect(a.vm.name).toBe('a')

      expect(second.vm.disabled).toBe(true)

      steps.vm.goTo('third')

      await nextTick()
      a.vm.update(1)

      await nextTick()
      expect(second.vm.disabled).toBe(false)
    })
  })

  describe('methods', () => {
    it('goTo should go to a step', () => {
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

      let steps = form.findComponent({ name: 'FormSteps' })

      steps.vm.goTo('second')

      expect(steps.vm.current$.name).toBe('second')
    })

    it('should complete all steps with complete() method', async () => {
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
      let first = findAllComponents(form, { name: 'FormStep' }).at(0)
      let second = findAllComponents(form, { name: 'FormStep' }).at(1)

      await nextTick()
      steps.vm.complete()

      expect(first.vm.completed).toBe(true)
      expect(second.vm.completed).toBe(true)
    })

    it('should enable all steps with enableAllSteps() method', async () => {
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
      let first = findAllComponents(form, { name: 'FormStep' }).at(0)
      let second = findAllComponents(form, { name: 'FormStep' }).at(1)

      await nextTick()
      steps.vm.enableAllSteps()

      expect(first.vm.disabled).toBe(false)
      expect(second.vm.disabled).toBe(false)
    })

    it('should enable all steps when data is loaded', async () => {
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

      let first = findAllComponents(form, { name: 'FormStep' }).at(0)
      let second = findAllComponents(form, { name: 'FormStep' }).at(1)

      form.vm.load({
        a: 1,
        b: 2
      })

      await nextTick()
      expect(first.vm.disabled).toBe(false)
      expect(second.vm.disabled).toBe(false)
    })

    it('should go to first step and disable all others when form is resetted', async () => {
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
            elements: ['c'],
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

      let steps = form.findComponent({ name: 'FormSteps' })
      let first = findAllComponents(form, { name: 'FormStep' }).at(0)
      let second = findAllComponents(form, { name: 'FormStep' }).at(1)
      let third = findAllComponents(form, { name: 'FormStep' }).at(2)

      await nextTick()
      expect(first.vm.disabled).toBe(false)
      expect(second.vm.disabled).toBe(true)
      expect(third.vm.disabled).toBe(true)

      steps.vm.goTo('third', true)

      await nextTick()
      expect(steps.vm.current$.name).toBe('third')
      expect(first.vm.disabled).toBe(false)
      expect(second.vm.disabled).toBe(false)
      expect(third.vm.disabled).toBe(false)

      form.vm.reset()
      
      await nextTick()
      expect(steps.vm.current$.name).toBe('first')
      expect(first.vm.disabled).toBe(false)
      expect(second.vm.disabled).toBe(true)
      expect(third.vm.disabled).toBe(true)
    })

    it('should go to first step and disable all others when form is cleared', async () => {
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
            elements: ['c'],
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

      let steps = form.findComponent({ name: 'FormSteps' })
      let first = findAllComponents(form, { name: 'FormStep' }).at(0)
      let second = findAllComponents(form, { name: 'FormStep' }).at(1)
      let third = findAllComponents(form, { name: 'FormStep' }).at(2)

      await nextTick()
      expect(first.vm.disabled).toBe(false)
      expect(second.vm.disabled).toBe(true)
      expect(third.vm.disabled).toBe(true)

      steps.vm.goTo('third', true)

      await nextTick()
      expect(steps.vm.current$.name).toBe('third')
      expect(first.vm.disabled).toBe(false)
      expect(second.vm.disabled).toBe(false)
      expect(third.vm.disabled).toBe(false)

      form.vm.clear()
      
      await nextTick()
      expect(steps.vm.current$.name).toBe('first')
      expect(first.vm.disabled).toBe(false)
      expect(second.vm.disabled).toBe(true)
    })

    it('should find step by name', () => {
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

      let steps = form.findComponent({ name: 'FormSteps' })

      expect(steps.vm.step$('second').name).toBe('second')
    })

    it('should switch to first step and disable/uncomplete everything else on reset', async () => {
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

      let steps = form.findComponent({ name: 'FormSteps' })
      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      await nextTick()
      findAll(next, 'button').last().trigger('click')

      await flushPromises()

      expect(steps.vm.current$.name).toBe('second')

      steps.vm.reset()

      expect(steps.vm.current$.name).toBe('first')
      expect(steps.vm.current$.disabled).toBe(false)
      expect(steps.vm.current$.completed).toBe(false)
      expect(steps.vm.next$.disabled).toBe(true)
      expect(steps.vm.next$.completed).toBe(false)
    })
  })

  describe('events', () => {
    it('should trigger `next` event when next button is clicked', async () => {
      let onNextMock = jest.fn(() => {})

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

      let steps = form.findComponent({ name: 'FormSteps' })
      steps.vm.on('next', onNextMock)

      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      expect(onNextMock.mock.calls.length).toBe(0)

      await nextTick()
      
      findAll(next, 'button').last().trigger('click')

      await flushPromises()
      
      expect(onNextMock.mock.calls.length).toBe(1)
    })

    it('should trigger `previous` event when previous button is clicked', async () => {
      let onPreviousMock = jest.fn(() => {})

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

      let steps = form.findComponent({ name: 'FormSteps' })
      steps.vm.on('previous', onPreviousMock)

      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)
      let previous = findAllComponents(form, { name: 'FormStepsControl' }).at(0)

      expect(onPreviousMock.mock.calls.length).toBe(0)

      await nextTick()
      findAll(next, 'button').last().trigger('click')

      await flushPromises()

      findAll(previous, 'button').at(0).trigger('click')
      
      expect(onPreviousMock.mock.calls.length).toBe(1)
    })

    it('should trigger `select` event when a step is selected', async () => {
      let onSelectMock = jest.fn(() => {})

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

      let steps = form.findComponent({ name: 'FormSteps' })
      steps.vm.on('select', onSelectMock)

      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)
      let previous = findAllComponents(form, { name: 'FormStepsControl' }).at(0)

      expect(onSelectMock.mock.calls.length).toBe(0)

      await nextTick()
      steps.vm.goTo('second')
      
      expect(onSelectMock.mock.calls.length).toBe(2)
    })

    it('should trigger `finish` event when finish button is clicked', async () => {
      let onFinishMock = jest.fn(() => {})

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

      form.vm.$laraform.services.axios = {
        post: () => ({data:{}})
      }

      let steps = form.findComponent({ name: 'FormSteps' })
      steps.vm.on('finish', onFinishMock)

      expect(onFinishMock.mock.calls.length).toBe(0)

      await nextTick()
      steps.vm.goTo('second')

      await nextTick()
      let finish = findAllComponents(form, { name: 'FormStepsControl' }).at(2)
      
      findAll(finish, 'button').last().trigger('click')

      expect(onFinishMock.mock.calls.length).toBe(1)

      await flushPromises()
    })
  })

  dynamicsTesting({
    suiteName: 'Form Wizard Dynamics',
    existingBlocks: 'existingSteps',
    addedBlocks: 'addedSteps',
    blocks: 'steps',
    block: 'step',
    blocksKeyword: 'steps',
    blockKeyword: 'step',
    blocksSelector: 'FormSteps',
    blockSelector: 'FormStep',
    controls: 'FormStepsControl'
  })
})