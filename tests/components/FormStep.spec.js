import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'composition-api'
import flushPromises from 'flush-promises'
import useFormComponent from './../composables/useFormComponent'

expect.extend({toBeVisible})

describe('FormStep', () => {
  let form = createForm({
    steps: {
      a: {
        label: 'a',
        elements: ['el']
      }
    },
    schema: {
      el: {
        type: 'text',
      }
    }
  })

  let FormStep = findAllComponents(form, { name: 'FormStep' }).at(0)

  let mergeWith = {
    container: [
      FormStep.vm.classes.active, 
    ]
  }

  if (!_.isEmpty(FormStep.vm.classes.enabled)) {
    mergeWith.container.push(FormStep.vm.classes.enabled)
  }

  if (!_.isEmpty(FormStep.vm.classes.incompleted)) {
    mergeWith.container.push(FormStep.vm.classes.incompleted)
  }

  if (!_.isEmpty(FormStep.vm.classes.valid)) {
    mergeWith.container.push(FormStep.vm.classes.valid)
  }

  mergeWith.container.push('step-class')

  useFormComponent({steps:{a:{label:'a',elements:['el'],stepClass:'step-class'}},schema:{el:{type:'text'}}}, 'FormStep', {
    execute() {},
    mergeWith,
  })

  describe('classes', () => {
    it('should add inactive class but not active to container when inactive', async () => {
      let form = createForm({
        steps: {
          one: {
            label: 'One',
            element: ['el']
          },
          two: {
            label: 'Two',
            element: ['el2']
          },
        },
        schema: {
          el: {
            type: 'text',
          },
          el2: {
            type: 'text',
          },
        },
        overrideClasses: {
          FormStep: {
            active: 'active',
            inactive: 'inactive',
          }
        },
      })

      await nextTick()

      let component = findAllComponents(form, { name: 'FormStep' }).at(0).vm

      expect(component.classes.container).not.toContain(component.classes.inactive)
      expect(component.classes.container).toContain(component.classes.active)

      form.vm.steps$.next()

      await nextTick()

      component = findAllComponents(form, { name: 'FormStep' }).at(0).vm

      expect(component.classes.container).toContain(component.classes.inactive)
      expect(component.classes.container).not.toContain(component.classes.active)
      
    // destroy(form) // teardown
    })
    
    it('should add disabled class but not enabled to container when disabled', async () => {
      let form = createForm({
        steps: {
          one: {
            label: 'One',
            element: ['el']
          },
          two: {
            label: 'Two',
            element: ['el2']
          },
        },
        schema: {
          el: {
            type: 'text',
          },
          el2: {
            type: 'text',
          },
        },
        overrideClasses: {
          FormStep: {
            disabled: 'disabled',
            enabled: 'enabled',
          }
        },
      })

      await nextTick()

      let component = findAllComponents(form, { name: 'FormStep' }).at(1).vm

      expect(component.classes.container).not.toContain(component.classes.enabled)
      expect(component.classes.container).toContain(component.classes.disabled)

      form.vm.steps$.next()

      await nextTick()

      component = findAllComponents(form, { name: 'FormStep' }).at(1).vm

      expect(component.classes.container).toContain(component.classes.enabled)
      expect(component.classes.container).not.toContain(component.classes.disabled)
      
    // destroy(form) // teardown
    })
    
    it('should add inactive class but not active to container when inactive', async () => {
      let form = createForm({
        steps: {
          one: {
            label: 'One',
            element: ['el']
          },
          two: {
            label: 'Two',
            element: ['el2']
          },
        },
        schema: {
          el: {
            type: 'text',
          },
          el2: {
            type: 'text',
          },
        },
        overrideClasses: {
          FormStep: {
            completed: 'completed',
            incompleted: 'incompleted',
          }
        },
      })

      await nextTick()

      let component = findAllComponents(form, { name: 'FormStep' }).at(0)

      expect(component.vm.classes.container).not.toContain(component.vm.classes.completed)
      expect(component.vm.classes.container).toContain(component.vm.classes.incompleted)

      component.vm.complete()

      await nextTick()

      expect(component.vm.classes.container).toContain(component.vm.classes.completed)
      expect(component.vm.classes.container).not.toContain(component.vm.classes.incompleted)
      
    // destroy(form) // teardown
    })
    
    it('should add invalid class but not valid to container when invalid', async () => {
      let form = createForm({
        steps: {
          one: {
            label: 'One',
            elements: ['el']
          },
          two: {
            label: 'Two',
            elements: ['el2']
          },
        },
        schema: {
          el: {
            type: 'text',
            rules: 'required'
          },
          el2: {
            type: 'text',
          },
        },
        overrideClasses: {
          FormStep: {
            valid: 'valid',
            invalid: 'invalid',
          }
        },
      })

      await nextTick()

      let component = findAllComponents(form, { name: 'FormStep' }).at(0)

      expect(component.vm.classes.container).not.toContain(component.vm.classes.invalid)
      expect(component.vm.classes.container).toContain(component.vm.classes.valid)

      form.vm.el$('el').validate()

      await flushPromises()
      await nextTick()

      expect(component.vm.classes.container).toContain(component.vm.classes.invalid)
      expect(component.vm.classes.container).not.toContain(component.vm.classes.valid)
      
    // destroy(form) // teardown
    })
    
    it('should add pending class to container when pending', async () => {
      let form = createForm({
        steps: {
          one: {
            label: 'One',
            elements: ['el']
          },
          two: {
            label: 'Two',
            elements: ['el2']
          },
        },
        schema: {
          el: {
            type: 'text',
            rules: 'required'
          },
          el2: {
            type: 'text',
          },
        },
      })

      await nextTick()

      let component = findAllComponents(form, { name: 'FormStep' }).at(0)

      expect(component.vm.classes.container).not.toContain(component.vm.classes.pending)

      form.vm.el$('el').Validators[0].pending = true

      await nextTick()

      expect(component.vm.classes.container).toContain(component.vm.classes.pending)
      
    // destroy(form) // teardown
    })
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

      form.vm.laraform.steps.first.label = 'Not first'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormStep' }).at(0).html()).toContain('Not first')
    })

    it('should render step label as function', async () => {
      let form = createForm({
        labelVar: 'var',
        steps: {
          first: {
            label: (form$) => { return 'First'+form$.laraform.labelVar },
            elements: ['a'],
          },
          second: {
            label: (form$) => { return 'Second'+form$.laraform.labelVar },
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

      form.vm.laraform.labelVar = 'notvar'

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
                return createElement(h, 'div', this.form$.laraform.steps.first.labelVar)
              }
            }),
            labelVar: 'First',
            elements: ['a']
          },
          second: {
            label: markRaw({
              props: ['step', 'form$'],
              render(h) {
                return createElement(h, 'div', this.form$.laraform.steps.first.labelVar)
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

      form.vm.laraform.steps.first.labelVar = 'Not first'

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
            stepClass: 'class-a',
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

      expect(previous.html()).toBeFalsy()
      expect(next.html()).toBeFalsy()
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
      })

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

      expect(second.vm.disabled).toBe(true)

      await nextTick()

        second.get('a').trigger('click')
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

      expect(second.vm.disabled).toBe(true)

      second.vm.enable()

      await nextTick()

      findAll(second, 'a').last().trigger('click')
      
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

      expect(c.vm.conditions).toStrictEqual(conditions)
      expect(d.vm.conditions).toStrictEqual(_.concat([['c', 3]], conditions))
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

      let second = findAllComponents(form, { name: 'FormStep' }).at(1)

      expect(second.vm.name).toBe('second')

      expect(second.element).not.toBeVisible()
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
    it('should trigger `active` event when selected', async () => {
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
            onActive: onActiveMock
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

      expect(onActiveMock.mock.calls.length).toBe(1)
    })

    it('should trigger `inactive` event when an other step is selected', async () => {
      let onInactiveMock = jest.fn(() => {})

      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
            onInactive: onInactiveMock
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
})