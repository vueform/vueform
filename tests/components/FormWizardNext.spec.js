import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

expect.extend({toBeVisible})

describe('FormWizardNext', () => {
  useFormComponent({wizard:{a:{label:'a',elements:['el']},b:{label:'b',elements:['el2']}},schema:{el:{type:'text'},el2:{type:'text'}}}, 'FormWizardNext', )

  describe('label', () => {
    it('should render string label', async () => {
      let form = createForm({
        wizard: {
          first: {
            label: 'First',
            elements: ['a'],
            labels: {
              next: 'Next'
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

      expect(findAllComponents(form, { name: 'FormWizardNext' }).at(0).html()).toContain('Next')

      form.vm.wizard.first.labels.next = 'Not next'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardNext' }).at(0).html()).toContain('Not next')
    })

    it('should render function label', async () => {
      let form = createForm({
        wizard: {
          first: {
            elements: ['a'],
            labelVar: 'var',
            labels: {
              next: (step$) => { return 'Next'+step$.step.labelVar },
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

      expect(findAllComponents(form, { name: 'FormWizardNext' }).at(0).html()).toContain('Nextvar')

      form.vm.wizard.first.labelVar = 'notvar'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardNext' }).at(0).html()).toContain('Nextnotvar')
    })

    it('should render component label', async () => {
      let form = createForm({
        wizard: {
          first: {
            elements: ['a'],
            labelVar: 'Next',
            labels: {
              next: markRaw({
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

      expect(findAllComponents(form, { name: 'FormWizardNext' }).at(0).html()).toContain('Next')

      form.vm.wizard.first.labelVar = 'Not next'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormWizardNext' }).at(0).html()).toContain('Not next')
    })
  })
})