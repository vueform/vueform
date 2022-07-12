import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'vue'
import useFormComponent from './../composables/useFormComponent'

expect.extend({toBeVisible})

describe('FormStepsControl', () => {
  useFormComponent({steps:{a:{label:'a',elements:['el']}},schema:{el:{type:'text'}}}, 'FormStepsControl')

  describe('label', () => {
    it('should render Previous if type previous', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
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

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(0).html()).toContain(form.vm.__('vueform.steps.previous'))
    })

    it('should render Next if type next', async () => {
      let form = createForm({
        steps: {
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

      await nextTick()
      await nextTick()

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(1).html()).toContain(form.vm.__('vueform.steps.next'))
    })

    it('should render Finish if type finish', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
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

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(2).html()).toContain(form.vm.__('vueform.steps.finish'))
    })

    it('should not render buttons.type if false', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
            buttons: {
              previous: false,
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

      let control = findAllComponents(form, { name: 'FormStepsControl' }).at(0)

      expect(control.html() === undefined || !control.html().includes(form.vm.__('vueform.steps.previous'))).toBe(true)

      form.vm.vueform.steps.first.buttons.previous = true
      await nextTick()
      expect(control.html() !== undefined || control.html().includes(form.vm.__('vueform.steps.previous'))).toBe(true)
    })

    it('should render string label', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['a'],
            labels: {
              previous: 'Back'
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

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(0).html()).toContain('Back')

      form.vm.vueform.steps.first.labels.previous = 'Not back'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(0).html()).toContain('Not back')
    })

    it('should render function label', async () => {
      let form = createForm({
        steps: {
          first: {
            elements: ['a'],
            labelVar: 'var',
            labels: {
              previous: (form$) => { return 'Back'+form$.vueform.steps.first.labelVar },
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

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(0).html()).toContain('Backvar')

      form.vm.vueform.steps.first.labelVar = 'notvar'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(0).html()).toContain('Backnotvar')
    })

    it('should render component label', async () => {
      let form = createForm({
        steps: {
          first: {
            elements: ['a'],
            labelVar: 'Back',
            labels: {
              previous: markRaw({
                props: ['step$'],
                render(h) {
                  return createElement(h, 'div', this.step$.form$.vueform.steps.first.labelVar)
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

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(0).html()).toContain('Back')

      form.vm.vueform.steps.first.labelVar = 'Not back'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(0).html()).toContain('Not back')
    })
  })
})