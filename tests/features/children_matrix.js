import { nextTick } from 'vue'
import { createForm, findAllComponents, destroy } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

export const value = function (elementType, elementName, options) {
  it('should ', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rows: ['Red', 'Green', 'Blue'],
          cols: ['Apple', 'Pear', 'Orange'],
        }
      }
    })

    let el = form.vm.el$('el')

    

    // destroy() // teardown
  })
}