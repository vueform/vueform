import { createForm, findAllComponents, prototypeChildType } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

export { disabled, disable, enable } from './disabled'

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
    let childWrapper = findAllComponents(elWrapper, { name: `${_.upperFirst(prototypeChildType(prototypes[0]))}Element` }).at(0)

    expect(elWrapper.vm.$el.querySelector(`.${el.defaultClasses.add}`).classList.contains(el.defaultClasses.disabled)).toBe(false)
    expect(childWrapper.vm.$el.querySelector(`.${el.defaultClasses.remove}`).classList.contains(el.defaultClasses.disabled)).toBe(false)
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
    let childWrapper = findAllComponents(elWrapper, { name: `${_.upperFirst(prototypeChildType(prototypes[0]))}Element` }).at(0)

    expect(elWrapper.vm.$el.querySelector(`.${el.defaultClasses.add}`).classList.contains(el.defaultClasses.disabled)).toBe(true)
    expect(childWrapper.vm.$el.querySelector(`.${el.defaultClasses.remove}`).classList.contains(el.defaultClasses.disabled)).toBe(true)
  })
}