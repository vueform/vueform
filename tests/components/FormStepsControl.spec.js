import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

expect.extend({toBeVisible})

describe('FormStepsControl', () => {
  let form = createForm({
    steps: {
      a: {
        label: 'a',
        elements: ['el']
      }
    },
    schema: {
      el: {
        type: 'text',
      }
    }
  })

  let FormStepsControl = findAllComponents(form, { name: 'FormStepsControl' }).at(0)

  useFormComponent({steps:{a:{label:'a',elements:['el']}},schema:{el:{type:'text'}}}, 'FormStepsControl', {
    mergeWith: {
      button: [FormStepsControl.vm.classes.button_previous_enabled]
    }
  })

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

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(0).html()).toContain(form.vm.__('laraform.steps.previous'))
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

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(1).html()).toContain(form.vm.__('laraform.steps.next'))
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

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(2).html()).toContain(form.vm.__('laraform.steps.finish'))
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

      expect(control.html() === undefined || !control.html().includes(form.vm.__('laraform.steps.previous'))).toBe(true)

      form.vm.laraform.steps.first.buttons.previous = true
      await nextTick()
      expect(control.html() !== undefined || control.html().includes(form.vm.__('laraform.steps.previous'))).toBe(true)
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

      form.vm.laraform.steps.first.labels.previous = 'Not back'

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
              previous: (form$) => { return 'Back'+form$.laraform.steps.first.labelVar },
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

      form.vm.laraform.steps.first.labelVar = 'notvar'

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
                  return createElement(h, 'div', this.step$.form$.laraform.steps.first.labelVar)
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

      form.vm.laraform.steps.first.labelVar = 'Not back'

      await nextTick()

      expect(findAllComponents(form, { name: 'FormStepsControl' }).at(0).html()).toContain('Not back')
    })
  })
})