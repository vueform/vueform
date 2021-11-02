import { createForm, destroy } from 'test-helpers'
import countries from './../../src/utils/countries'
import states from './../../src/utils/states'
import { nextTick } from 'vue'

export const addressId = function (elementType, elementName) {
  it('should have `addressId` with "address-randomNumber" format', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(/^address-\d*$/g.test(el.addressId)).toBe(true)
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const fields = function (elementType, elementName) {
  it('should `fields` be fields of address', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    }, {
      config: {
        test: true
      }
    })

    let el = form.vm.el$('el')

    let fields = {
      address: {
        type: 'text',
        label: el.__('vueform.elements.address.addressLabel'),
        id: el.addressId,
        disabled: el.disabled,
        readonly: el.readonly,
      },
      address2: {
        type: 'text',
        label: el.__('vueform.elements.address.address2Label'),
        disabled: el.disabled,
        readonly: el.readonly,
      },
      zip: {
        type: 'text',
        label: el.__('vueform.elements.address.zipLabel'),
        disabled: el.disabled,
        readonly: el.readonly,
      },
      city: {
        type: 'text',
        label: el.__('vueform.elements.address.cityLabel'),
        disabled: el.disabled,
        readonly: el.readonly,
      },
      state: {
        type: 'select',
        label: el.__('vueform.elements.address.stateLabel'),
        items: states,
        conditions: [[el.path + '.country', ['us', 'US']]],
        disabled: el.disabled,
        readonly: el.readonly,
        search: true,
      },
      country: {
        type: 'select',
        label: el.__('vueform.elements.address.countryLabel'),
        items: countries,
        disabled: el.disabled,
        readonly: el.readonly,
        search: true,
      },
    }

    expect(el.fields).toStrictEqual(fields)

    el.$set(form.vm.vueform.schema.el, 'required', true)

    await nextTick()

    fields.address.rules = 'required'
    fields.zip.rules = 'required'
    fields.city.rules = 'required'
    fields.state.rules = 'required'
    fields.country.rules = 'required'

    expect(el.fields).toStrictEqual(fields)
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const children = function (elementType, elementName) {
  it('should `chiledren` equal to fields', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text'
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children).toStrictEqual(el.fields)
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const children$Array = function (elementType, elementName) {
  it('should collect elements to `children$Array`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children$Array.length).toBe(_.keys(el.fields).length)
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const children$ = function (elementType, elementName) {
  it('should have `children$` equal to an object of child element components', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children$.address.name).toBe('address')
    expect(el.children$.address2.name).toBe('address2')
    expect(el.children$.city.name).toBe('city')
    expect(el.children$.state.name).toBe('state')
    expect(el.children$.country.name).toBe('country')
    expect(el.children$.zip.name).toBe('zip')
    
    // destroy(form) // teardown
  })
}