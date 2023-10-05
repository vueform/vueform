import { createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const handleUpdate = function (elementType, elementName, options) {
  
  it('should trigger `updated`', async () => {
    
    let updatedMock = jest.fn()
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: updatedMock,
          lazy: false
        }
      }
    }, {
      attach: true
    })
    
    let el = form.vm.el$('el')
    
    el.handleUpdate(2)
    
    await nextTick()
    
    expect(updatedMock).toHaveBeenCalled()
    
    destroy(form)
    
    // destroy() // teardown
  })
}