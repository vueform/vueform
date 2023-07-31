import { createForm, findAllComponents, findAll, destroy } from 'test-helpers'
import {nextTick} from 'vue'

// @todo
// export const focus = function (elementType, elementName, options) {
//
//   it('should return true when element is focused, focused element will be the add button', async () => {
//
//     if (!options.inputSelector) {
//       return
//     }
//
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           initial: 0,
//           element: {
//             type: 'text',
//           }
//         }
//       }
//     }, {
//       attach: true
//     })
//
//     let el = findAllComponents(form, { name: elementName }).at(0)
//     let input = findAll(el, '#el-add-button').at(0)
//
//     await nextTick()
//
//     el.vm.focus()
//
//     await nextTick()
//
//     expect(document.activeElement === input.element).toBe(true)
//
//     destroy(form) // teardown
//   })
//
//   it('should return true when element is focused, focused element will be the first input', async () => {
//
//     if (!options.inputSelector) {
//       return
//     }
//
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           initial: 3,
//           element: {
//             type: 'text',
//           }
//         }
//       }
//     }, {
//       attach: true
//     })
//
//     let el = findAllComponents(form, { name: elementName }).at(0)
//     let input = findAll(el, 'input').at(0)
//
//     await nextTick()
//
//     el.vm.focus()
//
//     await nextTick()
//
//     expect(document.activeElement === input.element).toBe(true)
//
//     destroy(form) // teardown
//   })
// }