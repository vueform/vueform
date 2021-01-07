import { createForm, findAllComponents, findAll } from 'test-helpers'
import { nextTick } from 'composition-api'
import { dynamicsTesting } from './FormBlocks.spec' 
import flushPromises from 'flush-promises'

describe('Form Wizard Rendering', () => {
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
    expect(findAllComponents(form, { name: 'FormWizardStep' }).length).toBe(2)
  })
})

describe('Form Wizard Computed', () => {
  it('should be pending if has any pending elements', async () => {
    let form = createForm({
      validateOn: 'change|submit',
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

    let a = form.vm.el$('a')
    let wizard = form.findComponent({ name: 'FormWizard' })

    a.$laraform.services.axios.post = jest.fn(() => { return {  } })

    await nextTick()
    wizard.vm.goTo('second')

    await nextTick()
    let finish = form.findComponent({ name: 'FormWizardFinish' })

    expect(wizard.vm.pending).toBe(false)
    
    findAll(finish, 'button').last().trigger('click')

    await nextTick()

    expect(wizard.vm.pending).toBe(true)

    await flushPromises()
  })

  it('should be invalid if has any invalid elements', async () => {
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

    await nextTick()
    wizard.vm.goTo('second')

    await nextTick()
    let finish = form.findComponent({ name: 'FormWizardFinish' })

    expect(wizard.vm.invalid).toBe(false)
    
    findAll(finish, 'button').last().trigger('click')

    await nextTick()
    expect(wizard.vm.invalid).toBe(true)
  })

  it('should be debouncing if has any debouncing elements', async () => {
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

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    expect(a.vm.name).toBe('a')

    await nextTick()
    findAll(a, 'input').at(0).trigger('input')

    expect(a.vm.debouncing).toBe(true)
    expect(wizard.vm.debouncing).toBe(true)
  })

  it('should not be done if has any steps which are not done', () => {
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
  })

  it('should be done if all steps are done', () => {
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

    let first = findAllComponents(form, { name: 'FormWizardStep' }).at(0)
    let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)

    first.vm.complete()
    second.vm.complete()

    expect(wizard.vm.done).toBe(true)
  })

  it('should return current step for current$', async () => {
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
    let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)
    let next = form.findComponent({ name: 'FormWizardNext' })

    expect(second.vm.name).toBe('second')

    await nextTick()
    expect(wizard.vm.current$.name).toBe('first')

    findAll(next, 'button').last().trigger('click')

    await flushPromises()

    expect(wizard.vm.current$.name).toBe('second')
  })

  it('should return first step for first$', async () => {
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

    await nextTick()
    expect(wizard.vm.first$.name).toBe('first')
  })

  it('should return next step for next$', async () => {
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

    await nextTick()
    expect(wizard.vm.next$.name).toBe('second')
  })

  it('should return previous step for previous$', async () => {
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
    let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)
    let next = form.findComponent({ name: 'FormWizardNext' })

    expect(second.vm.name).toBe('second')

    await nextTick()
    expect(wizard.vm.previous$).toBe(undefined)

    findAll(next, 'button').last().trigger('click')

    await flushPromises()

    expect(wizard.vm.previous$.name).toBe('first')
  })

  it('should return first invalid step for firstInvalid$', async () => {
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
    expect(wizard.vm.firstInvalid$.name).toBe('second')
  })

  it('should return first non done step for firstNonDone$', async () => {
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
    expect(wizard.vm.firstNonDone$.name).toBe('second')
  })

  it('should return last enabled step for lastEnabled$', async () => {
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

    expect(wizard.vm.lastEnabled$.name).toBe('second')
  })

  it('should enable step when becomes available but already passed', async () => {
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

    let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)
    expect(second.vm.name).toBe('second')

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    expect(a.vm.name).toBe('a')

    expect(second.vm.disabled).toBe(true)

    wizard.vm.goTo('third')

    await nextTick()
    a.vm.update(1)

    await nextTick()
    expect(second.vm.disabled).toBe(false)
  })
})

