import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

export default function disabled (elementType) {
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

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.disabled).toBe(false)

      el.vm.disable()

      expect(el.vm.disabled).toBe(true)
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

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.disabled).toBe(true)

      el.vm.enable()

      expect(el.vm.disabled).toBe(false)
    })
  }
}