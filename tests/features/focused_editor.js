import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from "vue";

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
//     })
//
//     let el = findAllComponents(form, { name: elementName }).at(0)
//     let editor$ = findAllComponents(form, { name: 'TrixEditor' }).at(0)
//
//     el.vm.focus()
//
//     await nextTick()
//
//     expect(editor$.emitted('trix-focus')).toBeTruthy()
//
//     // destroy() // teardown
//   })
// }