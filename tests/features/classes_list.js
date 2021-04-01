import { createForm, destroy } from 'test-helpers'
import { classes as baseClasses } from './classes'

export { mainClass, rendering } from './classes'

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
      [el.classKeys.sortable]: {
        [el.classes.sortable]: el.sort
      },
      [el.classKeys.add]: {
        [el.classes.disabled]: el.isDisabled
      },
      [el.classKeys.remove]: {
        [el.classes.disabled]: el.isDisabled
      },
    }
  }))
    
  destroy(form) // teardown
}