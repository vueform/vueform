import { createForm, findAllComponents, testAttribute } from 'test-helpers'
import { disabled, disable, enable } from './disabled'

export {
  disabled,
  disable,
  enable,
}

export const rendering = function (elementType, elementName, options) {
  it('should disable input when `disabled`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    testAttribute(elWrapper, options.fieldType, 'disabled', ['disabled', ''])
  })
  
  it('should not disable input when not `disabled`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: false
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    testAttribute(elWrapper, options.fieldType, 'disabled', undefined)
  })
}