import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

export default function disabled (elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    testComputedOption(it, elementType, 'disabled', false, true)
    
    it('should `disable` element', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.disabled).toBe(false)

      el.disable()

      expect(el.disabled).toBe(true)
    })
    
    it('should `enable` element', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            disabled: true,
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.disabled).toBe(true)

      el.enable()

      expect(el.disabled).toBe(false)
    })

    it('should disable input when `disabled`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            disabled: true
          }
        }
      })

      let elWrapper = findAllComponents(form, { name: elementName }).at(0)

      testAttribute(elWrapper, options.fieldType, 'disabled', ['disabled', ''])
    })
    
    it('should not disable input when not `disabled`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            disabled: false
          }
        }
      })

      let elWrapper = findAllComponents(form, { name: elementName }).at(0)
      
      testAttribute(elWrapper, options.fieldType, 'disabled', undefined)
    })
  }
}