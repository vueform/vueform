import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'vue'
import useFormComponent from './../composables/useFormComponent'

expect.extend({toBeVisible})

describe('FormTab', () => {
  useFormComponent({
    tabs: {
      a: {
        label: 'a',
        elements: ['el']
      }
    },
    schema: {
      el: { type: 'text' }
    }
  }, 'FormTab', {
    withView: {
      schema: {
        tabs: {
          a: {
            label: 'a',
            elements: ['el'],
            view: 'custom',
          }
        },
        schema: {
          el: { type: 'text' }
        }
      },
      view: 'custom'
    },
    withLocals: {
      schema: {
        tabs: {
          a: {
            label: 'a',
            elements: ['el'],
            overrideClass: 'custom',
          }
        },
        schema: {
          el: { type: 'text' }
        }
      },
      class: 'custom'
    }
  })
  
  describe('label', () => {
    it('should render step label', async () => {
      let form = createForm({
        tabs: {
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
      
      expect(findAllComponents(form, { name: 'FormTab' }).at(0).html()).toContain('First')
      expect(findAllComponents(form, { name: 'FormTab' }).at(1).html()).toContain('Second')
      
      form.vm.vueform.tabs.first.label = 'Not first'
      
      await nextTick()
      
      expect(findAllComponents(form, { name: 'FormTab' }).at(0).html()).toContain('Not first')
    })
    
    it('should render step label as function', async () => {
      let form = createForm({
        labelVar: 'var',
        tabs: {
          first: {
            label: (form$) => {
              return 'First' + form$.vueform.labelVar
            },
            elements: ['a'],
          },
          second: {
            label: (form$) => {
              return 'Second' + form$.vueform.labelVar
            },
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
      
      expect(findAllComponents(form, { name: 'FormTab' }).at(0).html()).toContain('Firstvar')
      expect(findAllComponents(form, { name: 'FormTab' }).at(1).html()).toContain('Secondvar')
      
      form.vm.vueform.labelVar = 'notvar'
      
      await nextTick()
      
      expect(findAllComponents(form, { name: 'FormTab' }).at(0).html()).toContain('Firstnotvar')
      expect(findAllComponents(form, { name: 'FormTab' }).at(1).html()).toContain('Secondnotvar')
    })
    
    it('should render step label as component', async () => {
      let form = createForm({
        tabs: {
          first: {
            label: markRaw({
              props: ['tab', 'form$'],
              render(h)
              {
                return createElement(h, 'div', this.form$.vueform.tabs.first.labelVar)
              }
            }),
            labelVar: 'First',
            elements: ['a']
          },
          second: {
            label: markRaw({
              props: ['tab', 'form$'],
              render(h)
              {
                return createElement(h, 'div', this.form$.vueform.tabs.first.labelVar)
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
      
      expect(findAllComponents(form, { name: 'FormTab' }).at(0).html()).toContain('First')
      expect(findAllComponents(form, { name: 'FormTab' }).at(1).html()).toContain('Second')
      
      form.vm.vueform.tabs.first.labelVar = 'Not first'
      
      await nextTick()
      
      expect(findAllComponents(form, { name: 'FormTab' }).at(0).html()).toContain('Not first')
    })
  })
  
  describe('elements', () => {
    
    it('should be [] by default', async () => {
      
      const form = createForm({
        tabs: {
          page0: {
            label: 'Tab 1'
          }
        }
      })
      
      const FormTab = findAllComponents(form, { name: 'FormTab' }).at(0)
      
      expect(FormTab.vm.elements).toStrictEqual([])
    })
  })
  
  describe('classes', () => {
    it('should add class defined in schema to classes list', () => {
      let form = createForm({
        tabs: {
          first: {
            label: 'First',
            addClass: 'class-a',
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
      
      expect(findAllComponents(form, { name: 'FormTab' }).at(0).classes()).toContain('class-a')
    })
  })
  
  describe('select', () => {
    
    it('should not trigger activate on already active tab', async () => {
      
      const form = createForm({
        tabs: {
          page0: {
            label: 'Tab 1',
            elements: ['a']
          },
          page1: {
            label: 'Tab 2',
            elements: ['b']
          },
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      await nextTick()
      let Tab2 = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      findAll(Tab2, '[role="tab"]').last().trigger('click')
      expect(Tab2.emitted().activate.length).toBe(1)
      
      findAll(Tab2, '[role="tab"]').last().trigger('click')
      expect(Tab2.emitted().activate.length).toBe(1)
    })
    
    it('should activate on click and deactivate others', async () => {
      let form = createForm({
        tabs: {
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
      
      await nextTick()
      let first = findAllComponents(form, { name: 'FormTab' }).at(0)
      let second = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(first.vm.active).toBe(true)
      expect(second.vm.active).toBe(false)
      
      findAll(second, '[role="tab"]').last().trigger('click')
      
      expect(first.vm.active).toBe(false)
      expect(second.vm.active).toBe(true)
    })
    
    it('should show active\'s elements and hide others', async () => {
      let form = createForm({
        tabs: {
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
      }, {
        attach: true
      })
      
      let second = findAllComponents(form, { name: 'FormTab' }).at(1)
      
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
      
      findAll(second, '[role="tab"]').last().trigger('click')
      
      await nextTick()
      expect(a.vm.$el).not.toBeVisible()
      expect(b.vm.$el).not.toBeVisible()
      expect(c.vm.$el).toBeVisible()
      expect(d.vm.$el).toBeVisible()
    })
  })
  
  describe('conditions', () => {
    it('should forward conditions to child elements', async () => {
      let conditions = [
        ['a', 1],
        ['b', 2],
      ]
      
      let form = createForm({
        tabs: {
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
      expect(c.vm.conditionList).toStrictEqual(conditions)
      expect(d.vm.conditionList).toStrictEqual(_.concat([['c', 3]], conditions))
    })
    
    it('should hide tab if its conditions aren\'t met', async () => {
      let form = createForm({
        tabs: {
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
      
      let second = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(second.vm.name).toBe('second')
      
      expect(second.element).not.toBeVisible()
    })
    
    it('should show tab if its conditions are met', async () => {
      let form = createForm({
        tabs: {
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
      
      let second = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(second.vm.name).toBe('second')
      
      await nextTick()
      expect(second.html()).toContain('Second')
    })
  })
  
  describe('events', () => {
    it('should trigger `activate` event when selected', async () => {
      let onActiveMock = jest.fn(() => {
      })
      
      let form = createForm({
        tabs: {
          first: {
            label: 'First',
            elements: ['a'],
          },
          second: {
            label: 'Second',
            elements: ['b'],
            onActivate: onActiveMock
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
      
      let second = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(second.vm.name).toBe('second')
      
      expect(onActiveMock.mock.calls.length).toBe(0)
      
      findAll(second, '[role="tab"]').last().trigger('click')
      
      await nextTick()
      await nextTick()
      
      expect(onActiveMock.mock.calls.length).toBe(1)
    })
    
    it('should trigger `inactivate` event when an other tab is selected', async () => {
      let onInactiveMock = jest.fn(() => {
      })
      
      let form = createForm({
        tabs: {
          first: {
            label: 'First',
            elements: ['a'],
            onInactivate: onInactiveMock
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
      
      let second = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(second.vm.name).toBe('second')
      
      expect(onInactiveMock.mock.calls.length).toBe(0)
      
      await nextTick()
      findAll(second, '[role="tab"]').last().trigger('click')
      
      await nextTick()
      
      expect(onInactiveMock.mock.calls.length).toBe(1)
    })
  })
  
  
  describe('computed', () => {
    
    it('should return true if it is the first tab (isFirst)', async () => {
      
      const form = createForm({
        tabs: {
          page0: {
            label: 'Tab 1'
          },
          page1: {
            label: 'Tab 2'
          },
        }
      })
      
      const FormTab1 = findAllComponents(form, { name: 'FormTab' }).at(0)
      const FormTab2 = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(FormTab1.vm.isFirst).toBe(true)
      expect(FormTab2.vm.isFirst).toBe(false)
    })
    
    it('should return true if it is the last tab (isLast)', async () => {
      
      const form = createForm({
        tabs: {
          page0: {
            label: 'Tab 1'
          },
          page1: {
            label: 'Tab 2'
          },
        }
      })
      
      const FormTab1 = findAllComponents(form, { name: 'FormTab' }).at(0)
      const FormTab2 = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(FormTab1.vm.isLast).toBe(false)
      expect(FormTab2.vm.isLast).toBe(true)
    })
    
    it('should activate tab but return if already active (activate)', async () => {
      
      const form = createForm({
        tabs: {
          page0: {
            label: 'Tab 1'
          },
          page1: {
            label: 'Tab 2'
          },
        }
      })
      
      const FormTab2 = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(FormTab2.vm.active).toBe(false)
      
      FormTab2.vm.activate()
      
      expect(FormTab2.vm.active).toBe(true)
      expect(FormTab2.emitted().activate.length).toBe(1)
      
      FormTab2.vm.activate()
      
      expect(FormTab2.emitted().activate.length).toBe(1)
    })
    
    it('should assign tab to its parent (assignToParent)', async () => {
      
      const tabs = {
        page0: {
          label: 'Tab 1'
        },
        page1: {
          label: 'Tab 2',
        }
      }
      
      const form = createForm({
        tabs
      })
      
      const FormTabs = findAllComponents(form, { name: 'FormTabs' }).at(0)
      const FormTab1 = findAllComponents(form, { name: 'FormTab' }).at(0)
      const FormTab2 = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(FormTabs.vm.tabs$Array).toStrictEqual([FormTab1.vm, FormTab2.vm])
    })
    
    it('should assign tab to its parent even if it is wrapped away (assignToParent)', async () => {
      
      const form = createForm({}, {}, function (h) {
        return createElement(h, 'form', [
          createElement(h, 'FormTabs', [
            createElement(h, 'ObjectElement', [
              createElement(h, 'FormTab', {
                props: {
                  name: 'tab1'
                },
              }),
              createElement(h, 'FormTab', {
                props: {
                  name: 'tab2'
                }
              }),
            ])
          ])
        ])
      })
      
      const tabs = findAllComponents(form, { name: 'FormTabs' }).at(0)
      const FormTab1 = findAllComponents(form, { name: 'FormTab' }).at(0)
      const FormTab2 = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(tabs.vm.tabs$Array).toStrictEqual([FormTab1.vm, FormTab2.vm])
    })
    
  })
  
  describe('methods', () => {
    
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
      
      const form = createForm({}, {}, function (h) {
        return createElement(h, 'form', [
          createElement(h, 'FormTabs', [
            createElement(h, {
              render()
              {
                return createElement(h, 'div', [this.$slots.default()])
              }
            }, [
              createElement(h, 'FormTab', {
                name: 'page0',
                label: 'Tab 1'
              }),
              createElement(h, 'FormTab', {
                name: 'page1',
                label: 'Tab 2'
              }),
            ]),
            createElement(h, 'FormElements')
          ]),
        ])
      })
      
      const tabs = findAllComponents(form, { name: 'FormTabs' }).at(0)
      const FormTab1 = findAllComponents(form, { name: 'FormTab' }).at(0)
      const FormTab2 = findAllComponents(form, { name: 'FormTab' }).at(1)
      
      expect(tabs.vm.tabs$Array).toStrictEqual([FormTab1.vm, FormTab2.vm])
    })
    
    it('should remove tab from its parent (removeFromParent)', async () => {
      
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
      
      delete tabs.page1
      form.vm.$set(form.vm.vueform, 'tabs', { ...tabs })
      
      await nextTick()
      
      const FormTabs = findAllComponents(form, { name: 'FormTabs' }).at(0)
      const FormTab1 = findAllComponents(form, { name: 'FormTab' }).at(0)
      
      expect(FormTabs.vm.tabs$Array).toStrictEqual([FormTab1.vm])
    })
    
    it('should reset child conditions (resetChildConditions) includes remove and add', async () => {
      
      const form = createForm({
        tabs: {
          page0: {
            label: 'Tab 1',
            elements: ['a', 'b'],
          },
          page1: {
            label: 'Tab 2',
            elements: ['c'],
            conditions: [
              ['b', 'in', 1]
            ]
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
            type: 'text',
            conditions: [
              ['a', 'in', ['something']]
            ]
          },
        }
      })
      
      const FormTab = findAllComponents(form, { name: 'FormTab' }).at(1)
      const c = form.vm.el$('c')
      
      // initial setup
      expect(FormTab.vm.conditions).toStrictEqual([['b', 'in', 1]])
      expect(c.conditionList).toStrictEqual([
        ['a', 'in', ['something']]
      ])
      
      // change setup
      form.vm.$set(form.vm.vueform.tabs.page1, 'conditions', [['a', 'in', 1]])
      await nextTick()
      
      FormTab.vm.resetChildConditions()
      FormTab.vm.updateConditions()
      await nextTick()
      
      // result
      expect(FormTab.vm.conditions).toStrictEqual([['a', 'in', 1]])
      expect(c.conditionList).toStrictEqual([
        ['a', 'in', ['something']],
        ['a', 'in', 1]
      ])
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
  
  describe('watchers', () => {
    
    // @todo:adam
    // it('should remove child conditions if the new condition list is empty or does not exist', async () => {
      
    //   const tabs = {
    //     page0: {
    //       label: 'Tab 1',
    //       elements: ['a', 'b'],
    //     },
    //     page1: {
    //       label: 'Tab 2',
    //       elements: ['c'],
    //       conditions: [
    //         ['a', 'not_empty']
    //       ]
    //     },
    //   }
      
    //   const form = createForm({
    //     tabs,
    //     schema: {
    //       a: { type: 'text' },
    //       b: { type: 'text' },
    //       c: { type: 'text' },
    //     }
    //   })
      
    //   const FormTab = findAllComponents(form, { name: 'FormTab' }).at(1)
      
    //   tabs.page1.conditions = []
    //   form.vm.$set(form.vm.vueform.tabs, 'page1', { ...tabs.page1 })
    //   await nextTick()
    //   FormTab.vm.updateConditions()
    //   await nextTick()
      
    //   expect(FormTab.vm.conditionList).toStrictEqual([])
    // })
    
    it('should activate new elements in active tab', async () => {
      
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
      
      const schema = {
        a: { type: 'text' },
        b: { type: 'text' },
      }
      
      const form = createForm({
        tabs,
        schema,
      })
      
      form.vm.$set(form.vm.vueform.schema, 'c', { type: 'text' })
      form.vm.$set(form.vm.vueform.tabs.page0, 'elements', ['a', 'c'])
      await nextTick()
      
      expect(form.vm.elements$.a.active).toBe(true)
      expect(form.vm.elements$.b.active).toBe(false)
      expect(form.vm.elements$.c.active).toBe(true)
    })
  })
})