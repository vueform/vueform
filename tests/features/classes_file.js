import { createForm } from 'test-helpers'
import { classes as baseClasses } from './classes'

export { addClasses, class_, mainClass, rendering } from './classes'

export const classes = function (elementType, elementName, options) {
  let form = createForm({
    schema: {
      el: {
        type: elementType,
      }
    },
  })

  let el = form.vm.el$('el')

  baseClasses(elementType, elementName, Object.assign({}, options, {
    mergeWith: {
      [el.mainClass]: {
        [el.classes.removing]: el.removing
      },
    }
  }))
}