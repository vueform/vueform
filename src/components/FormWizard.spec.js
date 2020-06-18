import { createForm, testDynamics } from './../utils/testHelpers'
import { createLocalVue } from '@vue/test-utils'

describe('Form Wizard', () => {
  it('should render steps', () => {
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

    expect(form.html()).toContain('First')
    expect(form.html()).toContain('Second')
    expect(form.findAllComponents({ name: 'FormWizardStep' }).length).toBe(2)
  })

  it('should return current step for current$', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)
    let next = form.findComponent({ name: 'FormWizardNext' })

    expect(second.vm.name).toBe('second')

    LocalVue.nextTick(() => {
      expect(wizard.vm.current$.name).toBe('first')

      next.get('button').trigger('click')

      expect(wizard.vm.current$.name).toBe('second')

      done()
    })
  })

  it('should return first step for first$', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let wizard = form.findComponent({ name: 'FormWizard' })

    LocalVue.nextTick(() => {
      expect(wizard.vm.first$.name).toBe('first')
      done()
    })
  })

  it('should return next step for next$', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let wizard = form.findComponent({ name: 'FormWizard' })

    LocalVue.nextTick(() => {
      expect(wizard.vm.next$.name).toBe('second')
      done()
    })
  })

  it('should return previous step for previous$', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)
    let next = form.findComponent({ name: 'FormWizardNext' })

    expect(second.vm.name).toBe('second')

    LocalVue.nextTick(() => {
      expect(wizard.vm.previous$).toBe(undefined)

      next.get('button').trigger('click')

      expect(wizard.vm.previous$.name).toBe('first')

      done()
    })
  })

  it('should return first invalid step for firstInvalid$', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let wizard = form.findComponent({ name: 'FormWizard' })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)
    let c = form.findAllComponents({ name: 'TextElement' }).at(2)

    expect(a.vm.name).toBe('a')
    expect(b.vm.name).toBe('b')
    expect(c.vm.name).toBe('c')

    a.vm.update(1, true)
    b.vm.update('', true)
    c.vm.update('', true)

    LocalVue.nextTick(() => {
      expect(wizard.vm.firstInvalid$.name).toBe('second')
      done()
    })
  })

  it('should return first non done step for firstNonDone$', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    let next = form.findComponent({ name: 'FormWizardNext' })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)
    let c = form.findAllComponents({ name: 'TextElement' }).at(2)

    expect(a.vm.name).toBe('a')
    expect(b.vm.name).toBe('b')
    expect(c.vm.name).toBe('c')

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')
      
      LocalVue.nextTick(() => {
        expect(wizard.vm.firstNonDone$.name).toBe('second')
        done()
      })
    })
  })

  it('should return last enabled step for lastEnabled$', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    let next = form.findComponent({ name: 'FormWizardNext' })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)
    let c = form.findAllComponents({ name: 'TextElement' }).at(2)

    expect(a.vm.name).toBe('a')
    expect(b.vm.name).toBe('b')
    expect(c.vm.name).toBe('c')

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')
      
      LocalVue.nextTick(() => {
        expect(wizard.vm.lastEnabled$.name).toBe('second')
        done()
      })
    })
  })

  it('should disabled previous button on first step', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    LocalVue.nextTick(() => {
      expect(previous.vm.disabled).toBe(true)
      done()
    })
  })

  it('should display finish button on last step instead of next', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    LocalVue.nextTick(() => {
      wizard.vm.goTo('second')

      LocalVue.nextTick(() => {
        expect(next.html()).toBeFalsy()
        expect(finish.html()).toBeTruthy()

        done()
      })
    })
  })

  it('goTo should go to a step', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let wizard = form.findComponent({ name: 'FormWizard' })

    wizard.vm.goTo('second')

    expect(wizard.vm.current$.name).toBe('second')
    done()
  })

  it('should enable and move to next step on clicking next button', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    LocalVue.nextTick(() => {
      expect(wizard.vm.current$.name).toBe('first')
      expect(wizard.vm.next$.disabled).toBe(true)

      next.get('button').trigger('click')

      expect(wizard.vm.current$.name).toBe('second')
      expect(wizard.vm.current$.disabled).toBe(false)
      done()
    })
  })

  it('should not move to next step when next button is clicked if has invalid fields', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    LocalVue.nextTick(() => {
      expect(wizard.vm.current$.name).toBe('first')

      next.get('button').trigger('click')

      LocalVue.nextTick(() => {
        expect(wizard.vm.current$.name).toBe('first')
        expect(wizard.vm.invalid).toBe(true)
        done()
      })
    })
  })

  it('should move to next step only if async validation has finished successfully', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    let next = form.findComponent({ name: 'FormWizardNext' })

    LocalVue.nextTick(() => {
      expect(wizard.vm.current$.name).toBe('first')

      next.get('button').trigger('click')

      LocalVue.nextTick(() => {
        expect(wizard.vm.current$.name).toBe('first')
        expect(wizard.vm.pending).toBe(true)

        LocalVue.nextTick(() => {
        LocalVue.nextTick(() => {
          expect(wizard.vm.pending).toBe(false)
          expect(wizard.vm.invalid).toBe(false)
          LocalVue.nextTick(() => {
            expect(wizard.vm.current$.name).toBe('second')
          })
        })
        })
        
        done()
      })
    })
  })

  it('should move to previous step on clicking previous button', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')

      expect(wizard.vm.current$.name).toBe('second')

      previous.get('button').trigger('click')

      expect(wizard.vm.current$.name).toBe('first')

      done()
    })
  })

  it('should complete all steps with complete() method', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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
    let first = form.findAllComponents({ name: 'FormWizardStep' }).at(0)
    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)

    LocalVue.nextTick(() => {
      wizard.vm.complete()

      expect(first.vm.completed).toBe(true)
      expect(second.vm.completed).toBe(true)

      done()
    })
  })

  it('should enable all steps with enableAllSteps() method', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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
    let first = form.findAllComponents({ name: 'FormWizardStep' }).at(0)
    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)

    LocalVue.nextTick(() => {
      wizard.vm.enableAllSteps()

      expect(first.vm.disabled).toBe(false)
      expect(second.vm.disabled).toBe(false)

      done()
    })
  })

  it('should find step by name', () => {
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

    let wizard = form.findComponent({ name: 'FormWizard' })

    expect(wizard.vm.step$('second').name).toBe('second')
  })

  it('should switch to first step and disable/uncomplete everything else on reset', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    let next = form.findComponent({ name: 'FormWizardNext' })

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')

      expect(wizard.vm.current$.name).toBe('second')

      wizard.vm.reset()

      expect(wizard.vm.current$.name).toBe('first')
      expect(wizard.vm.current$.disabled).toBe(false)
      expect(wizard.vm.current$.completed).toBe(false)
      expect(wizard.vm.next$.disabled).toBe(true)
      expect(wizard.vm.next$.completed).toBe(false)

      done()
    })
  })

  it('should enable step when becomes available but already passed', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      wizard: {
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

    let wizard = form.findComponent({ name: 'FormWizard' })

    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)
    expect(second.vm.name).toBe('second')

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    expect(a.vm.name).toBe('a')

    expect(second.vm.disabled).toBe(true)

    wizard.vm.goTo('third')

    LocalVue.nextTick(() => {
      a.vm.update(1)

      LocalVue.nextTick(() => {
        expect(second.vm.disabled).toBe(false)
        done()
      })
    })
  })

  it('should trigger `next` event when next button is clicked', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onNextMock = jest.fn(() => {})

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    wizard.vm.on('next', onNextMock)

    let next = form.findComponent({ name: 'FormWizardNext' })

    expect(onNextMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')
      
      expect(onNextMock.mock.calls.length).toBe(1)

      done()
    })
  })

  it('should trigger `previous` event when previous button is clicked', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onPreviousMock = jest.fn(() => {})

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    wizard.vm.on('previous', onPreviousMock)

    let next = form.findComponent({ name: 'FormWizardNext' })
    let previous = form.findComponent({ name: 'FormWizardPrevious' })

    expect(onPreviousMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')
      previous.get('button').trigger('click')
      
      expect(onPreviousMock.mock.calls.length).toBe(1)

      done()
    })
  })

  it('should prevent next when event returns false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onNextMock = jest.fn(() => { return false })

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    wizard.vm.on('next', onNextMock)

    let next = form.findComponent({ name: 'FormWizardNext' })

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')
      
      expect(wizard.vm.current$.name).toBe('first')

      done()
    })
  })

  it('should prevent previous when event returns false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onPreviousMock = jest.fn(() => { return false })

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    wizard.vm.on('previous', onPreviousMock)

    let next = form.findComponent({ name: 'FormWizardNext' })
    let previous = form.findComponent({ name: 'FormWizardPrevious' })

    expect(onPreviousMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      next.get('button').trigger('click')
      previous.get('button').trigger('click')
      
      expect(wizard.vm.current$.name).toBe('second')

      done()
    })
  })

  it('should trigger `select` event when a step is selected', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onSelectMock = jest.fn(() => {})

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    wizard.vm.on('select', onSelectMock)

    let next = form.findComponent({ name: 'FormWizardNext' })
    let previous = form.findComponent({ name: 'FormWizardPrevious' })

    expect(onSelectMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      wizard.vm.goTo('second')
      
      expect(onSelectMock.mock.calls.length).toBe(2)

      done()
    })
  })

  it('should trigger `finish` event when finish button is clicked', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onFinishMock = jest.fn(() => {})

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    wizard.vm.on('finish', onFinishMock)

    expect(onFinishMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      wizard.vm.goTo('second')

      LocalVue.nextTick(() => {
        let finish = form.findComponent({ name: 'FormWizardFinish' })
        
        finish.get('button').trigger('click')

        LocalVue.nextTick(() => {
          expect(onFinishMock.mock.calls.length).toBe(1)

          done()
        })
      })
    })
  })

  it('should prevent finish when a `finish` event returns false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let finishMock = jest.fn(() => {  })

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    wizard.vm.on('finish', () => {
      return false
    })
    wizard.vm.finish = finishMock

    expect(finishMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      wizard.vm.goTo('second')

      LocalVue.nextTick(() => {
        let finish = form.findComponent({ name: 'FormWizardFinish' })
        
        finish.get('button').trigger('click')

        LocalVue.nextTick(() => {
          expect(finishMock.mock.calls.length).toBe(0)

          done()
        })
      })
    })
  })

  it('should call wizard submit on finish', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let submitMock = jest.fn(() => {  })

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    wizard.vm.submit = submitMock

    expect(submitMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      wizard.vm.goTo('second')

      LocalVue.nextTick(() => {
        let finish = form.findComponent({ name: 'FormWizardFinish' })
        
        finish.get('button').trigger('click')

        LocalVue.nextTick(() => {
          expect(submitMock.mock.calls.length).toBe(1)

          done()
        })
      })
    })
  })

  it('should prevent submission if has invalid fields', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let submitMock = jest.fn(() => {  })

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
    wizard.vm.submit = submitMock

    expect(submitMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      wizard.vm.goTo('second')

      LocalVue.nextTick(() => {
        let finish = form.findComponent({ name: 'FormWizardFinish' })
        
        finish.get('button').trigger('click')

        LocalVue.nextTick(() => {
          expect(submitMock.mock.calls.length).toBe(0)
          expect(form.vm.invalid)

          done()
        })
      })
    })
  })

  it('should be pending if has any pending elements', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      validateOn: 'change|step|submit',
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

    let wizard = form.findComponent({ name: 'FormWizard' })

    LocalVue.nextTick(() => {
      wizard.vm.goTo('second')

      LocalVue.nextTick(() => {
        let finish = form.findComponent({ name: 'FormWizardFinish' })

        expect(wizard.vm.pending).toBe(false)
        
        finish.get('button').trigger('click')

        LocalVue.nextTick(() => {
          expect(wizard.vm.pending).toBe(true)

          done()
        })
      })
    })
  })

  it('should be invalid if has any invalid elements', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      validateOn: 'change|step|submit',
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

    LocalVue.nextTick(() => {
      wizard.vm.goTo('second')

      LocalVue.nextTick(() => {
        let finish = form.findComponent({ name: 'FormWizardFinish' })

        expect(wizard.vm.invalid).toBe(false)
        
        finish.get('button').trigger('click')

        LocalVue.nextTick(() => {
          expect(wizard.vm.invalid).toBe(true)

          done()
        })
      })
    })
  })

  it('should be debouncing if has any debouncing elements', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      validateOn: 'change|step|submit',
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
          rules: 'required:debounce=3000'
        },
        b: {
          type: 'text'
        },
      }
    })

    let wizard = form.findComponent({ name: 'FormWizard' })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    expect(a.vm.name).toBe('a')

    LocalVue.nextTick(() => {
      a.get('input').trigger('keyup')

      expect(a.vm.debouncing).toBe(true)
      expect(wizard.vm.debouncing).toBe(true)

      done()
    })
  })

  it('should not be done if has any steps which are not done', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      validateOn: 'change|step|submit',
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
          type: 'text'
        },
      }
    })

    let wizard = form.findComponent({ name: 'FormWizard' })

    expect(wizard.vm.done).toBe(false)

    done()
  })

  it('should be done if all steps are done', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      validateOn: 'change|step|submit',
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
          type: 'text'
        },
      }
    })

    let wizard = form.findComponent({ name: 'FormWizard' })

    let first = form.findAllComponents({ name: 'FormWizardStep' }).at(0)
    let second = form.findAllComponents({ name: 'FormWizardStep' }).at(1)

    first.vm.complete()
    second.vm.complete()

    expect(wizard.vm.done).toBe(true)

    done()
  })
})

