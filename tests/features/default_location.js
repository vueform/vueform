import { defaultValue as baseDefaultValue } from './default'

import { nextTick } from 'vue'

export const defaultValue = function (elementType, elementName, options) {
  baseDefaultValue(elementType, elementName, options)

  it('should set input value from default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: {
            country: 'Hungary',
            country_code: 'HU',
            state: null,
            state_code: null,
            city: 'Budapest',
            zip: null,
            address: null,
            formatted_address: 'Budapest, Hungary',
            lat: 47.497912,
            lng: 19.040235
          }
        }
      }
    })

    let el = form.vm.el$('el')

    await nextTick()

    expect(el.input.value).toBe('Budapest, Hungary')

    // destroy() // teardown
  })
}