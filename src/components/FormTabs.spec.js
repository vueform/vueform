import { createForm } from './../utils/testHelpers'
import { createLocalVue } from '@vue/test-utils'

describe('Form Tabs', () => {
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

    tabs.vm.reset()

    expect(tabs.vm.current$.name).toBe('first')
  })
})