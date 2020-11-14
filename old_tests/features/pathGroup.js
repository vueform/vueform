import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import { path } from './path'

export {
  path,
}

export const flat = function (elementType, elementName) {
  it('should have `flat` equal to "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.flat).toBe(true)
  })
}

export default function (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName)
    })
  }
}