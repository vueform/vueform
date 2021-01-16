import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'composition-api'
import flushPromises from 'flush-promises'
import useFormComponent from './../composables/useFormComponent'

expect.extend({toBeVisible})

describe('FormWizardStep', () => {
  let form = createForm({
    wizard: {
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

  let FormWizardStep = findAllComponents(form, { name: 'FormWizardStep' }).at(0)

  useFormComponent({wizard:{a:{label:'a',elements:['el'],class:'step-class'}},schema:{el:{type:'text'}}}, 'FormWizardStep', {
    mergeWith: {
      [FormWizardStep.vm.containers.state]: {
        [FormWizardStep.vm.defaultClasses.active]: FormWizardStep.vm.active,
        [FormWizardStep.vm.defaultClasses.inactive]: !FormWizardStep.vm.active,
        [FormWizardStep.vm.defaultClasses.disabled]: FormWizardStep.vm.disabled,
        [FormWizardStep.vm.defaultClasses.enabled]: !FormWizardStep.vm.disabled,
        [FormWizardStep.vm.defaultClasses.completed]: FormWizardStep.vm.completed,
        [FormWizardStep.vm.defaultClasses.incompleted]: !FormWizardStep.vm.completed,
        [FormWizardStep.vm.defaultClasses.valid]: !FormWizardStep.vm.invalid,
        [FormWizardStep.vm.defaultClasses.invalid]: FormWizardStep.vm.invalid,
        [FormWizardStep.vm.defaultClasses.pending]: FormWizardStep.vm.pending,
        'step-class': true
      }
    }
  })

  describe('label', () => {
    it('should render step label', async () => {
      let form = createForm({
        wizard: {
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

      expect(findAllComponents(form, { name: 'FormWizardStep' }).at(0).html()).toContain('First')
      expect(findAllComponents(form, { name: 'FormWizardStep' }).at(1).html()).toContain('Second')

      form.vm.wizard.first.label = 'Not first'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardStep' }).at(0).html()).toContain('Not first')
    })

    it('should render step label as function', async () => {
      let form = createForm({
        labelVar: 'var',
        wizard: {
          first: {
            label: (form$) => { return 'First'+form$.labelVar },
            elements: ['a'],
          },
          second: {
            label: (form$) => { return 'Second'+form$.labelVar },
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

      expect(findAllComponents(form, { name: 'FormWizardStep' }).at(0).html()).toContain('Firstvar')
      expect(findAllComponents(form, { name: 'FormWizardStep' }).at(1).html()).toContain('Secondvar')

      form.vm.labelVar = 'notvar'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardStep' }).at(0).html()).toContain('Firstnotvar')
      expect(findAllComponents(form, { name: 'FormWizardStep' }).at(1).html()).toContain('Secondnotvar')
    })

    it('should render step label as component', async () => {
      let form = createForm({
        wizard: {
          first: {
            label: markRaw({
              props: ['step', 'form$'],
              render(h) {
                return createElement(h, 'div', this.step.labelVar)
              }
            }),
            labelVar: 'First',
            elements: ['a']
          },
          second: {
            label: markRaw({
              props: ['step', 'form$'],
              render(h) {
                return createElement(h, 'div', this.step.labelVar)
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

      expect(findAllComponents(form, { name: 'FormWizardStep' }).at(0).html()).toContain('First')
      expect(findAllComponents(form, { name: 'FormWizardStep' }).at(1).html()).toContain('Second')

      form.vm.wizard.first.labelVar = 'Not first'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardStep' }).at(0).html()).toContain('Not first')
    })
  })
  
  describe('classes', () => {
    it('should add class defined in schema to classes list', () => {
      let form = createForm({
        wizard: {
          first: {
            label: 'First',
            class: 'class-a',
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

      expect(findAllComponents(form, { name: 'FormWizardStep' }).at(0).classes()).toContain('class-a')
    })
  })

  describe('labels', () => {
    it('should render step labels for buttons', async () => {    
      let form = createForm({
        wizard: {
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

      let next = form.findComponent({ name: 'FormWizardNext' })
      let previous = form.findComponent({ name: 'FormWizardPrevious' })

      await nextTick()

      await nextTick()

      expect(previous.html()).toContain('Previous2')
      expect(next.html()).toContain('Next2')

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      await nextTick()

      let finish = form.findComponent({ name: 'FormWizardFinish' })

      expect(finish.html()).toContain('Finish2')
    })
  })

  describe('buttons', () => {
    it('should skip rendering buttons if they are false', async () => {    
      let form = createForm({
        wizard: {
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

      let previous = form.findComponent({ name: 'FormWizardPrevious' })
      let next = form.findComponent({ name: 'FormWizardNext' })

      await nextTick()

      await nextTick()

      expect(previous.html()).toBeFalsy()
      expect(next.html()).toBeFalsy()
    })
  })
  
  describe('select', () => {
    it('should show active\'s elements and hide others', async () => {
      let form = createForm({
        wizard: {
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

      let next = form.findComponent({ name: 'FormWizardNext' })

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
        wizard: {
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

      let wizard = form.findComponent({ name: 'FormWizard' })
      let next = form.findComponent({ name: 'FormWizardNext' })

      let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)
      expect(second.vm.name).toBe('second')

      expect(second.vm.disabled).toBe(true)

      await nextTick()

        second.get('a').trigger('click')
      expect(wizard.vm.current$.name).toBe('first')
    })
    
    it('should be able select if enabled', async () => {
      let form = createForm({
        wizard: {
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

      let wizard = form.findComponent({ name: 'FormWizard' })
      let next = form.findComponent({ name: 'FormWizardNext' })

      let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)
      expect(second.vm.name).toBe('second')

      expect(second.vm.disabled).toBe(true)

      second.vm.enable()

      await nextTick()

      findAll(second, 'a').last().trigger('click')
      
      expect(wizard.vm.current$.name).toBe('second')
    })
  })
  
  describe('done', () => {
    it('should become done if completed and has no validation rules', async () => {
      let form = createForm({
        wizard: {
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

      let first = findAllComponents(form, { name: 'FormWizardStep' }).at(0)
      expect(first.vm.name).toBe('first')

      expect(first.vm.done).toBe(false)

      first.vm.complete()

      expect(first.vm.done).toBe(true)
    })
    
    it('should not become done if completed and has invalid validation rules', async () => {
      let form = createForm({
        wizard: {
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

      let first = findAllComponents(form, { name: 'FormWizardStep' }).at(0)
      expect(first.vm.name).toBe('first')

      expect(first.vm.done).toBe(false)

      first.vm.validate()
      first.vm.complete()

      await nextTick()

      expect(first.vm.done).toBe(false)
    })
    
    it('should become done if completed and has valid validation rules', async () => {
      let form = createForm({
        wizard: {
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

      let first = findAllComponents(form, { name: 'FormWizardStep' }).at(0)
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

      let a = findAllComponents(form, { name: 'TextElement' }).at(0)
      expect(a.vm.name).toBe('a')

      await nextTick()

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      expect(wizard.vm.invalid).toBe(true)
      expect(wizard.vm.current$.name).toBe('first')

      a.vm.update('aaa')
      await flushPromises()

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      expect(wizard.vm.invalid).toBe(false)
      expect(wizard.vm.current$.name).toBe('second')
    })
  })

  describe('conditions', () => {
    it('should forward conditions to child elements', async () => {
      let conditions = [
        ['a', 1],
        ['b', 2],
      ]

      let form = createForm({
        wizard: {
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
        wizard: {
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

      let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)

      expect(second.vm.name).toBe('second')

      expect(second.element).not.toBeVisible()
    })

    it('should show step if its conditions are met', async () => {
      let form = createForm({
        wizard: {
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

      let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)

      expect(second.vm.name).toBe('second')

      await nextTick()

      expect(second.html()).toContain('Second')
    })
  })

  describe('events', () => {
    it('should trigger `active` event when selected', async () => {
      let onActiveMock = jest.fn(() => {})

      let form = createForm({
        wizard: {
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

      let next = form.findComponent({ name: 'FormWizardNext' })
      let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)

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
        wizard: {
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

      let next = form.findComponent({ name: 'FormWizardNext' })
      let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)

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
        wizard: {
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

      let next = form.findComponent({ name: 'FormWizardNext' })
      let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)

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
        wizard: {
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

      let wizard = form.findComponent({ name: 'FormWizard' })
      let next = form.findComponent({ name: 'FormWizardNext' })
      let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)

      expect(second.vm.name).toBe('second')

      expect(onDisableMock.mock.calls.length).toBe(0)

      await nextTick()

      findAll(next, 'button').last().trigger('click')
      await flushPromises()

      wizard.vm.reset()
        
      expect(onDisableMock.mock.calls.length).toBe(1)
    })
  })
})