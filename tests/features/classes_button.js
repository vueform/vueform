import { createForm } from 'test-helpers'
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
      [el.containers.button]: {
        [el.classes.left]: true,
        [el.classes.loading]: el.isLoading,
        [el.classes.disabled]: el.isDisabled,
      }
    }
  }))

  it('should add `buttonClass` to button class list', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonClass: 'button-class'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes.button['button-class']).toBe(true)
  })
}