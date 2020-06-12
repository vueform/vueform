import { createForm } from './../utils/testHelpers'
import { createLocalVue } from '@vue/test-utils'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

describe('Form Wizard Step', () => {
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

    expect(form.findAllComponents({ name: 'FormWizardStep' }).at(0).classes()).toContain('class-a')
  })

  it('should render step label', () => {
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

    expect(form.findAllComponents({ name: 'FormWizardStep' }).at(0).html()).toContain('First')
    expect(form.findAllComponents({ name: 'FormWizardStep' }).at(1).html()).toContain('Second')
  })

  it('should render step labels for buttons', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    
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

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(previous.html()).toContain('Previous2')
      expect(next.html()).toContain('Next2')

      next.get('button').trigger('click')

      LocalVue.nextTick(() => {
        let finish = form.findComponent({ name: 'FormWizardFinish' })

        expect(finish.html()).toContain('Finish2')

        done()
      })
    })
    })
  })

  it('should skip rendering buttons if they are false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    
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

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(previous.html()).toBeFalsy()
      expect(next.html()).toBeFalsy()

      done()
    })
    })
  })
  
  it('should show active\'s elements and hide others', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)
    let c = form.findAllComponents({ name: 'TextElement' }).at(2)
    let d = form.findAllComponents({ name: 'TextElement' }).at(3)

    expect(a.vm.name).toBe('a')
    expect(b.vm.name).toBe('b')
    expect(c.vm.name).toBe('c')
    expect(d.vm.name).toBe('d')

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(a.vm.$vnode.elm).toBeVisible()
      expect(b.vm.$vnode.elm).toBeVisible()
      expect(c.vm.$vnode.elm).not.toBeVisible()
      expect(d.vm.$vnode.elm).not.toBeVisible()

      next.get('button').trigger('click')

      LocalVue.nextTick(() => {
        expect(a.vm.$vnode.elm).not.toBeVisible()
        expect(b.vm.$vnode.elm).not.toBeVisible()
        expect(c.vm.$vnode.elm).toBeVisible()
        expect(d.vm.$vnode.elm).toBeVisible()
        done()
      })
    })
    })
  })
  
  it('should not be selected if disabled', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)
    expect(second.vm.name).toBe('second')

    expect(second.vm.disabled).toBe(true)

    LocalVue.nextTick(() => {
      second.get('a').trigger('click')
      expect(wizard.vm.current$.name).toBe('first')

      done()
    })
  })
  
  it('should be able select if enabled', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)
    expect(second.vm.name).toBe('second')

    expect(second.vm.disabled).toBe(true)

    second.vm.enable()

    LocalVue.nextTick(() => {
      second.get('a').trigger('click')
      expect(wizard.vm.current$.name).toBe('second')

      done()
    })
  })
  
  it('should become done if completed and has no validation rules', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let first = form.findAllComponents({ name: 'FormWizardStep' }).at(0)
    expect(first.vm.name).toBe('first')

    expect(first.vm.done).toBe(false)

    first.vm.complete()

    expect(first.vm.done).toBe(true)
    
    done()
  })
  
  it('should not become done if completed and has invalid validation rules', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let first = form.findAllComponents({ name: 'FormWizardStep' }).at(0)
    expect(first.vm.name).toBe('first')

    expect(first.vm.done).toBe(false)

    first.vm.validate()
    first.vm.complete()

    LocalVue.nextTick(() => {
      expect(first.vm.done).toBe(false)
      
      done()
    })
  })
  
  it('should become done if completed and has valid validation rules', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    expect(a.vm.name).toBe('a')

    let first = form.findAllComponents({ name: 'FormWizardStep' }).at(0)
    expect(first.vm.name).toBe('first')

    expect(first.vm.done).toBe(false)

    a.vm.update(1)

    LocalVue.nextTick(() => {
      first.vm.validate()
      first.vm.complete()

      LocalVue.nextTick(() => {
        expect(first.vm.done).toBe(true)
        
        done()
      })
    })
  })

  it('should validate elements before going next if validateOn step is enabled', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    expect(a.vm.name).toBe('a')

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')

      expect(wizard.vm.invalid).toBe(true)
      expect(wizard.vm.current$.name).toBe('first')

      a.vm.update(1)

      next.get('button').trigger('click')

      expect(wizard.vm.invalid).toBe(false)
      expect(wizard.vm.current$.name).toBe('second')

      done()
    })
  })

  // it('should should be pending if ha

  it('should forward conditions to child elements', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let c = form.findAllComponents({ name: 'TextElement' }).at(2)
    let d = form.findAllComponents({ name: 'TextElement' }).at(3)

    expect(c.vm.name).toBe('c')
    expect(d.vm.name).toBe('d')

    LocalVue.nextTick(() => {
      expect(c.vm.conditions).toStrictEqual(conditions)
      expect(d.vm.conditions).toStrictEqual(_.concat([['c', 3]], conditions))
      done()
    })
  })

  it('should hide step if its conditions aren\'t met', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)

    expect(second.vm.name).toBe('second')

      expect(second.html()).toBe('')
      done()
  })

  it('should show step if its conditions are met', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.name).toBe('a')

    a.vm.value = 1

    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)

    expect(second.vm.name).toBe('second')

    LocalVue.nextTick(() => {
      expect(second.html()).toContain('Second')
      done()
    })
  })

  it('should trigger `active` event when selected', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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
    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)

    expect(second.vm.name).toBe('second')

    expect(onActiveMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')

      expect(onActiveMock.mock.calls.length).toBe(1)

      done()
    })
  })

  it('should trigger `inactive` event when an other step is selected', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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
    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)

    expect(second.vm.name).toBe('second')

    expect(onInactiveMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')
      
      expect(onInactiveMock.mock.calls.length).toBe(1)
      done()
    })
  })

  it('should trigger `enable` event when a step becomes enabled', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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
    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)

    expect(second.vm.name).toBe('second')

    expect(onEnableMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')
      
      expect(onEnableMock.mock.calls.length).toBe(1)
      done()
    })
  })

  it('should trigger `disable` event when a step becomes disabled', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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
    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)

    expect(second.vm.name).toBe('second')

    expect(onDisableMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')

      wizard.vm.reset()
      
      expect(onDisableMock.mock.calls.length).toBe(1)
      done()
    })
  })
})