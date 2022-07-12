import { createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const handleChange = function (elementType, elementName, options) {
  it('should be triggered on blur', async () => {
    // let onBlurMock = jest.fn()

    // let form = createForm({
    //   schema: {
    //     el: {
    //       type: elementType,
    //       default: options.default,
    //       onBlur: onBlurMock,
    //     }
    //   }
    // })

    // let el = form.vm.el$('el')

    // await nextTick()
    
    // el.input.emit('blur')

    // await nextTick()
    
    // expect(onBlurMock).toHaveBeenCalledWith(el)

    // destroy() // teardown
  })
}