const dynamicsTesting = (options) => {
  let {
    suiteName,
    existingBlocks,
    addedBlocks,
    blocks,
    block,
    blocksKeyword,
    blockKeyword,
    blocksSelector,
    blockSelector,
    controlSelectors,
  } = options

  describe(suiteName, () => {
    it('should add a new element', (done) => {
      testDynamics(done, {
        existingElements: ['a'],
        addedElements: ['b'],
        [existingBlocks]: {
          first: {
            label: 'First',
            elements: ['a']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' with existing element', (done) => {
      testDynamics(done, {
        existingElements: ['a'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['a']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' with 3 existing elements in different order', (done) => {
      testDynamics(done, {
        existingElements: ['a', 'b', 'c', 'd'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c', 'a', 'b']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' with 1 existing element while adding a new one', (done) => {
      testDynamics(done, {
        existingElements: ['a', 'b'],
        addedElements: ['c'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['a']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' containing a new element', (done) => {
      testDynamics(done, {
        existingElements: ['a', 'b'],
        addedElements: ['c'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' containing an existing and a new element', (done) => {
      testDynamics(done, {
        existingElements: ['a', 'b'],
        addedElements: ['c'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c', 'b']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' containing 3 existing element in different order and a new one', (done) => {
      testDynamics(done, {
        existingElements: ['a', 'b', 'c'],
        addedElements: ['d'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c', 'b', 'd', 'a']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' containing 3 new elements in a different order', (done) => {
      testDynamics(done, {
        existingElements: ['a'],
        addedElements: ['b', 'c', 'd'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c', 'b', 'd']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' containing 3 new and 3 existing elements, all in different order', (done) => {
      testDynamics(done, {
        existingElements: ['a', 'b', 'c'],
        addedElements: ['d', 'e', 'f'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c', 'a', 'd', 'b', 'f', 'e']
          }
        },
      }, blocksKeyword)
    })
    
    it('should remove element', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a', 'b', 'c']
          }
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      LocalVue.nextTick(() => {
        form.vm.$delete(form.vm.schema, 'b')

        LocalVue.nextTick(() => {
          let a = form.findAllComponents({ name: 'TextElement' }).at(0)
          let c = form.findAllComponents({ name: 'TextElement' }).at(1)
          
          expect(form.findComponent({ name: blockSelector }).exists()).toBe(true)
          expect(form.findComponent({ name: blockSelector }).html()).toContain('First')

          expect(a.exists()).toBe(true)
          expect(c.exists()).toBe(true)

          expect(a.vm.name).toBe('a')
          expect(c.vm.name).toBe('c')

          LocalVue.nextTick(() => {
            expect(a.vm.visible).toBe(true)
            expect(c.vm.visible).toBe(true)

            LocalVue.nextTick(() => {
              if (controlSelectors) {
                expect(form.findComponent({ name: controlSelectors.previous }).vm.visible).toBe(true)
                expect(form.findComponent({ name: controlSelectors.next }).vm.visible).toBe(false)
                expect(form.findComponent({ name: controlSelectors.finish }).vm.visible).toBe(true)
                expect(form.findComponent({ name: controlSelectors.previous }).vm.disabled).toBe(true)
                expect(form.findComponent({ name: controlSelectors.finish }).vm.disabled).toBe(false)
              }
              done()
            })
          })
        })
      })
    })

    it('should add a new ' + blockKeyword + ' with one existing element', (done) => {
      testDynamics(done, {
        existingElements: ['a', 'b', 'c'],
        [existingBlocks]: {
          first: {
            label: 'First',
            elements: ['a', 'b']
          }
        },
        [addedBlocks]: {
          second: {
            label: 'Second',
            elements: ['c']
          }
        },
        [block]: 'second'
      }, blocksKeyword)
    })

    it('should add a new ' + blockKeyword + ' with one existing and one new element', (done) => {
      testDynamics(done, {
        existingElements: ['a', 'b', 'c'],
        addedElements: ['d'],
        [existingBlocks]: {
          first: {
            label: 'First',
            elements: ['a', 'b']
          }
        },
        [addedBlocks]: {
          second: {
            label: 'Second',
            elements: ['c', 'd']
          }
        },
        [block]: 'second'
      }, blocksKeyword)
    })

    it('should add two new steps with one-one existing elements', (done) => {
      testDynamics(done, {
        existingElements: ['a', 'b', 'c'],
        [existingBlocks]: {
          first: {
            label: 'First',
            elements: ['a']
          }
        },
        [addedBlocks]: {
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        [block]: 'second'
      }, blocksKeyword)

      testDynamics(done, {
        existingElements: ['a', 'b', 'c'],
        [existingBlocks]: {
          first: {
            label: 'First',
            elements: ['a']
          }
        },
        [addedBlocks]: {
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        [block]: 'third'
      }, blocksKeyword)
    })
    
    it('should remove first ' + blockKeyword + 'while on first', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      LocalVue.nextTick(() => {
        let blocksComponent = form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.current$.name).toBe('first')

        form.vm.$delete(form.vm[blocks], 'first')

        LocalVue.nextTick(() => {
        LocalVue.nextTick(() => {
        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.current$.name).toBe('second')
          done()
        })
        })
        })
      })
    })
    
    it('should remove second ' + blockKeyword + 'while on first', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      LocalVue.nextTick(() => {
        let blocksComponent = form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.next$.name).toBe('second')

        form.vm.$delete(form.vm[blocks], 'second')

        LocalVue.nextTick(() => {
        LocalVue.nextTick(() => {
        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.next$.name).toBe('third')
          done()
        })
        })
        })
      })
    })
    
    it('should remove first ' + blockKeyword + 'while on second', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      LocalVue.nextTick(() => {
        let blocksComponent = form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.previous$).toBe(undefined)

        blocksComponent.vm.goTo('second')

        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.previous$.name).toBe('first')

          form.vm.$delete(form.vm[blocks], 'first')

          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
            expect(blocksComponent.vm.previous$).toBe(undefined)
            done()
          })
          })
          })
        })
      })
    })
    
    it('should remove second ' + blockKeyword + 'while on second', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      LocalVue.nextTick(() => {
        let blocksComponent = form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.current$.name).toBe('first')

        blocksComponent.vm.goTo('second')

        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.current$.name).toBe('second')

          form.vm.$delete(form.vm[blocks], 'second')

          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
            expect(blocksComponent.vm.current$.name).toBe('first')
            expect(blocksComponent.vm.previous$).toBe(undefined)
            done()
          })
          })
          })
        })
      })
    })
    
    it('should remove third ' + blockKeyword + 'while on second', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      LocalVue.nextTick(() => {
        let blocksComponent =form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.next$.name).toBe('second')

        blocksComponent.vm.goTo('second', true)

        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.next$.name).toBe('third')

          form.vm.$delete(form.vm[blocks], 'third')

          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
            expect(blocksComponent.vm.next$).toBe(undefined)
            done()
          })
          })
          })
        })
      })
    })

    it('should remove second ' + blockKeyword + 'while on third', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      LocalVue.nextTick(() => {
        let blocksComponent =form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.previous$).toBe(undefined)

        blocksComponent.vm.goTo('third')

        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.previous$.name).toBe('second')

          form.vm.$delete(form.vm[blocks], 'second')

          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
            expect(blocksComponent.vm.previous$.name).toBe('first')
            done()
          })
          })
          })
        })
      })
    })

    it('should remove third ' + blockKeyword + 'while on third', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      LocalVue.nextTick(() => {
        let blocksComponent =form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.previous$).toBe(undefined)

        blocksComponent.vm.goTo('third', true)

        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.previous$.name).toBe('second')

          form.vm.$delete(form.vm[blocks], 'third')

          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
            expect(blocksComponent.vm.previous$).toBe(undefined)
            done()
          })
          })
          })
        })
      })
    })
  })
}

dynamicsTesting({
  suiteName: 'Form Wizard Dynamics',
  existingBlocks: 'existingSteps',
  addedBlocks: 'addedSteps',
  blocks: 'wizard',
  block: 'step',
  blocksKeyword: 'wizard',
  blockKeyword: 'step',
  blocksSelector: 'FormWizard',
  blockSelector: 'FormWizardStep',
  controlSelectors: {
    previous: 'FormWizardPrevious',
    next: 'FormWizardNext',
    finish: 'FormWizardFinish',
  }
})

export {
  dynamicsTesting,
}