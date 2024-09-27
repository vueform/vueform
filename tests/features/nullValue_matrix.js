import { nextTick } from 'vue'
import { createForm, findAllComponents, destroy } from 'test-helpers'

export const value = function (elementType, elementName, options) {
  it('should ', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    // destroy() // teardown
  })
}