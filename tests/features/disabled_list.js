import { createForm, findAllComponents, destroy } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

export { isDisabled, disable, enable } from './disabled'

export const rendering = function (elementType, elementName, options) {
  const prototypes = options.prototypes
  
  it('should render `add` and `remove` without disabled class if not disabled', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: prototypes[0].element,
          initial: 1,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.vm.$el.querySelectorAll(`[class="${el.template.data().defaultClasses.add}"]`).length).toBe(1)
    expect(elWrapper.vm.$el.querySelectorAll(`[class="${el.template.data().defaultClasses.remove}"]`).length).toBe(1)
  })
  
  it('should not render `add` and `remove` if disabled', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          element: prototypes[0].element,
          initial: 1,
          disabled: true
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.vm.$el.querySelectorAll(`.${el.template.data().defaultClasses.add}`).length).toBe(0)
    expect(elWrapper.vm.$el.querySelectorAll(`.${el.template.data().defaultClasses.remove}`).length).toBe(0)

    // destroy() // teardown
  })
}