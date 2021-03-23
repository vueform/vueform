import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

expect.extend({toBeVisible})

describe('FormWizardFinish', () => {
  useFormComponent({steps:{a:{label:'a',elements:['el']}},schema:{el:{type:'text'}}}, 'FormWizardFinish', )

  describe('label', () => {
    it('should render string label', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
            labels: {
              finish: 'Finish'
            }
          },
        },
        schema: {
          a: {
            type: 'text'
          },
        }
      })

      await nextTick()
      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardFinish' }).at(0).html()).toContain('Finish')

      form.vm.steps.first.labels.finish = 'Not finish'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardFinish' }).at(0).html()).toContain('Not finish')
    })

    it('should render function label', async () => {
      let form = createForm({
        steps: {
          first: {
            elements: ['a'],
            labelVar: 'var',
            labels: {
              finish: (step$) => { return 'Finish'+step$.step.labelVar },
            }
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
      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardFinish' }).at(0).html()).toContain('Finishvar')

      form.vm.steps.first.labelVar = 'notvar'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardFinish' }).at(0).html()).toContain('Finishnotvar')
    })

    it('should render component label', async () => {
      let form = createForm({
        steps: {
          first: {
            elements: ['a'],
            labelVar: 'Finish',
            labels: {
              finish: markRaw({
                props: ['step$'],
                render(h) {
                  return createElement(h, 'div', this.step$.step.labelVar)
                }
              }),
            }
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
      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardFinish' }).at(0).html()).toContain('Finish')

      form.vm.steps.first.labelVar = 'Not finish'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardFinish' }).at(0).html()).toContain('Not finish')
    })
  })
})