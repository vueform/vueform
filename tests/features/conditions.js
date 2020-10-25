import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

export default function conditions (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    testComputedOption(it, elementType, 'conditions', [], [['other', 'value']])
    
    // Computed Props
    it('should be `available` if has no conditions', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.available).toBe(true)
    })
    
    it('should be `available` if has conditions which are met', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            conditions: [
              ['el2', 'value']
            ]
          },
          el2: {
            type: 'text',
            default: 'value'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.available).toBe(true)
    })
    
    it('should not be `available` if has conditions which are not met', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            conditions: [
              ['el2', 'value']
            ]
          },
          el2: {
            type: 'text',
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.available).toBe(false)
    })

    // Template
    it('should should hide element if not `available`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            conditions: [
              ['el2', 'value']
            ]
          },
          el2: {
            type: 'text',
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.$el).not.toBeVisible()
    })
  }
}