describe('Form Wizard Methods', () => {
  it('goTo should go to a step', () => {
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
  })

  it('should complete all steps with complete() method', async () => {
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
    let first = findAllComponents(form, { name: 'FormWizardStep' }).at(0)
    let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)

    await nextTick()
    wizard.vm.complete()

    expect(first.vm.completed).toBe(true)
    expect(second.vm.completed).toBe(true)
  })

  it('should enable all steps with enableAllSteps() method', async () => {
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
    let first = findAllComponents(form, { name: 'FormWizardStep' }).at(0)
    let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)

    await nextTick()
    wizard.vm.enableAllSteps()

    expect(first.vm.disabled).toBe(false)
    expect(second.vm.disabled).toBe(false)
  })

  it('should enable all steps when data is loaded', async () => {
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

    let first = findAllComponents(form, { name: 'FormWizardStep' }).at(0)
    let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)

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

    let wizard = form.findComponent({ name: 'FormWizard' })
    let first = findAllComponents(form, { name: 'FormWizardStep' }).at(0)
    let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)
    let third = findAllComponents(form, { name: 'FormWizardStep' }).at(2)

    await nextTick()
    expect(first.vm.disabled).toBe(false)
    expect(second.vm.disabled).toBe(true)
    expect(third.vm.disabled).toBe(true)

    wizard.vm.goTo('third', true)

    await nextTick()
    expect(wizard.vm.current$.name).toBe('third')
    expect(first.vm.disabled).toBe(false)
    expect(second.vm.disabled).toBe(false)
    expect(third.vm.disabled).toBe(false)

    form.vm.reset()
    
    await nextTick()
    expect(wizard.vm.current$.name).toBe('first')
    expect(first.vm.disabled).toBe(false)
    expect(second.vm.disabled).toBe(true)
    expect(third.vm.disabled).toBe(true)
  })

  it('should go to first step and disable all others when form is cleared', async () => {
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

    let wizard = form.findComponent({ name: 'FormWizard' })
    let first = findAllComponents(form, { name: 'FormWizardStep' }).at(0)
    let second = findAllComponents(form, { name: 'FormWizardStep' }).at(1)
    let third = findAllComponents(form, { name: 'FormWizardStep' }).at(2)

    await nextTick()
    expect(first.vm.disabled).toBe(false)
    expect(second.vm.disabled).toBe(true)
    expect(third.vm.disabled).toBe(true)

    wizard.vm.goTo('third', true)

    await nextTick()
    expect(wizard.vm.current$.name).toBe('third')
    expect(first.vm.disabled).toBe(false)
    expect(second.vm.disabled).toBe(false)
    expect(third.vm.disabled).toBe(false)

    form.vm.clear()
    
    await nextTick()
    expect(wizard.vm.current$.name).toBe('first')
    expect(first.vm.disabled).toBe(false)
    expect(second.vm.disabled).toBe(true)
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

  it('should switch to first step and disable/uncomplete everything else on reset', async () => {
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

    await nextTick()
    findAll(next, 'button').last().trigger('click')

    await flushPromises()

    expect(wizard.vm.current$.name).toBe('second')

    wizard.vm.reset()

    expect(wizard.vm.current$.name).toBe('first')
    expect(wizard.vm.current$.disabled).toBe(false)
    expect(wizard.vm.current$.completed).toBe(false)
    expect(wizard.vm.next$.disabled).toBe(true)
    expect(wizard.vm.next$.completed).toBe(false)
  })
})

describe('Form Wizard Events', () => {
  it('should trigger `next` event when next button is clicked', async () => {
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

    await nextTick()
    
    findAll(next, 'button').last().trigger('click')

    await flushPromises()
    
    expect(onNextMock.mock.calls.length).toBe(1)
  })

  it('should trigger `previous` event when previous button is clicked', async () => {
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

    await nextTick()
    findAll(next, 'button').last().trigger('click')

    await flushPromises()

    findAll(previous, 'button').at(0).trigger('click')
    
    expect(onPreviousMock.mock.calls.length).toBe(1)
  })

  it('should trigger `select` event when a step is selected', async () => {
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

    await nextTick()
    wizard.vm.goTo('second')
    
    expect(onSelectMock.mock.calls.length).toBe(2)
  })

  it('should trigger `finish` event when finish button is clicked', async () => {
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

    form.vm.$laraform.services.axios = {
      post: () => ({data:{}})
    }

    let wizard = form.findComponent({ name: 'FormWizard' })
    wizard.vm.on('finish', onFinishMock)

    expect(onFinishMock.mock.calls.length).toBe(0)

    await nextTick()
    wizard.vm.goTo('second')

    await nextTick()
    let finish = form.findComponent({ name: 'FormWizardFinish' })
    
    findAll(finish, 'button').last().trigger('click')

    expect(onFinishMock.mock.calls.length).toBe(1)

    await flushPromises()
  })
})

// dynamicsTesting({
//   suiteName: 'Form Wizard Dynamics',
//   existingBlocks: 'existingSteps',
//   addedBlocks: 'addedSteps',
//   blocks: 'wizard',
//   block: 'step',
//   blocksKeyword: 'wizard',
//   blockKeyword: 'step',
//   blocksSelector: 'FormWizard',
//   blockSelector: 'FormWizardStep',
//   controlSelectors: {
//     previous: 'FormWizardPrevious',
//     next: 'FormWizardNext',
//     finish: 'FormWizardFinish',
//   }
// })