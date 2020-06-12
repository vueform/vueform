import { createForm } from './../utils/testHelpers'
import { createLocalVue } from '@vue/test-utils'

describe('Form Tabs', () => {
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
    expect(form.findAllComponents({ name: 'FormTab' }).length).toBe(2)
  })

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
    let second = form.findAllComponents({ name: 'FormTab' }).at(1)

    expect(second.vm.name).toBe('second')

    second.get('a').trigger('click')

    expect(tabs.vm.current$.name).toBe('second')
  })

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

  it('should switch to first tab on reset', () => {
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
    let second = form.findAllComponents({ name: 'FormTab' }).at(1)

    expect(second.vm.name).toBe('second')

    second.get('a').trigger('click')

    expect(tabs.vm.current$.name).toBe('second')

    tabs.vm.reset()

    expect(tabs.vm.current$.name).toBe('first')
  })

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

    let second = form.findAllComponents({ name: 'FormTab' }).at(1)

    expect(second.vm.name).toBe('second')

    expect(onChangeMock.mock.calls.length).toBe(0)

    second.get('a').trigger('click')

    expect(onChangeMock.mock.calls.length).toBe(1)
  })
})