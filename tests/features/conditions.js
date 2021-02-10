import { createForm, testPropDefault } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick } from 'vue'

expect.extend({toBeVisible})

export const available = function (elementType, elementName, options) {
  it('should be `available` if has no conditions', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.available).toBe(true)
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

    let el = form.vm.el$('el')

    expect(el.available).toBe(true)
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

    let el = form.vm.el$('el')

    expect(el.available).toBe(false)
  })
}

export const rendering = function (elementType, elementName, options) {
  it('should hide element if not `available`', () => {
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

    let el = form.vm.el$('el')

    if (el.visible !== undefined) {
      expect(el.$el).not.toBeVisible()
    }
  })

  it('should not hide element if `available`', async () => {
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

    let el = form.vm.el$('el')

    await nextTick()

    if (el.visible !== undefined) {
      expect(el.$el).toBeVisible()
    }
  })
}