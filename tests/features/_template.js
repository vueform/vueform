import { createForm, findAllComponents, testComputedOption } from 'test-helpers'

// export const ___ = function (elementType, elementName) {
//   testComputedOption(it, elementType, '_____', defaultValue, testValue)
// }

// export const ___ = function (elementType, elementName) {
//   it('should ', () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')
//   })
// }

export default function (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName)
    })
  }
}