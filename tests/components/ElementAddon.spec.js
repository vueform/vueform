import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'composition-api'
import flushPromises from 'flush-promises'
import useElementComponent from './../composables/useElementComponent'

expect.extend({toBeVisible})

describe('ElementAddon', () => {
  let form = createForm({
    schema: {
      el: {
        type: 'text',
        addons: {
          before: 'before'
        }
      }
    }
  })

  let ElementAddon = findAllComponents(form, { name: 'ElementAddon' }).at(0)

  useElementComponent('text', 'ElementAddon', { addons:{before:'before'} }, {
    mergeWith: {
      container: ElementAddon.vm.classes.before
    }
  })

  describe('classes', () => {
    it('should add after class to container when type=after', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            addons: {
              before: 'before'
            }
          }
        }
      })

      let component = findAllComponents(form, { name: 'ElementAddon' }).at(0).vm

      expect(component.classes.container).not.toContain(component.classes.after)

      form.vm.$set(form.vm.laraform.schema.el, 'addons', { after: 'after' })

      await nextTick()

      component = findAllComponents(form, { name: 'ElementAddon' }).at(0).vm

      expect(component.classes.container).toContain(component.classes.after)
      
    // destroy(form) // teardown
    })
  })

  describe('rendering', () => {
    it('should render as a string', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            addons: {
              before: 'before'
            }
          }
        }
      })

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('before')

      form.vm.laraform.schema.el.addons.before = 'not before'

      await nextTick()

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('not before')
    })

    it('should render the value of a function', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            beforeVar: 'before var',
            addons: {
              before: (el$) => {
                return el$.form$.laraform.schema.el.beforeVar
              }
            }
          }
        }
      })

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('before var')

      form.vm.laraform.schema.el.beforeVar = 'not before var'

      await nextTick()

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('not before var')
    })

    it('should render as a component', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            beforeVar: 'before var',
            addons: {
              before: markRaw({
                props: ['el$'],
                render(h) {
                  return createElement(h, 'div', this.el$.form$.laraform.schema.el.beforeVar)
                }
              })
            } 
          }
        }
      })

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('before var')

      form.vm.laraform.schema.el.beforeVar = 'not before var'

      await nextTick()

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('not before var')
    })
  })
})