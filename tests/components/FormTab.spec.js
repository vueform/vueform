import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'vue'
import useFormComponent from './../composables/useFormComponent'

expect.extend({toBeVisible})

describe('FormTab', () => {
  useFormComponent({
    tabs:{
      a:{
        label:'a',
        elements:['el']
      }
    },
    schema:{
      el:{type:'text'}
    }
  }, 'FormTab', {
    withView: {
      schema: {
        tabs: {
          a:{
            label: 'a',
            elements: ['el'],
            view: 'custom',
          }
        },
        schema: {
          el: { type:'text'}
        }
      },
      view: 'custom'
    },
    withLocals: {
      schema: {
        tabs: {
          a:{
            label: 'a',
            elements: ['el'],
            overrideClass: 'custom',
          }
        },
        schema: {
          el: { type:'text'}
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
            label: (form$) => { return 'First'+form$.vueform.labelVar },
            elements: ['a'],
          },
          second: {
            label: (form$) => { return 'Second'+form$.vueform.labelVar },
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
              render(h) {
                return createElement(h, 'div', this.form$.vueform.tabs.first.labelVar)
              }
            }),
            labelVar: 'First',
            elements: ['a']
          },
          second: {
            label: markRaw({
              props: ['tab', 'form$'],
              render(h) {
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
      let onActiveMock = jest.fn(() => {})

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
      let onInactiveMock = jest.fn(() => {})

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
})