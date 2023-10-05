import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { nextTick, resolveComponent } from 'vue'
import { dynamicsTesting } from './FormBlocks.spec'
import flushPromises from 'flush-promises'
import useFormComponent from './../composables/useFormComponent'

describe('FormSteps', () => {
  // useFormComponent({
  //   steps: {
  //     a:{
  //       label: 'a',
  //       elements: ['el'],
  //     }
  //   },
  //   schema: {
  //     el: { type:'text'}
  //   }
  // }, 'FormSteps')

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

      a.$vueform.services.axios.request = jest.fn(() => { return {  } })

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
            rules: 'required:debounce=10',
            default: 'value'
          },
          b: {
            type: 'text'
          },
        }
      })

      let steps = form.findComponent({ name: 'FormSteps' })

      let a = findAllComponents(form, { name: 'TextElement' }).at(0)
      expect(a.vm.name).toBe('a')

      a.vm.validate()

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

      expect(second.vm.isDisabled).toBe(true)

      steps.vm.goTo('third')

      await nextTick()
      a.vm.update(1)

      await nextTick()
      expect(second.vm.isDisabled).toBe(false)
    })
    
    it('should return true if it is the last visible step (last$)', async () => {
      //@todo:szm @todo:adam expect(...).not.toBe(...) <- .not part throws fatal error
      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a']
          },
          page1: {
            label: 'Step 2'
          },
          page2: {
            label: 'Step 3',
            conditions: [
              ['a', 'empty']
            ],
          }
        },
        schema: {
          a: {
            type: 'text'
          }
        }
      })
      
      const a = form.vm.el$('a')
      
      const FormSteps = findAllComponents(form, { name: 'FormSteps' }).at(0)
      
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
      const FormStep3 = findAllComponents(form, { name: 'FormStep' }).at(2)
      
      expect(FormSteps.vm.last$).toBe(FormStep3.vm)
      
      a.update('something')
      
      expect(FormSteps.vm.last$).toBe(FormStep2.vm)
    })
    
    it('should return false if not on last step (isAtLastStep)', async () => {
      
      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1'
          },
          page1: {
            label: 'Step 2'
          },
          page2: {
            label: 'Step 3',
            conditions: [['a', 'not_empty']],
          },
          page3: {
            label: 'Step 4'
          },
        },
        schema: {
          a: { type: 'text' }
        }
      })
      
      const FormSteps = findAllComponents(form, { name: 'FormSteps' }).at(0)
      
      await nextTick()
      expect(FormSteps.vm.isAtLastStep).toBe(false)
      
      FormSteps.vm.goTo('page1')
      await nextTick()
      expect(FormSteps.vm.isAtLastStep).toBe(false)
      
      FormSteps.vm.goTo('page3')
      await nextTick()
      expect(FormSteps.vm.isAtLastStep).toBe(true)
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

      expect(first.vm.isDisabled).toBe(false)
      expect(second.vm.isDisabled).toBe(false)
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
      expect(first.vm.isDisabled).toBe(false)
      expect(second.vm.isDisabled).toBe(false)
    })

    it('should go to first step and disable all others when form is reset', async () => {
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
      expect(first.vm.isDisabled).toBe(false)
      expect(second.vm.isDisabled).toBe(true)
      expect(third.vm.isDisabled).toBe(true)

      steps.vm.goTo('third', true)

      await nextTick()
      expect(steps.vm.current$.name).toBe('third')
      expect(first.vm.isDisabled).toBe(false)
      expect(second.vm.isDisabled).toBe(false)
      expect(third.vm.isDisabled).toBe(false)

      form.vm.reset()
      
      await nextTick()
      expect(steps.vm.current$.name).toBe('first')
      expect(first.vm.isDisabled).toBe(false)
      expect(second.vm.isDisabled).toBe(true)
      expect(third.vm.isDisabled).toBe(true)
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
      expect(first.vm.isDisabled).toBe(false)
      expect(second.vm.isDisabled).toBe(true)
      expect(third.vm.isDisabled).toBe(true)

      steps.vm.goTo('third', true)

      await nextTick()
      expect(steps.vm.current$.name).toBe('third')
      expect(first.vm.isDisabled).toBe(false)
      expect(second.vm.isDisabled).toBe(false)
      expect(third.vm.isDisabled).toBe(false)

      form.vm.clear()
      
      await nextTick()
      expect(steps.vm.current$.name).toBe('first')
      expect(first.vm.isDisabled).toBe(false)
      expect(second.vm.isDisabled).toBe(true)
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
      expect(steps.vm.current$.isDisabled).toBe(false)
      expect(steps.vm.current$.completed).toBe(false)
      expect(steps.vm.next$.isDisabled).toBe(true)
      expect(steps.vm.next$.completed).toBe(false)
    })
    
    it('should return to the first step where invalid element is found on submit', async () => {
      
      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a'],
          },
          page1: {
            label: 'Step 2',
            elements: ['b'],
          },
          page2: {
            label: 'Step 3',
            elements: ['c'],
          },
          page3: {
            label: 'Step 4',
            elements: ['d'],
          },
        },
        schema: {
          a: {
            type: 'text',
            rules: 'required|min:3',
          },
          b: {
            type: 'text'
          },
          c: {
            type: 'text',
            rules: 'required|min:3',
          },
          d: {
            type: 'text'
          },
        },
        validateOn: '', // validate on submit only
      })
      
      const a = form.vm.el$('a')
      const c = form.vm.el$('c')
      
      const FormSteps = form.findComponent({ name: 'FormSteps' })
      const FormStep1 = form.findAllComponents({ name: 'FormStep' }).at(0)
      const FormStep3 = form.findAllComponents({ name: 'FormStep' }).at(2)
      const FormStep4 = form.findAllComponents({ name: 'FormStep' }).at(3)
      
      
      FormSteps.vm.goTo('page3')
      await FormSteps.vm.submit()
      
      expect(FormStep1.vm.active).toBe(true)
      
      a.update('something')
      
      FormSteps.vm.goTo('page3')
      await FormSteps.vm.submit()
      
      expect(FormStep3.vm.active).toBe(true)
      
      c.update('something')
      
      FormSteps.vm.goTo('page3')
      await FormSteps.vm.submit()
      
      expect(FormStep4.vm.active).toBe(true)
    })
    
    it('should enable until last visible and enabled step ignoring rules', async () => {
      
      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a'],
          },
          page1: {
            label: 'Step 2',
            elements: ['b'],
          },
          page2: {
            label: 'Step 3',
            elements: ['c'],
          },
          page3: {
            label: 'Step 4',
            elements: ['d'],
          },
        },
        schema: {
          a: {
            type: 'text',
            rules: 'required|min:3',
            default: 'something1',
          },
          b: {
            type: 'text',
            rules: 'required|min:3',
            default: 'something2',
          },
          c: {
            type: 'text',
            rules: 'required|min:3',
          },
          d: {
            type: 'text',
            rules: 'required|min:3',
          },
        }
      })
      
      const FormSteps = form.findComponent({ name: 'FormSteps' })
      const FormStep1 = form.findAllComponents({ name: 'FormStep' }).at(0)
      const FormStep2 = form.findAllComponents({ name: 'FormStep' }).at(1)
      const FormStep3 = form.findAllComponents({ name: 'FormStep' }).at(2)
      const FormStep4 = form.findAllComponents({ name: 'FormStep' }).at(3)
      
      await nextTick()
      
      FormSteps.vm.goTo('page2')
      
      FormSteps.vm.enableUntilLastEnabled()
      
      expect(FormStep1.vm.isDisabled).toBe(false)
      expect(FormStep2.vm.isDisabled).toBe(false)
      expect(FormStep3.vm.isDisabled).toBe(false)
      expect(FormStep4.vm.isDisabled).toBe(true)
    })
    
    it('should assign step to its parent (assignToParent)', async () => {
      
      const steps = {
        page0: {
          label: 'Step 1',
          elements: ['a'],
        },
        page1: {
          label: 'Step 2',
          elements: ['b'],
        }
      }
      
      const form = createForm({
        steps,
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      const FormSteps = findAllComponents(form, { name: 'FormSteps' }).at(0)
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
      
      expect(FormSteps.vm.steps$Array).toStrictEqual([FormStep1.vm, FormStep2.vm])
    })
    
    it('should assign step to its parent even if it is wrapped away (assignToParent)', async () => {
      
      const form = createForm({}, {}, function(h) {
        return createElement(h, 'form', [
          createElement(h, {
              render() {
                return createElement(h, 'div', [this.$slots.default()])
              }
            }, [
            createElement(h, 'FormSteps', [
              createElement(h, 'FormStep', {
                name: 'page0',
                label: 'Step 1'
              }),
              createElement(h, 'FormStep', {
                name: 'page1',
                label: 'Step 2'
              }),
            ]),
          ]),
          createElement(h, 'FormElements')
        ])
      })
      
      const steps = findAllComponents(form, { name: 'FormSteps' }).at(0)
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
      
      expect(steps.vm.steps$Array).toStrictEqual([FormStep1.vm, FormStep2.vm])
    })
    
    it('should remove step from its parent (removeFromParent)', async () => {
      
      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a'],
          },
          page1: {
            label: 'Step 2',
            elements: ['b'],
          }
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      form.vm.$set(form.vm.vueform, 'steps', {})
      
      await nextTick()
      
      expect(form.vm.steps$).toBe(null)
    })
    
    //@todo:adam test later for recursive removing
    // it('should remove step from its parent even if it is wrapped away (removeFromParent)', async () => {
    //
    //   const form = createForm({}, {}, function(h) {
    //     return createElement(h, 'form', [
    //       createElement(h, 'FormSteps', [
    //         createElement(h, 'ObjectElement', [
    //           createElement(h, 'FormStep', {
    //             props: {
    //               name: 'page0'
    //             },
    //           }),
    //           createElement(h, 'FormStep', {
    //             props: {
    //               name: 'page1'
    //             }
    //           }),
    //         ])
    //       ])
    //     ])
    //   })
    //
    //   const steps = findAllComponents(form, { name: 'FormSteps' }).at(0)
    //   const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
    //   const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
    //
    //   // expect(steps.vm.steps$Array).toStrictEqual([FormStep1.vm])
    // })
    
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

      form.vm.$vueform.services.axios = {
        request: () => ({data:{}})
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
  
  describe('watchers', () => {

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