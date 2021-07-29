import { createForm, destroy } from 'test-helpers'
import { classes as baseClasses } from './classes'

export { mainClass, rendering } from './classes'

export const classes = function (elementType, elementName, options) {
  baseClasses(elementType, elementName, options)
    
  it('should add removing class to mainClass when removing', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes[el.mainClass]).not.toContain(el.classes.container_removing)
    
    el.removing = true

    expect(el.classes[el.mainClass]).toContain(el.classes.container_removing)
    
  // destroy(form) // teardown
  })
}