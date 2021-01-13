import { createForm, createElement } from 'test-helpers'
import { nextTick, markRaw } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

describe('FormElement', () => {
  useFormComponent({schema:{el:{type:'text'}}}, 'FormElements')

  describe('rendering', () => {
    it('should render element based on type', () => {
      let form = createForm({
        schema: {
          name: {
            type: 'text'
          }
        }
      })

      expect(form.findComponent({name: 'TextElement'}).exists()).toBe(true)
    })

    it('should render element based on component', () => {
      let form = createForm({
        schema: {
          name: {
            component: markRaw({
              name: 'CustomElement',
              render(h) {
                return createElement(h, 'div', 'Custom Element')
              }
            })
          }
        }
      })

      expect(form.findComponent({name: 'CustomElement'}).exists()).toBe(true)
    })

    it('should render elements in order of wizard `elements`', async () => {
      let form = createForm({
        wizard: {
          first: {
            elements: ['a', 'b']
          },
          second: {
            elements: ['c']
          },
        },
        schema: {
          b: {
            type: 'text,'
          },
          c: {
            type: 'text,'
          },
          a: {
            type: 'text,'
          },
        }
      })

      await nextTick()
      expect(_.keys(form.findComponent({ name: 'FormElements' }).vm.schema)).toStrictEqual(['a', 'b', 'c'])
    })

    it('should render elements in order of tabs `elements`', async () => {
      let form = createForm({
        tabs: {
          first: {
            elements: ['a', 'b']
          },
          second: {
            elements: ['c']
          },
        },
        schema: {
          b: {
            type: 'text,'
          },
          c: {
            type: 'text,'
          },
          a: {
            type: 'text,'
          },
        }
      })

      await nextTick()
      expect(_.keys(form.findComponent({ name: 'FormElements' }).vm.schema)).toStrictEqual(['a', 'b', 'c'])
    })
  })
})