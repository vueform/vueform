import { nextTick } from 'vue'
import { createForm, findAllComponents } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

export default function baseElement(elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    // Data
    it('should have `hidden` equal to "false" by default', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.hidden).toBe(false)
    })

    it('should have `active` equal to "true" by default', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.active).toBe(true)
    })
    
    // Computed Porps
    it('should have "true" for `visible` if available, not hidden and active', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            conditions: [['el2', 'value']]
          },
          el2: {
            type: 'text',
            default: 'value'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.available).toBe(true)
      expect(el.vm.hidden).toBe(false)
      expect(el.vm.active).toBe(true)
      expect(el.vm.visible).toBe(true)
    })

    it('should have "false" for `visible` if not available, hidden or not active', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            conditions: [['el2', 'value']]
          },
          el2: {
            type: 'text'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)
      let el2 = findAllComponents(form, { name: elementName }).at(1)

      expect(el.vm.available).toBe(false)
      expect(el.vm.hidden).toBe(false)
      expect(el.vm.active).toBe(true)

      expect(el.vm.visible).toBe(false)

      el2.vm.update('value')

      expect(el.vm.available).toBe(true)
      expect(el.vm.hidden).toBe(false)
      expect(el.vm.active).toBe(true)

      expect(el.vm.visible).toBe(true)
      
      el.vm.hidden = true

      expect(el.vm.available).toBe(true)
      expect(el.vm.hidden).toBe(true)
      expect(el.vm.active).toBe(true)

      expect(el.vm.visible).toBe(false)
      
      el.vm.hidden = false
      el.vm.active = false

      expect(el.vm.available).toBe(true)
      expect(el.vm.hidden).toBe(false)
      expect(el.vm.active).toBe(false)

      expect(el.vm.visible).toBe(false)
    })

    // Methods
    it('should set hidden to "true" on `hide`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.hidden).toBe(false)

      el.vm.hide()

      expect(el.vm.hidden).toBe(true)
    })

    it('should set hidden to "false" on `show`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.hidden = true

      expect(el.vm.hidden).toBe(true)

      el.vm.show()

      expect(el.vm.hidden).toBe(false)
    })

    it('should set active to "true" on `activate`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.active = false

      expect(el.vm.active).toBe(false)

      el.vm.activate()

      expect(el.vm.active).toBe(true)
    })

    it('should set active to "false" on `deactivate`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.active).toBe(true)

      el.vm.deactivate()

      expect(el.vm.active).toBe(false)
    })

    // Template
    it('should show element if `visible` is "true"', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.visible).toBe(true)
      expect(el.vm.$el).toBeVisible()
    })

    it('should not show element if `visible` is "true"', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.hide()

      await nextTick()

      expect(el.vm.visible).toBe(false)
      expect(el.vm.$el).not.toBeVisible()
    })
  }
}