import { createForm } from './../../src/utils/testHelpers'
import { createLocalVue } from '@vue/test-utils'

describe('Form Wizard Controls', () => {
  it('should disable previous button on first step', (done) => {
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
})