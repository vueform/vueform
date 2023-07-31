import { createForm, findAllComponents, findAll, destroy } from 'test-helpers'
import {nextTick} from 'vue'

// @todo
// export const focus = function (elementType, elementName, options) {
//
//   it('should return true when element is focused', async () => {
//
//     if (!options.inputSelector) {
//       return
//     }
//
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           items: ['label1', 'label2'] // for radio/checkboxgroup
//         }
//       }
//     }, {
//       attach: true
//     })
//
//     const el = form.vm.el$('el')
//     const editor$ = findAllComponents(form, { name: 'TrixEditor' }).at(0)
//
//     el.focus()
//
//     await nextTick()
//     await nextTick()
//     await nextTick()
//     await nextTick()
//     await nextTick()
//
//     // console.log(options.inputSelector)
//     // console.log(document.activeElement)
//     //
//     // console.log(editor$)
//     // console.log(editor$.element)
//
//     expect(document.activeElement === editor$.element).toBe(true)
//
//     destroy(form) // teardown
//   })
// }