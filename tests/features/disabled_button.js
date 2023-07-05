import flushPromises from 'flush-promises'
import { createForm, findAll, createElement, destroy } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'vue'

expect.extend({toBeVisible})

export const isDisabled = function (elementType, elementName, options) {
  
  it('should be disabled if form is submitted, invalid and validated on change', async () => {
    
    let form = createForm({
      schema: {
        text: {
          type: 'text',
          rules: ['required', 'email'],
        },
        button: {
          type: elementType,
          submits: true,
        }
      },
      validateOn: 'change',
    })
    
    let text = form.vm.el$('text')
    let button = form.vm.el$('button')
    
    text.update('wrong@email.')
    
    await flushPromises()
    
    expect(button.isDisabled).toBe(true)
  })
  
  it('should not be isDisabled by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isDisabled).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should be isDisabled if disabled is true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isDisabled).toBe(true)
    
    // destroy(form) // teardown
  })

  it('should be isDisabled if disabled returns true', () => {
    let form = createForm({
      isTrue: true,
      schema: {
        el: {
          type: elementType,
          disabled(el$, form$) {
            return form$.vueform.isTrue
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isDisabled).toBe(true)

    form.vm.vueform.isTrue = false

    expect(el.isDisabled).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should add disabled prop to to button', async () => {
    let form = createForm({
      isTrue: true,
      schema: {
        el: {
          type: elementType,
          buttonType: 'button',
          label: 'Label',
          disabled: true
        }
      }
    })

    let Button = findAll(form, 'button').at(0)

    // label:string, disabled=true
    expect(Button.element.disabled).toBeTruthy()

    // label:string, disabled=true
    form.vm.$set(form.vm.vueform.schema.el, 'disabled', false)
    await nextTick()
    expect(Button.element.disabled).toBeFalsy()

    // label:component, disabled=true
    form.vm.$set(form.vm.vueform.schema.el, 'disabled', true)
    form.vm.$set(form.vm.vueform.schema.el, 'label', markRaw({
      props: ['el$'],
      render(h) {
        return createElement(h, 'div', 'hello')
      }
    })),
    await nextTick()
    expect(Button.element.disabled).toBeTruthy()

    // label:component, disabled=false
    form.vm.$set(form.vm.vueform.schema.el, 'disabled', false)
    await nextTick()
    expect(Button.element.disabled).toBeFalsy()

    // destroy() // teardown
  })
}