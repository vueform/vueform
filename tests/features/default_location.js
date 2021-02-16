import { defaultValue as baseDefaultValue } from './default'

import { nextTick } from 'composition-api'

export const defaultValue = function (elementType, elementName, options) {
  baseDefaultValue(elementType, elementName, options)

  it('should set input value from default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: {
            formatted_address: 'Budapest'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    await nextTick()

    expect(el.input.value).toBe('Budapest')
  })
}