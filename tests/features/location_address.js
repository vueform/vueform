export { locationService, location, provider, providerOptions } from './location'
import { nextTick } from 'vue'

export const handleAddressChange = function (elementType, elementName, options) { 
  it('should set location, update fields & input field value on `handleAddressChange`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    }, {
      attach: true,
    })

    let el = form.vm.el$('el')

    el.handleAddressChange({
      address: 'address',
      address2: 'address2',
      city: 'city',
      country_code: 'us',
      zip: 'zip',
      state_code: 'al',
    }, 'location')

    expect(el.value).toStrictEqual({
      address: 'address',
      address2: null,
      city: 'city',
      country: 'US',
      zip: 'zip',
      state: 'AL',
    })
    expect(el.location).toBe('location')
    expect(el.children$.address.input.value).toBe('address')

    await nextTick()

    expect(el.dirty).toBe(true)

    // destroy() // teardown
  })
}