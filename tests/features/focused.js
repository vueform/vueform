import { createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

// @todo
// export const focused = function (elementType, elementName, options) {
//
//   it('should return true when element is focused', async () => {
//
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     },{
//       attach: true
//     })
//
//     let el = form.vm.el$('el')
//
//     el.focus()
//
//     await nextTick()
//
//     expect(el.focused).toBe(true)
//
//     // destroy(form) // teardown
//   })
// }