import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

expect.extend({toBeVisible})

describe('FormWizardPrevious', () => {
  useFormComponent({wizard:{a:{label:'a',elements:['el']},b:{label:'b',elements:['el2']}},schema:{el:{type:'text'},el2:{type:'text'}}}, 'FormWizardPrevious', )

  describe('label', () => {
    it('should render string label', async () => {
      let form = createForm({
        wizard: {
          first: {
            label: 'First',
            elements: ['a'],
            labels: {
              previous: 'Previous'
            }
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

      await nextTick()
      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardPrevious' }).at(0).html()).toContain('Previous')

      form.vm.wizard.first.labels.previous = 'Not previous'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardPrevious' }).at(0).html()).toContain('Not previous')
    })

    it('should render function label', async () => {
      let form = createForm({
        wizard: {
          first: {
            elements: ['a'],
            labelVar: 'var',
            labels: {
              previous: (step$) => { return 'Previous'+step$.step.labelVar },
            }
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

      await nextTick()
      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardPrevious' }).at(0).html()).toContain('Previousvar')

      form.vm.wizard.first.labelVar = 'notvar'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardPrevious' }).at(0).html()).toContain('Previousnotvar')
    })

    it('should render component label', async () => {
      let form = createForm({
        wizard: {
          first: {
            elements: ['a'],
            labelVar: 'Previous',
            labels: {
              previous: markRaw({
                props: ['step$'],
                render(h) {
                  return createElement(h, 'div', this.step$.step.labelVar)
                }
              }),
            }
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

      await nextTick()
      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardPrevious' }).at(0).html()).toContain('Previous')

      form.vm.wizard.first.labelVar = 'Not previous'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardPrevious' }).at(0).html()).toContain('Not previous')
    })
  })
})