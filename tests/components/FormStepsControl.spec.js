import flushPromises from 'flush-promises'
import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'vue'
import useFormComponent from './../composables/useFormComponent'

expect.extend({toBeVisible})

describe('FormStepsControl', () => {
  useFormComponent({steps:{a:{label:'a',elements:['el']}},schema:{el:{type:'text'}}}, 'FormStepsControl')

  describe('computed', () => {

    // it('should return true for isDisabled if has invalid value and shouldValidateOnChange', async () => {
    //
    //   const form = createForm({
    //     steps: {
    //       page0: {
    //         label: 'Step 1',
    //         elements: ['a'],
    //       },
    //       page1: {
    //         label: 'Step 2',
    //         elements: ['b'],
    //       },
    //     },
    //     schema: {
    //       a: {
    //         type: 'text',
    //         rules: 'required|min:3',
    //       },
    //       b: {
    //         type: 'text',
    //         rules: 'required|min:3',
    //       },
    //     },
    //     validateOn: 'step',
    //   })
    //
    //   const b = form.vm.el$('b')
    //   const next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)
    //   const finish = findAllComponents(form, { name: 'FormStepsControl' }).at(2)
    //
    //   await flushPromises()
    //   await nextTick()
    //   await nextTick()
    //
    //   // first page
    //   findAll(next, 'button').last().trigger('click')
    //   await flushPromises()
    //
    //   // second page
    //   expect(finish.vm.isDisabled).toBe(false)
    //   findAll(next, 'button').last().trigger('click')
    //   await flushPromises()
    //   expect(finish.vm.isDisabled).toBe(true)
    //
    //   // still second page
    //   b.update('as')
    //   expect(finish.vm.isDisabled).toBe(false)
    //   findAll(next, 'button').last().trigger('click')
    //   await flushPromises()
    //
    //   expect(finish.vm.isDisabled).toBe(true)
    //
    //   // still second page
    //   expect(finish.vm.isDisabled).toBe(false)
    //   b.update('asd')
    //   expect(finish.vm.isDisabled).toBe(false)
    //   findAll(next, 'button').last().trigger('click')
    //   await flushPromises()
    //   expect(finish.vm.isDisabled).toBe(false)
    // })
    
    it('should return correct stepLabels from props', async () => {

      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a'],
            labels: {
              previous: 'prev1',
              next: 'next1',
            }
          },
          page1: {
            label: 'Step 2',
            elements: ['b'],
            labels: {
              previous: 'prev2',
              finish: 'finish1',
            }
          },
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      const prev = findAllComponents(form, { name: 'FormStepsControl' }).at(0)
      const next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)
      const finish = findAllComponents(form, { name: 'FormStepsControl' }).at(2)
      
      await nextTick()
      await nextTick()
      
      expect(prev.html()).toContain('prev1')
      expect(next.html()).toContain('next1')
      
      findAll(next, 'button').last().trigger('click')
      
      await flushPromises()
      
      expect(prev.html()).toContain('prev2')
      expect(finish.html()).toContain('finish1')
    })
    
    it('should return next for finish if finish is not defined in labels', async () => {

      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a'],
            labels: {
              previous: 'prev1',
              next: 'next1',
            }
          },
          page1: {
            label: 'Step 2',
            elements: ['b'],
            labels: {
              previous: 'prev2',
              next: 'finish1',
            }
          },
        },
        schema: {
          a: { type: 'text' },
          b: { type: 'text' },
        }
      })
      
      const prev = findAllComponents(form, { name: 'FormStepsControl' }).at(0)
      const next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)
      const finish = findAllComponents(form, { name: 'FormStepsControl' }).at(2)
      
      await nextTick()
      await nextTick()
      
      expect(prev.html()).toContain('prev1')
      expect(next.html()).toContain('next1')
      
      findAll(next, 'button').last().trigger('click')
      
      await flushPromises()
      
      expect(prev.html()).toContain('prev2')
      expect(finish.html()).toContain('finish1')
    })
    
    it('should return correct stepLabel from inline slot', async () => {
    
      const form = createForm({}, {}, function(h) {
        return createElement(h, 'form', [
          createElement(h, 'FormSteps', [
            createElement(h, 'FormStep', {
              props: {
                name: 'page0',
              },
            }),
            createElement(h, 'FormStep', {
              props: {
                name: 'page1',
              },
            }),
          ]),
          createElement(h, 'FormStepsControls', {
            props: {
              labels: false
            },
            scopedSlots: {
              previous: () => createElement(h, 'div', 'prev1'),
              next: () => createElement(h, 'div', 'next1'),
              finish: () => createElement(h, 'div', 'finish1'),
            },
          }),
        ])
      })

      const FormStepsControls = form.findComponent({ name: 'FormStepsControls' })
      const FormSteps = form.findComponent({ name: 'FormSteps' })
      
      await nextTick()
      await nextTick()

      expect(FormStepsControls.html()).toContain('prev1')
      expect(FormStepsControls.html()).toContain('next1')

      FormSteps.vm.next()
      await nextTick()

      expect(FormStepsControls.html()).toContain('finish1')
    })
  })
  
  describe('methods', () => {
    
    it('should go to previous step', async () => {
      
      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1'
          },
          page1: {
            label: 'Step 2',
          }
        }
      })
      
      const FormStepsControl = form.findComponent({ name: 'FormStepsControl' })
      const FormSteps = form.findComponent({ name: 'FormSteps' })
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
      
      FormSteps.vm.goTo('page1')
      FormSteps.vm.enableUntilLastEnabled()
      
      expect(FormStep2.vm.active).toBe(true)
      expect(FormStep1.vm.active).toBe(false)
      
      FormStepsControl.vm.previous()
      
      expect(FormStep2.vm.active).toBe(false)
      expect(FormStep1.vm.active).toBe(true)
    })
    
    it('should go to next step', async () => {

      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['b'],
          },
          page1: {
            label: 'Step 2',
            elements: ['a'],
          },
          page2: {
            label: 'Step 3',
            elements: ['c'],
          },
        },
        schema: {
          a: {
            type: 'text',
            rules: 'required|min:3',
          },
          b: {
            type: 'text',
          },
          c: {
            type: 'text',
          },
        },
        validateOn: 'step'
      })

      const a = form.vm.el$('a')
      const FormStepsControl = form.findComponent({ name: 'FormStepsControl' })
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
      const FormStep3 = findAllComponents(form, { name: 'FormStep' }).at(2)
      
      await nextTick()
      
      expect(FormStep1.vm.active).toBe(true)
      expect(FormStep2.vm.active).toBe(false)
      expect(FormStep3.vm.active).toBe(false)

      await FormStepsControl.vm.next()
      await nextTick()
      expect(FormStep1.vm.active).toBe(false)
      expect(FormStep2.vm.active).toBe(true)
      expect(FormStep3.vm.active).toBe(false)

      await FormStepsControl.vm.next()
      await nextTick()
      expect(FormStep1.vm.active).toBe(false)
      expect(FormStep2.vm.active).toBe(true)
      expect(FormStep3.vm.active).toBe(false)

      a.update('something')
      await FormStepsControl.vm.next()
      await nextTick()
      expect(FormStep1.vm.active).toBe(false)
      expect(FormStep2.vm.active).toBe(false)
      expect(FormStep3.vm.active).toBe(true)
    })
    
    it('should emit `complete` on next if complete', async () => {
      
      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['b'],
          },
          page1: {
            label: 'Step 2',
            elements: ['a'],
          },
        },
        schema: {
          a: {
            type: 'text',
          },
          b: {
            type: 'text',
          },
        },
        validateOn: 'step'
      })
      
      const FormStepsControl = form.findComponent({ name: 'FormStepsControl' })
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
      
      await nextTick()
      
      expect(FormStep1.emitted().complete).toBe(undefined)
      expect(FormStep2.emitted().complete).toBe(undefined)
      
      await FormStepsControl.vm.next()
      await nextTick()

      expect(FormStep1.emitted().complete.length).toBe(1)
      expect(FormStep2.emitted().complete).toBe(undefined)
    })
    
    it('should emit `finish` on next if finished', async () => {
      
      const requestStub = jest.fn()
      
      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['b'],
          },
          page1: {
            label: 'Step 2',
            elements: ['a'],
          },
        },
        schema: {
          a: {
            type: 'text',
          },
          b: {
            type: 'text',
          },
        },
        validateOn: 'step'
      })
      
      form.vm.$vueform.services.axios.request = requestStub
      
      const FormStepsControl = form.findComponent({ name: 'FormStepsControl' })
      const FormSteps = findAllComponents(form, { name: 'FormSteps' }).at(0)
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
      
      await nextTick()
      
      expect(FormStep1.emitted().complete).toBe(undefined)
      expect(FormStep2.emitted().complete).toBe(undefined)
      
      await FormStepsControl.vm.next()
      await nextTick()

      expect(FormStep1.emitted().complete.length).toBe(1)
      expect(FormStep2.emitted().complete).toBe(undefined)
      
      await FormStepsControl.vm.finish()
      await nextTick()
      
      expect(FormStep1.emitted().complete.length).toBe(1)
      expect(FormStep2.emitted().complete.length).toBe(1)
      expect(FormSteps.emitted().finish.length).toBe(1)
    })
    
    it('should go to next step on click on next', async () => {

      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['b'],
          },
          page1: {
            label: 'Step 2',
            elements: ['a'],
          },
        },
        schema: {
          a: {
            type: 'text',
          },
          b: {
            type: 'text',
          },
        },
      })

      await nextTick()
      
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)

      const next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      findAll(next, 'button').last().trigger('click')

      await nextTick()

      expect(FormStep1.vm.active).toBe(false)
      expect(FormStep2.vm.active).toBe(true)
    })
    
    it('should go to next step on enter on next', async () => {

      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['b'],
          },
          page1: {
            label: 'Step 2',
            elements: ['a'],
          },
        },
        schema: {
          a: {
            type: 'text',
          },
          b: {
            type: 'text',
          },
        },
      })

      await nextTick()
      
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)

      const next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      findAll(next, 'button').last().trigger('keypress', {
        key: 'Enter'
      })

      await nextTick()
      expect(FormStep1.vm.active).toBe(false)
      expect(FormStep2.vm.active).toBe(true)
    })
    
    it('should go to next step on space on next', async () => {

      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['b'],
          },
          page1: {
            label: 'Step 2',
            elements: ['a'],
          },
        },
        schema: {
          a: {
            type: 'text',
          },
          b: {
            type: 'text',
          },
        },
      })

      await nextTick()
      
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)

      const next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      findAll(next, 'button').last().trigger('keypress', {
        key: ' '
      })

      await nextTick()
      expect(FormStep1.vm.active).toBe(false)
      expect(FormStep2.vm.active).toBe(true)
    })
    
    it('should not focus anything if the next step has no elements', async () => {

      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['b'],
          },
          page1: {
            label: 'Step 2',
            elements: ['a'],
          },
        },
        schema: {
          a: {
            type: 'text',
          },
          b: {
            type: 'text',
          },
        },
      })

      await nextTick()
      
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)

      const next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)

      findAll(next, 'button').last().trigger('keypress', {
        key: ' '
      })

      await nextTick()
      expect(FormStep1.vm.active).toBe(false)
      expect(FormStep2.vm.active).toBe(true)
    })
    
    it('should go to previous step on click on previous', async () => {

      const form = createForm({
        steps: {
          page0: {
            label: 'Step 1',
            elements: ['a'],
          },
          page1: {
            label: 'Step 2',
            elements: ['b'],
          },
        },
        schema: {
          a: {
            type: 'text',
          },
          b: {
            type: 'text',
          },
        },
      })

      await nextTick()
      
      const FormStep1 = findAllComponents(form, { name: 'FormStep' }).at(0)
      const FormStep2 = findAllComponents(form, { name: 'FormStep' }).at(1)
      
      const prev = findAllComponents(form, { name: 'FormStepsControl' }).at(0)
      const next = findAllComponents(form, { name: 'FormStepsControl' }).at(1)
      
      findAll(next, 'button').last().trigger('click')
      await flushPromises()
      expect(FormStep1.vm.active).toBe(false)
      expect(FormStep2.vm.active).toBe(true)
      
      prev.get('button').trigger('click')
      await nextTick()
      expect(FormStep1.vm.active).toBe(true)
      expect(FormStep2.vm.active).toBe(false)
    })
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