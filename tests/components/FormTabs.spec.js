import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
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
    
    it('should assign tab to its parent (assignToParent)', async () => {
      
      const tabs = {
        page0: {
          label: 'Tab 1',
          elements: ['a'],
        },
        page1: {
          label: 'Tab 2',
          elements: ['b'],
        }
      }
      
      const form = createForm({
        tabs,
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      const FormTabs = findAllComponents(form, { name: 'FormTabs' }).at(0)
      const FormTab1 = findAllComponents(form, { name: 'FormTab' }).at(0)
      const FormTab2 = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(FormTabs.vm.tabs$Array).toStrictEqual([FormTab1.vm, FormTab2.vm])
    })
    
    it('should assign tab to its parent even if it is wrapped away (assignToParent)', async () => {
      
      const form = createForm({}, {}, function(h) {
        return createElement(h, 'form', [
          createElement(h, {
            render() {
              return createElement(h, 'div', [this.$slots.default()])
            }
          }, [
            createElement(h, 'FormTabs', [
              createElement(h, 'FormTab', {
                name: 'page0',
                label: 'Tab 1'
              }),
              createElement(h, 'FormTab', {
                name: 'page1',
                label: 'Tab 2'
              }),
            ]),
          ]),
          createElement(h, 'FormElements')
        ])
      })
      
      const tabs = findAllComponents(form, { name: 'FormTabs' }).at(0)
      const FormTab1 = findAllComponents(form, { name: 'FormTab' }).at(0)
      const FormTab2 = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(tabs.vm.tabs$Array).toStrictEqual([FormTab1.vm, FormTab2.vm])
    })
    
    it('should remove tab from its parent (removeFromParent)', async () => {
      
      const form = createForm({
        tabs: {
          page0: {
            label: 'Tab 1',
            elements: ['a'],
          },
          page1: {
            label: 'Tab 2',
            elements: ['b'],
          }
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      await nextTick()
      await nextTick()
      
      form.vm.$delete(form.vm.vueform, 'tabs')
      
      await nextTick()
      await nextTick()
      await nextTick()
      await nextTick()
      await nextTick()
      
      expect(form.vm.tabs$).toBe(null)
    })
    
    //@todo:adam test later for recursive removing
    // it('should remove tab from its parent even if it is wrapped away (removeFromParent)', async () => {
    //
    //   const form = createForm({}, {}, function(h) {
    //     return createElement(h, 'form', [
    //       createElement(h, 'FormTabs', [
    //         createElement(h, 'ObjectElement', [
    //           createElement(h, 'FormTab', {
    //             props: {
    //               name: 'page0'
    //             },
    //           }),
    //           createElement(h, 'FormTab', {
    //             props: {
    //               name: 'page1'
    //             }
    //           }),
    //         ])
    //       ])
    //     ])
    //   })
    //
    //   const tabs = findAllComponents(form, { name: 'FormTabs' }).at(0)
    //   const FormTab1 = findAllComponents(form, { name: 'FormTab' }).at(0)
    //   const FormTab2 = findAllComponents(form, { name: 'FormTab' }).at(1)
    //
    //   // expect(tabs.vm.tabs$Array).toStrictEqual([FormTab1.vm])
    // })
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
  
  describe('watchers', () => {
    
    it('should activate first tab if current tab is removed', async () => {
      
      const tabs = {
        page0: {
          label: 'Tab 1',
          elements: ['a'],
        },
        page1: {
          label: 'Tab 2',
          elements: ['b'],
        },
      }
      
      const form = createForm({
        tabs,
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
          c: { type: 'text' },
        }
      })
      
      form.vm.tabs$.tabs$.page1.select()
      
      await nextTick()
      expect(form.vm.tabs$.tabs$.page1.active).toBe(true)
      
      delete tabs.page1
      form.vm.$set(form.vm.vueform, 'tabs', { ...tabs })
      
      await nextTick()
      await nextTick()
      await nextTick()
      
      expect(form.vm.tabs$.tabs$.page0.active).toBe(true)
      
    })
    
    it('should sort tabs$Array on new tab', async () => {
      
      const tabs = {
        a_page: {
          label: 'Tab 1',
          elements: ['a'],
        },
        b_page: {
          label: 'Tab 2',
          elements: ['b'],
        },
        c_page: {
          label: 'Tab 3',
          elements: ['c'],
        },
      }
      
      const form = createForm({
        tabs,
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
          c: { type: 'text' },
        }
      })
      
      const contentsOfCPage = findAllComponents(form, { name: 'FormTab'}).at(2)
      
      expect(form.vm.tabs$.tabs$Array[2]).toStrictEqual(contentsOfCPage.vm)
      
      delete tabs.b_page
      
      form.vm.$set(form.vm.vueform, 'tabs', { ...tabs })
      await nextTick()
      
      expect(form.vm.tabs$.tabs$Array[1]).toStrictEqual(contentsOfCPage.vm)
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