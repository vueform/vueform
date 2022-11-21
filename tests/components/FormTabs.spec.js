import { createForm, findAllComponents, findAll } from 'test-helpers'
import { dynamicsTesting } from './FormBlocks.spec.js' 
import { nextTick } from 'vue'
import useFormComponent from './../composables/useFormComponent'

describe('FormTabs', () => {
  useFormComponent({tabs:{a:{label:'a',elements:['el']}},schema:{el:{type:'text'}}}, 'FormTabs')

  describe('rendering', () => {
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

  describe('computed', () => {
    it('return current element for current$', async () => {
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

      findAll(second, '[role="tab"]').last().trigger('click')

      expect(tabs.vm.current$.name).toBe('second')
    })
  })

  describe('methods', () => {
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

    it('should go to first tab when form is resetted', async () => {
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

      await nextTick()
      tabs.vm.goTo('third', true)

      await nextTick()
      expect(tabs.vm.current$.name).toBe('third')

      form.vm.reset()
      
      await nextTick()
      expect(tabs.vm.current$.name).toBe('first')
    })

    it('should go to first tab when form is cleared', async () => {
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

      await nextTick()
      tabs.vm.goTo('third', true)

      await nextTick()
      expect(tabs.vm.current$.name).toBe('third')

      form.vm.clear()
      
      await nextTick()
      expect(tabs.vm.current$.name).toBe('first')
    })
  })

  describe('events', () => {
    it('should trigger `select` event when tab is changed', () => {
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
      tabs.vm.on('select', onChangeMock)

      let second = findAllComponents(form, { name: 'FormTab' }).at(1)

      expect(second.vm.name).toBe('second')

      expect(onChangeMock.mock.calls.length).toBe(0)

      findAll(second, '[role="tab"]').last().trigger('click')

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
})