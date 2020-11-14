import { createForm, findAllComponents } from 'test-helpers'
import { createLocalVue } from '@vue/test-utils'
import { dynamicsTesting } from './FormBlocks.spec.js' 

describe('Form Tabs Rendering', () => {
  it('should render tabs', () => {
    let form = createForm({
      tabs: {
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
    expect(findAllComponents(form, { name: 'FormTab' }).length).toBe(2)
  })
})

describe('Form Tabs Computed', () => {
  it('return current element for current$', () => {
    let form = createForm({
      tabs: {
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

    let tabs = form.findComponent({ name: 'FormTabs' })
    let second = findAllComponents(form, { name: 'FormTab' }).at(1)

    expect(second.vm.name).toBe('second')

    second.get('a').trigger('click')

    expect(tabs.vm.current$.name).toBe('second')
  })
})

describe('Form Tabs Methods', () => {
  it('should find tab by name', () => {
    let form = createForm({
      tabs: {
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

    let tabs = form.findComponent({ name: 'FormTabs' })

    expect(tabs.vm.tab$('second').name).toBe('second')
  })

  it('should go to first tab when form is resetted', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      tabs: {
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

    let tabs = form.findComponent({ name: 'FormTabs' })

    LocalVue.nextTick(() => {
      tabs.vm.goTo('third', true)

      LocalVue.nextTick(() => {
        expect(tabs.vm.current$.name).toBe('third')

        form.vm.reset()
        
        LocalVue.nextTick(() => {
          expect(tabs.vm.current$.name).toBe('first')
          done()
        })
      })
    })
  })

  it('should go to first tab when form is cleared', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      tabs: {
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

    let tabs = form.findComponent({ name: 'FormTabs' })

    LocalVue.nextTick(() => {
      tabs.vm.goTo('third', true)

      LocalVue.nextTick(() => {
        expect(tabs.vm.current$.name).toBe('third')

        form.vm.clear()
        
        LocalVue.nextTick(() => {
          expect(tabs.vm.current$.name).toBe('first')
          done()
        })
      })
    })
  })
})

describe('Form Tabs Events', () => {
  it('should trigger `change` event when tab is changed', () => {
    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      tabs: {
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

    let tabs = form.findComponent({ name: 'FormTabs' })
    tabs.vm.on('change', onChangeMock)

    let second = findAllComponents(form, { name: 'FormTab' }).at(1)

    expect(second.vm.name).toBe('second')

    expect(onChangeMock.mock.calls.length).toBe(0)

    second.get('a').trigger('click')

    expect(onChangeMock.mock.calls.length).toBe(1)
  })
})

dynamicsTesting({
  suiteName: 'Form Tabs Dynamics',
  existingBlocks: 'existingTabs',
  addedBlocks: 'addedTabs',
  blocks: 'tabs',
  block: 'tab',
  blocksKeyword: 'tabs',
  blockKeyword: 'tab',
  blocksSelector: 'FormTabs',
  blockSelector: 'FormTab',
  controlSelectors: false
})