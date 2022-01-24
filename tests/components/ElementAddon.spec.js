import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'composition-api'
import flushPromises from 'flush-promises'
import useElementComponent from './../composables/useElementComponent'

expect.extend({toBeVisible})

describe('ElementAddon', () => {
  useElementComponent('text', 'ElementAddon', { addons:{before:'before'} })

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

      form.vm.vueform.schema.el.addons.before = 'not before'

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
                return el$.form$.vueform.schema.el.beforeVar
              }
            }
          }
        }
      })

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('before var')

      form.vm.vueform.schema.el.beforeVar = 'not before var'

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
                inject: ['el$', 'form$'],
                render(h) {
                  return createElement(h, 'div', this.form$.value ? this.form$.value.options.schema.el.beforeVar : this.form$.options.schema.el.beforeVar)
                }
              })
            } 
          }
        }
      })

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('before var')

      form.vm.vueform.schema.el.beforeVar = 'not before var'

      await nextTick()

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('not before var')
    })
  })
})