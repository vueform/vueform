import { createForm, findAllComponents, findAll, createElement, destroy } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'vue'
import flushPromises from 'flush-promises'
import useFormComponent from './../composables/useFormComponent'

expect.extend({toBeVisible})

describe('FormStep', () => {
  useFormComponent({
    steps:{
      a:{
        label:'a',
        elements:['el'],
      }
    },
    schema:{
      el:{type:'text'}
    }
  }, 'FormStep', {
    withView: {
      schema: {
        steps: {
          a:{
            label: 'a',
            elements: ['el'],
            view: 'custom',
          }
        },
        schema: {
          el: { type:'text'}
        }
      },
      view: 'custom'
    },
    withLocals: {
      schema: {
        steps: {
          a:{
            label: 'a',
            elements: ['el'],
            overrideClass: 'custom',
          }
        },
        schema: {
          el: { type:'text'}
        }
      },
      class: 'custom'
    }
  })

  describe('label', () => {
    it('should render step label', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
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

      expect(findAllComponents(form, { name: 'FormStep' }).at(0).html()).toContain('First')
      expect(findAllComponents(form, { name: 'FormStep' }).at(1).html()).toContain('Second')

      form.vm.vueform.steps.first.label = 'Not first'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormStep' }).at(0).html()).toContain('Not first')
    })

    it('should render step label as function', async () => {
      let form = createForm({
        labelVar: 'var',
        steps: {
          first: {
            label: (form$) => { return 'First'+form$.vueform.labelVar },
            elements: ['a'],
          },
          second: {
            label: (form$) => { return 'Second'+form$.vueform.labelVar },
            elements: ['b']
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

      expect(findAllComponents(form, { name: 'FormStep' }).at(0).html()).toContain('Firstvar')
      expect(findAllComponents(form, { name: 'FormStep' }).at(1).html()).toContain('Secondvar')

      form.vm.vueform.labelVar = 'notvar'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormStep' }).at(0).html()).toContain('Firstnotvar')
      expect(findAllComponents(form, { name: 'FormStep' }).at(1).html()).toContain('Secondnotvar')
    })

    it('should render step label as component', async () => {
      let form = createForm({
        steps: {
          first: {
            label: markRaw({
              props: ['step', 'form$'],
              render(h) {
                return createElement(h, 'div', this.form$.vueform.steps.first.labelVar)
              }
            }),
            labelVar: 'First',
            elements: ['a']
          },
          second: {
            label: markRaw({
              props: ['step', 'form$'],
              render(h) {
                return createElement(h, 'div', this.form$.vueform.steps.first.labelVar) //@question: shouldn't it be 'First'?
              }
            }),
            labelVar: 'Second',
            elements: ['b']
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

      expect(findAllComponents(form, { name: 'FormStep' }).at(0).html()).toContain('First')
      expect(findAllComponents(form, { name: 'FormStep' }).at(1).html()).toContain('Second')

      form.vm.vueform.steps.first.labelVar = 'Not first'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormStep' }).at(0).html()).toContain('Not first')
    })
  })

  describe('classes', () => {
    it('should add class defined in schema to classes list', () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            addClass: 'class-a',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
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

      expect(findAllComponents(form, { name: 'FormStep' }).at(0).classes()).toContain('class-a')
    })
  })

  describe('labels', () => {
    it('should render step labels for buttons', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
            labels: {
              next: 'Next2',
              previous: 'Previous2'
            }
          },
          second: {
            label: 'Second',
            elements: ['b'],
            labels: {
              finish: 'Finish2',
            }
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

      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)
      let previous = findAllComponents(form, { name: 'FormStepsControl' }).at(0)

      await nextTick()

      await nextTick()

      expect(previous.html()).toContain('Previous2')
      expect(next.html()).toContain('Next2')

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      await nextTick()

      let finish = findAllComponents(form, { name: 'FormStepsControl' }).at(2)

      expect(finish.html()).toContain('Finish2')
    })
  })

  describe('buttons', () => {
    it('should skip rendering buttons if they are false', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
            buttons: {
              next: false,
              previous: false,
            }
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

      let previous = findAllComponents(form, { name: 'FormStepsControl' }).at(0)
      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      await nextTick()

      await nextTick()

      expect(previous.html().match(/Previous/)).toBe(null)
      expect(next.html().match(/Next/)).toBe(null)
    })

    it('should not skip rendering buttons if they are true', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
            buttons: {
              next: true,
              previous: true,
            }
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

      let previous = findAllComponents(form, { name: 'FormStepsControl' }).at(0)
      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      await nextTick()

      await nextTick()

      expect(previous.html().match(/Previous/)).not.toBe(null)
      expect(next.html().match(/Next/)).not.toBe(null)
    })
  })

  describe('elements', () => {

    it('should be [] by default', async () => {

      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1'
          }
        }
      })

      const FormStep = findAllComponents(form, { name: 'FormStep' }).at(0)

      expect(FormStep.vm.elements).toStrictEqual([])
    })
  })
  
  describe('select', () => {
    it('should show active\'s elements and hide others', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a', 'b']
          },
          second: {
            label: 'Second',
            elements: ['c', 'd']
          },
        },
        schema: {
          a: {
            type: 'text'
          },
          b: {
            type: 'text'
          },
          c: {
            type: 'text'
          },
          d: {
            type: 'text'
          },
        }
      }, {
        attach: true,
      })

      await nextTick()

      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      let a = findAllComponents(form, { name: 'TextElement' }).at(0)
      let b = findAllComponents(form, { name: 'TextElement' }).at(1)
      let c = findAllComponents(form, { name: 'TextElement' }).at(2)
      let d = findAllComponents(form, { name: 'TextElement' }).at(3)

      expect(a.vm.name).toBe('a')
      expect(b.vm.name).toBe('b')
      expect(c.vm.name).toBe('c')
      expect(d.vm.name).toBe('d')

      await nextTick()

      await nextTick()

      expect(a.vm.$el).toBeVisible()
      expect(b.vm.$el).toBeVisible()
      expect(c.vm.$el).not.toBeVisible()
      expect(d.vm.$el).not.toBeVisible()

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      await nextTick()

      expect(a.vm.$el).not.toBeVisible()
      expect(b.vm.$el).not.toBeVisible()
      expect(c.vm.$el).toBeVisible()
      expect(d.vm.$el).toBeVisible()
    })
  })

  describe('disabled', () => {
    it('should not be selected if disabled', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
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

      let second = findAllComponents(form, { name: 'FormStep' }).at(1)
      expect(second.vm.name).toBe('second')

      expect(second.vm.isDisabled).toBe(true)

      await nextTick()

      second.get('[role="tab"]').trigger('click')
      expect(steps.vm.current$.name).toBe('first')
    })

    it('should be able select if enabled', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
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

      let second = findAllComponents(form, { name: 'FormStep' }).at(1)
      expect(second.vm.name).toBe('second')

      expect(second.vm.isDisabled).toBe(true)

      second.vm.enable()

      await nextTick()

      findAll(second, '[role="tab"]').last().trigger('click')

      expect(steps.vm.current$.name).toBe('second')
    })
  })

  describe('done', () => {
    it('should become done if completed and has no validation rules', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
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

      let first = findAllComponents(form, { name: 'FormStep' }).at(0)
      expect(first.vm.name).toBe('first')

      expect(first.vm.done).toBe(false)

      first.vm.complete()

      expect(first.vm.done).toBe(true)
    })

    it('should not become done if completed and has invalid validation rules', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
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

      let first = findAllComponents(form, { name: 'FormStep' }).at(0)
      expect(first.vm.name).toBe('first')

      expect(first.vm.done).toBe(false)

      first.vm.validate()
      first.vm.complete()

      await nextTick()

      expect(first.vm.done).toBe(false)
    })

    it('should become done if completed and has valid validation rules', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
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

      let a = findAllComponents(form, { name: 'TextElement' }).at(0)
      expect(a.vm.name).toBe('a')

      let first = findAllComponents(form, { name: 'FormStep' }).at(0)
      expect(first.vm.name).toBe('first')

      expect(first.vm.done).toBe(false)

      a.vm.update(1)

      await nextTick()

      first.vm.validate()
      first.vm.complete()

      await flushPromises()

      await nextTick()

      expect(first.vm.done).toBe(true)
    })
  })

  describe('next', () => {
    it('should validate elements before going next if validateOn step is enabled', async () => {
      let form = createForm({
        validateOn: 'change|submit|step',
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

      let a = findAllComponents(form, { name: 'TextElement' }).at(0)
      expect(a.vm.name).toBe('a')

      await nextTick()

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      expect(steps.vm.invalid).toBe(true)
      expect(steps.vm.current$.name).toBe('first')

      a.vm.update('aaa')
      await flushPromises()

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      expect(steps.vm.invalid).toBe(false)
      expect(steps.vm.current$.name).toBe('second')
    })
  })

  describe('conditions', () => {
    it('should forward conditions to child elements', async () => {
      let conditions = [
        ['a', 1],
        ['b', 2],
      ]

      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a', 'b']
          },
          second: {
            label: 'Second',
            elements: ['c', 'd'],
            conditions: conditions
          },
        },
        schema: {
          a: {
            type: 'text'
          },
          b: {
            type: 'text'
          },
          c: {
            type: 'text'
          },
          d: {
            type: 'text',
            conditions: [
              ['c', 3]
            ]
          },
        }
      })

      let c = findAllComponents(form, { name: 'TextElement' }).at(2)
      let d = findAllComponents(form, { name: 'TextElement' }).at(3)

      expect(c.vm.name).toBe('c')
      expect(d.vm.name).toBe('d')

      await nextTick()

      expect(c.vm.conditionList).toStrictEqual(conditions)
      expect(d.vm.conditionList).toStrictEqual(_.concat([['c', 3]], conditions))
    })

    it('should hide step if its conditions aren\'t met', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b'],
            conditions: [
              ['a', 1]
            ],
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

      await nextTick()

      let second = findAllComponents(form, { name: 'FormStep' }).at(1)

      expect(second.vm.name).toBe('second')

      expect(second.element.textContent).not.toBe('Second')
    })

    it('should show step if its conditions are met', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b'],
            conditions: [
              ['a', 1]
            ],
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

      let a = findAllComponents(form, { name: 'TextElement' }).at(0)

      expect(a.vm.name).toBe('a')

      a.vm.value = 1

      let second = findAllComponents(form, { name: 'FormStep' }).at(1)

      expect(second.vm.name).toBe('second')

      await nextTick()

      expect(second.html()).toContain('Second')
    })
  })

  describe('events', () => {
    it('should trigger `activate` event when selected', async () => {
      let onActiveMock = jest.fn(() => {})

      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
            onActivate: onActiveMock
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

      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)
      let second = findAllComponents(form, { name: 'FormStep' }).at(1)

      expect(second.vm.name).toBe('second')

      expect(onActiveMock.mock.calls.length).toBe(0)

      await nextTick()

      findAll(next, 'button').last().trigger('click')
      await flushPromises()
      await nextTick()

      expect(onActiveMock.mock.calls.length).toBe(1)
    })

    it('should trigger `inactivate` event when an other step is selected', async () => {
      let onInactiveMock = jest.fn(() => {})

      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
            onInactivate: onInactiveMock
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

      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)
      let second = findAllComponents(form, { name: 'FormStep' }).at(1)

      expect(second.vm.name).toBe('second')

      expect(onInactiveMock.mock.calls.length).toBe(0)

      await nextTick()

      findAll(next, 'button').last().trigger('click')
      await flushPromises()
      await nextTick()

      expect(onInactiveMock.mock.calls.length).toBe(1)
    })

    it('should trigger `enable` event when a step becomes enabled', async () => {
      let onEnableMock = jest.fn(() => {})

      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
            onEnable: onEnableMock
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

      let next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)
      let second = findAllComponents(form, { name: 'FormStep' }).at(1)

      expect(second.vm.name).toBe('second')

      expect(onEnableMock.mock.calls.length).toBe(0)

      await nextTick()

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      expect(onEnableMock.mock.calls.length).toBe(1)
    })

    it('should trigger `disable` event when a step becomes disabled', async () => {
      let onDisableMock = jest.fn(() => {})

      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
            onDisable: onDisableMock
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
      let second = findAllComponents(form, { name: 'FormStep' }).at(1)

      expect(second.vm.name).toBe('second')

      expect(onDisableMock.mock.calls.length).toBe(0)

      await nextTick()

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      steps.vm.reset()

      expect(onDisableMock.mock.calls.length).toBe(1)
    })
  })
  
  
  describe('computed', () => {
    
    it('should return its parent (steps$)', async () => {

      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a'],
          }
        },
        schema: {
          a: { type: 'text' }
        }
      })

      const FormStepParent = form.vm.steps$
      const FormStep = findAllComponents(form, { name: 'FormStep' }).at(0)

      expect(FormStep.vm.steps$).toStrictEqual(FormStepParent)
    })
    
    it('should return its label (baseLabel)', async () => {

      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a'],
          }
        },
        schema: {
          a: { type: 'text' }
        }
      })

      const FormStep = findAllComponents(form, { name: 'FormStep' }).at(0)

      expect(FormStep.vm.baseLabel).toStrictEqual('Step 1')
    })
    
    it('should return true if it is the first step (isFirst)', async () => {
      
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
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
      
      expect(FormStep1.vm.isFirst).toBe(true)
      expect(FormStep2.vm.isFirst).toBe(false)
    })
    
    it('should return true if it is the last step (isLast)', async () => {
      
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
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
      
      expect(FormStep1.vm.isLast).toBe(false)
      expect(FormStep2.vm.isLast).toBe(true)
    })
    
    it('should enable step and its elements if earlier than current', async () => {
      
      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a'],
            conditions: [
              ['b', 'not_empty']
            ]
          },
          page1: {
            label: 'Step 2',
            elements: ['b'],
          },
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      const FormSteps = form.findComponent({ name: 'FormSteps' })
      const b = form.vm.el$('b')
      
      await nextTick()
      
      expect(Object.keys(FormSteps.vm.visible$).length).toBe(1)
      
      b.update('something')
      
      expect(Object.keys(FormSteps.vm.visible$).length).toBe(2)
    })
  })
  
  describe('methods', () => {
    
    it('should activate step but return if already active (activate)', async () => {
      
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
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        },
      })
      
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
      
      expect(FormStep2.vm.active).toBe(false)
      
      FormStep2.vm.activate()
      
      expect(FormStep2.vm.active).toBe(true)
      expect(FormStep2.emitted().activate.length).toBe(1)
      
      FormStep2.vm.activate()
      
      expect(FormStep2.emitted().activate.length).toBe(1)
    })
    
    it('should disable step but return if already disabled (disable)', async () => {
      
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
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        },
      })
      
      const FormStep = findAllComponents(form, { name: 'FormStep' }).at(0)
      
      await nextTick()
      
      expect(FormStep.vm.isDisabled).toBe(false)
      
      FormStep.vm.disable()
      
      expect(FormStep.vm.isDisabled).toBe(true)
      expect(FormStep.emitted().disable.length).toBe(1)
      
      FormStep.vm.disable()
      
      expect(FormStep.emitted().disable.length).toBe(1)
    })
    
    it('should enable step but return if already enabled (enable)', async () => {
      
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
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      const FormStep = findAllComponents(form, { name: 'FormStep' }).at(0)
      
      await nextTick()

      expect(FormStep.vm.isDisabled).toBe(false)
      expect(FormStep.emitted().enable.length).toBe(1)
      
      FormStep.vm.enable()

      expect(FormStep.vm.isDisabled).toBe(false)
      expect(FormStep.emitted().enable.length).toBe(1)
    })
    
    it('should complete step but return if already completed (complete)', async () => {
      
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
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      const FormStep = findAllComponents(form, { name: 'FormStep' }).at(0)
      
      await nextTick()
      
      FormStep.vm.complete()

      expect(FormStep.vm.completed).toBe(true)
      expect(FormStep.emitted().complete.length).toBe(1)
      
      FormStep.vm.complete()

      expect(FormStep.vm.completed).toBe(true)
      expect(FormStep.emitted().complete.length).toBe(1)
    })
    
    it('should validate step but return if already validated (validate)', async () => {
      
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
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      const FormStep = findAllComponents(form, { name: 'FormStep' }).at(0)
      
      await nextTick()
      
      FormStep.vm.complete()

      expect(FormStep.vm.completed).toBe(true)
      expect(FormStep.emitted().complete.length).toBe(1)
      
      FormStep.vm.complete()

      expect(FormStep.vm.completed).toBe(true)
      expect(FormStep.emitted().complete.length).toBe(1)
    })
    
    it('should validate children', async () => {
      
      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a']
          },
          page1: {
            label: 'Step 2',
            elements: ['b']
          },
        },
        schema: {
          a: {
            type: 'text',
            conditions: [['b', 'empty']],
          },
          b: {
            type: 'text'
          },
        }
      })
      
      const FormStep = findAllComponents(form, { name: 'FormStep' }).at(0)
      const a = form.vm.el$('a')
      
      await FormStep.vm.validate()

      expect(a.validated).toBe(true)
    })
    
    it('should validate children at the and of the step', async () => {
      
      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a']
          },
          page1: {
            label: 'Step 2',
            elements: ['b']
          },
          page2: {
            label: 'Step 2',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            conditions: [['b', 'empty']],
          },
          b: {
            type: 'text'
          },
          c: {
            type: 'text'
          },
        },
        validateOn: 'step',
      })
      
      await nextTick()
      
      const FormStepsControl = form.findComponent({ name: 'FormStepsControl' })
      const a = form.vm.el$('a')
      
      await FormStepsControl.vm.next()
      await nextTick()
      
      expect(a.validated).toBe(true)
    })
    
    it('should reset child conditions (resetChildConditions) includes remove and add', async () => {

      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a', 'b'],
          },
          page1: {
            label: 'Step 2',
            elements: ['c'],
            conditions: [
              ['b', 'in', 1]
            ]
          },
        },
        schema: {
          a: {
            type: 'text'
          },
          b: {
            type: 'text'
          },
          c: {
            type: 'text',
            conditions: [
              ['a', 'in', ['something']]
            ]
          },
        }
      })

      const FormStep = findAllComponents(form, { name: 'FormStep' }).at(1)
      const c = form.vm.el$('c')

      // initial setup
      expect(FormStep.vm.conditions).toStrictEqual([['b', 'in', 1]])
      expect(c.conditionList).toStrictEqual([
        ['a', 'in', ['something']]
      ])

      // change setup
      form.vm.$set(form.vm.vueform.steps.page1, 'conditions', [['a', 'in', 1]])
      await nextTick()

      FormStep.vm.resetChildConditions()
      FormStep.vm.updateConditions()
      await nextTick()

      // result
      expect(FormStep.vm.conditions).toStrictEqual([['a', 'in', 1]])
      expect(c.conditionList).toStrictEqual([
        ['a', 'in', ['something']],
        ['a', 'in', 1]
      ])
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
          createElement(h, 'FormSteps', [
            createElement(h, {
            render() {
              return createElement(h, 'div', [this.$slots.default()])
            }
          }, [
            createElement(h, 'FormStep', {
              name: 'page0',
              label: 'Step 1'
            }),
            createElement(h, 'FormStep', {
              name: 'page1',
              label: 'Step 2'
            }),
          ]),
          createElement(h, 'FormElements')
          ]),
        ])
      })
      
      const steps = findAllComponents(form, { name: 'FormSteps' }).at(0)
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
      
      expect(steps.vm.steps$Array).toStrictEqual([FormStep1.vm, FormStep2.vm])
    })
    
    it('should remove step from its parent (removeFromParent)', async () => {

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

      delete steps.page1
      form.vm.$set(form.vm.vueform, 'steps', { ...steps })

      await nextTick()

      const FormSteps = findAllComponents(form, { name: 'FormSteps' }).at(0)
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      
      expect(FormSteps.vm.steps$Array).toStrictEqual([FormStep1.vm])
    })
    
    //@todo:adam test later for recursive removing
    // it('should remove step from its parent even if it is wrapped away (removeFromParent)', async () => {
    //
    //   const { form } = createInlineForm({},{}, function(h) {
    //     return createElement(h, 'Vueform', {
    //       ref: 'form',
    //       scopedSlots: {
    //         default: createElement(h, 'ObjectElement', {
    //           props: {
    //             name: 'parent',
    //           }
    //         }, [
    //           createElement(h, 'div', [
    //             createElement(h, 'TextElement', {
    //               props: {
    //                 name: 'el'
    //               }
    //             })
    //           ])
    //         ])
    //       }
    //     })
    //   })
    //
    //
    //
    //
    //     /*createForm({}, {}, function(h) {
    //     return createElement(h, 'form', [
    //       createElement(h, 'FormSteps', [
    //         createElement(h, 'div', [
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
    //   })*/
    //
    //   const steps = findAllComponents(form, { name: 'FormSteps' }).at(0)
    //   const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
    //   const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
    //
    //   expect(steps.vm.steps$Array).toStrictEqual([FormStep1.vm])
    // })
  })
  
  describe('watchers', () => {
    
    // @todo: adam
    // it('should remove child conditions if the new condition list is empty or does not exist', async () => {
      
    //   const steps = {
    //     page0: {
    //       label: 'Step 1',
    //       elements: ['a', 'b'],
    //     },
    //     page1: {
    //       label: 'Step 2',
    //       elements: ['c'],
    //       conditions: [
    //         ['a', 'not_empty']
    //       ]
    //     },
    //   }
      
    //   const form = createForm({
    //     steps,
    //     schema: {
    //       a: { type: 'text' },
    //       b: { type: 'text' },
    //       c: { type: 'text' },
    //     }
    //   })
      
    //   const FormStep = findAllComponents(form, { name: 'FormStep' }).at(1)
      
    //   steps.page1.conditions = []
    //   form.vm.$set(form.vm.vueform.steps, 'page1', { ...steps.page1 })
    //   await nextTick()
    //   FormStep.vm.updateConditions()
    //   await nextTick()
      
    //   expect(FormStep.vm.conditionList).toStrictEqual([])
    // })
    
    it('should activate new elements in active step', async () => {
      
      const steps = {
        page0: {
          label: 'Step 1',
          elements: ['a'],
        },
        page1: {
          label: 'Step 2',
          elements: ['b'],
        },
      }
      
      const schema = {
        a: { type: 'text' },
        b: { type: 'text' },
      }
      
      const form = createForm({
        steps,
        schema,
      })
      
      form.vm.$set(form.vm.vueform.schema, 'c', { type: 'text' })
      form.vm.$set(form.vm.vueform.steps.page0, 'elements', ['a', 'c'])
      await nextTick()
      
      expect(form.vm.elements$.a.active).toBe(true)
      expect(form.vm.elements$.b.active).toBe(false)
      expect(form.vm.elements$.c.active).toBe(true)
    })
  })
})